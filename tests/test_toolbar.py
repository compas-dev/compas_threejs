import json
import unittest

import compas_pb

from compas_threejs.viewer.app import App
from compas_threejs.viewer.toolbar import Toolbar


def _send(app, dispatch, **fields):
    """Simulates an inbound frontend message, dispatched through the real
    `Inbox.handle` routing - not by calling private `_handle_*` methods directly -
    exactly like `tests/test_object_lifecycle_dispatch.py` does for geometry messages.
    """
    message = {"dispatch": dispatch, **fields}
    app.inbox.handle(json.dumps(message).encode("utf-8"), app.outbox, "main")


def _last_toolbar_message(app) -> dict:
    """Decodes the most recently queued "toolbar" dispatch message.

    `App()` never starts a real server, so `Outbox.send_bytes` queues (rather than
    broadcasts) every call - see `Outbox.flush`/`Outbox._queue` - which is exactly what
    lets these tests inspect exactly what would have been sent, with no websocket needed.
    """
    for binary_data, obj_id, persist, workspace_id, remove_key, broadcast in reversed(app.outbox._queue):
        message = compas_pb.pb_load_bts(binary_data)
        if isinstance(message, dict) and message.get("dispatch") == "toolbar":
            return {
                "message": message,
                "obj_id": obj_id,
                "persist": persist,
                "workspace_id": workspace_id,
                "remove_key": remove_key,
            }
    raise AssertionError("No 'toolbar' dispatch message was queued.")


class ToolbarContractShapeTest(unittest.TestCase):
    """Covers that the serialized `toolbar` dict matches the wire contract exactly -
    field names, nesting, and which fields each `kind` carries."""

    def test_add_button_serializes_contract_shape(self):
        app = App()
        toolbar = Toolbar(app.main)

        toolbar.add_button(
            "export_model",
            label="Export Model",
            icon="download",
            tooltip="Export the current model",
            action=lambda value=None: None,
            group="model",
            group_order=10,
            order=10,
        )

        entry = _last_toolbar_message(app)
        self.assertEqual(entry["obj_id"], "toolbar")
        self.assertTrue(entry["persist"])
        self.assertEqual(entry["workspace_id"], "main")
        self.assertIsNone(entry["remove_key"])

        message = entry["message"]
        self.assertEqual(message["dispatch"], "toolbar")
        self.assertEqual(message["obj_id"], "toolbar")
        self.assertEqual(
            message["toolbar"],
            {
                "groups": [
                    {
                        "id": "model",
                        "order": 10,
                        "items": [
                            {
                                "id": "export_model",
                                "kind": "button",
                                "label": "Export Model",
                                "icon": "download",
                                "tooltip": "Export the current model",
                                "enabled": True,
                                "visible": True,
                                "order": 10,
                            }
                        ],
                    }
                ]
            },
        )

    def test_add_checkbox_serializes_contract_shape(self):
        app = App()
        toolbar = Toolbar(app.main)

        toolbar.add_checkbox(
            "show_fasteners",
            label="Show Fasteners",
            action=lambda value: None,
            color="#a1b2c3",
            default_value=True,
            group="model",
            order=20,
        )

        item = _last_toolbar_message(app)["message"]["toolbar"]["groups"][0]["items"][0]
        self.assertEqual(
            item,
            {
                "id": "show_fasteners",
                "kind": "checkbox",
                "label": "Show Fasteners",
                "icon": None,
                "tooltip": None,
                "enabled": True,
                "visible": True,
                "order": 20,
                "color": "#a1b2c3",
                "default_value": True,
            },
        )

    def test_add_select_serializes_contract_shape(self):
        app = App()
        toolbar = Toolbar(app.main)

        toolbar.add_select(
            "lod_filter",
            label="Level of Detail",
            options=["All", "Components", "Elements", "Parts"],
            default_value="Components",
            action=lambda value: None,
            group="model",
            order=30,
        )

        item = _last_toolbar_message(app)["message"]["toolbar"]["groups"][0]["items"][0]
        self.assertEqual(
            item,
            {
                "id": "lod_filter",
                "kind": "select",
                "label": "Level of Detail",
                "icon": None,
                "tooltip": None,
                "enabled": True,
                "visible": True,
                "order": 30,
                "options": ["All", "Components", "Elements", "Parts"],
                "default_value": "Components",
            },
        )

    def test_add_separator_carries_no_extra_fields(self):
        app = App()
        toolbar = Toolbar(app.main)

        toolbar.add_separator("sep_1", group="model", order=15)

        item = _last_toolbar_message(app)["message"]["toolbar"]["groups"][0]["items"][0]
        self.assertEqual(
            item,
            {
                "id": "sep_1",
                "kind": "separator",
                "label": None,
                "icon": None,
                "tooltip": None,
                "enabled": True,
                "visible": True,
                "order": 15,
            },
        )
        self.assertNotIn("color", item)
        self.assertNotIn("default_value", item)
        self.assertNotIn("options", item)

    def test_full_example_from_wire_contract(self):
        """Reproduces the exact multi-item example from the wire contract."""
        app = App()
        toolbar = Toolbar(app.main)

        toolbar.add_button(
            "export_model",
            label="Export Model",
            icon="download",
            tooltip="Export the current model",
            action=lambda value=None: None,
            group="model",
            group_order=10,
            order=10,
        )
        toolbar.add_checkbox(
            "show_fasteners",
            label="Show Fasteners",
            action=lambda value: None,
            color="#a1b2c3",
            default_value=True,
            group="model",
            order=20,
        )
        toolbar.add_select(
            "lod_filter",
            label="Level of Detail",
            options=["All", "Components", "Elements", "Parts"],
            default_value="Components",
            action=lambda value: None,
            group="model",
            order=30,
        )

        expected = {
            "groups": [
                {
                    "id": "model",
                    "order": 10,
                    "items": [
                        {
                            "id": "export_model",
                            "kind": "button",
                            "label": "Export Model",
                            "icon": "download",
                            "tooltip": "Export the current model",
                            "enabled": True,
                            "visible": True,
                            "order": 10,
                        },
                        {
                            "id": "show_fasteners",
                            "kind": "checkbox",
                            "label": "Show Fasteners",
                            "icon": None,
                            "tooltip": None,
                            "color": "#a1b2c3",
                            "default_value": True,
                            "enabled": True,
                            "visible": True,
                            "order": 20,
                        },
                        {
                            "id": "lod_filter",
                            "kind": "select",
                            "label": "Level of Detail",
                            "icon": None,
                            "tooltip": None,
                            "options": ["All", "Components", "Elements", "Parts"],
                            "default_value": "Components",
                            "enabled": True,
                            "visible": True,
                            "order": 30,
                        },
                    ],
                }
            ]
        }
        self.assertEqual(toolbar.as_dict(), expected)
        self.assertEqual(_last_toolbar_message(app)["message"]["toolbar"], expected)


