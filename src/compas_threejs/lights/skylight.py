import uuid

from compas.colors import Color


class Skylight:
    def __init__(
        self,
        sky_color: Color = Color.white(),
        ground_color: Color = Color.white(),
        intensity: float = 1,
        helper: bool = False,
    ):
        self.sky_color = sky_color
        self.ground_color = ground_color
        self.intensity = intensity
        self.helper = helper
        self.guid = str(uuid.uuid4())

    def as_dict(self) -> dict:
        return {
            "dispatch": "light",
            "type": "skylight",
            "sky_color": self.sky_color.hex,
            "ground_color": self.ground_color.hex,
            "intensity": self.intensity,
            "helper": self.helper,
            "guid": self.guid,
        }
