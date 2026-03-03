import math
from compas.colors import Color
from compas.geometry import Box, Point, Polyline, Sphere, Torus, Vector
from demo_functions import *

from compas_threejs.lights import PointLight, RectLight, SpotLight
from compas_threejs.materials import LineMaterial, Material, PointMaterial
from compas_threejs.ui import Button, Slider
from compas_threejs.viewer import Viewer


# ----------------------------------------------------------------------------

"""
ACT IV -  THE ETERNAL RETURN
-----

        The beginning is the end.
            The end is the beginning.
                The eternal return shall begin.
                    As the universe becomes a loop.


"""


viz = Viewer()
viz.world_axis = False

# the LIGTHS
#
rect_ligh = RectLight(color=Color.white(), point=Point(10, -10, 0),  width=10, height=10, helper=False) # the glowing heart
viz.add_light(rect_ligh)
rect_ligth = RectLight(color = Color.white(), point=Point(0, 3, 7), width=10, height=10, helper=False) # the surface washing
viz.add_light(rect_ligth)
rect_ligh = RectLight(color=Color.white(), point=Point(-15, 0, 0),  width=10, height=10, helper=False) # the silhouette of the moon
viz.add_light(rect_ligh)



# the GEOMETRIES
#
torus = Torus(5, 2)
material = Material(color=Color.yellow())
viz.add_geometry(torus, material)


# the ETERNAL LOOP

def animate(time):
    torus.rotate(0.007, Vector(1, 0, 0))
    torus.rotate(0.017, Vector(0, 1, 0))
    torus.rotate(0.013, Vector(0, 0, 1))

    material.color = Color(0.5+0.5*math.sin(time/100), 0.5+0.5*math.cos(time/100), 0.5)

    viz.update_geometry(torus)
    viz.update_material(material)


viz.loop = animate


viz.start()
