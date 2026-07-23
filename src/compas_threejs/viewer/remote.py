import asyncio
import threading
import time

import compas_pb
import websockets
from rich.console import Console

from .inbox import Inbox
from .workspace import Workspace

console = Console()


class RemoteOutbox:
    """Sends outgoing messages to a running App over a websocket connection, queuing until connected.

    Implements the same `send_bytes`/`send_dict` interface as `Outbox`, so a `Workspace` can be
    driven by either one without knowing whether it's talking to an in-process server or a remote
    connection.
    """

    def __init__(self, remote):
        self.remote = remote
        self._queue = []

    def send_bytes(self, binary_data: bytes, obj_id: str = "", *, persist: bool = True, workspace_id: str = "main"):
        if self.remote.connected and self.remote.loop and self.remote.websocket:
            asyncio.run_coroutine_threadsafe(self.remote.websocket.send(binary_data), self.remote.loop)
        else:
            self._queue.append(binary_data)

    def send_dict(self, message: dict, *, workspace_id: str = "main"):
        self.send_bytes(compas_pb.pb_dump_bts(message), "")

    async def _drain(self, websocket):
        """Sends queued messages directly; must be awaited from the connection's own event loop."""
        for binary_data in self._queue:
            await websocket.send(binary_data)
        self._queue.clear()


