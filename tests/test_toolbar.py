import json
import unittest

import compas_pb

from compas_threejs.viewer.app import App
from compas_threejs.viewer.toolbar import Toolbar


def _send(app, dispatch, **fields):
    """Simulates an inbound frontend message, dispatched through the real
    `Inbox.handle` routing - not by calling private `_handle_*` methods directly -
    exactly like `runtime.handleUiAction(name, value)` sends from a frontend-owned
    control (e.g. a custom or npm-installed toolbar button).
    """
    message = {"dispatch": dispatch, **fields}
    app.inbox.handle(json.dumps(message).encode("utf-8"), app.outbox, "main")


def _last_toolbar_message(app) -> dict:
    """Decodes the most recently queued "toolbar_control" dispatch message.

    `App()` never starts a real server, so `Outbox.send_bytes` queues (rather than
    broadcasts) every call - see `Outbox.flush`/`Outbox._queue` - which is exactly what
    lets these tests inspect exactly what would have been sent, with no websocket needed.
    """
    for binary_data, obj_id, persist, workspace_id, remove_key, broadcast in reversed(app.outbox._queue):
        message = compas_pb.pb_load_bts(binary_data)
        if isinstance(message, dict) and message.get("dispatch") == "toolbar_control":
            return {
                "message": message,
                "obj_id": obj_id,
                "persist": persist,
                "workspace_id": workspace_id,
                "remove_key": remove_key,
            }
    raise AssertionError("No 'toolbar_control' dispatch message was queued.")


class ToolbarWiringTest(unittest.TestCase):
    """`App.toolbar` delegates to the main workspace's `Toolbar`, same as `background_color`,
    `world_axis`, etc."""

    def test_app_toolbar_is_the_main_workspaces_toolbar(self):
        app = App()
        self.assertIs(app.toolbar, app.main.toolbar)
        self.assertIsInstance(app.toolbar, Toolbar)


class ToolbarControlTest(unittest.TestCase):
    """`Toolbar` only ever sends id-keyed visible/enabled overrides - never a label, icon,
    kind, or anything else describing what a button is or does, since that's the
    frontend's job."""

    def test_set_visible_sends_toolbar_control_with_stable_persisted_obj_id(self):
        app = App()
        app.toolbar.set_visible("add_objects", False)

        entry = _last_toolbar_message(app)
        self.assertEqual(entry["obj_id"], "toolbar")
        self.assertTrue(entry["persist"])
        self.assertEqual(entry["workspace_id"], "main")
        self.assertIsNone(entry["remove_key"])

        message = entry["message"]
        self.assertEqual(
            message,
            {
                "dispatch": "toolbar_control",
                "obj_id": "toolbar",
                "overrides": {"add_objects": {"visible": False}},
            },
        )

    def test_set_enabled_sends_toolbar_control(self):
        app = App()
        app.toolbar.set_enabled("move", False)

        message = _last_toolbar_message(app)["message"]
        self.assertEqual(message["overrides"], {"move": {"enabled": False}})

    def test_overrides_for_the_same_id_merge_across_calls(self):
        app = App()
        app.toolbar.set_visible("add_objects", False)
        app.toolbar.set_enabled("add_objects", False)

        message = _last_toolbar_message(app)["message"]
        self.assertEqual(
            message["overrides"],
            {"add_objects": {"visible": False, "enabled": False}},
        )

    def test_overrides_for_different_ids_accumulate(self):
        app = App()
        app.toolbar.set_visible("add_objects", False)
        app.toolbar.set_enabled("move", False)

        message = _last_toolbar_message(app)["message"]
        self.assertEqual(
            message["overrides"],
            {"add_objects": {"visible": False}, "move": {"enabled": False}},
        )

    def test_every_mutation_resends_the_full_current_override_map(self):
        app = App()
        app.toolbar.set_visible("add_objects", False)
        app.toolbar.set_enabled("move", False)

        # The second call's message carries BOTH overrides, not just its own - a
        # reconnecting client always replays the full current state.
        message = _last_toolbar_message(app)["message"]
        self.assertEqual(len(message["overrides"]), 2)

    def test_unknown_id_is_accepted_and_sent_as_is(self):
        # The backend can't validate ids against the frontend's button set - it's the
        # frontend's job to ignore an id it doesn't recognize.
        app = App()
        app.toolbar.set_visible("does_not_exist", False)

        message = _last_toolbar_message(app)["message"]
        self.assertEqual(message["overrides"], {"does_not_exist": {"visible": False}})


class CustomToolbarButtonCallbackTest(unittest.TestCase):
    """A custom or npm-installed toolbar button is a frontend-owned `.vue` - it isn't built
    via `Toolbar`, so it wires up its own backend callback with `App.register_action` (plain
    click) or `App.register_toggle_action`/`register_select_action` (value-carrying control),
    matching whatever it calls via `runtime.handleUiAction(name, value)` on the frontend."""

    def test_register_action_round_trips_through_other_action_dispatch(self):
        app = App()
        calls = []
        app.register_action("custom_export", lambda value=None: calls.append(value))

        _send(app, "other_action", action="custom_export")

        self.assertEqual(calls, [None])

    def test_register_toggle_action_round_trips_through_ui_callback_dispatch(self):
        app = App()
        calls = []
        app.register_toggle_action("custom_wireframe", lambda value: calls.append(value))

        # Exactly the shape `runtime.handleUiAction("custom_wireframe", False)` sends.
        _send(app, "ui_callback", action="custom_wireframe", value=False)

        self.assertEqual(calls, [False])

    def test_register_select_action_round_trips_through_ui_callback_dispatch(self):
        app = App()
        calls = []
        app.register_select_action("custom_lod", lambda value: calls.append(value))

        _send(app, "ui_callback", action="custom_lod", value="Components")

        self.assertEqual(calls, ["Components"])


if __name__ == "__main__":
    unittest.main()
