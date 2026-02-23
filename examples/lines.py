import random

from compas.colors import Color
from compas.geometry import Line, Plane, Point, Vector

from compas_threejs.materials import LineMaterial, PointMaterial
from compas_threejs.viewer import Viewer

viz = Viewer()
viz.background_color = Color(0.1, 0.1, 0.1)


for i in range(10):
    line = Line(
        Point(
            random.randrange(-10, 10),
            random.randrange(-10, 10),
            random.randrange(-10, 10),
        ),
        Point(
            random.randrange(-10, 10),
            random.randrange(-10, 10),
            random.randrange(-10, 10),
        ),
    )

    material = LineMaterial(
        color=Color(random.random(), random.random(), random.random())
    )
    viz.add_geometry(line, material)

for i in range(10):
    vector = Vector.from_start_end(
        Point(
            random.randrange(-10, 10),
            random.randrange(-10, 10),
            random.randrange(-10, 10),
        ),
        Point(
            random.randrange(-10, 10),
            random.randrange(-10, 10),
            random.randrange(-10, 10),
        ),
    )

    material = LineMaterial(
        color=Color(random.random(), random.random(), random.random())
    )
    viz.add_geometry(vector, material)


for i in range(50):
    point = Point(
        random.randrange(-10, 10),
        random.randrange(-10, 10),
        random.randrange(-10, 10),
    )

    material = PointMaterial(
        color=Color(random.random(), random.random(), random.random()), size=0.5
    )
    viz.add_geometry(point, material)


for i in range(10):
    plane = Plane(
        Point(
            random.randrange(-10, 10),
            random.randrange(-10, 10),
            random.randrange(-10, 10),
        ),
        Vector(
            random.randrange(-10, 10),
            random.randrange(-10, 10),
            random.randrange(-10, 10),
        ),
    )

    material = LineMaterial(
        color=Color(random.random(), random.random(), random.random())
    )
    viz.add_geometry(plane, material)

viz.start()
