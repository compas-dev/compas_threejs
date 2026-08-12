import math
import uuid

from compas.colors import Color
from compas.geometry import Point



class SpotLight:
    """
    A class representing a spotlight in a 3D environment.

    The SpotLight class defines a light source that emits light in a specific direction
    with a conical shape. It includes properties for position, target, color, intensity,
    distance, angle, penumbra, and decay, among others.

    Attributes
    ----------
        point: Point
            The position of the spotlight in 3D space.
        target: Point
            The target point that the spotlight is directed towards.
        color: Color
            The color of the light emitted by the spotlight.
        intensity: float
            The brightness of the light. Must be non-negative.
        distance: float
            The maximum range of the light. Must be non-negative.
        angle: float
            The angle of the spotlight's cone in radians. Must be between 0 and π/2.
        penumbra: float
            The softness of the spotlight's edge. Must be between 0 and 1.
        decay: float
            The rate at which the light intensity decreases over distance. Must be non-negative.
        helper: bool
            Whether to display a helper visualization for the spotlight.
        guid: str
            A unique identifier for the spotlight instance.
    """

    def __init__(
        self,
        point: Point = Point(0, 0, 0),
        target: Point = Point(0, 0, -1),
        color: Color = Color.white(),
        intensity: float = 100,
        distance: float = 0,
        angle: float = math.pi / 7,
        penumbra: float = 0,
        decay: float = 1,
        helper: bool = False,
        **kwargs,
    ):
        super().__init__(**kwargs)
        self.point = point
        self.target = target
        self.color = color
        self.intensity = intensity
        self.distance = distance
        self.angle = angle
        self.penumbra = penumbra
        self.decay = decay
        self.helper = helper
        self.guid = str(uuid.uuid4())

    def as_dict(self) -> dict:
        return {
            "dispatch": "light",
            "type": "spot_light",
            "x": self.point.x,
            "y": self.point.y,
            "z": self.point.z,
            "tx": self.target.x,
            "ty": self.target.y,
            "tz": self.target.z,
            "color": self.color.hex,
            "intensity": self.intensity,
            "distance": self.distance,
            "angle": self.angle,
            "penumbra": self.penumbra,
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

    @property
    def intensity(self) -> float:
        return self._intensity

    @intensity.setter
    def intensity(self, value: float):
        if value < 0:
            raise ValueError("Intensity must be non-negative.")
        self._intensity = value

    @property
    def distance(self) -> float:
        return self._distance

    @distance.setter
    def distance(self, value: float):
        if value < 0:
            raise ValueError("Distance must be non-negative.")
        self._distance = value

    @property
    def angle(self) -> float:
        return self._angle

    @angle.setter
    def angle(self, value: float):
        if not (0 < value <= math.pi / 2):
            raise ValueError("Angle must be between 0 and π/2 radians.")
        self._angle = value

    @property
    def penumbra(self) -> float:
        return self._penumbra

    @penumbra.setter
    def penumbra(self, value: float):
        if not (0 <= value <= 1):
            raise ValueError("Penumbra must be between 0 and 1.")
        self._penumbra = value

    @property
    def decay(self) -> float:
        return self._decay

    @decay.setter
    def decay(self, value: float):
        if value < 0:
            raise ValueError("Decay must be non-negative.")
        self._decay = value
