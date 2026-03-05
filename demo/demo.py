from compas.colors import Color
from compas.geometry import Box, Point, Polyline, Sphere, Torus, Vector
from demo_functions import *

from compas_threejs.lights import PointLight, RectLight, SpotLight
from compas_threejs.materials import LineMaterial, Material, PointMaterial
from compas_threejs.ui import Button, Slider
from compas_threejs.viewer import Viewer

POINT_MATERIAL = PointMaterial(color=Color.red(), size=0.05)
LINE_MATERIAL = LineMaterial(color=Color.green())
MESH_MATERIAL = Material(color=Color.blue(), roughness=0, metalness=0)

IS_TORUS = False


def main():

    # initialize viewer
    viz = Viewer()

    # ---- LIGHTS
    point_light = PointLight(color=Color.white(), point=Point(5, 5, 5), helper=False)
    viz.add_light(point_light)
    point_light = PointLight(color=Color.white(), point=Point(-5, -5, 0), helper=False)
    viz.add_light(point_light)
    spot_light = SpotLight(color=Color.white(), point=Point(7, -7, 5), helper=False)
    viz.add_light(spot_light)

    # ---- POINT & VECTOR
    # point = Point(1, 2, 3)
    # viz.add_geometry(point, POINT_MATERIAL)

    # vector = Vector(1, 2, 3)
    # viz.add_geometry(vector, LineMaterial(color=Color.green(), linewidth=2))

    # ---- SPHERE
    points = create_fibonacci_sphere(1000)
    # for point in points:
    #     viz.add_geometry(point, POINT_MATERIAL)

    # polyline = Polyline(points)
    # viz.add_geometry(polyline, LINE_MATERIAL)

    mesh = mesh_from_pointcloud(points)
    viz.add_geometry(mesh, MESH_MATERIAL)

    # ---- CUBOID
    sphere_vertices = [[point.x, point.y, point.z] for point in points]
    cuboid_vertices = morph_to_cuboid(sphere_vertices)

    def to_cuboid(value):
        blended_vertices = interpolate_vertices(
            sphere_vertices, cuboid_vertices, factor=value
        )
        for i, vertex in enumerate(mesh.vertices()):
            mesh.vertex_attributes(vertex, ["x", "y", "z"], blended_vertices[i])
        viz.update_geometry(mesh)

    slider = Slider(action=to_cuboid, label="Morph to Cuboid")
    viz.add_ui_element(slider)

    # ---- TORUS
    def transition_to_torus(value):
        # set a global variable
        globals()["IS_TORUS"] = True if value == 1 else False
        print(f"Transitioning to torus: {IS_TORUS}")

        # update the mesh
        blended_vertices = interpolate_vertices(
            cuboid_vertices, torus_vertices, factor=value
        )
        for i, vertex in enumerate(mesh.vertices()):
            mesh.vertex_attributes(vertex, ["x", "y", "z"], blended_vertices[i])
        viz.update_geometry(mesh)

        # update the material
        MESH_MATERIAL.roughness = 1 - value
        MESH_MATERIAL.color = Color(value, value, 1 - value)
        viz.update_material(MESH_MATERIAL)

    torus_vertices = morph_to_spiraled_torus(sphere_vertices)
    slider = Slider(action=transition_to_torus, label="Morph to Torus")
    viz.add_ui_element(slider)

    # ---- ANIMATION
    def animate():
        if globals()["IS_TORUS"]:
            mesh.rotate(0.02, Vector(0, 1, 0))
            mesh.rotate(0.01, Vector(1, 0, 0))
            mesh.rotate(0.015, Vector(0, 0, 1))
            viz.update_geometry(mesh)

    viz.loop = animate

    # ---- START VIEWER
    viz.start()


if __name__ == "__main__":
    main()
