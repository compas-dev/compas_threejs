from compas.colors import Color
from compas.geometry import Plane

from compas_threejs.materials import Material
from compas_threejs.metadata import Metadata
from compas_threejs.ui import Button
from compas_threejs.viewer import App, Workspace

app = App()

plane = Plane([5, 5, 5], [0, 1, 1])
app.add_geometry(plane, Material(color=Color.red()))

print(plane.point)

app.start()
