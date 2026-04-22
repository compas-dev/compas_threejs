from compas.colors import Color
from compas.geometry import Box, Frame, Point, Sphere

from compas_threejs.materials import Material
from compas_threejs.metadata import Metadata
from compas_threejs.ui import Button
from compas_threejs.viewer import Viewer


class App:
    def __init__(self):
        self.viewer = Viewer()
        self.viewer.camera_position = Point(20, -20, 20)
        self.objects = []

    def add_geomtries(self):

        blue_button = Button("Make it blue", action=self.make_it_blue)
        red_button = Button("Make it red", action=self.make_it_red)
        bigger_button = Button("Make it bigger", action=self.make_it_bigger)
        smaller_button = Button("Make it smaller", action=self.make_it_smaller)

        box = Box(3, 3, 3, Frame([5, 3, 2], [1, 0, 0], [0, 1, 0]))
        metadata = Metadata(
            name="Box",
            width=box.xsize,
            height=box.ysize,
            depth=box.zsize,
            volume=box.volume,
            area=box.area,
        )
        self.viewer.add_geometry(
            box,
            metadata=metadata,
            actions=[blue_button, red_button, bigger_button, smaller_button],
        )

        sphere = Sphere(2, Frame([-2, -4, 0], [1, 0, 0], [0, 1, 0]))
        metadata = Metadata(
            name="Sphere", radius=sphere.radius, area=sphere.area, volume=sphere.volume
        )
        self.viewer.add_geometry(
            sphere,
            metadata=metadata,
            actions=[blue_button, red_button, bigger_button, smaller_button],
        )

    def make_it_blue(self, object):
        self.viewer.remove_object(object)
        material = Material(color=Color.blue())
        self.viewer.add_geometry(object, material)

    def make_it_red(self, object):
        self.viewer.remove_object(object)
        material = Material(color=Color.red())
        self.viewer.add_geometry(object, material)

    def make_it_bigger(self, object):
        self.viewer.remove_object(object)
        object.scale(1.5)
        self.viewer.add_geometry(object)

    def make_it_smaller(self, object):
        self.viewer.remove_object(object)
        object.scale(0.5)
        self.viewer.add_geometry(object)

    def start(self):
        self.viewer.start()


app = App()
app.add_geomtries()
app.start()
