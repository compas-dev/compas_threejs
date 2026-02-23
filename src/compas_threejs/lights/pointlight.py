from uuid import uuid4

from compas.colors import Color
from compas.geometry import Point

from .light import Light


class PointLight(Light):
    """

    Constructs a new PointLight instance.

    Parameters
    ----------
    color : int | Color | str, optional
        The color of the light. Can be specified as an integer, a Color object, or a string.
        Default is 0xffffff (white).

    intensity : float, optional
        The intensity or strength of the light, measured in candela (cd).
        Default is 1.

    distance : float, optional
        The maximum range of the light. A value of 0 indicates no limit.
        Default is 0.

    decay : float, optional
        The rate at which the light diminishes over distance.
        Default is 2.

    """

    def __init__(
        self,
        point: Point = Point(0, 0, 0),
        color: Color = Color.white(),
        intensity: float = 100,
        distance: float = 0,
        decay: float = 2,
        helper: bool = False,
        **kwargs,
    ):
        super().__init__(**kwargs)
        self.point = point
        self.color = color
        self.intensity = intensity
        self.distance = distance
        self.decay = decay
        self.helper = helper
        self.guid = str(uuid4())

    def as_dict(self) -> dict:
        return {
            "dispatch": "light",
            "type": "point_light",
            "x": self.point.x,
            "y": self.point.y,
            "z": self.point.z,
            "color": self.color.hex,
            "intensity": self.intensity,
            "distance": self.distance,
            "decay": self.decay,
            "helper": self.helper,
            "guid": self.guid,
        }

    @property
    def color(self) -> Color:
        return self._color

    @color.setter
    def color(self, value: Color):
        if not isinstance(value, Color):
            raise TypeError("color must be an instance of Color")
        self._color = value
