from compas.colors import Color
from compas.geometry import Point, Vector

from compas_threejs.materials import Material
from compas_threejs.text import TextGeometry
from compas_threejs.viewer import Viewer

viz = Viewer()

material = Material(color=Color(1, 0.8, 0), metalness=1, roughness=1)

text = TextGeometry(
    text="HELLO COMPAS",
    font="helvetiker",
    bold=True,
    # point=Point(-10, 0, 0),
    # direction=Vector(0, 1, 0),
    # up=Vector(-1, 0, 0),
    centered=True,
)
viz.add_text(text, material)

viz.start()
