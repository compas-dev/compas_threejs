import asyncio
import threading
from pathlib import Path

import uvicorn
from fastapi import FastAPI, Request, WebSocket, WebSocketDisconnect
from fastapi.staticfiles import StaticFiles

app = FastAPI()

clients = set()
server_loop = None
scene_state = {}
shutdown_event = threading.Event()
viewer_instance = None


# 1. SPECIFIC ROUTES FIRST (The WebSocket)
@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    clients.add(websocket)
    current_state = scene_state.copy()
    for guid, buffer in current_state.items():
        await websocket.send_bytes(buffer)
    try:
        while True:
            data = await websocket.receive_bytes()
            if viewer_instance:
                viewer_instance.on_message(data)
    except WebSocketDisconnect:
        clients.discard(websocket)


@app.post("/broadcast")
async def broadcast_message(request: Request):
    binary_data = await request.body()
    await broadcast(binary_data, "")
    return {"status": "message broadcasted"}


# 2. CATCH-ALL STATIC FILES LAST
# We point this to the 'dist' folder where your compiled frontend lives
dist_dir = Path(__file__).parent / "frontend"
app.mount("/", StaticFiles(directory=dist_dir, html=True), name="frontend")


async def broadcast(binary_data: bytes, obj_id: str = None):
    key = obj_id or str(len(scene_state))
    scene_state[key] = binary_data
    if not clients:
        return
    await asyncio.gather(
        *(ws.send_bytes(binary_data) for ws in clients), return_exceptions=True
    )


def run_server(port=9001, viewer=None):
    global server_loop, viewer_instance
    viewer_instance = viewer
    server_loop = asyncio.new_event_loop()
    asyncio.set_event_loop(server_loop)

    # Note: We run on the websocket_port (9001 by default)
    config = uvicorn.Config(app, host="127.0.0.1", port=port, log_level="warning")
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
