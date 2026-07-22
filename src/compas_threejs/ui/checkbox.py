import uuid
from typing import Optional

from .ui_element import UIElement


class Checkbox(UIElement):
    """
    Checkbox Element
    """

    def __init__(
        self,
        text,
        action,
        default_value: bool = False,
        label: Optional[str] = None,
        **kwargs,
    ):
        super().__init__(**kwargs)
        self.text = text
        self.action = action
        self.default_value = default_value
        self.label = label
        self.guid = str(uuid.uuid4())

    def as_dict(self):
        return {
            "dispatch": "ui",
            "type": "checkbox",
            "text": self.text,
            "variant": "outline",
            "default_value": self.default_value,
            "label": self.label,
            "guid": self.guid,
        }
