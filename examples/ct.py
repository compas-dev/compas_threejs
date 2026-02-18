import random

import compas_occ  # noqa: F401
import compas_pb  # noqa: F401
from compas.colors import Color
from compas.geometry import Frame, Point
from compas_timber.connections import TButtJoint, XLapJoint
from compas_timber.elements import Beam
from compas_timber.model import TimberModel

from compas_threejs.materials import Material
from compas_threejs.viewer import Viewer

print(compas_occ)

beam = Beam(Frame([0, 0, 0]), 10, 0.8, 0.8)
beam2 = Beam(Frame([5, -5, 0], [0, 1, 0], [-1, 0, 0]), 10, 0.8, 0.8)
model = TimberModel()
model.add_elements([beam, beam2])

# joint = TButtJoint(beam2, beam, mill_depth=0.3)
joint = XLapJoint(beam2, beam, mill_depth=0.3)
model.add_joint(joint)

model.process_joinery()

viz = Viewer()
for i, beam in enumerate(model.beams):
    # if i < 0:
    #     continue
    brep = beam.compute_geometry(True)
    mesh = brep.to_tesselation(0.01)
    print(mesh)
    print(brep)
    print(beam.features)

    viz.add_geometry(
        mesh[0],
        Material(
            color=Color(random.random(), random.random(), random.random()),
            wireframe=True,
        ),
    )

    for pln in mesh[1]:
        viz.add_geometry(
            pln,
        )


frame = Frame(Point(0, 0, 0), [1, 0, 0], [0, 1, 0])
viz.add_geometry(frame)

viz.start()
