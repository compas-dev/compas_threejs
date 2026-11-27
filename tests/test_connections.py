"""Sessions, phase 2 (see SESSIONS.md): connections by session and workspace, the three reaches,
and what is replayed to a tab - over real WebSockets.

Until phase 3 sets a session cookie, these tests pick a tab's session with `?session=`.
"""

import asyncio
import json

import compas_pb
import pytest
from compas.geometry import Box
from fastapi.testclient import TestClient

from compas_threejs.viewer import App
from compas_threejs.viewer import Plugin
from compas_threejs.viewer import action
from compas_threejs.viewer.connections import ConnectionManager
from compas_threejs.viewer.server import AppServer
from compas_threejs.viewer.session import DEFAULT_SESSION_ID
from compas_threejs.viewer.session import Session


def unpack(frame):
    """The messages of a frame: one, or several (see `pack_batch`)."""
    if not frame.startswith(b"\x00"):
        return [frame]
    messages, at = [], 1
    while at < len(frame):
        size = int.from_bytes(frame[at : at + 4], "little")
        messages.append(frame[at + 4 : at + 4 + size])
        at += 4 + size
    return messages


def by_query(sessions):
    """A `resolve_session` for tests: the session named in `?session=`."""
    return lambda websocket: sessions.get(websocket.query_params.get("session"))


# ---- CONNECTION MANAGER -----------------------------------------------------------------------


def test_who_a_message_reaches():
    manager = ConnectionManager()
    a_main, a_beam, b_main, d_main = object(), object(), object(), object()
    manager.connect(a_main, "a", "main")
    manager.connect(a_beam, "a", "beam")
    manager.connect(b_main, "b", "main")
    manager.connect(d_main, DEFAULT_SESSION_ID, "main")
    assert manager.clients("a", "main") == {a_main}
    assert manager.clients("a", None) == {a_main, a_beam}
    # The default session's messages are everyone's.
    assert manager.clients(DEFAULT_SESSION_ID, "main") == {a_main, b_main, d_main}
    assert manager.clients(DEFAULT_SESSION_ID, None) == {a_main, a_beam, b_main, d_main}
    assert manager.count() == 4 and manager.count("a") == 2
    manager.disconnect(a_beam, "a", "beam")
    manager.disconnect(a_beam, "a", "beam")  # twice is fine
    assert manager.count("a") == 1


def test_a_tab_replays_everyones_then_its_sessions_own():
    manager = ConnectionManager()
    keep = manager.keep
    keep(b"everyone, all", "1", True, DEFAULT_SESSION_ID, None, None)
    keep(b"a, all", "2", True, "a", None, None)
    keep(b"everyone, main", "3", True, DEFAULT_SESSION_ID, "main", None)
    keep(b"a, main", "4", True, "a", "main", None)
    keep(b"b, main", "5", True, "b", "main", None)
    assert manager.replay("a", "main") == [b"everyone, all", b"a, all", b"everyone, main", b"a, main"]
    assert manager.replay("b", "main") == [b"everyone, all", b"everyone, main", b"b, main"]
    assert manager.replay(DEFAULT_SESSION_ID, "main") == [b"everyone, all", b"everyone, main"]


def test_an_ended_sessions_messages_are_forgotten():
    manager = ConnectionManager()
    manager.keep(b"a", "1", True, "a", "main", None)
    manager.keep(b"a", "2", True, "a", None, None)
    manager.keep(b"everyone", "3", True, DEFAULT_SESSION_ID, "main", None)
    manager.forget_session("a")
    assert manager.replay("a", "main") == [b"everyone"]
    with pytest.raises(ValueError):
        manager.forget_session(DEFAULT_SESSION_ID)


# ---- THE SERVER -------------------------------------------------------------------------------


def test_two_sessions_on_the_same_workspace_dont_see_each_other():
    server = AppServer()
    server.resolve_session = by_query({"a": Session("a"), "b": Session("b")})
    with TestClient(server.fastapi_app) as client:
        with client.websocket_connect("/ws?session=a") as a, client.websocket_connect("/ws?session=b") as b:
            client.portal.call(lambda: server.broadcast(b"for a", "x", session_id="a"))
            client.portal.call(lambda: server.broadcast(b"for everyone", "y"))
            assert unpack(a.receive_bytes()) == [b"for a"]
            assert unpack(a.receive_bytes()) == [b"for everyone"]
            assert unpack(b.receive_bytes()) == [b"for everyone"]  # nothing of a's came first
        # Reconnecting replays: everyone's, then the session's own.
        with client.websocket_connect("/ws?session=a") as a:
            assert unpack(a.receive_bytes()) == [b"for everyone", b"for a"]
        with client.websocket_connect("/ws?session=b") as b:
            assert b.receive_bytes() == b"for everyone"


def test_a_remotes_binary_frames_stay_in_its_session():
    server = AppServer()
    server.resolve_session = by_query({"a": Session("a"), "b": Session("b")})
    with TestClient(server.fastapi_app) as client:
        with client.websocket_connect("/ws?session=a") as a, client.websocket_connect("/ws?session=b") as b:
            a.send_bytes(b"from a")
            assert a.receive_bytes() == b"from a"
            client.portal.call(lambda: server.broadcast(b"marker", "m"))
            assert b.receive_bytes() == b"marker"
    assert server.connections.replay("b", "main") == [b"marker"]


# ---- THE APP ----------------------------------------------------------------------------------


