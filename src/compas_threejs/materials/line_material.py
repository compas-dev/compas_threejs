from uuid import uuid4

from compas.colors import Color

from .generic_material import GenericMaterial


class LineMaterial(GenericMaterial):
    """
    Represents the material properties for rendering lines in a 3D scene.

    Parameters
    ----------
    color : Color, optional
        The color of the line. Default is blue.
    """

    def __init__(self, color: Color = Color.blue(), linewidth: int = 2, opacity: float = 1.0):
        self.color = color
        self.opacity = opacity
        self._geometry_guid = ""
        self.guid = str(uuid4())

    def as_dict(self) -> dict:
        return {
            "dispatch": "material",
            "type": "line_material",
            "geometry_guid": self._geometry_guid,
            "color": self.color.hex,
            "opacity": self.opacity,
            "guid": self.guid,
        }
