import uuid
from typing import Optional

from .ui_element import UIElement


class NumberField(UIElement):
    """A number field is a text field that only accepts numbers.

    Parameters
    ----------
    name : str
        The name of the number field.
    value : float, optional
        The initial value of the number field.
    min : float, optional
        The minimum value of the number field.
    max : float, optional
        The maximum value of the number field.
    step : float, optional
        The step size of the number field.

    """

    def __init__(
        self,
        min: float = 0,
        max: float = 100,
        step: float = 1,
        value: float = 10,
        action=None,
        label: Optional[str] = None,
        **kwargs,
    ):
        super().__init__(**kwargs)
        self.min = min
        self.max = max
        self.step = step
        self.value = value
        self.action = action or ""
        self.label = label or ""
        self.guid = str(uuid.uuid4())

    def as_dict(self):
        return {
            "dispatch": "ui",
            "type": "number_field",
            "min": self.min,
            "max": self.max,
            "step": self.step,
            "value": self.value,
            "label": self.label,
            "guid": self.guid,
        }
