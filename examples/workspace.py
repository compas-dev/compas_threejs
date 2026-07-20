from compas.colors import Color
from compas.geometry import Box, Sphere

from compas_threejs.materials import Material
from compas_threejs.ui import Button
from compas_threejs.viewer import Viewer, WorkspaceProxy

viz = Viewer()

box = Box(1, 1, 1)
viz.add_geometry(box)

iso_workspace = viz.get_workspace("sphere")
iso_workspace.add_default_lighting()

sphere = Sphere(1)
iso_workspace.add_geometry(sphere, material=Material(Color.red()))


def open_isolated_view():
    iso_workspace.open_in_browser()


open_btn = Button("Inspect Detailed Sphere View", action=open_isolated_view)
viz.add_ui_element(open_btn)

viz.start()
