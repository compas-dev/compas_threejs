import uuid

from compas.colors import Color
from compas.geometry import Point, Vector


class Sunlight:
    def __init__(
        self,
        color: Color = Color.white(),
        point: Point = Point(0, 0, 0),
        direction: Vector = Vector(-1, -1, -1),
        intensity: float = 500,
        helper: bool = False,
    ):
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
