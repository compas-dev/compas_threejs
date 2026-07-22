from compas.colors import Color
from compas.geometry import Box, Frame, Sphere, Vector

from compas_threejs.lights import PointLight, RectLight, Sky, SpotLight, Sunlight
from compas_threejs.materials import Material
from compas_threejs.ui import Button, Slider
from compas_threejs.viewer import App

viz = App()


global_box = None


def add_geometry():
    global global_box
    box = Box(10, 10, 10)
    global_box = box
    viz.add_geometry(box)


add_button = Button(text="Add Box", action=add_geometry, label="Add geometry")


def remove_geometry():
    global global_box
    viz.remove_object(global_box)
    global_box = None


remove_button = Button(
    text="Remove Box", action=remove_geometry, label="Remove geometry"
)

viz.add_ui_element(add_button)
viz.add_ui_element(remove_button)


viz.start()
