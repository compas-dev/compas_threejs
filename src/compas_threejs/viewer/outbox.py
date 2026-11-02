import asyncio
import threading
from contextlib import contextmanager

import compas_pb


class Outbox:
    """Sends outgoing messages to the frontend, queuing them until the server is ready."""

    def __init__(self, server):
        self.server = server
        self._queue = []
        # Per thread: the messages gathered by an open `batch()`, or None.
        self._batches = threading.local()

    @contextmanager
    def batch(self):
        """Gathers what this thread sends until the block ends, then sends it all at once -
        one WebSocket frame per client rather than one per message (see
        `AppServer.broadcast_many`). Fewer, larger frames cost less on both ends: one hop
        to the event loop here, one frame for the frontend to take in.

        Each message from the frontend is handled in one (see `App.on_message`), so
        whatever a handler changes reaches the viewer together. A block inside another
        joins it; other threads' messages are not held back. See `send_batch` for messages
        that must go before the block ends.
        """
        if getattr(self._batches, "entries", None) is not None:
            yield
            return
        self._batches.entries = []
        try:
            yield
        finally:
            entries, self._batches.entries = self._batches.entries, None
            self._send(entries)

    def send_batch(self):
        """Sends what this thread's open `batch()` gathered so far, and goes on gathering -
        for what the user must see while a long handler runs (a loading spinner)."""
        entries = getattr(self._batches, "entries", None)
        if entries:
            self._send(list(entries))
            entries.clear()

    def send_bytes(
        self,
        binary_data: bytes,
        obj_id: str = "",
        *,
        persist: bool = True,
        workspace_id: str = "main",
        remove_key=None,
        broadcast: bool = True,
    ):
        """Sends raw binary data now if the server is running, otherwise queues it - or,
        inside a `batch()`, when the batch ends.

        `remove_key`, if given, tells the server to drop that key from its persisted scene
        state - used so a removed object's earlier "add" broadcast isn't replayed to clients
        that connect (or reconnect) after the removal.

        `workspace_id=None` sends to every workspace (see `AppServer.broadcast`).

        `broadcast`, if False, still persists `binary_data` under `obj_id` for future
        reconnects but skips sending it to clients already connected - used to silently
        refresh the reconnect-replay snapshot after already notifying live clients through
        a smaller message (see `Workspace.transform_geometry`).
        """
        self._add((binary_data, obj_id, persist, workspace_id, remove_key, broadcast))

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
        # "ui" messages are one-off toasts - a client reconnecting later shouldn't see a
        # stale one replayed. "spinner" is the opposite: it's a *state* (loading or not),
        # same idea as camera position/background color above - if a client's connection
        # drops mid-load and reconnects, it needs to see the CURRENT spinner state (still
        # loading, or long since finished), not silently miss the "stop" it never received
        # while disconnected and get stuck showing a spinner forever. See Workspace.
        # start_spinner/stop_spinner, which pass the stable obj_id="spinner" that makes
        # each call overwrite the previous one instead of piling up as separate entries.
        persist = dispatch != "ui" and not is_remove
        self.send_bytes(binary_data, obj_id or "", persist=persist, workspace_id=workspace_id, remove_key=remove_key)

    def forget(self, key, *, workspace_id: str = "main"):
        """Drops a previously persisted entry without broadcasting anything live.

        Use for cleanup that doesn't need its own visual effect on connected clients - e.g. an
        orphaned material entry whose geometry is already being removed separately (the
        geometry's own removal broadcast is what visually clears the scene; the material slot
        just needs to stop being replayed on future reconnects).
        """
        self._add((None, "", False, workspace_id, key, True))

    def flush(self):
        """Sends any messages that were queued before the server was ready."""
        if not self.server.get_loop():
            return
        queue, self._queue = self._queue, []
        self._send(queue)

    def _add(self, entry):
        """Gathers `entry` - (binary_data, obj_id, persist, workspace_id, remove_key,
        broadcast) - into this thread's open batch, or sends it."""
        entries = getattr(self._batches, "entries", None)
        if entries is not None:
            entries.append(entry)
        else:
            self._send([entry])

    def _send(self, entries):
        """Hands `entries` to the server's event loop, in order - or queues them until
        the server is ready."""
        if not entries:
            return
        loop = self.server.get_loop()
        if not loop:
            self._queue.extend(entries)
        elif len(entries) == 1:
            binary_data, obj_id, persist, workspace_id, remove_key, broadcast = entries[0]
            asyncio.run_coroutine_threadsafe(
                self.server.broadcast(binary_data, obj_id, persist=persist, workspace_id=workspace_id, remove_key=remove_key, broadcast=broadcast),
                loop,
            )
        else:
            asyncio.run_coroutine_threadsafe(self.server.broadcast_many(entries), loop)