class Remote:
    """
    The Remote class provides the same interface as App but connects to an existing
    App instance via websocket instead of starting its own server.

    This allows multiple Remote instances to update a single App from different
    terminals or processes.

    Parameters
    ----------
    host : str, optional
        The host address of the App server. Default is "localhost".
    port : int, optional
        The websocket port of the App server. Default is 9001.
    workspace_id : str, optional
        The workspace on the App to connect to. Default is "main".
    """

    def __init__(self, host: str = "localhost", port: int = 9001, workspace_id: str = "main"):
        # Connection settings
        self.host = host
        self.websocket_port = port
        self.ws_url = f"ws://{host}:{port}/ws?workspace={workspace_id}"
        self.websocket = None
        self.connected = False
        self.connection_thread = None
        self.loop = None

        self.outbox = RemoteOutbox(self)
        self.inbox = Inbox()
        self.main = Workspace(self, workspace_id)

    # ---- CONNECTION -------------------------------------------------------------------------

    async def _connect_websocket(self):
        """Establishes and maintains websocket connection."""
        try:
            console.log(f"[green]Connecting to App at {self.ws_url}...[/green]")
            async with websockets.connect(self.ws_url) as websocket:
                self.websocket = websocket
                self.connected = True
                console.log("[green]Connected to App![/green]")

                # Send all messages that were queued while disconnected
                await self.outbox._drain(websocket)

                # Keep connection alive and handle incoming messages
                try:
                    async for message in websocket:
                        # Remote typically doesn't need to receive messages,
                        # but we keep the connection alive
                        pass
                except websockets.exceptions.ConnectionClosed:
                    console.log("[yellow]Connection to App closed[/yellow]")
        except Exception as e:
            console.log(f"[red]Failed to connect to App: {e}[/red]")
        finally:
            self.connected = False
            self.websocket = None

    def _run_event_loop(self):
        """Runs the asyncio event loop in a separate thread."""
        self.loop = asyncio.new_event_loop()
        asyncio.set_event_loop(self.loop)
        try:
            self.loop.run_until_complete(self._connect_websocket())
        finally:
            self.loop.close()

    def connect(self):
        """Connects to the App server."""
        if self.connected:
            console.log("[yellow]Already connected[/yellow]")
            return

        self.connection_thread = threading.Thread(
            target=self._run_event_loop, daemon=True
        )
        self.connection_thread.start()

        # Wait for connection to establish
        timeout = 5.0
        start_time = time.time()
        while not self.connected and (time.time() - start_time) < timeout:
            time.sleep(0.1)

        if not self.connected:
            console.log("[red]Connection timeout[/red]")

    def disconnect(self):
        """Disconnects from the App server."""
        if self.loop and self.websocket:
            asyncio.run_coroutine_threadsafe(self.websocket.close(), self.loop)
        self.connected = False
        console.log("[green]Disconnected from App[/green]")

    # ---- CAMERA / SCENE ATTRIBUTES (forwarded to the workspace) -----------------------------

    @property
    def background_color(self):
        """Set or get the background color of the workspace."""
        return self.main.background_color

    @background_color.setter
    def background_color(self, value):
        self.main.background_color = value

    @property
    def camera_damping(self):
        """Set or get whether camera damping is enabled."""
        return self.main.camera_damping

    @camera_damping.setter
    def camera_damping(self, value):
        self.main.camera_damping = value

    @property
    def camera_fov(self):
        """Set or get the camera field of view (FOV) in degrees."""
        return self.main.camera_fov

    @camera_fov.setter
    def camera_fov(self, value):
        self.main.camera_fov = value

    @property
    def dark_mode(self):
        """Set or get dark mode for the workspace."""
        return self.main.dark_mode

    @dark_mode.setter
    def dark_mode(self, value):
        self.main.dark_mode = value

    @property
    def camera_zoom(self):
        """Set or get the camera zoom level."""
        return self.main.camera_zoom

    @camera_zoom.setter
    def camera_zoom(self, value):
        self.main.camera_zoom = value

    @property
    def camera_position(self):
        """Set or get the camera position in world coordinates."""
        return self.main.camera_position

    @camera_position.setter
    def camera_position(self, value):
        self.main.camera_position = value

    @property
    def camera_target(self):
        """Set or get the camera target point used by orbit controls."""
        return self.main.camera_target

    @camera_target.setter
    def camera_target(self, value):
        self.main.camera_target = value

    @property
    def show_edges(self):
        """Set or get if edges of the mesh should be shown."""
        return self.main.show_edges

    @show_edges.setter
    def show_edges(self, value):
        self.main.show_edges = value

    def set_view(self, view, target=None):
        """Set the workspace's camera view from a preset or explicit point."""
        self.main.set_view(view, target)

    # ---- GEOMETRY / LIGHTS / MATERIALS / TEXT / UI (forwarded to the workspace) -------------

    def add_geometry(self, geometry, material=None, metadata=None, actions=None):
        """Adds a geometry object to the workspace. See `Workspace.add_geometry`."""
        return self.main.add_geometry(geometry, material, metadata, actions)

    def add_geometries(self, geometries: list, material=None):
        """Adds multiple geometry objects to the workspace."""
        self.main.add_geometries(geometries, material)

    def update_geometry(self, geometry):
        """Updates an existing geometry object in the workspace."""
        self.main.update_geometry(geometry)

    def remove_object(self, geometry):
        """Removes a geometry object from the workspace."""
        self.main.remove_object(geometry)

    def hide_geometry(self, geometry):
        """Hides a geometry object in the workspace without removing it."""
        self.main.hide_geometry(geometry)

    def show_geometry(self, geometry):
        """Shows a previously hidden geometry object in the workspace."""
        self.main.show_geometry(geometry)

    def update_metadata(self, metadata):
        """Updates the metadata associated with a geometry object previously added by this Remote."""
        self.inbox.update_metadata(metadata)

    def add_text(self, text, material=None):
        """Adds a text object to the workspace."""
        self.main.add_text(text, material)

    def add_tag(self, tag):
        """Adds a screen-space text tag to the workspace."""
        self.main.add_tag(tag)

    def update_tag(self, tag):
        """Updates an existing text tag in the workspace."""
        self.main.update_tag(tag)

    def hide_tag(self, tag):
        """Hides a text tag in the workspace without removing it."""
        self.main.hide_tag(tag)

    def show_tag(self, tag):
        """Shows a previously hidden text tag in the workspace."""
        self.main.show_tag(tag)

    def add_light(self, light):
        """Adds a light object to the workspace."""
        self.main.add_light(light)

    def update_light(self, light):
        """Updates an existing light object in the workspace."""
        self.main.update_light(light)

    def update_material(self, material):
        """Updates an existing material in the workspace."""
        self.main.update_material(material)

    def add_ui_element(self, element):
        """Adds a UI element (e.g. button) to the workspace."""
        self.main.add_ui_element(element)
