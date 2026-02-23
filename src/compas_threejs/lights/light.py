from abc import ABC, abstractmethod


class Light(ABC):
    def __init__(self, **kwargs):
        self.attributes = kwargs

    @abstractmethod
    def as_dict(self):
        raise NotImplementedError