class Talker(Plugin):
    name = "talker"

    @action("hello")
    def hello(self, data, workspace):
        self.send("said", f"hello {data}")

    @action("tell_all")
    def tell_all(self, data, workspace):
        self.send_all("told", data, key="told")

    @action("tell_everyone")
    def tell_everyone(self, data, workspace):
        self.send_everyone("news", data)


def plugin_message(frame):
    return [compas_pb.pb_load_bts(message) for message in unpack(frame)]


@pytest.fixture
def live():
    """An App with sessions "a" and "b", served to TestClient tabs: (app, client, open_tab)."""
    app = App()
    app.plugins = [Talker()]
    sessions = {"a": app.sessions.create(), "b": app.sessions.create()}
    app.server.resolve_session = by_query(sessions)
    app.server.app_instance = app
    with TestClient(app.server.fastapi_app) as client:
        app.server.loop = client.portal.call(asyncio.get_running_loop)
        app.outbox.flush()

        def open_tab(session, workspace="main"):
            return client.websocket_connect(f"/ws?session={session}&workspace={workspace}")

        yield app, sessions, open_tab


def say(tab, action_name, data=None):
    tab.send_text(json.dumps({"dispatch": "plugin", "plugin": "talker", "action": action_name, "data": data}))


def test_what_app_py_adds_at_startup_every_session_sees():
    app = App()
    box = Box(1)
    app.add_geometry(box)  # at startup: the default session, everyone's
    a = app.sessions.create()
    app.server.resolve_session = by_query({"a": a})
    with TestClient(app.server.fastapi_app) as client:
        app.server.loop = client.portal.call(asyncio.get_running_loop)
        app.outbox.flush()
        client.portal.call(lambda: asyncio.sleep(0.1))
        startup = app.server.connections.replay(DEFAULT_SESSION_ID, "main")
        with client.websocket_connect("/ws?session=a") as tab:
            assert unpack(tab.receive_bytes()) == startup
    assert box.guid in app.server.connections.saved(DEFAULT_SESSION_ID, "main")
    assert app.server.connections.replay(a.id, "main") == startup  # nothing of its own yet


def test_an_answer_reaches_only_the_asking_session(live):
    app, sessions, open_tab = live
    with open_tab("a") as a, open_tab("b") as b:
        say(a, "hello", "a")
        assert plugin_message(a.receive_bytes())[0]["data"] == "hello a"
        say(b, "hello", "b")
        assert plugin_message(b.receive_bytes())[0]["data"] == "hello b"  # not a's first


def test_send_all_reaches_every_workspace_of_the_session_only(live):
    app, sessions, open_tab = live
    with open_tab("a") as a_main, open_tab("a", "beam") as a_beam, open_tab("b") as b:
        say(a_main, "tell_all", "a's")
        assert plugin_message(a_main.receive_bytes())[0]["data"] == "a's"
        assert plugin_message(a_beam.receive_bytes())[0]["data"] == "a's"
        say(b, "tell_all", "b's")
        assert plugin_message(b.receive_bytes())[0]["data"] == "b's"


def test_send_everyone_reaches_every_session(live):
    app, sessions, open_tab = live
    with open_tab("a") as a, open_tab("b") as b:
        say(a, "tell_everyone", "sunny")
        assert plugin_message(a.receive_bytes())[0]["data"] == "sunny"
        assert plugin_message(b.receive_bytes())[0]["data"] == "sunny"


def test_outside_a_session_send_all_reaches_everyone(live):
    app, sessions, open_tab = live
    talker = app.get_plugin("talker")
    with open_tab("a") as a, open_tab("b") as b:
        talker.send_all("startup", "for all")  # not handling anyone's message
        assert plugin_message(a.receive_bytes())[0]["data"] == "for all"
        assert plugin_message(b.receive_bytes())[0]["data"] == "for all"


def test_a_workspace_sends_to_its_own_session_from_anywhere(live):
    app, sessions, open_tab = live
    a_main = app.sessions.get(sessions["a"].id).run(app.get_workspace, "main")
    with open_tab("a") as a, open_tab("b") as b:
        a_main.background_color = a_main.background_color  # no session bound here
        assert plugin_message(a.receive_bytes())
        app.get_plugin("talker").send_all("marker", 1)
        assert plugin_message(b.receive_bytes())[0]["data"] == 1  # nothing of a's first


def test_a_tab_is_counted_while_connected(live):
    app, sessions, open_tab = live
    with open_tab("a"), open_tab("a", "beam"):
        assert app.server.connections.count(sessions["a"].id) == 2
        assert sessions["a"].connections == 2 and sessions["b"].connections == 0
    assert app.server.connections.count(sessions["a"].id) == 0
    assert sessions["a"].connections == 0


def test_an_ended_session_takes_what_it_kept_with_it(live):
    app, sessions, open_tab = live
    with open_tab("a") as a:
        say(a, "tell_all", "a's")
        a.receive_bytes()
    a_id = sessions["a"].id
    assert app.server.connections.replay(a_id, "main") != app.server.connections.replay(DEFAULT_SESSION_ID, "main")
    app.sessions.end(sessions["a"])
    assert app.server.connections.replay(a_id, "main") == app.server.connections.replay(DEFAULT_SESSION_ID, "main")


def test_without_a_resolver_everyone_is_in_the_default_session():
    server = AppServer()
    with TestClient(server.fastapi_app) as client:
        with client.websocket_connect("/ws") as one, client.websocket_connect("/ws") as two:
            client.portal.call(lambda: server.broadcast(b"hi", "x"))
            assert one.receive_bytes() == b"hi" and two.receive_bytes() == b"hi"
    assert server.workspace_states["main"] == {"x": b"hi"}
