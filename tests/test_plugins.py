import json

import compas_pb
import pytest
from fastapi.testclient import TestClient

from compas_threejs.viewer import App
from compas_threejs.viewer import Plugin
from compas_threejs.viewer import action


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
        def save(self, data):
            self.saved.append(data)
            self.send("views", [view["name"] for view in self.saved], key="views")

    return Views()


def receive(app, message):
    app.on_message(json.dumps(message).encode("utf-8"))


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

    assert client.get("/plugins.json").json() == [
        {"name": "views", "module": "plugins/views/plugin.js"},
        {"name": "other", "module": "plugins/other/plugin.js", "style": "plugins/other/plugin.css"},
    ]
    assert client.get("/plugins/views/plugin.js").text == "export default { name: 'views' };"


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
    def saved(data):
        seen.append(data)

    receive(app, {"dispatch": "plugin", "plugin": "views", "action": "save", "data": {"name": "A"}})
    assert seen == [{"name": "A"}]


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
