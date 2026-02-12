from configparser import MAX_INTERPOLATION_DEPTH

from compas.colors import Color
from compas.geometry import Box, Circle, Frame, Point, Sphere, Torus

from compas_threejs.lights import (
    AmbientLight,
    PointLight,
    RectLight,
    SpotLight,
    Sunlight,
)
from compas_threejs.materials import Material
from compas_threejs.ui import Button, Slider
from compas_threejs.viewer import Viewer

viz = Viewer(default_lighting=False)
viz.background_color = Color.black()

material = Material(color=Color.white(), metalness=0.1, roughness=0.5)
mirror = Material(color=Color.white(), metalness=0.8, roughness=0.1)

# PointLight
box = Box(1, 1, 1)
box.frame.point = Point(-4, 0, 0)
viz.add_geometry(box, material)

pointLight = PointLight(
    point=Point(-3, 3, 2), color=Color.yellow(), helper=True, intensity=5
)
viz.add_light(pointLight)


# SpotlLight
box = Box(1, 1, 1)
box.frame.point = Point(4, 0, 0)
viz.add_geometry(box, material)

spotLight = SpotLight(
    point=Point(5, 5, 2),
    target=box.frame.point,
    color=Color.blue(),
    helper=True,
    intensity=50,
    penumbra=0.1,
)
viz.add_light(spotLight)


# RectLight
box = Box(1, 1, 1)
box.frame.point = Point(0, 0, 0)
viz.add_geometry(box, material)

rectLight = RectLight(
    point=Point(0, 1.5, -3),
    target=Point(0, 1.5, 0),
    color=Color.red(),
    helper=True,
    intensity=10,
    width=1,
    height=3,
)
viz.add_light(rectLight)

torus = Torus(1, 0.3, Frame([-8, 1.5, 0], [1, 0, 0], [0, 1, 0]))
viz.add_geometry(torus, material)
spotLight = SpotLight(
    point=Point(-5, 5, -4),
    target=torus.frame.point,
    color=Color.green(),
    helper=True,
    intensity=20,
    penumbra=0.8,
    distance=10,
    decay=1,
)
viz.add_light(spotLight)


circle = Circle(50, Frame([0, -0.51, 0], [1, 0, 0], [0, 0, 1]))
viz.add_geometry(circle, material)

sphere = Sphere(0.5, Frame([-0, 0, 3], [1, 0, 0], [0, 1, 0]))
viz.add_geometry(sphere, material)
sphere = Sphere(0.5, Frame([-2.5, 0, -2.7], [1, 0, 0], [0, 1, 0]))
viz.add_geometry(sphere, material)
sphere = Sphere(0.5, Frame([5, 0, -2], [1, 0, 0], [0, 1, 0]))
viz.add_geometry(sphere, material)


def loop():
    torus.frame.rotate(0.01, [0, 1, 0], torus.frame.point)
    torus.frame.rotate(0.02, [1, 0, 0], torus.frame.point)
    torus.frame.rotate(0.005, [0, 0, 1], torus.frame.point)
    viz.update_geometry(torus)


viz.loop = loop

viz.start()
