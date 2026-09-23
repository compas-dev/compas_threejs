import math
import unittest
import uuid

from compas.datastructures import Mesh
from compas.geometry import Arc
from compas.geometry import Box
from compas.geometry import Circle
from compas.geometry import Line
from compas.geometry import Point
from compas.geometry import Polygon
from compas.geometry import Polyline

from compas_threejs.viewer.drawing import arc_through_points
from compas_threejs.viewer.drawing import extrude
from compas_threejs.viewer.inbox import Inbox


class _Workspace:
    def __init__(self, inbox):
        self.inbox = inbox
        self.added = []
        self.removed = []

    def add_geometry(self, geometry, material=None):
        self.added.append(geometry)
        self.inbox.geometry_registry[str(geometry.guid)] = geometry

    def remove_object(self, geometry):
        self.removed.append(geometry)
        self.inbox.forget_geometry(str(geometry.guid))


class _App:
    def __init__(self):
        self.inbox = Inbox(self)
        self.workspace = _Workspace(self.inbox)

    def get_workspace(self, workspace_id):
        return self.workspace


class CreateGeometryTests(unittest.TestCase):
    def setUp(self):
        self.app = _App()
        self.inbox = self.app.inbox

    def send(self, dispatch, **message):
        self.inbox._handlers[dispatch]({"dispatch": dispatch, **message}, None, "main")
        return self.app.workspace.added

    def create(self, **message):
        return self.send("create_geometry", **message)

    def test_line_from_two_points(self):
        [line] = self.create(type="line", points=[[0, 0, 0], [1, 2, 3]])
        self.assertIsInstance(line, Line)
        self.assertEqual(list(line.end), [1.0, 2.0, 3.0])

    def test_polyline_keeps_its_points(self):
        [polyline] = self.create(type="polyline", points=[[0, 0, 0], [1, 0, 0], [1, 1, 0]])
        self.assertIsInstance(polyline, Polyline)
        self.assertEqual(len(polyline.points), 3)

    def test_polygon_is_a_real_polygon(self):
        [polygon] = self.create(type="polygon", points=[[0, 0, 0], [1, 0, 0], [1, 1, 0]])
        self.assertIsInstance(polygon, Polygon)
        self.assertEqual(len(polygon.points), 3)

    def test_circle_from_center_and_radius(self):
        [circle] = self.create(type="circle", point=[1, 2, 0], params={"radius": 1.5})
        self.assertIsInstance(circle, Circle)
        self.assertEqual(circle.radius, 1.5)
        self.assertEqual(list(circle.frame.point), [1.0, 2.0, 0.0])

    def test_arc_through_three_points(self):
        [arc] = self.create(type="arc", points=[[1, 0, 0], [-1, 0, 0], [0, 1, 0]])
        self.assertIsInstance(arc, Arc)
        self.assertAlmostEqual(arc.radius, 1.0)
        self.assertEqual([round(v, 9) for v in arc.point_at(0)], [1.0, 0.0, 0.0])
        self.assertEqual([round(v, 9) for v in arc.point_at(1)], [-1.0, 0.0, 0.0])
        self.assertEqual([round(v, 9) for v in arc.point_at(0.5)], [0.0, 1.0, 0.0])
        # Never a start angle of 0, which compas-pb-ts 2.0 rejects.
        self.assertGreater(arc.start_angle, 0)

    def test_arc_longer_than_half_a_circle(self):
        arc = arc_through_points([1, 0, 0], [0, 1, 0], [0, -1, 0])
        self.assertAlmostEqual(arc.end_angle - arc.start_angle, 1.5 * math.pi)
        self.assertEqual([round(v, 6) for v in arc.point_at(0.5)], [-0.707107, -0.707107, 0.0])

    def test_single_location_types_still_work(self):
        [box] = self.create(type="box", point=[1, 2, 3], params={"xsize": 2, "ysize": 3, "zsize": 4})
        self.assertIsInstance(box, Box)
        self.assertEqual(list(box.frame.point), [1.0, 2.0, 3.0])
        [_, point] = self.create(type="point", point=[4, 5, 6])
        self.assertIsInstance(point, Point)

    def test_invalid_input_is_ignored(self):
        self.create(type="line", points=[[0, 0, 0]])
        self.create(type="line", points=[[0, 0, 0], [1, 1, 1], [2, 2, 2]])
        self.create(type="polygon", points=[[0, 0, 0], [1, 0, 0]])
        self.create(type="polyline", points=[[0, 0], [1, 1]])
        self.create(type="polyline", points=[["a", 0, 0], [1, 1, 1]])
        self.create(type="polyline")
        self.create(type="arc", points=[[0, 0, 0], [1, 1, 0], [2, 2, 0]])
        self.create(type="sphere", point=[0, 0, 0], params={"radius": 0})
        self.create(type="teapot", point=[0, 0, 0])
        self.assertEqual(self.app.workspace.added, [])

    def test_uses_the_frontend_guid_once(self):
        guid = str(uuid.uuid4())
        [point] = self.create(type="point", point=[0, 0, 0], guid=guid)
        self.assertEqual(str(point.guid), guid)
        self.create(type="point", point=[1, 1, 1], guid=guid)
        self.create(type="point", point=[1, 1, 1], guid="not-a-uuid")
        self.assertEqual(len(self.app.workspace.added), 1)

    def test_delete_removes_the_object(self):
        guid = str(uuid.uuid4())
        [point] = self.create(type="point", point=[0, 0, 0], guid=guid)
        self.send("delete_geometry", guid=guid)
        self.assertEqual(self.app.workspace.removed, [point])
        self.assertNotIn(guid, self.inbox.geometry_registry)
        self.send("delete_geometry", guid=guid)
        self.assertEqual(len(self.app.workspace.removed), 1)

    def test_extrude_adds_a_prism_and_keeps_the_polygon(self):
        guid = str(uuid.uuid4())
        new_guid = str(uuid.uuid4())
        points = [[0, 0, 0], [0, 2, 0], [1, 2, 0], [1, 1, 0], [2, 1, 0], [2, 0, 0]]
        [polygon] = self.create(type="polygon", points=points, guid=guid)

        self.send("extrude_geometry", guid=guid, height=2, new_guid=new_guid)

        [kept, prism] = self.app.workspace.added
        self.assertIs(kept, polygon)
        self.assertIsInstance(prism, Mesh)
        self.assertEqual(str(prism.guid), new_guid)
        self.assertEqual(prism.number_of_faces(), 8)
        self.assertAlmostEqual(prism.volume(), 6.0)

    def test_extrude_ignores_what_is_not_a_polygon(self):
        guid = str(uuid.uuid4())
        self.create(type="line", points=[[0, 0, 0], [1, 0, 0]], guid=guid)
        self.send("extrude_geometry", guid=guid, height=1)
        self.send("extrude_geometry", guid=str(uuid.uuid4()), height=1)
        self.assertEqual(len(self.app.workspace.added), 1)

    def test_extrude_downward_still_faces_outward(self):
        prism = extrude(Polygon([[0, 0, 0], [1, 0, 0], [1, 1, 0], [0, 1, 0]]), -3)
        self.assertAlmostEqual(prism.volume(), 3.0)

    def test_callbacks_hear_about_created_and_deleted_objects(self):
        created, deleted = [], []
        self.inbox.create_callbacks.append(created.append)
        self.inbox.delete_callbacks.append(deleted.append)

        def broken(geometry):
            raise RuntimeError("a script bug")

        self.inbox.create_callbacks.append(broken)
        guid = str(uuid.uuid4())
        [point] = self.create(type="point", point=[0, 0, 0], guid=guid)
        self.send("delete_geometry", guid=guid)

        self.assertEqual(created, [point])
        self.assertEqual(deleted, [point])


class AppHookTests(unittest.TestCase):
    def test_on_create_and_on_delete_register_decorator_style(self):
        from compas_threejs.viewer import App

        app = App(websocket_port=9555)

        @app.on_create
        def created(geometry):
            pass

        self.assertIs(app.inbox.create_callbacks[-1], created)
        self.assertIs(app.on_delete(print), print)
        self.assertIs(app.inbox.delete_callbacks[-1], print)


if __name__ == "__main__":
    unittest.main()
