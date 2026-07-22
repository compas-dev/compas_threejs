from compas.colors import Color
from compas.geometry import Box, Frame, Sphere, Vector

from compas_threejs.lights import PointLight, RectLight, Sky, SpotLight, Sunlight
from compas_threejs.materials import Material
from compas_threejs.ui import Button, Slider
from compas_threejs.viewer import App

viz = App()
viz.default_lighting = True


sphere = Sphere(10)
material = Material(color=Color.red(), metalness=1, roughness=0.5)
viz.add_geometry(sphere, material)


def update_metalness(value):
    material.metalness = value
    viz.update_material(material)


def update_roughness(value):
    material.roughness = value
    viz.update_material(material)


def update_red(value):
    material.color.r = value
    viz.update_material(material)


def update_green(value):
    material.color.g = value
    viz.update_material(material)


def update_blue(value):
    material.color.b = value
    viz.update_material(material)


slider_metal = Slider(
    min=0,
    max=1,
    step=0.01,
    default_value=1,
    action=update_metalness,
    label="Metalness",
)
viz.add_ui_element(slider_metal)

slider_rough = Slider(
    min=0,
    max=1,
    step=0.01,
    default_value=0.5,
    action=update_roughness,
    label="Roughness",
)
viz.add_ui_element(slider_rough)

slider_red = Slider(
    min=0,
    max=1,
    step=0.01,
    default_value=1,
    action=update_red,
    label="Red",
)
viz.add_ui_element(slider_red)

slider_green = Slider(
    min=0,
    max=1,
    step=0.01,
    default_value=0,
    action=update_green,
    label="Green",
)
viz.add_ui_element(slider_green)

slider_blue = Slider(
    min=0,
    max=1,
    step=0.01,
    default_value=0,
    action=update_blue,
    label="Blue",
)
viz.add_ui_element(slider_blue)


viz.start()
