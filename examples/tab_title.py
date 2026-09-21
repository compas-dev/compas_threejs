from compas.colors import Color
from compas.geometry import Box
from compas.geometry import Point
from compas.geometry import Sphere

from compas_threejs.materials import Material
from compas_threejs.tag import TextTag
from compas_threejs.ui import Button
from compas_threejs.viewer import App

# `title` sets the browser tab title (and the toolbar heading, replacing the
# default "COMPAS ThreeJS") for the main workspace's page.
viz = App(title="Bridge Inspector")

box = Box(1, 1, 1)
viz.add_geometry(box, material=Material(Color.blue()))
viz.add_tag(TextTag(point=Point(0, 0, 0.5), text="The Box", color=Color.blue()))

# A second workspace opened in its own browser tab. Without a `title` it falls
# back to the App's own title; pass one to give it a distinct tab title instead.
detail_workspace = viz.get_workspace("sphere")
detail_workspace.add_default_lighting()

sphere = Sphere(1)
detail_workspace.add_geometry(sphere, material=Material(Color.red()))
detail_workspace.add_tag(TextTag(point=Point(0, 0, 1), text="The Sphere", color=Color.red()))


def open_detail_view():
    detail_workspace.open_in_browser(title="Bridge Inspector - Sphere Detail")


open_btn = Button("Open Sphere Detail View", action=open_detail_view)
viz.add_ui_element(open_btn)

viz.start(show=True)
