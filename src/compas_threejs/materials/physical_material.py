import math
from typing import Optional
from uuid import uuid4

from compas.colors import Color

from .material import Material


class PhysicalMaterial(Material):
    def __init__(
        self,
        color: Color = Color.white(),
        metalness: float = 0,
        roughness: float = 1,
        emissive: Color = Color.black(),
        emissive_intensity: float = 0,
        flat_shading: bool = False,
        wireframe: bool = False,
        anisotropy: float = 0.0,
        anisotropy_rotation: float = 0.0,
        attenuation_color: Color = Color.white(),
        attenuation_distance: Optional[float] = None,
        clearcoat: float = 0.0,
        clearcot_roughness: float = 0.0,
        dispersion: float = 0.0,
        ior: float = 1.5,
        iridescence: float = 0.0,
        iridescenceior: float = 1.3,
        iridescence_thickness_range: list[float] = [100, 400],
        reflectivity: float = 0.5,
        sheen: float = 0,
        sheen_color: Color = Color.black(),
        sheen_roughness: float = 1.0,
        specular_color: Color = Color.white(),
        specular_intensity: float = 1.0,
        thickness: float = 0.0,
        transmission: float = 0.0,
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
        self.anisotropy = anisotropy
        self.anisotropy_rotation = anisotropy_rotation
        self.attenuation_color = attenuation_color
        self.attenuation_distance = attenuation_distance
        self.clearcoat = clearcoat
        self.clearcot_roughness = clearcot_roughness
        self.dispersion = dispersion
        self.ior = ior
        self.iridescence = iridescence
        self.iridescenceior = iridescenceior
        self.iridescence_thickness_range = iridescence_thickness_range
        self.reflectivity = reflectivity
        self.sheen = sheen
        self.sheen_color = sheen_color
        self.sheen_roughness = sheen_roughness
        self.specular_color = specular_color
        self.specular_intensity = specular_intensity
        self.thickness = thickness
        self.transmission = transmission
        self._geometry_guid = ""
        self.guid = str(uuid4())

    def as_dict(self) -> dict:
        data = {
            "dispatch": "material",
            "type": "physical_material",
            "geometry_guid": self._geometry_guid,
            "guid": self.guid,
            "color": self.color.hex,
            "metalness": self.metalness,
            "roughness": self.roughness,
            "emissive": self.emissive.hex,
            "emissive_intensity": self.emissive_intensity,
            "flat_shading": self.flat_shading,
            "wireframe": self.wireframe,
            "anisotropy": self.anisotropy,
            "anisotropy_rotation": self.anisotropy_rotation,
            "attenuation_color": self.attenuation_color.hex,
            "clearcoat": self.clearcoat,
            "clearcoat_roughness": self.clearcot_roughness,
            "dispersion": self.dispersion,
            "ior": self.ior,
            "iridescence": self.iridescence,
            "iridescence_ior": self.iridescenceior,
            "iridescence_thickness_start": self.iridescence_thickness_range[0],
            "iridescence_thickness_end": self.iridescence_thickness_range[1],
            "reflectivity": self.reflectivity,
            "sheen": self.sheen,
            "sheen_color": self.sheen_color.hex,
            "sheen_roughness": self.sheen_roughness,
            "specular_color": self.specular_color.hex,
            "specular_intensity": self.specular_intensity,
            "thickness": self.thickness,
            "transmission": self.transmission,
        }
        if self.attenuation_distance is not None:
            data["attenuation_distance"] = self.attenuation_distance
        return data

    @property
    def anisotropy(self) -> float:
        return self._anisotropy

    @anisotropy.setter
    def anisotropy(self, value: float):
        if not isinstance(value, (int, float)):
            raise TypeError("anisotropy must be a number")
        if not (0 <= value <= 1):
            raise ValueError("anisotropy must be between 0 and 1")
        self._anisotropy = value

    @property
    def anisotropy_rotation(self) -> float:
        """The rotation of the anisotropy in tangent, bitangent space, measured in radians counter-clockwise from the tangent."""
        return self._anisotropy_rotation

    @anisotropy_rotation.setter
    def anisotropy_rotation(self, value: float):
        if not isinstance(value, (int, float)):
            raise TypeError("anisotropy_rotation must be a number")
        self._anisotropy_rotation = value

    @property
    def attenuation_color(self) -> Color:
        """The color that white light turns into due to absorption when reaching the attenuation distance."""
        return self._attenuation_color

    @attenuation_color.setter
    def attenuation_color(self, value: Color):
        if not isinstance(value, Color):
            raise TypeError("attenuation_color must be an instance of Color")
        self._attenuation_color = value

    @property
    def attenuation_distance(self) -> Optional[float]:
        """Average distance light travels before attenuation.

        ``None`` leaves the distance unbounded, matching the Three.js default.
        Explicit values are expressed in world-space units and must be finite
        and greater than zero.
        """
        return self._attenuation_distance

    @attenuation_distance.setter
    def attenuation_distance(self, value: Optional[float]):
        if value is None:
            self._attenuation_distance = None
            return
        if not isinstance(value, (int, float)):
            raise TypeError("attenuation_distance must be a number or None")
        if not math.isfinite(value) or value <= 0:
            raise ValueError("attenuation_distance must be finite and greater than zero")
        self._attenuation_distance = value

    @property
    def clearcoat(self) -> float:
        """Represents the intensity of the clear coat layer, from 0.0 to 1.0."""
        return self._clearcoat

    @clearcoat.setter
    def clearcoat(self, value: float):
        if not isinstance(value, (int, float)):
            raise TypeError("clearcoat must be a number")
        if not (0 <= value <= 1):
            raise ValueError("clearcoat must be between 0.0 and 1.0")
        self._clearcoat = value

    @property
    def clearcot_roughness(self) -> float:
        """Roughness of the clear coat layer, from 0.0 to 1.0."""
        return self._clearcot_roughness

    @clearcot_roughness.setter
    def clearcot_roughness(self, value: float):
        if not isinstance(value, (int, float)):
            raise TypeError("clearcot_roughness must be a number")
        if not (0 <= value <= 1):
            raise ValueError("clearcot_roughness must be between 0.0 and 1.0")
        self._clearcot_roughness = value

    @property
    def dispersion(self) -> float:
        """Defines the strength of the angular separation of colors (chromatic aberration)
        transmitting through a relatively clear volume. Any value zero or larger is valid;
        the typical range of realistic values is [0, 1].
        """
        return self._dispersion

    @dispersion.setter
    def dispersion(self, value: float):
        if not isinstance(value, (int, float)):
            raise TypeError("dispersion must be a number")
        if value < 0:
            raise ValueError("dispersion must be zero or larger")
        self._dispersion = value

    @property
    def ior(self) -> float:
        """Index-of-refraction for non-metallic materials, from 1.0 to 2.333."""
        return self._ior

    @ior.setter
    def ior(self, value: float):
        if not isinstance(value, (int, float)):
            raise TypeError("ior must be a number")
        if not (1.0 <= value <= 2.333):
            raise ValueError("ior must be between 1.0 and 2.333")
        self._ior = value

    @property
    def iridescence(self) -> float:
        """The intensity of the iridescence layer, simulating RGB color shift based on the angle between the surface and the viewer, from 0.0 to 1.0."""
        return self._iridescence

    @iridescence.setter
    def iridescence(self, value: float):
        if not isinstance(value, (int, float)):
            raise TypeError("iridescence must be a number")
        if not (0.0 <= value <= 1.0):
            raise ValueError("iridescence must be between 0.0 and 1.0")
        self._iridescence = value

    @property
    def iridescence_ior(self) -> float:
        """Strength of the iridescence RGB color shift effect, represented by an index-of-refraction. Between 1.0 to 2.333."""
        return self._iridescence_ior

    @iridescence_ior.setter
    def iridescence_ior(self, value: float):
        if not isinstance(value, (int, float)):
            raise TypeError("iridescence_ior must be a number")
        if not (1.0 <= value <= 2.333):
            raise ValueError("iridescence_ior must be between 1.0 and 2.333")
        self._iridescence_ior = value

    @property
    def iridescence_thickness_range(self) -> list:
        """Array of exactly 2 elements specifying the iridescence layer's minimum and maximum
        thickness. Iridescence layer thickness has an effect equivalent to the one thickness has
        on IOR. Default is [100, 400].
        """
        return self._iridescence_thickness_range

    @iridescence_thickness_range.setter
    def iridescence_thickness_range(self, value: list):
        if not isinstance(value, list) or len(value) != 2:
            raise TypeError("iridescence_thickness_range must be a list of exactly 2 numbers")
        if not all(isinstance(v, (int, float)) for v in value):
            raise TypeError("iridescence_thickness_range must contain only numbers")
        if value[0] < 0 or value[1] < 0:
            raise ValueError("iridescence_thickness_range values must be non-negative")
        if value[0] > value[1]:
            raise ValueError("iridescence_thickness_range minimum value must not exceed maximum value")
        self._iridescence_thickness_range = value

    @property
    def reflectivity(self) -> float:
        """Degree of reflectivity, from 0.0 to 1.0. Default is 0.5, which corresponds to an index-of-refraction of 1.5.

        This models the reflectivity of non-metallic materials. It has no effect when metalness is 1.0.
        """
        return self._reflectivity

    @reflectivity.setter
    def reflectivity(self, value: float):
        if not isinstance(value, (int, float)):
            raise TypeError("reflectivity must be a number")
        if not (0.0 <= value <= 1.0):
            raise ValueError("reflectivity must be between 0.0 and 1.0")
        self._reflectivity = value

    @property
    def sheen(self) -> float:
        """The intensity of the sheen layer, from 0.0 to 1.0."""
        return self._sheen

    @sheen.setter
    def sheen(self, value: float):
        if not isinstance(value, (int, float)):
            raise TypeError("sheen must be a number")
        if not (0.0 <= value <= 1.0):
            raise ValueError("sheen must be between 0.0 and 1.0")
        self._sheen = value

    @property
    def sheen_color(self) -> Color:
        """The sheen tint. Default is (0, 0, 0)."""
        return self._sheen_color

    @sheen_color.setter
    def sheen_color(self, value: Color):
        if not isinstance(value, Color):
            raise TypeError("sheen_color must be an instance of Color")
        self._sheen_color = value

    @property
    def sheen_roughness(self) -> float:
        """Roughness of the sheen layer, from 0.0 to 1.0. Default is 1."""
        return self._sheen_roughness

    @sheen_roughness.setter
    def sheen_roughness(self, value: float):
        if not isinstance(value, (int, float)):
            raise TypeError("sheen_roughness must be a number")
        if not (0.0 <= value <= 1.0):
            raise ValueError("sheen_roughness must be between 0.0 and 1.0")
        self._sheen_roughness = value

    @property
    def specular_color(self) -> Color:
        """Tints the specular reflection at normal incidence for non-metals only. Default is (1, 1, 1)."""
        return self._specular_color

    @specular_color.setter
    def specular_color(self, value: Color):
        if not isinstance(value, Color):
            raise TypeError("specular_color must be an instance of Color")
        self._specular_color = value

    @property
    def specular_intensity(self) -> float:
        """A float that scales the amount of specular reflection for non-metals only. When set to zero, the model is effectively Lambertian. From 0.0 to 1.0. Default is 1."""
        return self._specular_intensity

    @specular_intensity.setter
    def specular_intensity(self, value: float):
        if not isinstance(value, (int, float)):
            raise TypeError("specular_intensity must be a number")
        if not (0.0 <= value <= 1.0):
            raise ValueError("specular_intensity must be between 0.0 and 1.0")
        self._specular_intensity = value

    @property
    def thickness(self) -> float:
        """The thickness of the volume beneath the surface, given in the coordinate space of the
        mesh. If the value is 0, the material is thin-walled. Otherwise, the material is a volume
        boundary. Default is 0.
        """
        return self._thickness

    @thickness.setter
    def thickness(self, value: float):
        if not isinstance(value, (int, float)):
            raise TypeError("thickness must be a number")
        if value < 0:
            raise ValueError("thickness must be zero or larger")
        self._thickness = value

    @property
    def transmission(self) -> float:
        """Degree of transmission (or optical transparency), from 0.0 to 1.0.

        Thin, transparent or semitransparent plastic or glass materials remain largely reflective,
        even if they are fully transmissive. The transmission property can be used to model these
        materials.

        When transmission is non-zero, opacity should be set to 1.

        Default is 0.
        """
        return self._transmission

    @transmission.setter
    def transmission(self, value: float):
        if not isinstance(value, (int, float)):
            raise TypeError("transmission must be a number")
        if not (0.0 <= value <= 1.0):
            raise ValueError("transmission must be between 0.0 and 1.0")
        self._transmission = value