class ToolbarMutationTest(unittest.TestCase):
    """Covers add/remove/enable/disable/visibility/value-update, and that every mutation
    re-sends the full descriptor with `persist=True` and the stable `obj_id="toolbar"`."""

    def _toolbar_with_all_kinds(self, app):
        toolbar = Toolbar(app.main)
        toolbar.add_button("btn", label="Button", action=lambda value=None: None)
        toolbar.add_checkbox("chk", label="Checkbox", action=lambda value: None, default_value=False)
        toolbar.add_select("sel", label="Select", options=["a", "b"], default_value="a", action=lambda value: None)
        return toolbar

    def test_every_mutation_resends_full_descriptor_with_stable_persisted_obj_id(self):
        app = App()
        toolbar = self._toolbar_with_all_kinds(app)
        queue_len_after_adds = len(app.outbox._queue)
        self.assertEqual(queue_len_after_adds, 3)  # one send per add_* call

        toolbar.set_enabled("btn", False)
        toolbar.set_visible("chk", False)
        toolbar.set_value("sel", "b")
        toolbar.remove("btn")

        self.assertEqual(len(app.outbox._queue), queue_len_after_adds + 4)
        for binary_data, obj_id, persist, workspace_id, remove_key, broadcast in app.outbox._queue:
            message = compas_pb.pb_load_bts(binary_data)
            if message.get("dispatch") == "toolbar":
                self.assertEqual(obj_id, "toolbar")
                self.assertTrue(persist)
                self.assertIsNone(remove_key)

        # And each resend carries the FULL toolbar, not a diff - the still-present
        # "chk"/"sel" items are present even in the message sent by mutating "btn".
        final = _last_toolbar_message(app)["message"]["toolbar"]
        ids = {item["id"] for group in final["groups"] for item in group["items"]}
        self.assertEqual(ids, {"chk", "sel"})

    def test_remove_drops_item_and_its_callback(self):
        app = App()
        toolbar = self._toolbar_with_all_kinds(app)

        self.assertIn("btn", app.inbox.action_registry)
        toolbar.remove("btn")
        self.assertNotIn("btn", app.inbox.action_registry)

        final = _last_toolbar_message(app)["message"]["toolbar"]
        ids = {item["id"] for group in final["groups"] for item in group["items"]}
        self.assertNotIn("btn", ids)

    def test_remove_unknown_id_is_a_noop(self):
        app = App()
        toolbar = self._toolbar_with_all_kinds(app)
        queue_len_before = len(app.outbox._queue)

        toolbar.remove("does_not_exist")

        self.assertEqual(len(app.outbox._queue), queue_len_before)

    def test_set_enabled_toggles_flag_without_touching_callback(self):
        app = App()
        toolbar = self._toolbar_with_all_kinds(app)

        toolbar.set_enabled("chk", False)

        final = _last_toolbar_message(app)["message"]["toolbar"]
        item = next(i for group in final["groups"] for i in group["items"] if i["id"] == "chk")
        self.assertFalse(item["enabled"])
        # Callback is untouched - still registered and still callable.
        self.assertIn("chk", app.inbox.buttons)

    def test_set_visible_toggles_flag(self):
        app = App()
        toolbar = self._toolbar_with_all_kinds(app)

        toolbar.set_visible("sel", False)

        final = _last_toolbar_message(app)["message"]["toolbar"]
        item = next(i for group in final["groups"] for i in group["items"] if i["id"] == "sel")
        self.assertFalse(item["visible"])

    def test_set_value_updates_checkbox_default_value(self):
        app = App()
        toolbar = self._toolbar_with_all_kinds(app)

        toolbar.set_value("chk", True)

        final = _last_toolbar_message(app)["message"]["toolbar"]
        item = next(i for group in final["groups"] for i in group["items"] if i["id"] == "chk")
        self.assertTrue(item["default_value"])

    def test_set_value_updates_select_default_value(self):
        app = App()
        toolbar = self._toolbar_with_all_kinds(app)

        toolbar.set_value("sel", "b")

        final = _last_toolbar_message(app)["message"]["toolbar"]
        item = next(i for group in final["groups"] for i in group["items"] if i["id"] == "sel")
        self.assertEqual(item["default_value"], "b")

    def test_set_value_raises_for_button(self):
        app = App()
        toolbar = self._toolbar_with_all_kinds(app)

        with self.assertRaises(ValueError):
            toolbar.set_value("btn", "anything")

    def test_set_enabled_unknown_id_raises(self):
        app = App()
        toolbar = self._toolbar_with_all_kinds(app)

        with self.assertRaises(KeyError):
            toolbar.set_enabled("does_not_exist", False)

    def test_re_adding_same_id_replaces_item_in_place(self):
        app = App()
        toolbar = self._toolbar_with_all_kinds(app)

        toolbar.add_checkbox("chk", label="Renamed", action=lambda value: None, default_value=True)

        final = _last_toolbar_message(app)["message"]["toolbar"]
        items = [i for group in final["groups"] for i in group["items"]]
        matching = [i for i in items if i["id"] == "chk"]
        self.assertEqual(len(matching), 1)
        self.assertEqual(matching[0]["label"], "Renamed")
        self.assertTrue(matching[0]["default_value"])

    def test_groups_and_items_are_sorted_by_order(self):
        app = App()
        toolbar = Toolbar(app.main)

        toolbar.add_button("z", label="Z", action=lambda value=None: None, group="b", group_order=20, order=5)
        toolbar.add_button("a", label="A", action=lambda value=None: None, group="a", group_order=10, order=2)
        toolbar.add_button("y", label="Y", action=lambda value=None: None, group="a", group_order=10, order=1)

        result = toolbar.as_dict()
        self.assertEqual([g["id"] for g in result["groups"]], ["a", "b"])
        self.assertEqual([i["id"] for i in result["groups"][0]["items"]], ["y", "a"])


