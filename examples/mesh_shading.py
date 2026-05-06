from compas.colors import Color
from compas.geometry import Box, Sphere

from compas_threejs.materials import Material
from compas_threejs.text import TextGeometry
from compas_threejs.ui import Slider
from compas_threejs.viewer import Viewer

viz = Viewer()
viz.world_axis = False
viz.picker = True
viz.default_lighting = True
viz.show_edges = True


U = 3
V = 3
sphere = Sphere(4)
mesh = sphere.to_mesh(False, U, V)
viz.add_geometry(mesh)


def update_u(value):
    global mesh
    global U
    global V
    viz.remove_object(mesh)
    mesh = sphere.to_mesh(False, value, V)
    U = value
    viz.add_geometry(mesh)


slider = Slider(min=3, max=100, value=3, step=1, label="U", action=update_u)
viz.add_ui_element(slider)


def update_v(value):
    global mesh
    global U
    global V
    viz.remove_object(mesh)
    mesh = sphere.to_mesh(False, U, value)
    V = value
    viz.update_geometry(mesh)


slider = Slider(min=3, max=100, value=3, step=1, label="V", action=update_v)
viz.add_ui_element(slider)

viz.start()
