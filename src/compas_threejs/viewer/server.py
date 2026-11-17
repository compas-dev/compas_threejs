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
    """Owns the FastAPI app, websocket connections, and per-workspace scene state for one App."""

    def __init__(self, frontend_dir=None):
        self.workspaces = defaultdict(set)
        self.workspace_states = defaultdict(dict)
        # State sent to every workspace (`workspace_id=None` in `broadcast`), e.g. a plugin's
        # button state, replayed to each tab before that tab's own state.
        self.shared_state = {}
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
        self.workspaces[workspace_id].add(websocket)

        # Replay the shared state, then only the history belonging to this specific workspace
        current_state = [*self.shared_state.values(), *self.workspace_states[workspace_id].values()]
        await self._send_in_order(websocket, current_state)

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
                            await asyncio.to_thread(self.app_instance.on_message, data, workspace_id)
                        except Exception:
                            # A failing message must not end the tab's connection.
                            console.print_exception()
                elif "bytes" in message:
                    data = message["bytes"]
                    await self.broadcast(data, workspace_id=workspace_id)

        except WebSocketDisconnect:
            pass
        finally:
            self.workspaces[workspace_id].discard(websocket)

    async def broadcast(
        self,
        binary_data: bytes,
        obj_id: str = None,
        persist: bool = True,
        workspace_id: str = "main",
        remove_key=None,
        broadcast: bool = True,
    ):
        """Broadcast binary data or dictionary configurations cleanly to workspace clients.

        `workspace_id=None` sends to the clients of every workspace, and persists in the
        shared state that every workspace replays.

        `broadcast`, if False, still applies the persist/remove_key bookkeeping above but
        skips sending anything to already-connected clients - used to silently refresh a
        persisted snapshot for future reconnects only (see `Outbox.send_bytes`).
        """
        self._keep(binary_data, obj_id, persist, workspace_id, remove_key)

        if binary_data is None:
            # Pure state cleanup (see Outbox.forget) - nothing to broadcast live.
            return

        if not broadcast:
            return

        target_clients = self._clients(workspace_id)
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
        remove_key, broadcast) tuples, as `Outbox` gathers them - in order, but sending each
        client what it gets of them as one frame (see `pack_batch`)."""
        outgoing = defaultdict(list)  # client -> its messages, in order
        for binary_data, obj_id, persist, workspace_id, remove_key, broadcast in entries:
            self._keep(binary_data, obj_id, persist, workspace_id, remove_key)
            if binary_data is not None and broadcast:
                for ws in self._clients(workspace_id):
                    outgoing[ws].append(binary_data)
        await asyncio.gather(*(self._send_in_order(ws, messages) for ws, messages in outgoing.items()), return_exceptions=True)

    def _keep(self, binary_data, obj_id, persist, workspace_id, remove_key):
        """The persisted state's bookkeeping for one message (see `broadcast`)."""
        state = self.shared_state if workspace_id is None else self.workspace_states[workspace_id]
        if remove_key is not None:
            # Drops the object's earlier persisted "add" broadcast so it isn't replayed to
            # clients that connect (or reconnect) after this removal.
            state.pop(remove_key, None)
        elif persist:
            key = obj_id or str(len(state))
            state[key] = binary_data

    def _clients(self, workspace_id):
        if workspace_id is None:
            return set().union(*self.workspaces.values())
        return self.workspaces[workspace_id]

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
