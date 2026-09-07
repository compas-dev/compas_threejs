import json
import unittest

import compas_pb
from compas.geometry import Box
from compas.geometry import Frame
from compas.geometry import Point
from compas.geometry import Translation
from compas.geometry import Vector

from compas_threejs.materials import PhysicalMaterial
from compas_threejs.viewer.outbox import Outbox
from compas_threejs.viewer.workspace import Workspace


class OfflineServer:
    def get_loop(self):
        return None


class CompasPbCompatibilityTest(unittest.TestCase):
    def test_physical_material_uses_json_safe_attenuation_distance(self):
        default_payload = PhysicalMaterial().as_dict()
        explicit_payload = PhysicalMaterial(attenuation_distance=12.5).as_dict()

        self.assertNotIn("attenuation_distance", default_payload)
        self.assertEqual(explicit_payload["attenuation_distance"], 12.5)
        json.dumps(default_payload, allow_nan=False)

        with self.assertRaises(ValueError):
            PhysicalMaterial(attenuation_distance=float("inf"))

    def test_geometry_roundtrip(self):
        box = Box(
            1,
            2,
            3,
            Frame(Point(4, 5, 6), Vector(1, 0, 0), Vector(0, 1, 0)),
        )

        decoded = compas_pb.pb_load_bts(compas_pb.pb_dump_bts(box))

        self.assertIsInstance(decoded, Box)
        self.assertEqual((decoded.xsize, decoded.ysize, decoded.zsize), (1.0, 2.0, 3.0))
        self.assertEqual(tuple(decoded.frame.point), (4.0, 5.0, 6.0))

    def test_outbox_command_roundtrip(self):
        outbox = Outbox(OfflineServer())
        command = {"dispatch": "spinner", "visible": True, "message": "Loading"}

        outbox.send_dict(command)

        self.assertEqual(len(outbox._queue), 1)
        binary_data, object_id, persist, workspace_id, remove_key, broadcast = outbox._queue[0]
        self.assertEqual(compas_pb.pb_load_bts(binary_data), command)
        self.assertEqual(object_id, "")
        self.assertFalse(persist)
        self.assertEqual(workspace_id, "main")
        self.assertIsNone(remove_key)
        self.assertTrue(broadcast)

    def test_transform_geometry_sends_delta_and_refreshes_snapshot(self):
        class FakeApp:
            pass

        fake_app = FakeApp()
        fake_app.outbox = Outbox(OfflineServer())
        workspace = Workspace(fake_app)

        point = Point(1, 2, 3)
        translation = Translation.from_vector([10, 0, 0])

        workspace.transform_geometry(point, translation)

        # The geometry is mutated in place, exactly like Inbox._handle_object_transform
        # does for the opposite direction.
        self.assertEqual(tuple(point), (11.0, 2.0, 3.0))

        self.assertEqual(len(fake_app.outbox._queue), 2)

        delta_binary, delta_obj_id, delta_persist, _, _, delta_broadcast = fake_app.outbox._queue[0]
        delta_message = compas_pb.pb_load_bts(delta_binary)
        self.assertEqual(delta_message["dispatch"], "handle_geometry")
        self.assertEqual(delta_message["type"], "apply_transform")
        self.assertEqual(delta_message["guid"], str(point.guid))
        self.assertEqual(delta_message["matrix"], translation.matrix)
        self.assertTrue(delta_persist)
        self.assertTrue(delta_broadcast)

        snapshot_binary, snapshot_obj_id, snapshot_persist, _, _, snapshot_broadcast = fake_app.outbox._queue[1]
        self.assertEqual(snapshot_obj_id, point.guid)
        self.assertTrue(snapshot_persist)
        self.assertFalse(snapshot_broadcast)
        decoded_point = compas_pb.pb_load_bts(snapshot_binary)
        self.assertEqual(tuple(decoded_point), (11.0, 2.0, 3.0))


if __name__ == "__main__":
    unittest.main()
