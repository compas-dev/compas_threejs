import random

from compas.colors import Color
from compas.geometry import Box, Frame, Line, Point, Sphere, Vector

from compas_threejs.lights import PointLight, RectLight, SpotLight, Sunlight
from compas_threejs.materials import Material
from compas_threejs.viewer import App

viz = App()


line = Line([0, 0, 0], [10, 10, 10])
mat = Material(color=Color.red())
viz.add_geometry(line, mat)


line.translate([3, 0, 0])
viz.update_geometry(line)


box = Box(0.5, 0.5, 0.5)
viz.add_geometry(box)


point = Point(1, 1, 1)
viz.add_geometry(point, Material(color=Color.green()))


frmae = Frame([4, 4, 4])
viz.add_geometry(frmae)


viz.start()
