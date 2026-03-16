from compas.colors import Color
from compas.geometry import Point, Vector

from compas_threejs.materials import Material
from compas_threejs.text import TextGeometry
from compas_threejs.ui import Slider
from compas_threejs.viewer import Viewer

viz = Viewer()
viz.world_axis = False
viz.picker = True
viz.default_lighting = True
viz.background_color = Color(0.0, 0.05, 0.3)


material = Material(color=Color(1, 0.8, 0), metalness=1, roughness=1)

text = TextGeometry(
    text="HELLO COMPAS_DEV!",
    font="helvetiker",
    bold=True,
    # point=Point(-10, 0, 0),
    # direction=Vector(0, 1, 0),
    # up=Vector(-1, 0, 0),
    centered=True,
)
viz.add_text(text, material)




viz.start()
