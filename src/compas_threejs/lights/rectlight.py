import uuid

from compas.colors import Color
from compas.geometry import Point

from .light import Light


class RectLight(Light):
    """
    A rectangular light source.

    The `RectLight` class represents a light source with a rectangular shape,
    defined by its position, target direction, color, intensity, width, and height.

    Attributes
    ----------
    point : :class:`compas.geometry.Point`
        The position of the light source in 3D space. Defaults to the origin (0, 0, 0).
    target : :class:`compas.geometry.Point`
        The target point that the light is directed towards. Defaults to (0, -1, 0).
    color : :class:`compas.colors.Color`
        The color of the light. Defaults to white.
    intensity : float
        The intensity of the light. Defaults to 1.
    width : float
        The width of the rectangular light source. Defaults to 10.
    height : float
        The height of the rectangular light source. Defaults to 10.
    helper : bool
        Whether to display a helper visualization for the light. Defaults to False.
    guid : str
        A unique identifier for the light instance, automatically generated.
    """

    def __init__(
        self,
        point: Point = Point(0, 0, 0),
        target: Point = Point(0, -1, 0),
        color: Color = Color.white(),
        intensity: float = 1,
        width: float = 10,
        height: float = 10,
        helper: bool = False,
        **kwargs,
    ):
        super().__init__(**kwargs)
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
