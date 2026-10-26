import asyncio
import json
import os

import compas_pb
import pytest
from fastapi.testclient import TestClient

from compas_threejs.viewer import App
from compas_threejs.viewer import Plugin
from compas_threejs.viewer import action
from compas_threejs.viewer.server import AppServer


@pytest.fixture
def static(tmp_path):
    (tmp_path / "plugin.js").write_text("export default { name: 'views' };")
    return tmp_path


def make_plugin(static_dir):
    class Views(Plugin):
        name = "views"
        static = static_dir

        def __init__(self):
            super().__init__()
            self.saved = []

        @action("save")
        def save(self, data, workspace):
            self.saved.append(data)
            self.send("views", [view["name"] for view in self.saved], key="views")

    return Views()


def receive(app, message, workspace_id="main"):
    app.on_message(json.dumps(message).encode("utf-8"), workspace_id)


def test_app_has_no_plugins_by_default():
    app = App()
    assert app.plugins == []
    assert TestClient(app.server.fastapi_app).get("/plugins.json").json() == []


def test_plugins_are_listed_in_order(static, tmp_path_factory):
    other_static = tmp_path_factory.mktemp("other")
    (other_static / "plugin.js").write_text("")
    (other_static / "plugin.css").write_text("")

    class Other(Plugin):
        name = "other"
        static = other_static

    app = App()
    app.plugins = [make_plugin(static), Other()]
    app._mount_plugins()
    client = TestClient(app.server.fastapi_app)

    manifest = client.get("/plugins.json").json()
    assert [entry["name"] for entry in manifest] == ["views", "other"]
    assert manifest[0]["module"].startswith("plugins/views/plugin.js?v=") and "style" not in manifest[0]
    assert manifest[1]["module"].startswith("plugins/other/plugin.js?v=")
    assert manifest[1]["style"].startswith("plugins/other/plugin.css?v=")
    assert client.get(manifest[0]["module"]).text == "export default { name: 'views' };"


def test_a_rebuilt_plugin_gets_a_new_url(static):
    plugin = make_plugin(static)
    before = plugin.manifest()["module"]
    path = static / "plugin.js"
    stat = path.stat()
    os.utime(path, ns=(stat.st_atime_ns, stat.st_mtime_ns + 1_000_000_000))
    assert plugin.manifest()["module"] != before


def test_plugin_names_must_be_unique(static):
    app = App()
    with pytest.raises(ValueError):
        app.plugins = [make_plugin(static), make_plugin(static)]


def test_a_plugin_needs_its_built_frontend(tmp_path):
    app = App()
    app.plugins = [make_plugin(tmp_path)]
    with pytest.raises(FileNotFoundError):
        app._mount_plugins()


def test_actions_reach_the_plugin_and_replies_are_kept_by_key(static):
    app = App()
    views = make_plugin(static)
    app.plugins = [views]

    receive(app, {"dispatch": "plugin", "plugin": "views", "action": "save", "data": {"name": "A"}})
    receive(app, {"dispatch": "plugin", "plugin": "views", "action": "save", "data": {"name": "B"}})

    assert views.saved == [{"name": "A"}, {"name": "B"}]
    # No server is running, so the outbox queues: (bytes, obj_id, persist, ...)
    sent = [(compas_pb.pb_load_bts(entry[0]), entry[1], entry[2]) for entry in app.outbox._queue]
    assert sent[-1] == ({"dispatch": "plugin", "plugin": "views", "action": "views", "data": ["A", "B"]}, "plugin/views/views", True)


def test_handlers_can_be_added_from_outside(static):
    app = App()
    views = make_plugin(static)
    app.plugins = [views]
    seen = []

    @views.on("save")
    def saved(data, workspace):
        seen.append((data, workspace.workspace_id))

    receive(app, {"dispatch": "plugin", "plugin": "views", "action": "save", "data": {"name": "A"}})
    assert seen == [({"name": "A"}, "main")]


