"""Sessions: several clients on one App, each with its own data.

`app.py` and the plugins are one instance, the same code for everyone. What belongs to
one client is in its `Session`'s `State`. While the App handles something a client sent,
that client's session is bound (a `ContextVar`), so code anywhere below - a plugin's
handler, a UI callback - reaches it with `current_session()`, without being handed it::

    App + plugins          one instance
      └── Session          one client: who it is, how it is connected
            └── State      everything that client has
                  └── Workspace   one of its views ("main", ...)

The binding is per thread of execution: a thread or timer a handler starts doesn't
inherit it, and is started with `Session.bind` instead.

See SESSIONS.md for the whole plan.
"""

from __future__ import annotations

import functools
import secrets
import threading
import time
from contextlib import contextmanager
from contextvars import ContextVar
from typing import Callable
from typing import Optional

from .stores import MemorySessionStore
from .stores import SessionStore

DEFAULT_SESSION_ID = "default"
DEFAULT_TIMEOUT = 30 * 60  # seconds after the last connection closed

_session: ContextVar[Optional["Session"]] = ContextVar("compas_threejs_session", default=None)
_workspace: ContextVar[Optional[object]] = ContextVar("compas_threejs_workspace", default=None)


class NoSession(LookupError):
    """Asked for the current session (or its workspace) where none is bound."""


class State:
    """Everything one client has: its workspaces, what they show, and the plugins' data.

    The registries map what the browser refers to (a guid) to the live Python objects.
    """

    def __init__(self, session_id: str = DEFAULT_SESSION_ID):
        self.session_id = session_id  # the session it belongs to
        self.workspaces = {}  # id -> Workspace
        self.geometry = {}  # guid -> the geometry as added (a Brep, not its view mesh)
        self.materials = {}  # guid -> Material
        self.metadata = {}  # guid -> Metadata
        self.object_actions = {}  # guid -> its ObjectActions
        self.buttons = {}  # action guid -> callable, for UI elements and object actions
        self.actions = {}  # action name -> callable, see `App.register_action`
        self.brep_viewmeshes = {}  # (workspace id, brep guid) -> the mesh shown for it
        self.plugins = {}  # plugin name -> that plugin's data for this client
        self.lock = threading.Lock()  # guards geometry mutation against concurrent App.loop callbacks

    # ---- REGISTRATION (by Workspace, when something is sent out) ------------------------------

    def register_geometry(self, obj_id, geometry, metadata=None, actions=None):
        obj_id = str(obj_id)
        self.geometry[obj_id] = geometry
        if metadata:
            self.metadata[obj_id] = metadata
        if actions:
            self.object_actions[obj_id] = actions
            for action in actions:
                self.buttons[str(action.guid)] = action.action

    def register_material(self, obj_id, material):
        self.materials[str(obj_id)] = material

    def register_button(self, guid, action):
        self.buttons[guid] = action

    def register_action(self, name, callable_function):
        self.actions[name] = callable_function

    def forget_geometry(self, obj_id: str) -> None:
        """Drops every entry `register_geometry` made for `obj_id` (see `Workspace.remove_object`),
        so repeatedly removing and adding objects doesn't grow the registries for good."""
        self.geometry.pop(obj_id, None)
        self.metadata.pop(obj_id, None)
        actions = self.object_actions.pop(obj_id, None)
        if actions:
            for action in actions:
                self.buttons.pop(str(action.guid), None)

    def update_metadata(self, metadata):
        """Replaces the registered metadata with the same guid as `metadata`."""
        for key, value in self.metadata.items():
            if value.guid == metadata.guid:
                self.metadata[key] = metadata
                break


class Session:
    """One client of the App - a browser, with all its tabs, or a `Remote` - and its `State`."""

    def __init__(self, session_id: str, created: Optional[float] = None):
        self.id = session_id
        self.state = State(session_id)
        self.created = created if created is not None else time.time()
        self.last_seen = self.created
        self.connections = 0

    def __repr__(self):
        return f"Session({self.id[:8]!r}, connections={self.connections})"

    @contextmanager
    def active(self, workspace=None):
        """Binds this session - and `workspace`, one of its `Workspace`s - for the block."""
        session_token = _session.set(self)
        workspace_token = _workspace.set(workspace)
        try:
            yield self
        finally:
            _workspace.reset(workspace_token)
            _session.reset(session_token)

    def run(self, function: Callable, *args, **kwargs):
        """Calls `function` with this session bound, and returns what it returns."""
        with self.active(self._bound_workspace()):
            return function(*args, **kwargs)

    def bind(self, function: Callable) -> Callable:
        """`function`, made to run with this session bound - for a thread or a timer, which
        doesn't inherit the session of the code that starts it::

            threading.Thread(target=current_session().bind(work)).start()

        If this session is bound where `bind` is called, so is its workspace.
        """
        workspace = self._bound_workspace()

        @functools.wraps(function)
        def bound(*args, **kwargs):
            with self.active(workspace):
                return function(*args, **kwargs)

        return bound

    def _bound_workspace(self):
        return _workspace.get() if _session.get() is self else None


