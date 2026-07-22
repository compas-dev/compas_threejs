import random

from compas.colors import Color
from compas.geometry import Box, Frame, Sphere, Vector

from compas_threejs.lights import PointLight, RectLight, SpotLight, Sunlight
from compas_threejs.materials import Material
from compas_threejs.viewer import App


class Ball:
    def __init__(self, geometry, vector):
        self.geometry = geometry
        self.vector = vector

    def update(self):
        new_point = self.geometry.frame.point + self.vector
        if new_point.x > 5 or new_point.x < -5:
            self.vector.x *= -1
        if new_point.y > 5 or new_point.y < -5:
            self.vector.y *= -1
        if new_point.z > 5 or new_point.z < -5:
            self.vector.z *= -1
        self.geometry.frame.point += self.vector


viz = App()
viz.default_lighting = True
viz.background_color = Color(0.1, 0.1, 0.1)

balls = []
ball_mat = Material(roughness=0.5, metalness=0.5)

for i in range(10):
    sphere = Sphere(
        0.5,
        Frame([random.uniform(-5, 5), random.uniform(-5, 5), random.uniform(-5, 5)]),
    )
    vector = Vector(
        random.uniform(-0.1, 0.1), random.uniform(-0.1, 0.1), random.uniform(-0.1, 0.1)
    )
    ball = Ball(sphere, vector)
    balls.append(ball)
    viz.add_geometry(ball.geometry, ball_mat)


box = Box(11, 11, 11)
mat = Material(wireframe=True, color=Color.red())
viz.add_geometry(box, mat)


def update(time):
    for ball in balls:
        ball.update()
        viz.update_geometry(ball.geometry)


viz.loop = update

viz.start()
