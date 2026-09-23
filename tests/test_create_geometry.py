import unittest

from compas.geometry import Box
from compas.geometry import Line
from compas.geometry import Point
from compas.geometry import Polyline

from compas_threejs.viewer.inbox import Inbox


class _Workspace:
    def __init__(self):
        self.added = []

    def add_geometry(self, geometry, material=None):
        self.added.append(geometry)


class _App:
    def __init__(self):
        self.workspace = _Workspace()

    def get_workspace(self, workspace_id):
        return self.workspace


class CreateGeometryTests(unittest.TestCase):
    def setUp(self):
        self.app = _App()
        self.inbox = Inbox(self.app)

    def create(self, **message):
        self.inbox._handle_create_geometry({"dispatch": "create_geometry", **message}, None, "main")
        return self.app.workspace.added

    def test_line_from_two_points(self):
        [line] = self.create(type="line", points=[[0, 0, 0], [1, 2, 3]])
        self.assertIsInstance(line, Line)
        self.assertEqual(list(line.end), [1.0, 2.0, 3.0])

    def test_polyline_keeps_its_points(self):
        [polyline] = self.create(type="polyline", points=[[0, 0, 0], [1, 0, 0], [1, 1, 0]])
        self.assertIsInstance(polyline, Polyline)
        self.assertEqual(len(polyline.points), 3)

    def test_polygon_becomes_a_closed_polyline(self):
        [polygon] = self.create(type="polygon", points=[[0, 0, 0], [1, 0, 0], [1, 1, 0]])
        self.assertIsInstance(polygon, Polyline)
        self.assertEqual(len(polygon.points), 4)
        self.assertEqual(list(polygon.points[0]), list(polygon.points[-1]))

    def test_invalid_points_are_ignored(self):
        self.create(type="line", points=[[0, 0, 0]])
        self.create(type="line", points=[[0, 0, 0], [1, 1, 1], [2, 2, 2]])
        self.create(type="polygon", points=[[0, 0, 0], [1, 0, 0]])
        self.create(type="polyline", points=[[0, 0], [1, 1]])
        self.create(type="polyline", points=[["a", 0, 0], [1, 1, 1]])
        self.create(type="polyline")
        self.assertEqual(self.app.workspace.added, [])

    def test_single_location_types_still_work(self):
        [box] = self.create(type="box", point=[1, 2, 3], params={"xsize": 2, "ysize": 3, "zsize": 4})
        self.assertIsInstance(box, Box)
        self.assertEqual(list(box.frame.point), [1.0, 2.0, 3.0])
        [_, point] = self.create(type="point", point=[4, 5, 6])
        self.assertIsInstance(point, Point)


if __name__ == "__main__":
    unittest.main()
