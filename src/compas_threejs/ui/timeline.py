import uuid
from typing import Optional

from .ui_element import UIElement


class Timeline(UIElement):
    """A dedicated timeline component for scrubbing through time-based data.

    Parameters
    ----------
    total_time : float
        The maximum time (in seconds) of the trajectory.
    step : float, optional
        The scrub increment step size. Default is 0.01.
    value : float, optional
        The initial time value. Default is 0.0.
    action : callable, optional
        The callback function to execute when the timeline is scrubbed.
    """

    def __init__(
        self,
        total_time: float,
        step: float = 0.01,
        value: float = 0.0,
        action = None,
        label: Optional[str] = None,
        **kwargs
    ):
        super().__init__(**kwargs)
       
        self.guid = str(uuid.uuid4())
        self.total_time = total_time
        self.step = step
        self.value = value
        self.action = action
        self.label = label

    def as_dict(self):
        return {
            "dispatch": "ui",
            "type": "timeline",
            "guid": self.guid,
            "total_time": self.total_time,
            "step": self.step,
            "value": self.value,
            "label": self.label
        }