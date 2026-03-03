import math

import numpy
import scipy.spatial
from compas.colors import Color
from compas.datastructures import Mesh
from compas.geometry import Point, Vector

from compas_threejs.materials import Material, PointMaterial
from compas_threejs.ui import Slider
from compas_threejs.viewer import Viewer

material = PointMaterial(color=Color.red(), size=0.05)
mesh_material = Material(color=Color.blue())


if __name__ == "__main__":
    # Initialize viewer
    viz = Viewer()

    # ---- FIBONACCI SPHERE
    points = create_fibonacci_sphere(1000)
    for point in points:
        viz.add_geometry(point, material)

    # ---- CREATE MESH
    mesh = mesh_from_pointcloud(points)

    # ---- MORPH TO CUBE
    sphere_vertices = [[point.x, point.y, point.z] for point in points]
    cube_vertices = morph_to_sharp_cube(sphere_vertices)
    torus_vertices = morph_to_real_torus(sphere_vertices)

    viz.add_geometry(mesh, material=mesh_material)

    def viz_morphing(value):
        blended_vertices = interpolate_vertices(
            sphere_vertices, cube_vertices, factor=value
        )
        for i, key in enumerate(mesh.vertices()):
            mesh.vertex_attributes(key, ["x", "y", "z"], blended_vertices[i])
        viz.update_geometry(mesh)

    slider = Slider(
        min=0.0,
        max=1.0,
        step=0.01,
        default_value=0.0,a
        label="Morph to Cube",
        action=viz_morphing,
    )
    viz.add_ui_element(slider)

    # ---- MORPH TO DONUT

    def viz_morphing_donut(value):
        blended_vertices = interpolate_vertices(
            cube_vertices, torus_vertices, factor=value
        )
        for i, key in enumerate(mesh.vertices()):
            mesh.vertex_attributes(key, ["x", "y", "z"], blended_vertices[i])
        viz.update_geometry(mesh)

    slider = Slider(
        min=0.0,
        max=1.0,
        step=0.01,
        default_value=0.0,
        label="Morph to Donut",
        action=viz_morphing_donut,
    )
    viz.add_ui_element(slider)

    # ---- ANIMATE

    # def animate():
    #     mesh.rotate(0.01, Vector(0, 0, 1))
    #     mesh.rotate(0.01, Vector(0, 1, 0))
    #     mesh.rotate(0.01, Vector(1, 0, 0))
    #     print("rotate")
    #     viz.update_geometry(mesh)

    # viz.loop = animate

    viz.start()
