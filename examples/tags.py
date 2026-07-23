from compas.colors import Color
from compas.geometry import Box, Frame, Point, Sphere

from compas_threejs.materials import Material
from compas_threejs.tag import TextTag
from compas_threejs.viewer import App

app = App()


box = Box(1, 1, 1, Frame([0.5, 0.5, 0.5]))
tag = TextTag(point=Point(0.5, 0.5, 0.5), text="The Box", color=Color.red())
app.add_geometry(box, Material(color=Color.blue()))
app.add_tag(tag)


sphere = Sphere(0.5, Frame([2, 0.5, 0.5]))
tag = TextTag(point=Point(2, 0.5, 0.5), text="The Sphere", color=Color.blue())
app.add_geometry(sphere, Material(color=Color.yellow()))
app.add_tag(tag)

app.start()
