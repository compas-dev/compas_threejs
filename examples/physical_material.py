from compas.colors import Color
from compas.geometry import Box, Sphere

from compas_threejs.lights import PointLight, RectLight, Sky, SpotLight, Sunlight
from compas_threejs.materials import Material, PhysicalMaterial
from compas_threejs.ui import Button, Slider
from compas_threejs.viewer import Viewer

viz = Viewer()


material = PhysicalMaterial(
    color=Color.white(),
    metalness=0,
    roughness=0.0,
    transmission=1,
    thickness=1,
    ior=2.33,
)
sphere = Box(2)


viz.add_geometry(sphere, material)

viz.start()
