import asyncio
import threading
from collections import defaultdict
from pathlib import Path

import uvicorn
from fastapi import FastAPI
from fastapi import WebSocket
from fastapi import WebSocketDisconnect
from fastapi.staticfiles import StaticFiles


class AppServer:
    """Owns the FastAPI app, websocket connections, and per-workspace scene state for one App."""

    def __init__(self, frontend_dir=None):
        self.workspaces = defaultdict(set)
        self.workspace_states = defaultdict(dict)
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

        # Replay only the history belonging to this specific workspace
        current_state = self.workspace_states[workspace_id].copy()
        for guid, buffer in current_state.items():
            if isinstance(buffer, dict):
                await websocket.send_json(buffer)
            else:
                await websocket.send_bytes(buffer)

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
                        await asyncio.to_thread(self.app_instance.on_message, data, workspace_id)
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
    ):
        """Broadcast binary data or dictionary configurations cleanly to workspace clients."""
        if remove_key is not None:
            # Drops the object's earlier persisted "add" broadcast so it isn't replayed to
            # clients that connect (or reconnect) after this removal.
            self.workspace_states[workspace_id].pop(remove_key, None)
        elif persist:
            key = obj_id or str(len(self.workspace_states[workspace_id]))
            self.workspace_states[workspace_id][key] = binary_data

        if binary_data is None:
            # Pure state cleanup (see Outbox.forget) - nothing to broadcast live.
            return

        target_clients = self.workspaces[workspace_id]
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
