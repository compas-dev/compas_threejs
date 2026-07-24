from compas.colors import Color
from compas.geometry import Box, Cone, Frame, Sphere

from compas_threejs.materials import Material
from compas_threejs.ui import Selection
from compas_threejs.viewer import App

material = Material(color=Color.red())


app = App()

material = Material(color=Color.red())

sphere = Sphere(0.5)
app.add_geometry(sphere, material)

box = Box(1, 1, 1)
app.add_geometry(box, material)

cone = Cone(0.5, 1)
app.add_geometry(cone, material)


def color(value):
    if value == "red":
        material.color = Color.red()
    elif value == "green":
        material.color = Color.green()
    elif value == "blue":
        material.color = Color.blue()
    app.update_material(material)


def shape(value):
    if value == "sphere":
        app.show_geometry(sphere)
        app.hide_geometry(box)
        app.hide_geometry(cone)
    elif value == "box":
        app.show_geometry(box)
        app.hide_geometry(sphere)
        app.hide_geometry(cone)
    elif value == "cone":
        app.show_geometry(cone)
        app.hide_geometry(sphere)
        app.hide_geometry(box)


selection = Selection(
    label="Select a color",
    options=["red", "green", "blue"],
    default_value="red",
    action=color,
)
app.add_ui_element(selection)


shape_selector = Selection(
    label="Select a shape",
    options=["sphere", "box", "cone"],
    default_value="sphere",
    action=shape,
)
app.add_ui_element(shape_selector)

app.start()
