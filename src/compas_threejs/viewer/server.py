import asyncio
import threading
from collections import defaultdict
from pathlib import Path

import uvicorn
from fastapi import FastAPI
from fastapi import WebSocket
from fastapi import WebSocketDisconnect
from fastapi.staticfiles import StaticFiles
from rich.console import Console

from .connections import ConnectionManager
from .session import DEFAULT_SESSION_ID

console = Console()

# The first byte of a frame holding several messages (see `pack_batch`). No protobuf
# message starts with it: it would be field number 0, which protobuf doesn't allow.
BATCH_MARKER = b"\x00"


def pack_batch(messages):
    """One WebSocket frame holding `messages` (bytes), in order: `BATCH_MARKER`, then
    each message as its length (4 bytes, little-endian) and its bytes. The frontend
    unpacks it into the messages again (compas_threejs_ts's `unpackBatch`)."""
    return BATCH_MARKER + b"".join(len(message).to_bytes(4, "little") + message for message in messages)


class AppServer:
    """Owns the FastAPI app for one App, and sends to its connections (see `ConnectionManager`)."""

    def __init__(self, frontend_dir=None):
        self.connections = ConnectionManager()
        # Which session a connection belongs to: ``resolve_session(websocket)`` returns a
        # `Session`, or None for the default one (until sessions are switched on).
        self.resolve_session = None
        self.app_instance = None

        self.loop = None
        self.shutdown_event = threading.Event()

        self._frontend_dir = Path(frontend_dir) if frontend_dir else Path(__file__).parent / "frontend"
        self._frontend_mounted = False

        self.fastapi_app = FastAPI()
        self.fastapi_app.add_api_websocket_route("/ws", self._websocket_endpoint)

    def add_static_mount(self, path, directory, name=None):
        """
        Serves `directory` at `path` on this same app/port, alongside the main frontend.

        Must be called before `App.start()`. The main frontend is deliberately mounted at "/"
        last of all, right as the server starts (see `_mount_frontend`/`run`), specifically so
        that anything registered here first takes priority over it - a catch-all mount at "/"
        would otherwise shadow every path, since Starlette tries routes in registration order.
        """
        self.fastapi_app.mount(path, StaticFiles(directory=Path(directory), html=True), name=name or path)

    def add_route(self, path, endpoint, methods=("GET",)):
        """
        Registers an additional HTTP route on this same app/port. Same before-`App.start()`
        timing requirement as `add_static_mount`, for the same reason.
        """
        self.fastapi_app.add_api_route(path, endpoint, methods=list(methods))

    def _mount_frontend(self):
        if not self._frontend_mounted:
            self.fastapi_app.mount("/", StaticFiles(directory=self._frontend_dir, html=True), name="frontend")
            self._frontend_mounted = True

    async def _websocket_endpoint(self, websocket: WebSocket):
        await websocket.accept()

        # Grab workspace ID from the query parameter (e.g. /ws?workspace=beam_123)
        workspace_id = websocket.query_params.get("workspace", "main")
        session = self.resolve_session(websocket) if self.resolve_session else None
        session_id = session.id if session is not None else DEFAULT_SESSION_ID
        if session is not None:
            session.connections += 1

        # Replay everyone's state, then this session's; every workspace's, then this one's.
        await self._send_in_order(websocket, self.connections.connect(websocket, session_id, workspace_id))

        try:
            while True:
                try:
                    message = await websocket.receive()
                except RuntimeError as e:
                    # Catch Starlette's "Cannot call receive once a disconnect message has been received" safely
                    if "disconnect" in str(e).lower():
                        break
                    raise

                if "text" in message:
                    data = message["text"].encode("utf-8")
                    if self.app_instance:
                        # Handles button clicks / actions back to python. Run off the event loop
                        # thread so a long-running handler (e.g. loading a large model) doesn't
                        # block the loop from delivering messages the handler sends in the
                        # meantime (e.g. a start_spinner() call made at the top of the handler).
                        try:
                            await asyncio.to_thread(self.app_instance.on_message, data, workspace_id, *([session] if session else []))
                        except Exception:
                            # A failing message must not end the tab's connection.
                            console.print_exception()
                elif "bytes" in message:
                    data = message["bytes"]
                    await self.broadcast(data, workspace_id=workspace_id, session_id=session_id)

        except WebSocketDisconnect:
            pass
        finally:
            self.connections.disconnect(websocket, session_id, workspace_id)
            if session is not None:
                session.connections -= 1

    async def broadcast(
        self,
        binary_data: bytes,
        obj_id: str = None,
        persist: bool = True,
        workspace_id: str = "main",
        remove_key=None,
        broadcast: bool = True,
        session_id: str = DEFAULT_SESSION_ID,
    ):
        """Broadcast binary data or dictionary configurations cleanly to workspace clients.

        It goes to `workspace_id` of `session_id`; `workspace_id=None` sends to every
        workspace of the session, and persists in what each of them replays. The default
        session's messages reach every session (see `ConnectionManager`).

        `broadcast`, if False, still applies the persist/remove_key bookkeeping above but
        skips sending anything to already-connected clients - used to silently refresh a
        persisted snapshot for future reconnects only (see `Outbox.send_bytes`).
        """
        self.connections.keep(binary_data, obj_id, persist, session_id, workspace_id, remove_key)

        if binary_data is None:
            # Pure state cleanup (see Outbox.forget) - nothing to broadcast live.
            return

        if not broadcast:
            return

        target_clients = self.connections.clients(session_id, workspace_id)
        if not target_clients:
            return

        # Dynamically build standard tasks depending on data payload type
        tasks = []
        for ws in target_clients:
            if isinstance(binary_data, dict):
                tasks.append(ws.send_json(binary_data))
            else:
                tasks.append(ws.send_bytes(binary_data))

        await asyncio.gather(*tasks, return_exceptions=True)

    async def broadcast_many(self, entries):
        """`broadcast` of each of `entries` - (binary_data, obj_id, persist, workspace_id,
        remove_key, broadcast[, session_id]) tuples, as `Outbox` gathers them - in order, but
        sending each client what it gets of them as one frame (see `pack_batch`)."""
        outgoing = defaultdict(list)  # client -> its messages, in order
        for entry in entries:
            binary_data, obj_id, persist, workspace_id, remove_key, broadcast = entry[:6]
            session_id = entry[6] if len(entry) > 6 else DEFAULT_SESSION_ID
            self.connections.keep(binary_data, obj_id, persist, session_id, workspace_id, remove_key)
            if binary_data is not None and broadcast:
                for ws in self.connections.clients(session_id, workspace_id):
                    outgoing[ws].append(binary_data)
        await asyncio.gather(*(self._send_in_order(ws, messages) for ws, messages in outgoing.items()), return_exceptions=True)

    @property
    def workspace_states(self) -> dict:
        """The default session's persisted messages, by workspace (read-only use)."""
        return {wid: saved for (sid, wid), saved in self.connections._saved.items() if sid == DEFAULT_SESSION_ID and wid is not None}

    @property
    def shared_state(self) -> dict:
        """What every tab of every session replays first (read-only use)."""
        return self.connections.saved(DEFAULT_SESSION_ID, None)

    @staticmethod
    async def _send_in_order(websocket, messages):
        """Sends `messages` to one client, in order: each run of binary ones as one frame
        (see `pack_batch`), a dictionary as JSON."""
        run = []
        for message in [*messages, None]:
            if run and not isinstance(message, bytes):
                await websocket.send_bytes(run[0] if len(run) == 1 else pack_batch(run))
                run = []
            if isinstance(message, dict):
                await websocket.send_json(message)
            elif isinstance(message, bytes):
                run.append(message)

    def run(self, host="0.0.0.0", port=9001, app_instance=None):
        self.app_instance = app_instance
        self._mount_frontend()
        self.loop = asyncio.new_event_loop()
        asyncio.set_event_loop(self.loop)

        config = uvicorn.Config(self.fastapi_app, host=host, port=port, log_level="warning")
        server = uvicorn.Server(config)

        try:
            self.loop.run_until_complete(self._serve_until_shutdown(server))
        finally:
            self.loop.run_until_complete(self._cleanup())
            self.loop.close()

    async def _serve_until_shutdown(self, server):
        server_task = asyncio.create_task(server.serve())
        await asyncio.to_thread(self.shutdown_event.wait)
        server.should_exit = True
        await server_task

    async def _cleanup(self):
        await asyncio.sleep(0.1)

    def stop(self):
        self.shutdown_event.set()

    def get_loop(self):
        return self.loop
