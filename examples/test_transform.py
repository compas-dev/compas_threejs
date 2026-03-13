from compas.geometry import Box, Frame, Translation
from compas.datastructures import Mesh
from compas_threejs.viewer import Viewer
from compas_threejs.ui import Slider

viewer = Viewer()
box = Box(1.0, 1.0, 1.0, frame=Frame.worldXY())
mesh = Mesh.from_shape(box)
viewer.add_geometry(mesh)

def on_slider_move(value):
    # Ensure we are sending a pure COMPAS Transformation
    # The .list property is what our backend method uses
    transform_matrix = Translation.from_vector([value, 0, 0])
    viewer.update_transform(mesh.guid, transform_matrix)

slider = Slider(label="Move Box", min=0, max=10, step=0.1, default_value=0, action=on_slider_move)
viewer.add_ui_element(slider)
viewer.start(show=True)