import math

from compas.colors import Color
from compas.data import Data
from compas.datastructures import Mesh
from compas.geometry import (
    Box,
    Capsule,
    Circle,
    Cone,
    Cylinder,
    Frame,
    Line,
    Plane,
    Point,
    Pointcloud,
    Polyline,
    Sphere,
    Torus,
    Vector,
)
from compas_timber.elements import Beam

from compas_threejs.lights import PointLight, RectLight, Skylight, SpotLight, Sunlight
from compas_threejs.materials import Material
from compas_threejs.viewer import Viewer

viewer = Viewer()

viewer.add_geometry(Vector(4, 0, 4))
viewer.add_geometry(Line(Point(10, 5, -10), Point(-10, 5, 10)))
viewer.add_geometry(
    Circle(5, Frame([0, 0, -5], [1, 0, 0], [0, 1, -1])),
    Material(color=Color.magenta()),
)

viewer.add_geometry(Frame([0, 0, 5], [1, 1, 0], [0, 1, -1]))
sphere = Sphere(3, Frame([-5, 2, 1]))
viewer.add_geometry(
    sphere,
    Material(color=Color.cyan(), metalness=0.9, roughness=0.2),
)
viewer.add_geometry(
    Cylinder(1, 4, Frame([5, -5, 0], [1, 1, 0], [0, -1, 1])),
    Material(color=Color.green()),
)
viewer.add_geometry(
    Cone(1, 4, Frame([-5, 5, -5], [1, 1, 0], [0, -1, -1])),
    Material(color=Color.blue()),
)
torus = Torus(2, 0.5, Frame([5, 5, 5], [1, 1, 0], [0, -1, -1]))
viewer.add_geometry(
    torus,
    Material(color=Color.red(), roughness=0.1, metalness=0.9),
)
viewer.add_geometry(
    Capsule(1, 4, Frame([-5, -5, -5], [1, 1, 0], [0, -1, -1])),
    Material(color=Color.yellow(), wireframe=True),
)
viewer.add_geometry(Plane(Point(5, 0, 5), Vector(3, 0.5, 1)))
viewer.add_geometry(Point(3, 3, 3))
viewer.add_geometry(Polyline([Point(0, 0, 0), Point(5, -5, 5), Point(10, 0, 10)]))

counter = [0]

pointlight = PointLight(color=Color.green(), intensity=2000, point=Point(0, 0, 10))
viewer.add_light(pointlight)

viewer.background_color = Color(0.5, 0.1, 0.1)


def update():
    torus.frame.rotate(0.005, Vector(0, 1, 0), torus.frame.point)
    torus.frame.rotate(-0.011, Vector(1, 0, 0), torus.frame.point)
    torus.frame.rotate(0.01, Vector(0, 0, 1), torus.frame.point)
    viewer.update_geometry(torus)

    sphere.frame.point.y += math.sin(counter[0] / 50) / 50
    counter[0] += 1
    viewer.update_geometry(sphere)

    pointlight.point.rotate(0.05, Vector(0, 1, 0), Point(0, 0, 0))
    viewer.add_light(pointlight)


# viewer.loop(update, 0.01)

# viewer.loop = update
viewer.start(show=False)

# viewer.loop(update, 0.01)
