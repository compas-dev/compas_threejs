from compas.colors import Color
from compas.geometry import Box, Cone, Frame, Sphere

from compas_threejs.materials import Material
from compas_threejs.ui import Selection
from compas_threejs.viewer import App

material = Material(color=Color.red())


app = App()

material = Material(color=Color.red())

sphere = Sphere(0.5)


def color(object, value):
    print(value)
    if value == "red":
        material.color = Color.red()
    elif value == "green":
        material.color = Color.green()
    elif value == "blue":
        material.color = Color.blue()
    app.update_material(material)


selection = Selection(
    label="Select a color",
    options=["red", "green", "blue"],
    default_value="red",
    action=color,
)

app.add_geometry(sphere, material, actions=[selection])

app.start()
