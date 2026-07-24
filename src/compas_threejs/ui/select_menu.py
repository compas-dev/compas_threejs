from __future__ import annotations

import uuid
from typing import Optional

from .ui_element import UIElement


class Selection(UIElement):
    def __init__(
        self,
        options: list[str],
        default_value,
        action=None,
        label: Optional[str] = None,
        **kwargs,
    ):
        super().__init__(**kwargs)
        self.options = options
        self.default_value = default_value
        self.action = action
        self.label = label
        self.guid = str(uuid.uuid4())

    def as_dict(self):
        return {
            "dispatch": "ui",
            "type": "select",
            "label": self.label,
            "options": self.options,
            "default_value": self.default_value,
            "guid": self.guid,
        }
