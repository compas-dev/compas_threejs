"""Sessions, phases 4 and 5 (see SESSIONS.md): what app.py adds at startup is everyone's - a session
that changes it gets its own copy - and each plugin's data is per session (`Plugin.state`)."""

import json
import threading

import compas_pb
from compas.colors import Color
from compas.geometry import Box
from compas.geometry import Translation

from compas_threejs.materials import Material
from compas_threejs.metadata import Metadata
from compas_threejs.ui import Button
from compas_threejs.viewer import App
from compas_threejs.viewer import Plugin
from compas_threejs.viewer import action
from compas_threejs.viewer import current_session


def send(app, message, session, workspace_id="main"):
    app.on_message(json.dumps(message).encode("utf-8"), workspace_id, session=session)


def sent(app, session):
    """What was sent for `session`: (message, obj_id, persist) - the server isn't running, so
    the outbox keeps it."""
    out = []
    for binary, obj_id, persist, _, _, _, session_id in app.outbox._queue:
        if session_id == session.id and binary is not None:
            out.append((compas_pb.pb_load_bts(binary), obj_id, persist))
    return out


def startup():
    """An app with a box added at startup - everyone's - and two sessions."""
    app = App()
    box = Box(1)
    app.add_geometry(box, Material(color=Color.red()), Metadata(Type="Beam"))
    return app, box, app.sessions.create(), app.sessions.create()


# ---- EVERYONE'S OBJECTS -----------------------------------------------------------------------


def test_every_session_finds_and_picks_whats_added_at_startup():
    app, box, a, b = startup()
    with a.active():
        assert app.find_geometry(box.guid) is box
    send(app, {"dispatch": "object_picked", "guid": str(box.guid)}, a)
    message = sent(app, a)[-1][0]
    assert message["dispatch"] == "object_infos" and message["Type"] == "Beam"


def test_moving_it_with_the_gizmo_moves_a_copy_for_that_session_only():
    app, box, a, b = startup()
    move = {"dispatch": "object_transform", "guid": str(box.guid), "matrix": Translation.from_vector([5, 0, 0]).matrix}
    send(app, move, a)
    copy = a.state.geometry[str(box.guid)]
    assert copy is not box and copy.guid == box.guid
    assert copy.frame.point.x == 5
    assert box.frame.point.x == 0  # everyone else's isn't moved
    assert str(box.guid) not in b.state.geometry
    # The update goes to a's tabs, kept for them: replayed after everyone's original.
    assert any(obj_id == box.guid and persist for _, obj_id, persist in sent(app, a))
    assert sent(app, b) == []
    # Moving it again moves the same copy.
    send(app, move, a)
    assert a.state.geometry[str(box.guid)] is copy and copy.frame.point.x == 10


def test_two_sessions_get_two_copies():
    app, box, a, b = startup()
    move = {"dispatch": "object_transform", "guid": str(box.guid), "matrix": Translation.from_vector([1, 0, 0]).matrix}
    send(app, move, a)
    send(app, move, b)
    assert a.state.geometry[str(box.guid)] is not b.state.geometry[str(box.guid)]
    assert box.frame.point.x == 0


def test_changing_its_color_changes_a_copy_of_its_material():
    app, box, a, b = startup()
    shared = app.sessions.default.state.materials[str(box.guid)]
    send(app, {"dispatch": "material_edit", "guid": str(box.guid), "color": "#0000ff"}, a)
    own = a.state.materials[str(box.guid)]
    assert own is not shared
    assert own.color == Color.from_hex("#0000ff")
    assert shared.color == Color.red()


def test_an_object_action_gets_the_sessions_own_copy():
    app = App()
    seen = []
    menu = Button("Move", action=lambda obj, value: seen.append(obj))
    box = Box(1)
    app.add_geometry(box, actions=[menu])
    a = app.sessions.create()
    send(app, {"dispatch": "object_action_callback", "action_guid": str(menu.guid), "object_guid": str(box.guid)}, a)
    assert seen == [a.state.geometry[str(box.guid)]] and seen[0] is not box


def test_a_plugin_moving_it_from_a_session_moves_the_sessions_copy():
    app, box, a, b = startup()
    with a.active():
        app.main.transform_geometry(box, Translation.from_vector([0, 3, 0]))
    assert a.state.geometry[str(box.guid)].frame.point.y == 3
    assert box.frame.point.y == 0


