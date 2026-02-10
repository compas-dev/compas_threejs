import uuid

from compas.colors import Color


class AmbientLight:
    def __init__(self, color: Color = Color.white(), intensity: float = 500):
        self.color = color
        self.intensity = intensity
        self.guid = str(uuid.uuid4())

    def as_dict(self) -> dict:
        return {
            "dispatch": "light",
            "type": "ambient_light",
            "guid": self.guid,
            "color": self.color.hex,
            "intensity": self.intensity,
        }
