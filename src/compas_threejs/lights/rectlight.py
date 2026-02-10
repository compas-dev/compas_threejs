import uuid

from compas.colors import Color
from compas.geometry import Point


class RectLight:
    def __init__(
        self,
        point: Point = Point(0, 0, 0),
        target: Point = Point(0, -1, 0),
        color: Color = Color.white(),
        intensity: float = 1,
        width: float = 10,
        height: float = 10,
        helper: bool = False,
    ):
        self.point = point
        self.target = target
        self.color = color
        self.intensity = intensity
        self.width = width
        self.height = height
        self.helper = helper
        self.guid = str(uuid.uuid4())

    def as_dict(self) -> dict:
        return {
            "dispatch": "light",
            "type": "rect_light",
            "x": self.point.x,
            "y": self.point.y,
            "z": self.point.z,
            "tx": self.target.x,
            "ty": self.target.y,
            "tz": self.target.z,
            "color": self.color.hex,
            "intensity": self.intensity,
            "width": self.width,
            "height": self.height,
            "helper": self.helper,
            "guid": self.guid,
        }
