import uuid
from typing import Optional

from compas.geometry import Point, Vector


class TextGeometry:
    """
    parameter `font` can  have the following values: "helvetiker", "gentilis" or "optimer"
    """

    def __init__(
        self,
        text: str,
        font: str = "helvetiker",
        size: float = 2,
        depth: float = 0.5,
        bold: bool = False,
        point: Point = Point(0, 0, 0),
        direction: Vector = Vector(1, 0, 0),
        up: Vector = Vector(0, 0, 1),
        centered: bool = False,
    ):
        self.text = text
        self.font = font
        self.size = size
        self.depth = depth
        self.bold = bold
        self.point = point
        self.direction = direction
        self.up = up
        self.centered = centered
        self.guid = str(uuid.uuid4())

    @property
    def __data__(self):
        return self.as_dict()

    def as_dict(self):
        return {
            "dispatch": "text",
            "type": "text_geometry",
            "text": self.text,
            "font": self.font,
            "size": self.size,
            "depth": self.depth,
            "weight": self._weight,
            "point_x": self.point.x,
            "point_y": self.point.y,
            "point_z": self.point.z,
            "direction_x": self.direction.x,
            "direction_y": self.direction.y,
            "direction_z": self.direction.z,
            "up_x": self.up.x,
            "up_y": self.up.y,
            "up_z": self.up.z,
            "centered": self.centered,
            "guid": self.guid,
        }

    @property
    def bold(self) -> bool:
        return self._bold

    @bold.setter
    def bold(self, value: bool):
        if value:
            self._weight = "bold"
            self._bold = True
        else:
            self._weight = "regular"
            self._bold = False
