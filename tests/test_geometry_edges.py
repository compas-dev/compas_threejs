import unittest

from compas.geometry import Box

from compas_threejs.viewer.inbox import Inbox
from compas_threejs.viewer.workspace import Workspace


class _Outbox:
    def __init__(self):
        self.sent = {}  # persisted key -> message
        self.forgotten = []

    def send_dict(self, message, *, workspace_id="main", remove_key=None, obj_id=None):
        self.sent[obj_id] = message

    def send_bytes(self, data, obj_id, *, workspace_id="main"):
        pass

    def forget(self, key, *, workspace_id="main"):
        self.forgotten.append(key)
        self.sent.pop(key, None)


class _App:
    def __init__(self):
        self.outbox = _Outbox()
        self.inbox = Inbox(self)


class GeometryEdgesTests(unittest.TestCase):
    def setUp(self):
        self.app = _App()
        self.workspace = Workspace(self.app)

    def test_edges_are_one_persisted_state_per_object(self):
        box = Box(1)
        self.workspace.show_geometry_edges(box)
        key = ("edges", box.guid)
        self.assertEqual(
            self.app.outbox.sent[key],
            {"dispatch": "handle_geometry", "type": "set_edges", "guid": str(box.guid), "show": True},
        )
        self.workspace.show_geometry_edges(box, False)
        self.assertFalse(self.app.outbox.sent[key]["show"])
        self.assertEqual([k for k in self.app.outbox.sent if k[0] == "edges"], [key])

    def test_removing_an_object_forgets_its_edges(self):
        box = Box(1)
        self.workspace.show_geometry_edges(box)
        self.workspace.remove_object(box)
        self.assertIn(("edges", box.guid), self.app.outbox.forgotten)


if __name__ == "__main__":
    unittest.main()
