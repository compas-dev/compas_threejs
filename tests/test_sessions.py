"""Sessions, phase 1 (see SESSIONS.md): the stores, the SessionManager, binding a session, and
the App keeping each session's workspaces and registries apart.

The store tests run on the memory store, on fakeredis, and on a real Redis when
COMPAS_THREEJS_REDIS_URL is set (`docker compose up -d redis`).
"""

import asyncio
import json
import os
import threading
import time
import uuid

import pytest
from compas.geometry import Box

from compas_threejs.viewer import App
from compas_threejs.viewer import MemorySessionStore
from compas_threejs.viewer import NoSession
from compas_threejs.viewer import Plugin
from compas_threejs.viewer import RedisSessionStore
from compas_threejs.viewer import Remote
from compas_threejs.viewer import Session
from compas_threejs.viewer import SessionManager
from compas_threejs.viewer import action
from compas_threejs.viewer import current_session
from compas_threejs.viewer import current_state
from compas_threejs.viewer import current_workspace

REDIS_URL = os.environ.get("COMPAS_THREEJS_REDIS_URL")


class Clock:
    def __init__(self):
        self.now = 1000.0

    def __call__(self):
        return self.now


@pytest.fixture(params=["memory", "fakeredis", "redis"])
def store(request):
    """(store, wait): `wait(seconds)` lets that much time pass for the store."""
    if request.param == "memory":
        clock = Clock()

        def wait(seconds):
            clock.now += seconds

        yield MemorySessionStore(clock=clock), wait
        return

    def wait(seconds):
        time.sleep(seconds)

    prefix = f"test:{uuid.uuid4().hex}:"
    if request.param == "fakeredis":
        fakeredis = pytest.importorskip("fakeredis")
        yield RedisSessionStore(client=fakeredis.FakeRedis(), prefix=prefix), wait
        return
    if not REDIS_URL:
        pytest.skip("set COMPAS_THREEJS_REDIS_URL to test on a real Redis (docker compose up -d redis)")
    store = RedisSessionStore(REDIS_URL, prefix=prefix)
    yield store, wait
    for session_id in list(store.ids()):
        store.remove(session_id)


# ---- STORES -----------------------------------------------------------------------------------


def test_a_record_is_kept_until_it_expires(store):
    store, wait = store
    record = store.create("a", timeout=0.5)
    assert record["id"] == "a"
    assert record["created"] == record["last_seen"]
    assert store.get("a")["id"] == "a"
    wait(0.7)
    assert store.get("a") is None


def test_touching_a_record_keeps_it_longer(store):
    store, wait = store
    store.create("a", timeout=0.5)
    wait(0.3)
    assert store.touch("a", timeout=0.5)
    wait(0.3)
    assert store.get("a") is not None
    assert store.get("a")["last_seen"] > store.get("a")["created"]


def test_an_expired_record_isnt_brought_back_by_a_touch(store):
    store, wait = store
    store.create("a", timeout=0.2)
    wait(0.4)
    assert not store.touch("a", timeout=10)
    assert store.get("a") is None


def test_unknown_and_removed_records(store):
    store, _ = store
    assert store.get("nobody") is None
    assert not store.touch("nobody", timeout=10)
    store.create("a", timeout=10)
    store.remove("a")
    store.remove("a")  # twice is fine
    assert store.get("a") is None


def test_ids_are_the_records_not_expired(store):
    store, wait = store
    store.create("short", timeout=0.2)
    store.create("long", timeout=10)
    wait(0.4)
    assert set(store.ids()) == {"long"}


def test_redis_records_are_json_with_an_expiry():
    fakeredis = pytest.importorskip("fakeredis")
    client = fakeredis.FakeRedis()
    RedisSessionStore(client=client, prefix="p:").create("a", timeout=60)
    assert json.loads(client.get("p:a"))["id"] == "a"
    assert 0 < client.pttl("p:a") <= 60_000


# ---- SESSION MANAGER --------------------------------------------------------------------------


@pytest.fixture
def clock():
    return Clock()


@pytest.fixture
def manager(clock):
    return SessionManager(MemorySessionStore(clock=clock), timeout=60)


def test_there_is_always_a_default_session(manager):
    assert manager.current() is manager.default
    assert manager.get("default") is manager.default
    assert list(manager) == [manager.default]
    with pytest.raises(ValueError):
        manager.end(manager.default)


def test_new_sessions_have_their_own_unguessable_ids_and_state(manager):
    a, b = manager.create(), manager.create()
    assert a.id != b.id and len(a.id) >= 40
    assert a.state is not b.state
    assert manager.get(a.id) is a
    assert manager.store.get(a.id) is not None
    assert list(manager) == [manager.default, a, b]


def test_an_unknown_or_missing_id_is_no_session(manager):
    assert manager.get("forged") is None
    assert manager.get("") is None
    assert manager.get(None) is None


def test_an_expired_session_is_gone_and_its_end_is_heard(manager, clock):
    ended = []
    manager.on_ended(ended.append)
    session = manager.create()
    clock.now += 61
    assert manager.get(session.id) is None
    assert ended == [session]
    assert list(manager) == [manager.default]


def test_a_session_known_to_the_store_but_not_here_starts_again_empty(clock):
    store = MemorySessionStore(clock=clock)
    first = SessionManager(store, timeout=60)
    session = first.create()
    session.state.plugins["x"] = "something"
    # The server restarts (or another process asks): the record is there, the state isn't.
    second = SessionManager(store, timeout=60)
    started = []
    second.on_started(started.append)
    again = second.get(session.id)
    assert again.id == session.id and again is not session
    assert again.state.plugins == {}
    assert started == [again]


