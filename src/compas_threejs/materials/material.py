from uuid import uuid4

from compas.colors import Color

from .generic_material import GenericMaterial


class Material(GenericMaterial):
    """
    Represents the standard material properties for a 3D object.

    Parameters
    ----------
    color : Color, optional
        The base color of the material. Default is white.
    metalness : float, optional
        The metalness of the material, between 0 and 1. Default is 0 (non-metallic).
    roughness : float, optional
        The roughness of the material, between 0 and 1. Default is 1 (fully rough).
    emissive : Color, optional
        The emissive color of the material. Default is black (no emission).
    emissive_intensity : float, optional
        The intensity of the emissive color. Default is 0 (no emission).
    flat_shading : bool, optional
        Whether to use flat shading. Default is False (smooth shading).
    wireframe : bool, optional
        Whether to render the material as a wireframe. Default is False (solid rendering).
    """

    def __init__(
        self,
        color: Color = Color.white(),
        metalness: float = 0,
        roughness: float = 1,
        emissive: Color = Color.black(),
        emissive_intensity: float = 0,
        flat_shading: bool = False,
        opacity: float = 1,
        wireframe: bool = False,
        **kwargs,
    ):
        super().__init__(**kwargs)
        self.color = color
        self.metalness = metalness
        self.roughness = roughness
        self.emissive = emissive
        self.emissive_intensity = emissive_intensity
        self.flat_shading = flat_shading
        self.wireframe = wireframe
        self.opacity = opacity
        self._geometry_guid = ""
        self.guid = str(uuid4())

    def as_dict(self) -> dict:
        return {
            "dispatch": "material",
            "type": "standard_material",
            "geometry_guid": self._geometry_guid,
            "color": self.color.hex,
            "metalness": self.metalness,
            "roughness": self.roughness,
            "emissive": self.emissive.hex,
            "emissive_intensity": self.emissive_intensity,
            "flat_shading": self.flat_shading,
            "opacity": self.opacity,
            "wireframe": self.wireframe,
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
    def emissive(self) -> Color:
        return self._emissive

    @emissive.setter
    def emissive(self, value: Color):
        if not isinstance(value, Color):
            raise TypeError("emissive must be an instance of Color")
        self._emissive = value

    @property
    def metalness(self) -> float:
        return self._metalness

    @metalness.setter
    def metalness(self, value: float):
        if not (0 <= value <= 1):
            raise ValueError("metalness must be between 0 and 1")
        self._metalness = value

    @property
    def roughness(self) -> float:
        return self._roughness

    @roughness.setter
    def roughness(self, value: float):
        if not (0 <= value <= 1):
            raise ValueError("roughness must be between 0 and 1")
        self._roughness = value

    @property
    def emissive_intensity(self) -> float:
        return self._emissive_intensity

    @emissive_intensity.setter
    def emissive_intensity(self, value: float):
        if value < 0:
            raise ValueError("emissive_intensity must be non-negative")
        self._emissive_intensity = value

    @property
    def flat_shading(self) -> bool:
        return self._flat_shading

    @flat_shading.setter
    def flat_shading(self, value: bool):
        if not isinstance(value, bool):
            raise TypeError("flat_shading must be a boolean")
        self._flat_shading = value

    @property
    def opacity(self) -> float:
        return self._opacity

    @opacity.setter
    def opacity(self, value: float):
        if not (0.0 <= value <= 1.0):
            raise ValueError("Opacity must be between 0 and 1")
        self._opacity = value

    @property
    def wireframe(self) -> bool:
        return self._wireframe

    @wireframe.setter
    def wireframe(self, value: bool):
        if not isinstance(value, bool):
            raise TypeError("wireframe must be a boolean")
        self._wireframe = value
