import uuid


class Metadata:
    def __init__(self, **kwargs):
        self.metadata = dict(kwargs)
        self.guid = str(uuid.uuid4())

    def __getitem__(self, key):
        return self.metadata[key]

    def __setitem__(self, key, value):
        self.metadata[key] = value

    def __delitem__(self, key):
        del self.metadata[key]

    def __iter__(self):
        return iter(self.metadata)

    def __len__(self):
        return len(self.metadata)
