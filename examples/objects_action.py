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
        self.box_material = Material(
            color=Color(0.8, 0.8, 0.8), metalness=0.5, roughness=0.5
        )
        self.spehere_material = Material(
            color=Color(0.8, 0.8, 0.8), metalness=0.5, roughness=0.5
        )

    def add_geomtries(self):

        blue_button = Button("Make it blue", action=self.make_it_blue)
        red_button = Button("Make it red", action=self.make_it_red)
        bigger_button = Button("Make it bigger", action=self.make_it_bigger)
        smaller_button = Button("Make it smaller", action=self.make_it_smaller)

        self.box = Box(3, 3, 3, Frame([5, 3, 2], [1, 0, 0], [0, 1, 0]))
        metadata = Metadata(
            name="Box",
            width=self.box.xsize,
            height=self.box.ysize,
            depth=self.box.zsize,
            volume=self.box.volume,
            area=self.box.area,
        )
        self.viewer.add_geometry(
            self.box,
            self.box_material,
            metadata=metadata,
            actions=[blue_button, red_button, bigger_button, smaller_button],
        )

        self.sphere = Sphere(2, Frame([-2, -4, 0], [1, 0, 0], [0, 1, 0]))
        metadata = Metadata(
            name="Sphere",
            radius=self.sphere.radius,
            area=self.sphere.area,
            volume=self.sphere.volume,
        )
        self.viewer.add_geometry(
            self.sphere,
            material=self.spehere_material,
            metadata=metadata,
            actions=[blue_button, red_button, bigger_button, smaller_button],
        )

    def make_it_blue(self, object):
        if object is self.box:
            self.box_material.color = Color.blue()
            self.viewer.update_material(self.box_material)

        elif object is self.sphere:
            self.spehere_material.color = Color.blue()
            self.viewer.update_material(self.spehere_material)

    def make_it_red(self, object):
        if object is self.box:
            self.box_material.color = Color.red()
            self.viewer.update_material(self.box_material)

        elif object is self.sphere:
            self.spehere_material.color = Color.red()
            self.viewer.update_material(self.spehere_material)

    def make_it_bigger(self, object):
        object.scale(1.5)
        self.viewer.update_geometry(object)

    def make_it_smaller(self, object):
        object.scale(0.5)
        self.viewer.update_geometry(object)

    def start(self):
        self.viewer.start()


app = App()
app.add_geomtries()
app.start()