class ToolbarCallbackRoundTripTest(unittest.TestCase):
    """Full round trip: a simulated inbound frontend message (through `Inbox.handle`,
    exactly as the real frontend would send it) reaches the callback `Toolbar.add_*`
    registered - not just outbound serialization."""

    def test_button_click_round_trips_through_other_action_dispatch(self):
        app = App()
        toolbar = Toolbar(app.main)
        calls = []
        toolbar.add_button("export_model", label="Export Model", action=lambda value=None: calls.append(value))

        # Exactly the shape `Inbox._handle_other_action`/`register_action` already expect -
        # the same dispatch a frontend `other_action` button (register_action-based) sends.
        _send(app, "other_action", action="export_model")

        self.assertEqual(calls, [None])

    def test_button_click_passes_through_json_data_as_value(self):
        app = App()
        toolbar = Toolbar(app.main)
        calls = []
        toolbar.add_button("export_model", label="Export Model", action=lambda value=None: calls.append(value))

        _send(app, "other_action", action="export_model", json_data={"format": "ifc"})

        self.assertEqual(calls, [{"format": "ifc"}])

    def test_checkbox_toggle_round_trips_through_ui_callback_dispatch(self):
        app = App()
        toolbar = Toolbar(app.main)
        calls = []
        toolbar.add_checkbox("show_fasteners", label="Show Fasteners", action=lambda value: calls.append(value), default_value=True)

        # Exactly the shape `Inbox._handle_ui_callback`/`Checkbox` already expect.
        _send(app, "ui_callback", action="show_fasteners", value=False)

        self.assertEqual(calls, [False])

    def test_select_change_round_trips_through_ui_callback_dispatch(self):
        app = App()
        toolbar = Toolbar(app.main)
        calls = []
        toolbar.add_select(
            "lod_filter",
            label="Level of Detail",
            options=["All", "Components"],
            default_value="All",
            action=lambda value: calls.append(value),
        )

        _send(app, "ui_callback", action="lod_filter", value="Components")

        self.assertEqual(calls, ["Components"])

    def test_removed_button_no_longer_dispatches(self):
        app = App()
        toolbar = Toolbar(app.main)
        calls = []
        toolbar.add_button("export_model", label="Export Model", action=lambda value=None: calls.append(value))
        toolbar.remove("export_model")

        _send(app, "other_action", action="export_model")

        self.assertEqual(calls, [])


if __name__ == "__main__":
    unittest.main()
