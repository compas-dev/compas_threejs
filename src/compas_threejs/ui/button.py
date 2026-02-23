import uuid
from typing import Optional

from .ui_element import UIElement


class Button(UIElement):
    def __init__(self, text, action, label: Optional[str] = None, **kwargs):
        super().__init__(**kwargs)
        self.text = text
        self.action = action
        self.label = label
        self.guid = str(uuid.uuid4())

    def as_dict(self):
        return {
            "dispatch": "ui",
            "type": "button",
            "text": self.text,
            "variant": "outline",
            "label": self.label,
            "guid": self.guid,
        }
