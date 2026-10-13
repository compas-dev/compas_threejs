import asyncio
import unittest

from compas_threejs.viewer.app import App
from compas_threejs.viewer.server import AppServer


class SpinnerPersistenceTest(unittest.TestCase):
    """
    A client whose WebSocket connection drops mid-load and reconnects must see the
    CURRENT spinner state on connect (loading or not), not silently miss whichever
    start/stop call happened to be live at the exact moment it was disconnected and
    get stuck showing a spinner forever - the bug this fix addresses. Two pieces:
    Outbox.send_dict must actually persist "spinner" messages (it used to exclude them,
    same as one-off "ui" toasts, which is right for a toast but wrong for a state), and
    start_spinner/stop_spinner must use a stable obj_id so each call overwrites the
    same persisted slot rather than piling up as separate history entries a reconnect
    could replay out of order.
    """

    def test_send_dict_persists_spinner_but_not_ui_messages(self):
        # No server running - Outbox.send_bytes queues rather than broadcasting (see
        # test_object_lifecycle_dispatch.py's own note on this), which lets the queued
        # (obj_id, persist) pair be inspected directly without a live event loop.
        app = App()

        app.outbox.send_dict({"dispatch": "spinner", "visible": True}, workspace_id="test", obj_id="spinner")
        app.outbox.send_dict({"dispatch": "ui", "text": "hello"}, workspace_id="test")

        persist_by_obj_id = {entry[1]: entry[2] for entry in app.outbox._queue}
        self.assertTrue(persist_by_obj_id["spinner"])
        self.assertFalse(persist_by_obj_id[""])  # the "ui" message's obj_id defaults to ""

    def test_workspace_start_and_stop_spinner_use_the_same_stable_obj_id(self):
        app = App()

        app.main.start_spinner("Loading...")
        app.main.stop_spinner()

        obj_ids = [entry[1] for entry in app.outbox._queue]
        self.assertEqual(obj_ids, ["spinner", "spinner"])

    def test_broadcast_overwrites_the_persisted_spinner_entry_instead_of_piling_up(self):
        # Exercises AppServer.broadcast directly - persistence bookkeeping only happens
        # there (Outbox.send_bytes just schedules a call to it onto the event loop), and
        # it runs fine with no connected clients (persist bookkeeping happens before the
        # "any clients?" check), so no live server/WebSocket is needed here either.
        server = AppServer()

        asyncio.run(server.broadcast(b"start", obj_id="spinner", persist=True, workspace_id="test"))
        self.assertEqual(dict(server.workspace_states["test"]), {"spinner": b"start"})

        asyncio.run(server.broadcast(b"stop", obj_id="spinner", persist=True, workspace_id="test"))

        # Still exactly one persisted entry, holding the LATEST state - not two entries
        # (one stale) that a reconnecting client could replay in the wrong order.
        self.assertEqual(dict(server.workspace_states["test"]), {"spinner": b"stop"})


if __name__ == "__main__":
    unittest.main()
