from compas.colors import Color
from compas.geometry import Torus
from numpy.ma.core import true_divide

from compas_threejs.materials import Material
from compas_threejs.ui import Checkbox
from compas_threejs.viewer import App

material = Material(color=Color.red())


app = App()

torus = Torus(1.0, 0.5)
app.add_geometry(torus, material)


def toggle_torus(checked):
    global torus
    global app
    if checked:
        material.transparent = True
        material.opacity = 0.1
        app.update_material(material)
    else:
        material.transparent = False
        material.opacity = 1
        app.update_material(material)


def toggle_wireframe(checked):
    global torus
    global app
    if checked:
        material.wireframe = True
        app.update_material(material)
    else:
        material.wireframe = False
        app.update_material(material)


def toggle_color(checked):
    global torus
    global app
    if checked:
        material.color = Color.blue()
        app.update_material(material)
    else:
        material.color = Color.red()
        app.update_material(material)


def toggle_goemetry(checked):
    global torus
    global app
    if checked:
        app.show_geometry(torus)
    else:
        app.hide_geometry(torus)


check = Checkbox(text="Transparent Material", action=toggle_torus)
app.add_ui_element(check)

check_wireframe = Checkbox(text="Wireframe", action=toggle_wireframe)
app.add_ui_element(check_wireframe)

check_color = Checkbox(text="Change Color", action=toggle_color)
app.add_ui_element(check_color)

check_geometry = Checkbox(
    text="Show/Hide Geometry", default_value=True, action=toggle_goemetry
)
app.add_ui_element(check_geometry)

app.start()
