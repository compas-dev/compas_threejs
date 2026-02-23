import uuid

from .light import Light


class Sky(Light):
    """
    The Sky class represents a type of light source that simulates the sky's appearance
    based on various atmospheric parameters.

    Attributes:
        turbidity (float): The amount of particles in the atmosphere that scatter light.
                           Higher values result in a hazier sky. Default is 5.
        rayleigh (float): The scattering coefficient for Rayleigh scattering, which affects
                          the sky's blue color intensity. Default is 0.15.
        mie_coefficient (float): The scattering coefficient for Mie scattering, which affects
                                 the appearance of haze and fog. Default is 0.002.
        mie_directional_g (float): The anisotropy factor for Mie scattering, controlling the
                                   directionality of scattered light. Default is 0.95.
        azimuth (float): The horizontal angle of the sun in degrees, measured clockwise from
                         the north. Default is 45.
        elevation (float): The vertical angle of the sun in degrees, measured from the horizon.
                           Default is 20.
        guid (str): A unique identifier for the Sky instance, generated automatically.
    """

    def __init__(
        self,
        turbidity: float = 5,
        rayleigh: float = 0.15,
        mie_coefficient: float = 0.002,
        mie_directional_g: float = 0.95,
        azimuth: float = 45,
        elevation: float = 20,
        **kwargs,
    ):
        super().__init__(**kwargs)
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