def test_removing_it_removes_it_for_that_session_only_and_for_good():
    app, box, a, b = startup()
    with a.active():
        app.main.remove_object(box)
        assert app.find_geometry(box.guid) is None
    with b.active():
        assert app.find_geometry(box.guid) is box
    assert app.sessions.default.state.geometry[str(box.guid)] is box
    # The removal is kept under the object's key, so it is replayed after everyone's "add".
    message, obj_id, persist = sent(app, a)[-1]
    assert message["type"] == "remove" and obj_id == box.guid and persist
    # Adding it back (an undo) is the session's own again.
    with a.active():
        app.main.add_geometry(box)
        assert app.find_geometry(box.guid) is box


def test_without_sessions_it_is_moved_in_place_as_before():
    app = App()
    box = Box(1)
    app.add_geometry(box)
    send(app, {"dispatch": "object_transform", "guid": str(box.guid), "matrix": Translation.from_vector([2, 0, 0]).matrix}, None)
    assert box.frame.point.x == 2


# ---- PLUGIN DATA PER SESSION ------------------------------------------------------------------


class Views(Plugin):
    name = "views"

    def __init__(self):
        super().__init__()
        self.made = 0
        self.started, self.ended = [], []

    def session_state(self):
        self.made += 1
        return {"views": []}

    def new_session(self, session):
        self.started.append(current_session() is session)

    def end_session(self, session):
        self.ended.append(self.state["views"])

    @action("save")
    def save(self, data, workspace):
        self.state["views"].append(data)


def views_app():
    app = App()
    views = Views()
    app.plugins = [views]
    return app, views


def test_each_session_has_its_own_plugin_data():
    app, views = views_app()
    a, b = app.sessions.create(), app.sessions.create()
    message = {"dispatch": "plugin", "plugin": "views", "action": "save"}
    send(app, {**message, "data": "top"}, a)
    send(app, {**message, "data": "front"}, a)
    send(app, {**message, "data": "side"}, b)
    assert a.state.plugins["views"] == {"views": ["top", "front"]}
    assert b.state.plugins["views"] == {"views": ["side"]}
    assert views.state == {"views": []}  # outside of a session: the default one's
    assert views.made == 3


def test_plugin_data_can_be_replaced_and_reached_from_a_bound_thread():
    app, views = views_app()
    a = app.sessions.create()
    with a.active():
        views.state = {"views": ["mine"]}
        seen = []
        thread = threading.Thread(target=a.bind(lambda: seen.append(views.state)))
        thread.start()
        thread.join()
    assert seen == [{"views": ["mine"]}]


def test_plugins_hear_sessions_start_and_end():
    app, views = views_app()
    a = app.sessions.create()
    send(app, {"dispatch": "plugin", "plugin": "views", "action": "save", "data": "top"}, a)
    app.sessions.end(a)
    assert views.started == [True]
    assert views.ended == [["top"]]


def test_a_failing_session_hook_doesnt_stop_the_session():
    app, views = views_app()

    def broken(session):
        raise RuntimeError("broken")

    views.new_session = broken
    assert app.sessions.create() is not None


def test_hiding_a_button_inside_a_session_hides_it_there_only():
    app, views = views_app()
    views.hide("export")  # at startup: for everyone
    a, b = app.sessions.create(), app.sessions.create()
    with a.active():
        views.hide("import")
        assert views.hidden == {"export", "import"}
    with b.active():
        assert views.hidden == {"export"}
    assert views.hidden == {"export"}
    message, obj_id, persist = sent(app, a)[-1]
    assert message["hidden"] == ["export", "import"] and obj_id == "plugin/views/buttons" and persist


class Locks(Plugin):
    name = "locks"

    def session_state(self):
        return set()

    def inherit_state(self, everyone):
        return set(everyone)


def test_a_session_can_start_from_everyones_plugin_data():
    locks = Locks()
    locks.state.add("ground")  # before it is added to an App: becomes everyone's
    app = App()
    app.plugins = [locks]
    assert locks.state == {"ground"} and locks.everyone == {"ground"}
    a = app.sessions.create()
    with a.active():
        assert locks.state == {"ground"}
        locks.state.add("wall")
        assert locks.everyone == {"ground"}
    assert locks.state == {"ground"}
    assert a.state.plugins["locks"] == {"ground", "wall"}
