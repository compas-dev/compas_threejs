from uuid import uuid4

from compas.colors import Color
from compas.geometry import Point


class PointLight:
    """

    new PointLight( color : number | Color | string, intensity : number, distance : number, decay : number )
    Constructs a new point light.

    color
    The light's color.

    Default is 0xffffff.

    intensity
    The light's strength/intensity measured in candela (cd).

    Default is 1.

    distance
    Maximum range of the light. 0 means no limit.

    Default is 0.

    decay
    The amount the light dims along the distance of the light.

    Default is 2.

    """

    def __init__(
        self,
        point: Point = Point(0, 0, 0),
        color: Color = Color.white(),
        intensity: float = 1,
        distance: float = 0,
        decay: float = 2,
        helper: bool = False,
    ):
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
