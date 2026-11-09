"""Sessions, phase 3 (see SESSIONS.md): the endpoint. With `App(sessions=True)`, each browser gets
its own session from a cookie - for pages, plugin routes and the WebSocket alike."""

import asyncio
import json
import time

import pytest
from fastapi.testclient import TestClient
from starlette.websockets import WebSocketDisconnect

from compas_threejs.viewer import App
from compas_threejs.viewer import MemorySessionStore
from compas_threejs.viewer import Plugin
from compas_threejs.viewer import Remote
from compas_threejs.viewer import SessionManager
from compas_threejs.viewer import action
from compas_threejs.viewer import current_session
from compas_threejs.viewer.endpoint import COOKIE
from compas_threejs.viewer.server import AppServer


class Echo(Plugin):
    name = "echo"

    def __init__(self):
        super().__init__()
        self.seen = []

    @action("who")
    def who(self, data, workspace):
        self.seen.append((current_session().id, workspace.workspace_id))
        self.send("you", current_session().id)


def make_app(**options):
    app = App(sessions=True, **options)
    app.plugins = [Echo()]

    def whoami():  # a plain route, run in a worker thread
        return {"session": current_session().id}

    async def whoami_async():  # an async one, on the event loop
        return {"session": current_session().id}

    app.add_route("/whoami", whoami)
    app.add_route("/whoami-async", whoami_async)
    app.server.app_instance = app
    return app


@pytest.fixture
def app():
    return make_app()


def browser(app, **options):
    """A browser: its own cookie jar."""
    return TestClient(app.server.fastapi_app, **options)


def set_cookie(response):
    return response.headers.get("set-cookie", "")


# ---- COOKIES ----------------------------------------------------------------------------------


def test_a_first_visit_starts_a_session_and_sets_its_cookie(app):
    with browser(app) as one:
        first = one.get("/whoami")
        cookie = set_cookie(first)
        session_id = first.json()["session"]
        assert cookie.startswith(f"{COOKIE}={session_id}")
        for attribute in ("HttpOnly", "SameSite=Lax", "Path=/"):
            assert attribute in cookie
        assert "Secure" not in cookie
        # The browser sends it back: the same session, no new cookie.
        again = one.get("/whoami")
        assert again.json()["session"] == session_id
        assert set_cookie(again) == ""
    assert app.sessions.get(session_id) is not None


def test_two_browsers_get_two_sessions(app):
    with browser(app) as one, browser(app) as two:
        assert one.get("/whoami").json() != two.get("/whoami").json()
    assert len(app.sessions) == 3  # and the default one


def test_async_routes_see_the_session_too(app):
    with browser(app) as one:
        assert one.get("/whoami-async").json() == one.get("/whoami").json()


def test_over_https_the_cookie_is_secure(app):
    with browser(app, base_url="https://testserver") as one:
        assert "Secure" in set_cookie(one.get("/whoami"))


def test_a_forged_or_expired_cookie_gets_a_new_session():
    store = MemorySessionStore()
    app = make_app(session_store=store, session_timeout=60)
    with browser(app) as one:
        one.cookies.set(COOKIE, "forged")
        assert one.get("/whoami").json()["session"] != "forged"
        session_id = one.get("/whoami").json()["session"]
        store.remove(session_id)  # it expires
        assert one.get("/whoami").json()["session"] != session_id


def test_without_sessions_there_is_no_cookie():
    app = App()
    with TestClient(app.server.fastapi_app) as one:
        assert set_cookie(one.get("/plugins.json")) == ""


def test_the_page_starts_a_tabs_workspace_in_its_session(app):
    created = []
    app.on_new_workspace(lambda workspace: created.append((current_session().id, workspace)))
    with browser(app) as one:
        one.get("/plugins.json?workspace=beam")
        session = app.sessions.get(one.cookies[COOKIE])
    assert created == [(session.id, session.state.workspaces["beam"])]
    assert "beam" not in app.sessions.default.state.workspaces


# ---- THE WEBSOCKET ----------------------------------------------------------------------------


def ask(tab):
    tab.send_text(json.dumps({"dispatch": "plugin", "plugin": "echo", "action": "who"}))


