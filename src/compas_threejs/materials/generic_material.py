from abc import ABC, abstractmethod


class GenericMaterial(ABC):
    def __init__(self, **kwargs):
        self.attributes = kwargs

    @abstractmethod
    def as_dict(self):
        raise NotImplementedError
