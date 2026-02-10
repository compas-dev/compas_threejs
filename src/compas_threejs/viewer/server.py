import asyncio
import threading

import uvicorn
from fastapi import FastAPI, WebSocket, WebSocketDisconnect

app = FastAPI()
clients = set()
server_loop = None
scene_state = {}
shutdown_event = threading.Event()


@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    clients.add(websocket)

    current_state = scene_state.copy()

    for guid, buffer in current_state.items():
        await websocket.send_bytes(buffer)

    try:
        while True:
            await websocket.receive_bytes()
    except WebSocketDisconnect:
        clients.discard(websocket)


async def broadcast(binary_data: bytes, obj_id: str = None):

    key = obj_id or str(len(scene_state))
    scene_state[key] = binary_data

    if not clients:
        return

    # Send to everyone currently connected
    await asyncio.gather(
        *(ws.send_bytes(binary_data) for ws in clients), return_exceptions=True
    )


def run_server(port=9001):
    """This function now creates and runs the server with a robust shutdown procedure."""
    global server_loop
    server_loop = asyncio.new_event_loop()
    asyncio.set_event_loop(server_loop)

    config = uvicorn.Config(app, host="127.0.0.1", port=port, log_level="warning")
    server = uvicorn.Server(config)

    try:
        # Run the main server task
        server_loop.run_until_complete(main_server_task(server))
    finally:
        # After the main task is done, run the final cleanup task.
        server_loop.run_until_complete(cleanup_task())
        server_loop.close()


async def main_server_task(server):
    """The main task that runs the server and waits for a shutdown signal."""
    # Start the server
    server_task = asyncio.create_task(server.serve())

    # Wait until the shutdown event is set from another thread
    await asyncio.to_thread(shutdown_event.wait)

    # Once the event is set, tell the server to gracefully exit
    server.should_exit = True
    await server_task


async def cleanup_task():
    """A final task that runs after the server has stopped."""
    # Give uvicorn a brief moment to close all connections and tasks.
    # This is the key to preventing the "Task was destroyed" errors.
    await asyncio.sleep(0.1)


def stop_server():
    """This function now simply sets the event to signal shutdown."""
    # This is thread-safe and signals the main_server_task to stop.
    shutdown_event.set()


def get_server_loop():
    return server_loop
