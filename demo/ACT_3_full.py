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
ACT III - EVOLUTION
-----

        THE SPHERE IS A LIE!
                                       It breaks!
                    It squares!
                                    It bends!
            It loops!

        A new actor enters the stage of the universe.
"""


viz = Viewer()
viz.world_axis = False

# the MATTER and the LIGTHS
points = create_fibonacci_sphere(1000)
mesh  = mesh_from_pointcloud(points)

material = Material(color=Color.blue())
material.roughness = 0.8
material.metalness = 0.2

viz.add_geometry(mesh, material)

# and the LIGTHS

point_light = PointLight(color=Color.white(), point=Point(8, -8, 0), helper=False) # the glowing heart
viz.add_light(point_light)

rect_ligth = RectLight(color = Color.white(), point=Point(0, 3, 7), width=10, height=10, helper=False) # the surface washing
viz.add_light(rect_ligth)

spot_light = SpotLight(color=Color.white(), point=Point(-15, 0, 0),  helper=False) # the silhouette of the moon
viz.add_light(spot_light)


# the SPHERE is LIE
#

sphere_vertices = [[point.x, point.y, point.z] for point in points]
cuboid_vertices = morph_to_cuboid(sphere_vertices)
torus_vertices = morph_to_torus(cuboid_vertices)
spiraled_torus = morph_to_spiraled_torus(torus_vertices)


# the ACTION
#

def metamorphosis(value):

    new_coords = []

    if value <= 0.33:
        t = value * 3
        new_coords = interpolate_vertices(sphere_vertices, cuboid_vertices, t)
        material.color = Color(t, 0, 1)
    elif value <= 0.66:
        t = (value - 0.33) * 3
        new_coords = interpolate_vertices(cuboid_vertices, torus_vertices, t)
        material.color = Color(1, t, 1-t)
    else:
        t = (value - 0.66) * 3
        new_coords = interpolate_vertices(torus_vertices, spiraled_torus, t)
        if t>1:
            t=1
        material.color = Color(1-t, 1, t)

    for i, vertex in enumerate(mesh.vertices()):
        mesh.vertex_attributes(vertex, ["x", "y", "z"], new_coords[i])

    viz.update_geometry(mesh)
    viz.update_material(material)


# the ACTOR

slider = Slider(action=metamorphosis, label="Metamorphosis")
viz.add_ui_element(slider)



viz.start()
















# ------------------------------------------------------------



# viz = Viewer()
# viz.world_axis = False

# # the MATTER and the LIGTHS
# points = create_fibonacci_sphere(1000)
# mesh  = mesh_from_pointcloud(points)

# material = Material(color=Color.blue())
# material.roughness = 0.8
# material.metalness = 0.2

# viz.add_geometry(mesh, material)

# # and the LIGTHS

# point_light = PointLight(color=Color.white(), point=Point(8, -8, 0), helper=False) # the glowing heart
# viz.add_light(point_light)

# rect_ligth = RectLight(color = Color.white(), point=Point(0, 3, 7), width=10, height=10, helper=False) # the surface washing
# viz.add_light(rect_ligth)

# spot_light = SpotLight(color=Color.white(), point=Point(-15, 0, 0),  helper=False) # the silhouette of the moon
# viz.add_light(spot_light)


# # the new ACTOR
# #

# sphere_vertices = [[point.x, point.y, point.z] for point in points]
# cuboid_vertices = morph_to_cuboid(sphere_vertices)
# torus_vertices = morph_to_torus(cuboid_vertices)
# spiraled_torus = morph_to_spiraled_torus(torus_vertices)


# # the ACTION
# #
# def metamorphosis(value):
#     new_coords = []

#     if value <= 0.33:
#         t = value * 3
#         new_coords = interpolate_vertices(sphere_vertices, cuboid_vertices, t)
#         material.color = Color(t, 0, 1)
#     elif value <= 0.66:
#         t = (value - 0.33) * 3
#         new_coords = interpolate_vertices(cuboid_vertices, torus_vertices, t)
#         material.color = Color(1, t, 1-t)
#     else:
#         t = (value - 0.66) * 3
#         new_coords = interpolate_vertices(torus_vertices, spiraled_torus, t)
#         material.color = Color(1-t, 1, t)

#     for i, vertex in enumerate(mesh.vertices()):
#         mesh.vertex_attributes(vertex, ["x", "y", "z"], new_coords[i])

#     viz.update_geometry(mesh)
#     viz.update_material(material)


# # the ACTOR
# #
# slider = Slider(action=metamorphosis, label="Metamorphosis")
# viz.add_ui_element(slider)


# viz.start()
