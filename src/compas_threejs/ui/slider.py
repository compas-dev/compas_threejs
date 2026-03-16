import uuid
from typing import Optional

from .ui_element import UIElement


class Slider(UIElement):
    def __init__(
        self,
        min: float = 0.01,
        max: float = 1.00,
        step: float = 0.01,
        default_value: float = 0.00,
        action=None,
        label: Optional[str] = None,
        **kwargs,
    ):
        super().__init__(**kwargs)
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
