import asyncio

import compas_pb


class Outbox:
    """Sends outgoing messages to the frontend, queuing them until the server is ready."""

    def __init__(self, server):
        self.server = server
        self._queue = []

    def send_bytes(self, binary_data: bytes, obj_id: str = "", *, persist: bool = True, workspace_id: str = "main"):
        """Sends raw binary data now if the server is running, otherwise queues it."""
        loop = self.server.get_loop()
        if loop:
            asyncio.run_coroutine_threadsafe(
                self.server.broadcast(binary_data, obj_id, persist=persist, workspace_id=workspace_id),
                loop,
            )
        else:
            self._queue.append((binary_data, obj_id, persist, workspace_id))

    def send_dict(self, message: dict, *, workspace_id: str = "main"):
        """Serializes a dictionary message and sends it."""
        binary_data = compas_pb.pb_dump_bts(message)
        dispatch = message.get("dispatch", "")
        persist = dispatch not in ("ui", "remove_object")
        self.send_bytes(binary_data, "", persist=persist, workspace_id=workspace_id)

    def flush(self):
        """Sends any messages that were queued before the server was ready."""
        loop = self.server.get_loop()
        if not loop:
            return
        for binary_data, obj_id, persist, workspace_id in self._queue:
            asyncio.run_coroutine_threadsafe(
                self.server.broadcast(binary_data, obj_id, persist=persist, workspace_id=workspace_id),
                loop,
            )
        self._queue.clear()
