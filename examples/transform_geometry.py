from compas.colors import Color
from compas.geometry import Box
from compas.geometry import Frame
from compas.geometry import Rotation
from compas.geometry import Sphere
from compas.geometry import Translation

from compas_threejs.materials import Material
from compas_threejs.ui import Button
from compas_threejs.viewer import App

viz = App()
viz.default_lighting = True
viz.show_edges = True
viz.world_axis = False

# A mesh with enough vertices that re-sending the full geometry on every update would be
# wasteful. transform_geometry() sends only a small transform matrix to the frontend
# instead, and mutates this exact mesh instance in place - so `mesh` always reflects its
# true current position, and a running loop like the one below never drifts out of sync
# with what's on screen. See BIDIRECTIONAL_SYNC.md for the full picture.
center = Frame([-3, 0, 0], [1, 0, 0], [0, 1, 0])
sphere = Sphere(1.5, center)
mesh = sphere.to_mesh(False, 32, 32)
viz.add_geometry(mesh, Material(color=Color.azure()))

box = Box(1, 1, 1, Frame([3, 0, 0], [1, 0, 0], [0, 1, 0]))
viz.add_geometry(box, Material(color=Color.red()))


def loop(time):
    # Spins the mesh continuously around its own center. Each tick sends only a tiny
    # {"dispatch": "handle_geometry", "type": "apply_transform", ...} message, not the
    # whole (thousands-of-vertices) mesh.
    viz.transform_geometry(mesh, Rotation.from_axis_and_angle([0, 0, 1], 0.02, center.point))


viz.loop = loop


def move_box():
    # Translation and Rotation are both COMPAS subclasses of Transformation, so either
    # can be passed directly to transform_geometry().
    viz.transform_geometry(box, Translation.from_vector([0, 0.5, 0]))


button = Button(text="Move box +Y", action=move_box, label="Transform")
viz.add_ui_element(button)

viz.start()