def test_sweep_keeps_connected_sessions_and_ends_expired_ones(manager, clock):
    connected, idle = manager.create(), manager.create()
    connected.connections = 1
    clock.now += 61
    assert manager.sweep() == [idle]
    assert manager.get(connected.id) is connected
    assert manager.get(idle.id) is None


def test_ending_a_session_removes_its_record(manager):
    ended = []
    manager.on_ended(ended.append)
    session = manager.create()
    manager.end(session)
    assert manager.store.get(session.id) is None
    assert manager.get(session.id) is None
    assert ended == [session]


def test_session_hooks_run_with_the_session_bound(manager):
    seen = []
    manager.on_started(lambda session: seen.append(current_session() is session))
    manager.create()
    assert seen == [True]


# ---- BINDING ----------------------------------------------------------------------------------


def test_outside_a_session_there_is_none():
    with pytest.raises(NoSession):
        current_session()
    with pytest.raises(NoSession):
        current_state()
    with pytest.raises(NoSession):
        current_workspace()


def test_a_bound_session_is_current_and_unbound_after():
    a, b = Session("a"), Session("b")
    with a.active("ws"):
        assert current_session() is a
        assert current_state() is a.state
        assert current_workspace() == "ws"
        with b.active():
            assert current_session() is b
        assert current_session() is a
        assert current_workspace() == "ws"
    with pytest.raises(NoSession):
        current_session()


def test_a_thread_needs_the_session_bound():
    session = Session("a")
    seen = {}

    def unbound():
        try:
            current_session()
        except NoSession:
            seen["unbound"] = "no session"

    def bound():
        seen["bound"] = (current_session(), current_workspace())

    with session.active("ws"):
        for target in (unbound, session.bind(bound)):
            thread = threading.Thread(target=target)
            thread.start()
            thread.join()
    assert seen == {"unbound": "no session", "bound": (session, "ws")}


def test_to_thread_carries_the_session_as_the_server_uses_it():
    session = Session("a")

    async def handle():
        with session.active("ws"):
            return await asyncio.to_thread(lambda: (current_session(), current_workspace()))

    assert asyncio.run(handle()) == (session, "ws")


def test_run_calls_with_the_session_bound():
    session = Session("a")
    assert session.run(lambda: current_session()) is session


# ---- THE APP ----------------------------------------------------------------------------------


class Recorder(Plugin):
    name = "recorder"

    def __init__(self):
        super().__init__()
        self.seen = []

    @action("look")
    def look(self, data, workspace):
        self.seen.append((current_session(), current_workspace(), workspace))
        self.app.add_geometry(Box(1))  # the shorthand: this session's main


def send(app, message, workspace_id="main", session=None):
    app.on_message(json.dumps(message).encode("utf-8"), workspace_id, session=session)


@pytest.fixture
def app():
    app = App()
    app.plugins = [Recorder()]
    return app


def test_the_app_starts_with_the_default_sessions_main_workspace(app):
    default = app.sessions.default
    assert app.main is default.state.workspaces["main"]
    assert app.workspaces is default.state.workspaces
    box = Box(1)
    app.add_geometry(box)
    assert app.inbox.geometry_registry is default.state.geometry
    assert app.find_geometry(box.guid) is box


def test_a_message_is_handled_with_its_session_and_workspace_bound(app):
    recorder = app.get_plugin("recorder")
    a = app.sessions.create()
    send(app, {"dispatch": "plugin", "plugin": "recorder", "action": "look"}, "beam", session=a)
    session, bound, workspace = recorder.seen[-1]
    assert session is a
    assert bound is workspace is a.state.workspaces["beam"]


def test_two_sessions_keep_their_workspaces_and_geometry_apart(app):
    a, b = app.sessions.create(), app.sessions.create()
    message = {"dispatch": "plugin", "plugin": "recorder", "action": "look"}
    send(app, message, session=a)
    send(app, message, session=b)
    a_main, b_main = a.state.workspaces["main"], b.state.workspaces["main"]
    assert a_main is not b_main
    assert a_main.state is a.state and b_main.state is b.state
    assert len(a.state.geometry) == 1 and len(b.state.geometry) == 1
    assert a.state.geometry.keys() != b.state.geometry.keys()
    # The default session saw none of it.
    assert app.sessions.default.state.geometry == {}


def test_a_plain_callback_knows_its_session_too(app):
    seen = []
    a = app.sessions.create()
    with a.active():
        app.register_action("ping", lambda data: seen.append((current_session(), current_workspace().workspace_id, data)))
    assert "ping" in a.state.actions and "ping" not in app.sessions.default.state.actions
    send(app, {"dispatch": "other_action", "action": "ping", "json_data": 1}, "tab", session=a)
    assert seen == [(a, "tab", 1)]


def test_without_a_session_a_message_goes_to_the_default_one(app):
    recorder = app.get_plugin("recorder")
    send(app, {"dispatch": "plugin", "plugin": "recorder", "action": "look"})
    assert recorder.seen[-1][0] is app.sessions.default


def test_a_workspace_first_seen_in_a_message_runs_the_new_workspace_hooks(app):
    created = []
    app.on_new_workspace(created.append)
    a = app.sessions.create()
    send(app, {"dispatch": "plugin", "plugin": "recorder", "action": "look"}, "beam", session=a)
    assert created == [a.state.workspaces["beam"]]


def test_a_remote_keeps_its_own_registries():
    remote = Remote()
    box = Box(1)
    remote.add_geometry(box)
    assert remote.inbox.geometry_registry[str(box.guid)] is box
    assert remote.main.state is remote.inbox.state
