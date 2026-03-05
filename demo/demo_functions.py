import math

import numpy
import scipy
from compas.datastructures import Mesh
from compas.geometry import Point

# ---- MORPHING


def morph_to_cuboid(vertices, power=8):
    sharp_cube_vertices = []
    for x, y, z in vertices:
        # 1. Calculate the 'L-p norm'
        # As 'power' increases, the sphere becomes a perfect cube
        norm = (abs(x) ** power + abs(y) ** power + abs(z) ** power) ** (1 / power)

        # 2. Scale the point by this norm
        # 3. Adjust the scale to make the cuboid of length 6
        sharp_cube_vertices.append([3 * (x / norm), 3 * (y / norm), 3 * (z / norm)])
    return sharp_cube_vertices


def morph_to_spiraled_torus(vertices, R=5, r=2):
    torus_vertices = []
    n = len(vertices)

    for i in range(n):
        # We treat the Fibonacci index 'i' as a path along the torus
        # u is the angle around the major ring (0 to 2pi)
        # v is the angle around the minor tube (0 to 2pi * some factor)
        u = (i / n) * 2 * math.pi
        v = (i / n) * 2 * math.pi * 10  # 10 is the number of 'spirals'

        tx = (R + r * math.cos(v)) * math.cos(u)
        ty = (R + r * math.cos(v)) * math.sin(u)
        tz = r * math.sin(v)

        torus_vertices.append([tx, ty, tz])
    return torus_vertices


def morph_to_torus(vertices, R=5, r=2):
    """
    R = Major radius (distance from center of hole to center of tube)
    r = Minor radius (radius of the tube itself)
    """
    torus_vertices = []
    n = len(vertices)

    for i in range(n):
        # We derive 'u' and 'v' from the point index 'i'
        # This maps the linear Fibonacci sequence onto a 2D Torus surface

        # u: angle around the major ring
        u = (i / n) * 2 * math.pi

        # v: angle around the minor tube cross-section
        # We use a frequency that aligns with the Fibonacci 'skip'
        # to prevent the "spiral" look and make it look like a solid shell
        v = i * (math.pi * (3 - math.sqrt(5)))

        x = (R + r * math.cos(v)) * math.cos(u)
        y = (R + r * math.cos(v)) * math.sin(u)
        z = r * math.sin(v)

        torus_vertices.append([x, y, z])
    return torus_vertices


def interpolate_vertices(start_vertices, end_vertices, factor):
    """
    factor 0.0 = Sphere
    factor 1.0 = Cube
    """
    blended_vertices = []
    for s, c in zip(start_vertices, end_vertices):
        # Math: P = P0 + t * (P1 - P0)
        x = s[0] + factor * (c[0] - s[0])
        y = s[1] + factor * (c[1] - s[1])
        z = s[2] + factor * (c[2] - s[2])
        blended_vertices.append([x, y, z])
    return blended_vertices


# ---- SPHERE


def create_fibonacci_sphere(n_points=100, radius=3) -> list[Point]:
    vertices = []
    # The 'Golden Angle' in radians (~137.5 degrees)
    golden_angle = math.pi * (3 - math.sqrt(5))

    for i in range(n_points):
        # y goes from 1 to -1 (the vertical axis)
        y = 1 - (i / float(n_points - 1)) * 2

        # radius at current y height
        r_at_y = math.sqrt(1 - y * y)

        # Angle incremented by the golden angle
        theta = golden_angle * i

        x = math.cos(theta) * r_at_y
        z = math.sin(theta) * r_at_y

        # Scale by sphere radius
        vertices.append([x * radius, y * radius, z * radius])

    return [Point(*vertex) for vertex in vertices]


def orient_faces_outward(points, faces):
    points = numpy.array(points)
    faces = numpy.array(faces)

    # 1. Find the center of the point cloud
    center = numpy.mean(points, axis=0)

    oriented_faces = []

    for face in faces:
        # Get coordinates of the three vertices
        v0, v1, v2 = points[face]

        # 2. Calculate the normal vector using cross product
        # Normal = (v1 - v0) x (v2 - v0)
        normal = numpy.cross(v1 - v0, v2 - v0)

        # 3. Vector from center of object to a point on the face
        v_center_to_face = v0 - center

        # 4. Check if the normal points in the same direction as v_center_to_face
        # If dot product < 0, they point in opposite directions (inward)
        if numpy.dot(normal, v_center_to_face) < 0:
            # Flip the winding order (swap v1 and v2)
            oriented_faces.append([face[0], face[2], face[1]])
        else:
            oriented_faces.append(face.tolist())

    return oriented_faces


def mesh_from_pointcloud(point_cloud: list[Point]):
    vertices = []
    for point in point_cloud:
        vertices.append([point.x, point.y, point.z])

    # create the mesh faces
    points = numpy.array(vertices)
    tri = scipy.spatial.Delaunay(points)
    mesh_faces = tri.convex_hull.tolist()
    mesh_faces = orient_faces_outward(points, mesh_faces)

    # create the mesh
    mesh = Mesh()
    points = [Point(*vertex) for vertex in vertices]
    for vertex in points:
        mesh.add_vertex(x=vertex.x, y=vertex.y, z=vertex.z)

    for face in mesh_faces:
        mesh.add_face(face)

    return mesh
