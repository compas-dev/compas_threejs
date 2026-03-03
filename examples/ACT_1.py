from compas.colors import Color
from compas.geometry import Box, Point, Polyline, Sphere, Torus, Vector
from demo_functions import *

from compas_threejs.lights import PointLight, RectLight, SpotLight
from compas_threejs.materials import LineMaterial, Material, PointMaterial
from compas_threejs.ui import Button, Slider
from compas_threejs.viewer import Viewer

pt_material = PointMaterial(color=Color.red(), size=0.1)
vct_material = LineMaterial(color=Color.green())
ln_material = LineMaterial(color=Color.yellow())
# ----------------------------------------------------------------------------

"""
ACT I - THE ABSTRACT
-----

    I couldn't see nothing... but I knew I was in the mid of the universe.

"""


viz = Viewer()



# the SINGULARITY
#       the eternal
#
point = Point(0, 0, 0)
viz.add_geometry(point, pt_material)


# the MOVEMENT
#       the ephemeral
#

movement = Vector(2, 3, 4)
viz.add_geometry(movement, vct_material)

point += movement
viz.update_geometry(point)


# the CHAOS
#   the eternal exploded into the plenty

points = create_fibonacci_sphere(500)
viz.add_geometries(points, pt_material)


# the CALM
#       the dynamism woven in the ethernal chaos

polyline = Polyline(points)
viz.add_geometry(polyline, ln_material)



viz.start()
