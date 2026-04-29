from compas.colors import Color
from compas.geometry import Box

from compas_threejs.materials import Material
from compas_threejs.metadata import Metadata
from compas_threejs.viewer import Viewer

viz = Viewer()

box = Box(1, 1, 1)

metadata = Metadata(
    name="My Box",
    type="Box",
    width=box.xsize,
    height=box.ysize,
    depth=box.zsize,
)

viz.add_geometry(box, Material(color=Color.red(), metalness=1, roughness=0.5), metadata)


# Update the metadata
metadata["name"] = "My Mega Box"
viz.update_metadata(metadata)

viz.start()
