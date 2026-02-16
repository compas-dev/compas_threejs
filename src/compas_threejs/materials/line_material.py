from uuid import uuid4

from compas.colors import Color


class LineMaterial:
    def __init__(self, color: Color = Color.blue(), linewidth: int = 2):
        self.color = color
        self.linewidth = linewidth
        self._geometry_guid = ""
        self.guid = str(uuid4())

    def as_dict(self) -> dict:
        return {
            "dispatch": "material",
            "type": "line_material",
            "geometry_guid": self._geometry_guid,
            "color": self.color.hex,
            "linewidth": self.linewidth,
            "guid": self.guid,
        }
