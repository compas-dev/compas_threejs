import asyncio

import compas_pb


class Outbox:
    """Sends outgoing messages to the frontend, queuing them until the server is ready."""

    def __init__(self, server):
        self.server = server
        self._queue = []

    def send_bytes(
        self,
        binary_data: bytes,
        obj_id: str = "",
        *,
        persist: bool = True,
        workspace_id: str = "main",
        remove_key=None,
    ):
        """Sends raw binary data now if the server is running, otherwise queues it.

        `remove_key`, if given, tells the server to drop that key from its persisted scene
        state - used so a removed object's earlier "add" broadcast isn't replayed to clients
        that connect (or reconnect) after the removal.
        """
        loop = self.server.get_loop()
        if loop:
            asyncio.run_coroutine_threadsafe(
                self.server.broadcast(binary_data, obj_id, persist=persist, workspace_id=workspace_id, remove_key=remove_key),
                loop,
            )
        else:
            self._queue.append((binary_data, obj_id, persist, workspace_id, remove_key))

    def send_dict(self, message: dict, *, workspace_id: str = "main", remove_key=None, obj_id=None):
        """Serializes a dictionary message and sends it.

        `obj_id`, if given, is the persisted state key this message should occupy - pass a
        stable value (e.g. per scene-setting-type) for messages that represent a single
        current value (camera position, background color, ...), so re-sending an updated
        value overwrites its own slot instead of piling up a new persisted entry every time.
        Without it, dict messages fall back to an auto-incrementing key, same as before.
        """
        binary_data = compas_pb.pb_dump_bts(message)
        dispatch = message.get("dispatch", "")
        is_remove = dispatch == "handle_geometry" and message.get("type") == "remove"
        persist = dispatch not in ("ui", "spinner") and not is_remove
        self.send_bytes(binary_data, obj_id or "", persist=persist, workspace_id=workspace_id, remove_key=remove_key)

    def forget(self, key, *, workspace_id: str = "main"):
        """Drops a previously persisted entry without broadcasting anything live.

        Use for cleanup that doesn't need its own visual effect on connected clients - e.g. an
        orphaned material entry whose geometry is already being removed separately (the
        geometry's own removal broadcast is what visually clears the scene; the material slot
        just needs to stop being replayed on future reconnects).
        """
        loop = self.server.get_loop()
        if loop:
            asyncio.run_coroutine_threadsafe(
                self.server.broadcast(None, persist=False, workspace_id=workspace_id, remove_key=key),
                loop,
            )
        else:
            self._queue.append((None, "", False, workspace_id, key))

    def flush(self):
        """Sends any messages that were queued before the server was ready."""
        loop = self.server.get_loop()
        if not loop:
            return
        for binary_data, obj_id, persist, workspace_id, remove_key in self._queue:
            asyncio.run_coroutine_threadsafe(
                self.server.broadcast(binary_data, obj_id, persist=persist, workspace_id=workspace_id, remove_key=remove_key),
                loop,
            )
        self._queue.clear()
