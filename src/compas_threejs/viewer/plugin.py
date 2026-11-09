from pathlib import Path

import compas_pb
from rich.console import Console

from .session import DEFAULT_SESSION_ID
from .session import bind_workspace
from .session import bound_workspace

console = Console()

NOTICE_KINDS = ("info", "success", "warning", "error")


def action(name):
    """Marks a `Plugin` method as the handler of the frontend's `channel.send(name, data)`.

    The method is called as ``method(data, workspace)`` on the server thread, with the
    `Workspace` of the browser tab the message came from.
    """

    def decorate(method):
        method._plugin_action = name
        return method

    return decorate


class Plugin:
    """A viewer plugin: toolbar buttons in the frontend, and their Python half.

    A subclass sets `name` and `static`, the folder holding the plugin's built frontend,
    `plugin.js` (and `plugin.css`, if it has one). `plugin.js` default-exports
    `definePlugin({ name, groups })` from `@compas-dev/compas-threejs-ts`, with the same
    `name`. A plugin without `static` is Python only: the page loads nothing for
    it. Methods marked with `@action("...")` handle what the frontend sends, and are
    told which workspace (browser tab) sent it; `send` answers that tab, `send_all` talks
    to every tab.

    The plugin is one object for all workspaces: a workspace shows the plugins in
    `Workspace.plugins`, by default all of `App.plugins` - but the main workspace leaves
    out a plugin whose `in_main` is False, one made for other tabs (an element's editor).

    `hide`, `show`, `disable` and `enable` take the ids of button groups, single
    buttons or panels, as the frontend names them in `groups` and `panels`. A subclass
    may list them in `ids`, so that a misspelled id raises instead of doing nothing.

    Examples
    --------
    >>> app = App()
    >>> standard = Standard()
    >>> app.plugins = [standard, Camera()]
    >>> standard.hide("display")  # a whole group
    >>> standard.disable("scale")  # one button
    >>> app.start()
    """

    name = None
    static = None
    ids = None
    #: Whether the main workspace shows it by default (`Workspace.plugins`)
    in_main = True

    def __init__(self):
        if not self.name:
            raise ValueError(f"{type(self).__name__} has no plugin name")
        self.app = None
        self._handlers = {}
        self._hidden = set()
        self._disabled = set()
        for attribute in dir(type(self)):
            method = getattr(self, attribute, None)
            name = getattr(method, "_plugin_action", None)
            if name:
                self._handlers.setdefault(name, []).append(method)

    @property
    def static_dir(self):
        return Path(self.static) if self.static else None

    def manifest(self):
        """The entry `plugins.json` lists for this plugin; paths are relative to the page.

        Each path carries the file's modification time (``?v=...``), so a browser loads a
        rebuilt plugin instead of the copy it cached.
        """
        entry = {"name": self.name, "module": self._versioned("plugin.js")}
        if (self.static_dir / "plugin.css").exists():
            entry["style"] = self._versioned("plugin.css")
        return entry

    def _versioned(self, filename):
        path = self.static_dir / filename
        version = f"?v={path.stat().st_mtime_ns}" if path.exists() else ""
        return f"plugins/{self.name}/{filename}{version}"

    def on(self, action_name):
        """Adds a handler for `action_name` from outside the plugin, as a decorator.

        >>> @camera.on("save")
        ... def saved(data, workspace):
        ...     print(data, workspace.workspace_id)
        """

        def decorate(callback):
            self._handlers.setdefault(action_name, []).append(callback)
            return callback

        return decorate

    def handle(self, action_name, data, workspace):
        """Calls the handlers of `action_name` with `data` and the `Workspace` it came from.

        A handler that raises is logged and shown to the asking tab as an error notice;
        the other handlers still run, and the tab stays connected.
        """
        handlers = self._handlers.get(action_name)
        if not handlers:
            console.log(f"[yellow]Plugin {self.name!r} has no handler for {action_name!r}[/yellow]")
            return
        with bind_workspace(workspace):
            for handler in handlers:
                try:
                    handler(data, workspace)
                except Exception as error:
                    console.print_exception()
                    self._notify_failure(action_name, error)

    def _notify_failure(self, action_name, error):
        try:
            self.notify(f"Plugin {self.name!r} failed on {action_name!r}: {error}", "error")
        except Exception:
            console.print_exception()

    @property
    def hidden(self):
        """The ids of the hidden groups and buttons."""
        return frozenset(self._hidden)

    @property
    def disabled(self):
        """The ids of the disabled groups and buttons."""
        return frozenset(self._disabled)

    def hide(self, *ids):
        """Hides these groups or buttons."""
        self._hidden.update(self._known(ids))
        self.send_buttons()

    def show(self, *ids):
        """Shows these groups or buttons again."""
        self._hidden.difference_update(self._known(ids))
        self.send_buttons()

    def disable(self, *ids):
        """Greys out these groups or buttons; their clicks and shortcuts do nothing."""
        self._disabled.update(self._known(ids))
        self.send_buttons()

    def enable(self, *ids):
        """Enables these groups or buttons again."""
        self._disabled.difference_update(self._known(ids))
        self.send_buttons()

    def _known(self, ids):
        if self.ids is not None:
            unknown = [id_ for id_ in ids if id_ not in self.ids]
            if unknown:
                raise ValueError(f"Plugin {self.name!r} has no group or button {', '.join(map(repr, unknown))}; it has {', '.join(self.ids)}")
        return ids

    def attached(self):
        """Called once the plugin is added to an App: sends the state set before that.

        A subclass with state of its own extends it, calling ``super().attached()``.
        """
        if self._hidden or self._disabled:
            self.send_buttons()

    def new_workspace(self, workspace):
        """Called when a browser tab asks for a workspace that doesn't exist yet, before it loads its plugins.

        A plugin that opens tabs (`viewer.workspaceUrl(id)` in the frontend) overrides it to
        set up the workspace: its `Workspace.plugins`, and its content. See `App.on_new_workspace`.
        """

    def send_buttons(self):
        """Sends every workspace which groups and buttons are hidden or disabled; kept for browsers that connect later."""
        if not self.app:
            return  # sent when the plugin is added to an App
        message = {"dispatch": "plugin_buttons", "plugin": self.name, "hidden": sorted(self._hidden), "disabled": sorted(self._disabled)}
        self.app.outbox.send_bytes(compas_pb.pb_dump_bts(message), f"plugin/{self.name}/buttons", persist=True, workspace_id=None)

    def send(self, action_name, data=None, *, workspace=None, key=None):
        """Sends `data` to the frontend's `channel.on(action_name, ...)` handlers in one workspace.

        That is `workspace` (a `Workspace` or its id) if given; otherwise, inside an action
        handler, the workspace the handled message came from, and elsewhere "main".

        With a `key`, the message is also kept (replacing the last one with that key) and
        replayed to browsers that connect later - for state, like a list of saved views.
        """
        workspace_id, session_id = _address(workspace)
        self._send(action_name, data, key, workspace_id, **_session(session_id))

    def send_all(self, action_name, data=None, *, key=None):
        """Like `send`, to every workspace - for state the plugin shares between browser tabs.

        Inside a session (handling a client's message) that is every workspace of that
        session; outside of one (at startup, in `attached`), every workspace of every session.
        A keyed message is also replayed to tabs opened later.
        """
        self._send(action_name, data, key, None)

    def send_everyone(self, action_name, data=None, *, key=None):
        """Like `send_all`, to every workspace of every session, even from inside a session -
        for what is the same for everyone (the weather)."""
        self._send(action_name, data, key, None, session_id=DEFAULT_SESSION_ID)

    def notify(self, message, kind="info", *, workspace=None, key=None, progress=None):
        """Shows `message` to the user for a moment, at the bottom of the view.

        `kind` is "info", "success", "warning" or "error". It goes to one workspace,
        chosen like `send`'s; `workspace="all"` shows it in every tab, of the session as
        `send_all` chooses it.

        With a `key`, it takes the place of the notice with the same key still shown.
        With a `progress` (0 to 1) it shows a progress bar, and stays until a notice with
        its key takes its place - so a long handler can show how far along it is, then
        how it ended, in one notice::

            for i, wall in enumerate(walls):
                self.notify(f"Computing ({i + 1} of {len(walls)})", key="walls", progress=i / len(walls))
                ...
            self.notify(f"Computed {len(walls)} walls", "success", key="walls")

        A notice with a progress is sent at once, not when the handler is done (see
        `Outbox.batch`).
        """
        if kind not in NOTICE_KINDS:
            raise ValueError(f"Unknown notice kind {kind!r}; use one of {', '.join(NOTICE_KINDS)}")
        if not self.app:
            raise RuntimeError(f"Plugin {self.name!r} is not added to an App")
        workspace_id, session_id = (None, None) if workspace == "all" else _address(workspace)
        message = {"dispatch": "notice", "message": str(message), "kind": kind}
        if key is not None:
            message["key"] = str(key)
        if progress is not None:
            message["progress"] = float(progress)
        self.app.outbox.send_bytes(compas_pb.pb_dump_bts(message), "", persist=False, workspace_id=workspace_id, session_id=session_id)
        if progress is not None:
            self.app.outbox.send_batch()

    def _send(self, action_name, data, key, workspace_id, session_id=None):
        if not self.app:
            raise RuntimeError(f"Plugin {self.name!r} is not added to an App")
        message = {"dispatch": "plugin", "plugin": self.name, "action": action_name, "data": data}
        persisted = key is not None
        self.app.outbox.send_bytes(
            compas_pb.pb_dump_bts(message),
            f"plugin/{self.name}/{key}" if persisted else "",
            persist=persisted,
            workspace_id=workspace_id,
            session_id=session_id,
        )


def _session(session_id):
    """`session_id` as a keyword, if there is one: so a `_send` replaced by older code, without
    sessions, is still called the way it expects."""
    return {} if session_id is None else {"session_id": session_id}


def _address(workspace):
    """(workspace id, session id) to send to: `workspace` - a `Workspace`, which is in its own
    session, or an id, in the bound session - or else the bound workspace, or "main"."""
    if workspace is None:
        workspace = bound_workspace() or "main"
    if isinstance(workspace, str):
        return workspace, None
    return workspace.workspace_id, workspace.state.session_id
