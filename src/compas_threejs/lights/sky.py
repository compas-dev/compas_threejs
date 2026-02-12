import uuid


class Sky:
    def __init__(
        self,
        turbidity: float = 5,
        rayleigh: float = 0.15,
        mie_coefficient: float = 0.002,
        mie_directional_g: float = 0.95,
        azimuth: float = 45,
        elevation: float = 20,
    ):
        self.turbidity = turbidity
        self.rayleigh = rayleigh
        self.mie_coefficient = mie_coefficient
        self.mie_directional_g = mie_directional_g
        self.azimuth = azimuth
        self.elevation = elevation
        self.guid = str(uuid.uuid4())

    def as_dict(self) -> dict:
        return {
            "dispatch": "light",
            "type": "sky",
            "turbidity": self.turbidity,
            "rayleigh": self.rayleigh,
            "mie_coefficient": self.mie_coefficient,
            "mie_directional_g": self.mie_directional_g,
            "azimuth": self.azimuth,
            "elevation": self.elevation,
            "guid": self.guid,
        }