def test_unkeyed_messages_are_not_kept(static):
    app = App()
    views = make_plugin(static)
    app.plugins = [views]
    views.send("flash", {"text": "hi"})
    assert app.outbox._queue[-1][1:3] == ("", False)


def sent_buttons(app):
    return [compas_pb.pb_load_bts(entry[0]) | {"key": entry[1], "persist": entry[2]} for entry in app.outbox._queue if entry[1].endswith("/buttons")]


def test_hide_and_disable_groups_and_buttons(static):
    app = App()
    views = make_plugin(static)
    app.plugins = [views]

    views.hide("display")
    views.disable("scale", "move")
    views.show("display")
    views.enable("move")

    assert views.hidden == frozenset()
    assert views.disabled == {"scale"}
    assert sent_buttons(app)[-1] == {"dispatch": "plugin_buttons", "plugin": "views", "hidden": [], "disabled": ["scale"], "key": "plugin/views/buttons", "persist": True}
    # Button state reaches every workspace
    assert {entry[3] for entry in app.outbox._queue if entry[1].endswith("/buttons")} == {None}


def test_button_state_set_before_adding_the_plugin_is_sent(static):
    app = App()
    views = make_plugin(static)
    views.hide("display")
    assert sent_buttons(app) == []

    app.plugins = [views]
    assert sent_buttons(app)[-1]["hidden"] == ["display"]


def test_declared_ids_catch_typos(static):
    views = make_plugin(static)
    views.ids = ("display", "scale")
    views.hide("display")
    with pytest.raises(ValueError, match="'scael'"):
        views.disable("scael")


def test_find_geometry_by_guid():
    from compas.geometry import Box

    app = App()
    box = Box(1)
    app.add_geometry(box)
    assert app.find_geometry(str(box.guid)) is box
    assert app.find_geometry("missing") is None


def sent_to(app):
    """(message, workspace_id) of every queued plugin message."""
    return [(compas_pb.pb_load_bts(entry[0]), entry[3]) for entry in app.outbox._queue if entry[0] and compas_pb.pb_load_bts(entry[0]).get("dispatch") == "plugin"]


def test_handlers_answer_the_workspace_that_asked(static):
    app = App()
    views = make_plugin(static)
    app.plugins = [views]
    app.get_workspace("beam")

    receive(app, {"dispatch": "plugin", "plugin": "views", "action": "save", "data": {"name": "A"}}, "beam")
    assert sent_to(app)[-1][1] == "beam"

    # Outside a handler, send goes to main unless told otherwise
    views.send("flash")
    views.send("flash", workspace=app.get_workspace("beam"))
    views.send("flash", workspace="other")
    assert [workspace for _, workspace in sent_to(app)[-3:]] == ["main", "beam", "other"]


def test_send_all_reaches_every_workspace(static):
    app = App()
    views = make_plugin(static)
    app.plugins = [views]
    views.send_all("views", ["A"], key="views")
    assert app.outbox._queue[-1][1:4] == ("plugin/views/views", True, None)


def test_shared_state_is_replayed_to_every_workspace():
    server = AppServer()
    asyncio.run(server.broadcast(b"shared", "k", workspace_id=None))
    asyncio.run(server.broadcast(b"own", "k", workspace_id="beam"))
    with TestClient(server.fastapi_app) as client:
        with client.websocket_connect("/ws?workspace=beam") as ws:
            assert ws.receive_bytes() == b"shared"
            assert ws.receive_bytes() == b"own"
        with client.websocket_connect("/ws?workspace=other") as ws:
            assert ws.receive_bytes() == b"shared"


def make_named(static_dir, plugin_name):
    class Named(Plugin):
        name = plugin_name
        static = static_dir

        def __init__(self):
            super().__init__()
            self.calls = []

        @action("ping")
        def ping(self, data, workspace):
            self.calls.append(workspace.workspace_id)

    return Named()


