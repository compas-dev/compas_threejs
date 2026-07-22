from compas.colors import Color
from compas.geometry import Box, Sphere

from compas_threejs.materials import Material
from compas_threejs.ui import Button
from compas_threejs.viewer import App, Workspace
from compas_threejs.metadata import Metadata

viz = App()

box = Box(1, 1, 1)
meta = Metadata(name="Box", description="A simple box geometry")
viz.add_geometry(box, material=Material(Color.blue()), metadata=meta)

iso_workspace = viz.get_workspace("sphere")
iso_workspace.add_default_lighting()

sphere = Sphere(1)
meta = Metadata(name="Sphere", description="A simple sphere geometry")
iso_workspace.add_geometry(sphere, material=Material(Color.red()), metadata=meta)


def open_isolated_view():
    iso_workspace.open_in_browser()


open_btn = Button("Inspect Detailed Sphere View", action=open_isolated_view)
viz.add_ui_element(open_btn)

viz.start()