def answer(tab):
    import compas_pb

    from compas_threejs.viewer.server import BATCH_MARKER

    frame = tab.receive_bytes()
    assert not frame.startswith(BATCH_MARKER)
    return compas_pb.pb_load_bts(frame)["data"]


def serving(client, app):
    app.server.loop = client.portal.call(asyncio.get_running_loop)
    app.outbox.flush()


def test_a_tab_is_in_its_browsers_session(app):
    # One client, as a real server has one event loop; each "browser" is its own cookie.
    with browser(app) as client:
        serving(client, app)
        one_id = client.get("/whoami").json()["session"]
        client.cookies.clear()
        two_id = client.get("/whoami").json()["session"]
        client.cookies.clear()
        one = {"cookie": f"{COOKIE}={one_id}"}
        two = {"cookie": f"{COOKIE}={two_id}"}
        with client.websocket_connect("/ws", headers=one) as tab_one, client.websocket_connect("/ws?workspace=beam", headers=two) as tab_two:
            ask(tab_one)
            assert answer(tab_one) == one_id
            ask(tab_two)
            assert answer(tab_two) == two_id
    assert app.get_plugin("echo").seen == [(one_id, "main"), (two_id, "beam")]


def test_a_websocket_without_a_cookie_starts_a_session():
    app = make_app()
    with browser(app) as one:
        serving(one, app)
        with one.websocket_connect("/ws") as tab:
            ask(tab)
            session_id = answer(tab)
    assert session_id != "default"
    assert app.sessions.get(session_id) is not None


def test_authorize_session_can_refuse(app):
    @app.authorize_session
    def only_with_the_header(connection, session):
        assert current_session() is session
        return connection.headers.get("x-allowed") == "yes"

    with browser(app) as one:
        assert one.get("/whoami").status_code == 403
        assert one.get("/whoami", headers={"x-allowed": "yes"}).status_code == 200
        with pytest.raises(WebSocketDisconnect):
            with one.websocket_connect("/ws") as tab:
                tab.receive_bytes()
        with one.websocket_connect("/ws", headers={"x-allowed": "yes"}):
            pass


def test_a_remote_joins_a_session_with_its_cookie(monkeypatch):
    import websockets

    seen = {}

    class Refused(Exception):
        pass

    def connect(url, **options):
        seen.update(url=url, **options)
        raise Refused

    monkeypatch.setattr(websockets, "connect", connect)
    remote = Remote(port=9123, workspace_id="beam", session="abc")
    asyncio.run(remote._connect_websocket())
    assert seen["additional_headers"] == {"Cookie": f"{COOKIE}=abc"}
    assert seen["url"].endswith("/ws?workspace=beam")
    seen.clear()
    asyncio.run(Remote(port=9123)._connect_websocket())
    assert seen["additional_headers"] is None


# ---- KEEPING SESSIONS ALIVE -------------------------------------------------------------------


def test_touching_tells_the_store_at_most_every_tenth_of_the_timeout():
    calls = []
    store = MemorySessionStore()
    original = store.touch
    store.touch = lambda *args: calls.append(args) or original(*args)
    manager = SessionManager(store, timeout=600)
    session = manager.create()
    assert manager.touch(session)
    assert calls == []  # just created
    session.last_seen -= 61
    assert manager.touch(session)
    assert len(calls) == 1


def test_the_server_sweeps_while_it_runs():
    server = AppServer()
    swept = []
    server.every(0.05, lambda: swept.append(time.time()))
    server.every(0.05, lambda: 1 / 0)  # a failing one doesn't stop the others

    async def serve_a_little():
        tasks = [asyncio.create_task(server._repeat(seconds, function)) for seconds, function in server._periodic]
        await asyncio.sleep(0.3)
        for task in tasks:
            task.cancel()

    asyncio.run(serve_a_little())
    assert len(swept) >= 3


def test_an_app_with_sessions_sweeps_them():
    app = App(sessions=True, session_timeout=60)
    assert (15, app.sessions.sweep) in app.server._periodic
    assert App().server._periodic == []