def test_workspaces_show_a_subset_of_the_plugins(static):
    app = App()
    essentials, draw = make_named(static, "essentials"), make_named(static, "draw")
    app.plugins = [essentials, draw]
    beam = app.get_workspace("beam")
    beam.plugins = [essentials]

    client = TestClient(app.server.fastapi_app)
    assert [entry["name"] for entry in client.get("/plugins.json").json()] == ["essentials", "draw"]
    assert [entry["name"] for entry in client.get("/plugins.json?workspace=beam").json()] == ["essentials"]
    # A workspace without its own list, or not created yet, has all of them
    assert len(client.get("/plugins.json?workspace=nowhere").json()) == 2

    # Messages for a plugin the workspace doesn't show are dropped
    receive(app, {"dispatch": "plugin", "plugin": "draw", "action": "ping"}, "beam")
    receive(app, {"dispatch": "plugin", "plugin": "essentials", "action": "ping"}, "beam")
    assert draw.calls == [] and essentials.calls == ["beam"]


def test_the_main_workspace_leaves_out_plugins_not_in_main(static):
    app = App()
    essentials, editor = make_named(static, "essentials"), make_named(static, "editor")
    editor.in_main = False  # made for other tabs, e.g. an element's editor
    app.plugins = [essentials, editor]
    assert app.main.plugins == [essentials]
    assert app.get_workspace("beam").plugins == [essentials, editor]

    client = TestClient(app.server.fastapi_app)
    assert [entry["name"] for entry in client.get("/plugins.json").json()] == ["essentials"]
    assert [entry["name"] for entry in client.get("/plugins.json?workspace=beam").json()] == ["essentials", "editor"]


def test_workspace_plugins_come_from_the_app(static):
    app = App()
    essentials = make_named(static, "essentials")
    beam = app.get_workspace("beam")
    with pytest.raises(ValueError, match="not in App.plugins"):
        beam.plugins = [essentials]
    app.plugins = [essentials]
    beam.plugins = [essentials]
    app.plugins = []
    assert beam.plugins == []


def test_workspace_url():
    app = App()
    assert app.get_workspace("beam 1").url == app.url + "&workspace=beam%201"


def test_a_tab_asking_for_a_new_workspace_sets_it_up_first(static):
    app = App()
    essentials, timber = make_named(static, "essentials"), make_named(static, "timber")
    seen = []

    class Timber(type(timber)):
        def new_workspace(self, workspace):
            seen.append(("plugin", workspace.workspace_id))
            workspace.plugins = [self]

    timber = Timber()
    app.plugins = [essentials, timber]

    @app.on_new_workspace
    def created(workspace):
        seen.append(("app", workspace.workspace_id))

    client = TestClient(app.server.fastapi_app)
    assert [entry["name"] for entry in client.get("/plugins.json?workspace=beam").json()] == ["timber"]
    assert seen == [("plugin", "beam"), ("app", "beam")]
    # Only once, and not for workspaces Python made
    client.get("/plugins.json?workspace=beam")
    app.get_workspace("column")
    client.get("/plugins.json?workspace=column")
    assert len(seen) == 2


def test_notify_shows_a_message_in_one_workspace_or_all(static):
    app = App()
    views = make_plugin(static)
    app.plugins = [views]
    views.notify("Saved", "success")
    data, key, persist, workspace_id = app.outbox._queue[-1][:4]
    assert compas_pb.pb_load_bts(data) == {"dispatch": "notice", "message": "Saved", "kind": "success"}
    assert (key, persist, workspace_id) == ("", False, "main")
    views.notify("Hello", workspace="all")
    assert app.outbox._queue[-1][3] is None
    with pytest.raises(ValueError):
        views.notify("Hm", "loud")


def test_a_gizmo_move_is_told_to_on_object_transform():
    from compas.geometry import Point

    app = App()
    point = Point(0, 0, 0)
    app.add_geometry(point)
    moves = []
    app.on_object_transform(lambda geometry, transformation, workspace: moves.append((geometry, workspace.workspace_id)))
    matrix = [[1, 0, 0, 2], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]]
    receive(app, {"dispatch": "object_transform", "guid": str(point.guid), "matrix": matrix})
    assert moves == [(point, "main")] and point.x == 2
