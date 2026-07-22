import random

from compas.colors import Color
from compas.geometry import Box, Frame, Sphere, Vector

from compas_threejs.lights import PointLight, RectLight, SpotLight, Sunlight
from compas_threejs.materials import Material
from compas_threejs.ui import Button, Slider
from compas_threejs.viewer import CameraView, App

viz = App()

viz.default_lighting = True
viz.set_view(CameraView.FRONT_RIGHT)


def add_box():
    box = Box(1, 1, 1)
    box.frame.point += Vector(
        random.randrange(-10, 10), random.randrange(-10, 10), random.randrange(-10, 10)
    )
    viz.add_geometry(box)


def add_sphere():
    sphere = Sphere(1)
    sphere.frame.point += Vector(
        random.randrange(-10, 10), random.randrange(-10, 10), random.randrange(-10, 10)
    )
    viz.add_geometry(sphere)


mega_box = Box(1, 1, 1)
viz.add_geometry(mega_box, Material(color=Color.red(), metalness=1, roughness=0.5))


def size_x(value):
    mega_box.xsize = value
    viz.update_geometry(mega_box)


def size_y(value):
    mega_box.ysize = value
    viz.update_geometry(mega_box)


def size_z(value):
    mega_box.zsize = value
    viz.update_geometry(mega_box)


button = Button(text="Add Box", action=add_box, label="Add Geometries")
viz.add_ui_element(button)
button = Button(text="Add Sphere", action=add_sphere)
viz.add_ui_element(button)

slider = Slider(
    min=0, max=10, step=0.1, default_value=1, action=size_x, label="Box X size"
)
viz.add_ui_element(slider)

slider = Slider(
    min=0, max=10, step=0.1, default_value=1, action=size_y, label="Box Y size"
)
viz.add_ui_element(slider)

slider = Slider(
    min=0, max=10, step=0.1, default_value=1, action=size_z, label="Box Z size"
)
viz.add_ui_element(slider)


viz.start()
