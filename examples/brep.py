import time

from compas.colors import Color
from compas.geometry import Box, Frame, Sphere, Transformation, Translation, Vector
from compas_brep import Brep

from compas_threejs.materials import Material
from compas_threejs.viewer import App

viz = App()


box = Box(1, 1, 1, Frame([0.5, 0.5, 0.5]))
sphere = Sphere(1, Frame([1, 1, 1]))

brep = Brep.from_boolean_union(Brep.from_box(box), Brep.from_sphere(sphere))


material = Material(Color.green())
viz.add_geometry(brep, material)


viz.start()
