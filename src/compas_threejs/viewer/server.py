import asyncio
import threading
from collections import defaultdict
from pathlib import Path

import uvicorn
from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from fastapi.staticfiles import StaticFiles

app = FastAPI()

# Track active connections and scene states per workspace dynamically
workspaces = defaultdict(set)
workspace_states = defaultdict(dict)
viewer_instance = None

server_loop = None
shutdown_event = threading.Event()


# 1. SPECIFIC ROUTES FIRST (The WebSocket)
@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()

    # Grab workspace ID from the query parameter (e.g. /ws?workspace=beam_123)
    workspace_id = websocket.query_params.get("workspace", "main")
    workspaces[workspace_id].add(websocket)

    # Replay only the history belonging to this specific workspace
    current_state = workspace_states[workspace_id].copy()
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
                if viewer_instance:
                    # Handles button clicks back to python
                    viewer_instance.on_message(data)
            elif "bytes" in message:
                data = message["bytes"]
                await broadcast(data, workspace_id=workspace_id)

    except WebSocketDisconnect:
        pass
    finally:
        workspaces[workspace_id].discard(websocket)


# 2. CATCH-ALL STATIC FILES LAST
dist_dir = Path(__file__).parent / "frontend"
app.mount("/", StaticFiles(directory=dist_dir, html=True), name="frontend")


async def broadcast(
    binary_data: bytes,
    obj_id: str = None,
    persist: bool = True,
    workspace_id: str = "main",
):
    """Broadcast binary data or dictionary configurations cleanly to workspace clients."""
    if persist:
        key = obj_id or str(len(workspace_states[workspace_id]))
        workspace_states[workspace_id][key] = binary_data

    target_clients = workspaces[workspace_id]
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


def run_server(host="0.0.0.0", port=9001, viewer=None):
    global server_loop, viewer_instance
    viewer_instance = viewer
    server_loop = asyncio.new_event_loop()
    asyncio.set_event_loop(server_loop)

    config = uvicorn.Config(app, host=host, port=port, log_level="warning")
    server = uvicorn.Server(config)

    try:
        server_loop.run_until_complete(main_server_task(server))
    finally:
        server_loop.run_until_complete(cleanup_task())
        server_loop.close()


async def main_server_task(server):
    server_task = asyncio.create_task(server.serve())
    await asyncio.to_thread(shutdown_event.wait)
    server.should_exit = True
    await server_task


async def cleanup_task():
    await asyncio.sleep(0.1)


def stop_server():
    shutdown_event.set()


def get_server_loop():
    return server_loop
