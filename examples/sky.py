from compas.colors import Color
from compas.geometry import Circle, Frame, Point, Sphere

from compas_threejs.lights import PointLight, RectLight, Sky, SpotLight, Sunlight
from compas_threejs.materials import Material
from compas_threejs.ui import Button, Slider
from compas_threejs.viewer import Viewer

viz = Viewer(default_lighting=False)

sky = Sky()
viz.add_light(sky)

sphere = Sphere(1)
sphere.frame.point = Point(0, 1, 0)
material = Material(color=Color.white(), metalness=0.1, roughness=0.5)
viz.add_geometry(sphere, material)


def update_rayleigh(value):
    sky.rayleigh = value
    viz.update_light(sky)


slider = Slider(
    min=0,
    max=2,
    step=0.01,
    default_value=sky.rayleigh,
    label="Rayleigh",
    action=update_rayleigh,
)
viz.add_ui_element(slider)


def update_azimuth(value):
    sky.azimuth = value
    viz.update_light(sky)


slider = Slider(
    min=0,
    max=360,
    step=1,
    default_value=sky.azimuth,
    label="Azimuth",
    action=update_azimuth,
)
viz.add_ui_element(slider)


def update_elevation(value):
    sky.elevation = value
    viz.update_light(sky)


slider = Slider(
    min=0,
    max=90,
    step=1,
    default_value=sky.elevation,
    label="Elevation",
    action=update_elevation,
)
viz.add_ui_element(slider)


def update_mie_c(value):
    sky.mie_coefficient = value
    viz.update_light(sky)


slider = Slider(
    min=0,
    max=0.1,
    step=0.001,
    default_value=sky.mie_coefficient,
    label="MIE coefficient",
    action=update_mie_c,
)
viz.add_ui_element(slider)


def update_mie_d(value):
    sky.mie_directional_g = value
    viz.update_light(sky)


slider = Slider(
    min=0,
    max=1,
    step=0.01,
    default_value=sky.mie_directional_g,
    label="MIE directional G",
    action=update_mie_d,
)
viz.add_ui_element(slider)


def update_turbidity(value):
    sky.turbidity = value
    viz.update_light(sky)


slider = Slider(
    min=0,
    max=10,
    step=0.1,
    default_value=sky.turbidity,
    label="Turbidity",
    action=update_turbidity,
)
viz.add_ui_element(slider)


viz.start()
