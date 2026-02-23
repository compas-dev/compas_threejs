from uuid import uuid4

from compas.colors import Color

from .generic_material import GenericMaterial


class PointMaterial(GenericMaterial):
    """
    Represents the material properties for rendering points in a 3D scene.

    Parameters
    ----------
    color : Color, optional
        The color of the point. Default is red.
    size : int, optional
        The size of the point. Default is 5.
    """

    def __init__(self, color: Color = Color.red(), size: float = 1):
        self.color = color
        self.size = size
        self._geometry_guid = ""
        self.guid = str(uuid4())

    def as_dict(self) -> dict:
        return {
            "dispatch": "material",
            "type": "point_material",
            "geometry_guid": self._geometry_guid,
            "color": self.color.hex,
            "size": self.size,
            "guid": self.guid,
        }
