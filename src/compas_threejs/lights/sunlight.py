import uuid

from compas.colors import Color
from compas.geometry import Point, Vector

from .light import Light


class Sunlight(Light):
    """
    A class representing sunlight in a 3D scene.

    The Sunlight class is a type of light source that simulates sunlight. It is defined
    by its color, position, direction, intensity, and an optional helper for visualization.

    Attributes
    ----------
    color : :class:`compas.colors.Color`
        The color of the sunlight. Defaults to white.
    point : :class:`compas.geometry.Point`
        The position of the sunlight source in 3D space. Defaults to the origin (0, 0, 0).
    direction : :class:`compas.geometry.Vector`
        The direction vector of the sunlight. Defaults to (-1, -1, -1).
    intensity : float
        The intensity of the sunlight. Defaults to 500.
    helper : bool
        A flag indicating whether a helper visualization is enabled. Defaults to False.
    guid : str
        A unique identifier for the sunlight instance, automatically generated.
    """

    def __init__(
        self,
        color: Color = Color.white(),
        point: Point = Point(0, 0, 0),
        direction: Vector = Vector(-1, -1, -1),
        intensity: float = 500,
        helper: bool = False,
        **kwargs,
    ):
        super().__init__(**kwargs)
        self.color = color
        self.point = point
        self.direction = direction
        self.intensity = intensity
        self.helper = helper
        self.guid = str(uuid.uuid4())

    @property
    def target(self) -> Point:
        return Point(
            self.point.x + self.direction.x,
            self.point.y + self.direction.y,
            self.point.z + self.direction.z,
        )

    def as_dict(self) -> dict:
        return {
            "dispatch": "light",
            "type": "sunlight",
            "color": self.color.hex,
            "x": self.point.x,
            "y": self.point.y,
            "z": self.point.z,
            "tx": self.target.x,
            "ty": self.target.y,
            "tz": self.target.z,
            "intensity": self.intensity,
            "helper": self.helper,
            "guid": self.guid,
        }
