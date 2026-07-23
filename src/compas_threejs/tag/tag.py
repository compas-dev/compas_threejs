from typing import Optional
from uuid import uuid4

from compas.colors import Color
from compas.geometry import Point


class TextTag:
    """
    Constructs a new TextTag instance.

    A TextTag is a screen-space text label anchored to a 3D point in the scene,
    always facing the camera (rendered as an HTML overlay, not 3D geometry).

    Parameters
    ----------
    point : Point
        The 3D position the tag is anchored to.
    text : str
        The text content of the tag.
    color : Color, optional
        The color of the tag text. If not provided, the viewer falls back to
        its default theme color.

    """

    def __init__(
        self,
        point: Point = Point(0, 0, 0),
        text: str = "",
        color: Optional[Color] = None,
        **kwargs,
    ):
        super().__init__(**kwargs)
        self.point = point
        self.text = text
        self.color = color
        self.guid = str(uuid4())

    def as_dict(self) -> dict:
        data = {
            "dispatch": "text_tag",
            "guid": self.guid,
            "text": self.text,
            "x": self.point.x,
            "y": self.point.y,
            "z": self.point.z,
        }
        if self.color is not None:
            data["color"] = self.color.hex
        return data
