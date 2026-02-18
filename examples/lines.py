import random

from compas.colors import Color
from compas.geometry import Line, Point, Vector

from compas_threejs.materials import LineMaterial
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

    material = LineMaterial(color=Color.blue())

    viz.add_geometry(vector, material)


viz.start()
