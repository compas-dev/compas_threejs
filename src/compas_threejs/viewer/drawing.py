"""Builds COMPAS objects from the frontend's drawing messages.

The frontend drawing tools (for example `compas_threejs_draw`) send
`create_geometry` messages with either one location (`point` plus `params`) or a
list of `points`, and `extrude_geometry` messages for a drawn polygon. These
helpers turn them into COMPAS geometry, or return None for invalid input so the
Inbox can log and ignore it.
"""

import math
import uuid

from compas.datastructures import Mesh
from compas.geometry import Arc
from compas.geometry import Box
from compas.geometry import Circle
from compas.geometry import Frame
from compas.geometry import Line
from compas.geometry import Point
from compas.geometry import Polygon
from compas.geometry import Polyline
from compas.geometry import Sphere
from compas.geometry import Vector

# Types created at one location ("point") from positive numeric "params".
SIZED_TYPES = {
    "point": (),
    "box": ("xsize", "ysize", "zsize"),
    "sphere": ("radius",),
    "circle": ("radius",),
}

# Types created from a list of points, with the fewest points each needs.
POINT_LIST_TYPES = {"line": 2, "polyline": 2, "polygon": 3, "arc": 3}

CREATABLE_TYPES = set(SIZED_TYPES) | set(POINT_LIST_TYPES)

_EPS = 1e-9


def _point(value):
    """A Point from an [x, y, z] list, or None."""
    try:
        if len(value) != 3:
            return None
        return Point(*(float(v) for v in value))
    except (TypeError, ValueError):
        return None


def _points(values):
    """Points from a list of [x, y, z] lists, or None if any is invalid."""
    if not isinstance(values, (list, tuple)):
        return None
    points = [_point(value) for value in values]
    return None if any(point is None for point in points) else points


def geometry_from_message(message):
    """The COMPAS object a `create_geometry` message describes, or None if it is invalid."""
    type_name = message.get("type")
    if type_name in POINT_LIST_TYPES:
        points = _points(message.get("points"))
        if points is None or len(points) < POINT_LIST_TYPES[type_name]:
            return None
        if type_name == "line":
            return Line(points[0], points[1]) if len(points) == 2 else None
        if type_name == "polyline":
            return Polyline(points)
        if type_name == "polygon":
            return Polygon(points)
        return arc_through_points(*points) if len(points) == 3 else None

    if type_name not in SIZED_TYPES:
        return None
    location = _point(message.get("point") or [0.0, 0.0, 0.0])
    if location is None:
        return None
    if type_name == "point":
        return location
    params = message.get("params") or {}
    try:
        sizes = {name: float(params.get(name, 1.0)) for name in SIZED_TYPES[type_name]}
    except (TypeError, ValueError):
        return None
    if any(value <= 0 for value in sizes.values()):
        return None
    frame = Frame(location, [1, 0, 0], [0, 1, 0])
    if type_name == "box":
        return Box(frame=frame, **sizes)
    if type_name == "sphere":
        return Sphere(frame=frame, **sizes)
    return Circle(frame=frame, **sizes)


def arc_through_points(start, end, through):
    """The arc from `start` to `end` passing through `through`, or None if the three
    points are collinear.

    The arc's angles are placed symmetrically around pi (from pi - sweep/2 to
    pi + sweep/2), with its frame turned to match. Same arc, but its start angle is
    never 0: compas-pb-ts 2.0 treats an angle of exactly 0 as missing and rejects the
    arc, so the viewer could not show it.
    """
    a, b, c = Vector(*start), Vector(*end), Vector(*through)
    ab, ac = b - a, c - a
    normal = ab.cross(ac)
    if normal.length < _EPS:
        return None
    center = a + (normal.cross(ab) * ac.length**2 + ac.cross(normal) * ab.length**2) * (0.5 / normal.length**2)
    radius = (a - center).length

    # The rotation sense that goes start -> through -> end.
    axis = (c - a).cross(b - c)
    axis.unitize()
    u = a - center
    u.unitize()
    w = axis.cross(u)
    to_end = b - center
    sweep = math.atan2(to_end.dot(w), to_end.dot(u)) % (2 * math.pi)
    if sweep < _EPS:
        return None

    start_angle = math.pi - sweep / 2
    # Turn the frame so the arc's start sits at `start_angle` from its x-axis.
    xaxis = u * math.cos(start_angle) - w * math.sin(start_angle)
    yaxis = axis.cross(xaxis)
    frame = Frame(Point(*center), xaxis, yaxis)
    return Arc(radius, start_angle, start_angle + sweep, frame=frame)


def _profile_points(geometry):
    """The corners of a polygon or closed polyline, or None for anything else."""
    if isinstance(geometry, Polygon):
        return [Vector(*point) for point in geometry.points]
    if isinstance(geometry, Polyline):
        points = [Vector(*point) for point in geometry.points]
        if len(points) >= 4 and (points[0] - points[-1]).length < _EPS:
            return points[:-1]
    return None


def extrude(geometry, height):
    """A closed prism mesh from a polygon (or closed polyline) extruded `height` along
    world Z - or along its own normal if it is vertical - or None if it can't be.
    """
    points = _profile_points(geometry)
    if points is None or len(points) < 3 or abs(height) < _EPS:
        return None

    normal = Vector(0, 0, 0)
    for i, current in enumerate(points):
        following = points[(i + 1) % len(points)]
        normal += current.cross(following)
    if normal.length < _EPS:
        return None
    normal.unitize()
    up = Vector(0, 0, 1) if abs(normal.z) > 1e-6 else normal
    direction = up * height
    # Wind the profile counterclockwise around the extrusion direction, so every face
    # of the prism ends up facing outward.
    if normal.dot(direction) < 0:
        points = list(reversed(points))

    count = len(points)
    vertices = [list(point) for point in points] + [list(point + direction) for point in points]
    faces = [list(reversed(range(count))), list(range(count, 2 * count))]
    for i in range(count):
        j = (i + 1) % count
        faces.append([i, j, count + j, count + i])
    return Mesh.from_vertices_and_faces(vertices, faces)


def apply_guid(geometry, guid):
    """Gives `geometry` the frontend's `guid`, so the frontend can refer to what it drew
    (for example to undo it). Returns False if `guid` is not a valid UUID.
    """
    try:
        geometry._guid = uuid.UUID(str(guid))
    except (TypeError, ValueError):
        return False
    return True
