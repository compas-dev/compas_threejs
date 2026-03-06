from compas.colors import Color
from compas.geometry import Box, Point, Polyline, Sphere, Torus, Vector
from demo_functions import *

from compas_threejs.lights import PointLight, RectLight, SpotLight
from compas_threejs.materials import LineMaterial, Material, PointMaterial
from compas_threejs.ui import Button, Slider
from compas_threejs.viewer import Viewer

pt_material = PointMaterial(color=Color.red(), size=0.1)
vct_material = LineMaterial(color=Color.green())
# ----------------------------------------------------------------------------

"""
ACT II -  THE PHYSICAL
-----

    ... from the patterns of the eternal, matters and lights starts to form.

"""


viz = Viewer()

# the ETERNAL PATTERN
#
points = create_fibonacci_sphere(1000)
# viz.add_geometries(points, pt_material)



# the MATTER
#
mesh = mesh_from_pointcloud(points)

material = Material(color=Color.blue())
material.roughness = 0.8
material.metalness = 0.2
viz.add_geometry(mesh, material)




# the LIGHT
#       revealing the different truth of the form

point_light = PointLight(color=Color.white(), point=Point(8, -8, 0), helper=True) # the glowing heart
viz.add_light(point_light)


rect_ligth = RectLight(color = Color.white(), point=Point(0, 3, 7), width=10, height=10, helper=True) # the surface washing
viz.add_light(rect_ligth)

spot_light = SpotLight(color=Color.white(), point=Point(-15, 0, 0),  helper=True) # the silhouette of the moon
viz.add_light(spot_light)



viz.start()










# ------------------------------------------------------------

# viz = Viewer()

# # the ETERNAL PATTERN
# #
# points = create_fibonacci_sphere(1000)
# # viz.add_geometries(points, pt_material)



# # the MATTER
# #
# mesh  = mesh_from_pointcloud(points)
# material = Material(color=Color.blue())
# material.roughness = 0.8
# material.metalness = 0.2
# viz.add_geometry(mesh, material)


# # the LIGHT
# #       revealing the different truth of the form

# point_light = PointLight(color=Color.white(), point=Point(8, -8, 0), helper=True) # the glowing heart
# viz.add_light(point_light)

# rect_ligth = RectLight(color = Color.white(), point=Point(0, 3, 7), width=10, height=10, helper=True) # the surface washing
# viz.add_light(rect_ligth)

# spot_light = SpotLight(color=Color.white(), point=Point(-15, 0, 0),  helper=True) # the silhouette of the moon
# viz.add_light(spot_light)



# viz.start()
