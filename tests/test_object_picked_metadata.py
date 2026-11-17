import unittest

from compas_threejs.metadata import Metadata
from compas_threejs.viewer.inbox import Inbox


class _Outbox:
    def __init__(self):
        self.messages = []

    def send_dict(self, message, *, workspace_id="main", remove_key=None, obj_id=None):
        self.messages.append(message)


class _App:
    def __init__(self):
        self.outbox = _Outbox()
        self.inbox = Inbox(self)


class ObjectPickedMetadataTests(unittest.TestCase):
    def setUp(self):
        self.app = _App()
        self.inbox = self.app.inbox

    def pick(self, guid):
        self.inbox._handle_object_picked({"guid": guid}, self.app.outbox, "main")
        return self.app.outbox.messages[-1]

    def test_sends_the_fields_with_their_order(self):
        metadata = Metadata(Type="Beam", Floor="F1", Length="3.48 m")
        self.inbox.register_geometry("beam", object(), metadata)

        message = self.pick("beam")
        self.assertEqual(message["dispatch"], "object_infos")
        # A protobuf map on the way loses the order: it travels along.
        self.assertEqual(message["__order__"], ["Type", "Floor", "Length"])
        self.assertEqual(message["Length"], "3.48 m")
        # The registered metadata isn't changed by sending it.
        self.assertEqual(list(metadata), ["Type", "Floor", "Length"])

    def test_without_metadata_says_so(self):
        message = self.pick("unknown")
        self.assertEqual(message, {"dispatch": "object_infos", "No metadata associated with this object.": ""})


if __name__ == "__main__":
    unittest.main()
