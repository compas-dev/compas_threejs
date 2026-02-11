import uuid
from typing import Optional


class Slider:
    def __init__(
        self,
        min: float = 0,
        max: float = 100,
        step: float = 1,
        default_value: float = 33,
        action=None,
        label: Optional[str] = None,
    ):
        self.min = min
        self.max = max
        self.step = step
        self.default_value = default_value
        self.action = action
        self.label = label
        self.guid = str(uuid.uuid4())

    def as_dict(self):
        return {
            "dispatch": "ui",
            "type": "slider",
            "min": self.min,
            "max": self.max,
            "step": self.step,
            "default_value": self.default_value,
            "label": self.label,
            "guid": self.guid,
        }