def current_session() -> Session:
    """The session of the client whose request is being handled. Raises `NoSession` elsewhere
    (at startup, in a thread not started with `Session.bind`) rather than guess one."""
    session = _session.get()
    if session is None:
        raise NoSession("No session here: this runs outside of a client's request. Start threads with Session.bind.")
    return session


def current_state() -> State:
    """The `State` of the current session (see `current_session`)."""
    return current_session().state


def current_workspace():
    """The `Workspace` whose message is being handled. Raises `NoSession` elsewhere."""
    workspace = _workspace.get()
    if workspace is None:
        raise NoSession("No workspace here: this runs outside of a message from a browser tab.")
    return workspace


def bound_workspace():
    """The bound `Workspace`, or None."""
    return _workspace.get()


@contextmanager
def bind_workspace(workspace):
    """Binds `workspace` for the block, keeping the bound session."""
    token = _workspace.set(workspace)
    try:
        yield workspace
    finally:
        _workspace.reset(token)


class SessionManager:
    """The App's sessions: the records in a `SessionStore`, the live `Session`s here.

    The store says which sessions exist; this process holds what they have (their `State`,
    live Python objects that can't be stored). A record that expired takes its live session
    with it, at the next `sweep`.

    There's always a default session, which never expires: the one used where no other is
    bound, and the one every client joins until sessions are switched on.
    """

    def __init__(self, store: Optional[SessionStore] = None, timeout: float = DEFAULT_TIMEOUT):
        self.store = store if store is not None else MemorySessionStore()
        self.timeout = timeout
        self.default = Session(DEFAULT_SESSION_ID)
        self._live = {}  # id -> Session, besides the default
        self._lock = threading.Lock()
        self._started_callbacks = []
        self._ended_callbacks = []

    def __iter__(self):
        """The live sessions, the default one first."""
        with self._lock:
            return iter([self.default, *self._live.values()])

    def __len__(self):
        return 1 + len(self._live)

    def current(self) -> Session:
        """The bound session, or the default one."""
        return _session.get() or self.default

    def create(self) -> Session:
        """A new session, with a fresh, unguessable id."""
        session_id = secrets.token_urlsafe(32)
        record = self.store.create(session_id, self.timeout)
        session = Session(session_id, record["created"])
        with self._lock:
            self._live[session_id] = session
        self._started(session)
        return session

    def get(self, session_id: Optional[str]) -> Optional[Session]:
        """The session `session_id`, or None if there's none (or it expired).

        A session whose record is there but which isn't live here - the server restarted,
        or another process created it - starts again with an empty `State`.
        """
        if not session_id:
            return None
        if session_id == DEFAULT_SESSION_ID:
            return self.default
        record = self.store.get(session_id)
        if record is None:
            with self._lock:
                expired = self._live.pop(session_id, None)
            if expired is not None:
                self._ended(expired)
            return None
        with self._lock:
            session = self._live.get(session_id)
            started = session is None
            if started:
                session = self._live[session_id] = Session(session_id, record["created"])
        if started:
            self._started(session)
        return session

    def touch(self, session: Session) -> bool:
        """Marks `session` as seen now. False if it has expired."""
        if session is self.default:
            return True
        session.last_seen = time.time()
        return self.store.touch(session.id, self.timeout)

    def end(self, session: Session) -> None:
        """Ends `session` now: removes its record and drops its `State`."""
        if session is self.default:
            raise ValueError("The default session doesn't end")
        self.store.remove(session.id)
        with self._lock:
            ended = self._live.pop(session.id, None)
        if ended is not None:
            self._ended(ended)

    def sweep(self) -> list:
        """Keeps the sessions with connections, and ends the ones whose record expired.
        Returns the sessions it ended."""
        with self._lock:
            live = list(self._live.values())
        ended = []
        for session in live:
            if session.connections > 0:
                if self.store.touch(session.id, self.timeout):
                    continue
                self.store.create(session.id, self.timeout)  # expired while connected: keep it
                continue
            if self.store.get(session.id) is None:
                with self._lock:
                    self._live.pop(session.id, None)
                self._ended(session)
                ended.append(session)
        return ended

    # ---- HOOKS ------------------------------------------------------------------------------

    def on_started(self, callback: Callable) -> Callable:
        """Calls ``callback(session)`` when a session starts. Usable as a decorator."""
        self._started_callbacks.append(callback)
        return callback

    def on_ended(self, callback: Callable) -> Callable:
        """Calls ``callback(session)`` when a session ends. Usable as a decorator."""
        self._ended_callbacks.append(callback)
        return callback

    def _started(self, session):
        for callback in list(self._started_callbacks):
            session.run(callback, session)

    def _ended(self, session):
        for callback in list(self._ended_callbacks):
            session.run(callback, session)
