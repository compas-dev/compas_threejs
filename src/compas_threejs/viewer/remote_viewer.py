import asyncio
import json
import threading
import time
from typing import Optional

import compas_pb
import websockets
from compas.colors import Color
from compas.geometry import Point
from rich.console import Console

from compas_threejs.materials.generic_material import GenericMaterial
from compas_threejs.metadata import Metadata
from compas_threejs.ui import Button

console = Console()


class RemoteViewer:
    """
    The RemoteViewer class connects to a running Viewer server via WebSocket and allows
    adding geometries, materials, metadata, and other elements dynamically from a separate process.

    This class mirrors the public API of the Viewer class, enabling full control over the scene
    without running the server locally.

    Attributes
    ----------
    host : str
        The host address of the Viewer server. Default is "localhost".
    port : int
        The WebSocket port of the Viewer server. Default is 9001.

    Example
    -------
    Terminal 1: Start the Viewer server
        >>> viewer = Viewer()
        >>> viewer.start()

    Terminal 2: Connect with RemoteViewer
        >>> remote = RemoteViewer()
        >>> remote.connect()
        >>> # Add geometries, materials, etc.
        >>> remote.add_geometry(some_geometry, material=some_material)
    """

    def __init__(self, host: str = "localhost", port: int = 9001):
        """
        Initialize the RemoteViewer.

        Parameters
        ----------
        host : str, optional
            The host address of the Viewer server. Default is "localhost".
        port : int, optional
            The WebSocket port of the Viewer server. Default is 9001.
        """
        self.host = host
        self.port = port
        self.websocket = None
        self._loop = None
        self._loop_thread = None
        self._should_stop = False
        self._background_color = Color(0.9, 0.9, 0.9)
        self._dark_mode = False
        self._camera_damping = True
        self._world_axis = True
        self._picker = True
        self._camera_fov = 60
        self._camera_zoom = 1
        self._camera_position = Point(8, -15, 15)
        self._camera_target = Point(0, 0, 0)
        self._show_edges = False

        # Local registry for tracking objects
        self._geometry_registry = dict()
        self._metadata_registry = dict()

    def _run_event_loop(self):
        """Run the event loop in a background thread."""
        self._loop = asyncio.new_event_loop()
        asyncio.set_event_loop(self._loop)
        self._loop.run_until_complete(self._event_loop_main())

    async def _event_loop_main(self):
        """Main async loop that keeps the connection alive."""
        while not self._should_stop:
            try:
                await asyncio.sleep(0.1)
            except Exception:
                pass

    def _ensure_loop(self):
        """Ensure the event loop is running."""
        if self._loop is None or not self._loop.is_running():
            self._should_stop = False
            self._loop_thread = threading.Thread(
                target=self._run_event_loop, daemon=True
            )
            self._loop_thread.start()
            time.sleep(0.1)  # Let loop start

    def _run_async(self, coro):
        """Run an async coroutine on the event loop."""
        if self._loop is None or not self._loop.is_running():
            self._ensure_loop()
        future = asyncio.run_coroutine_threadsafe(coro, self._loop)  # type: ignore
        try:
            return future.result(timeout=10)
        except Exception as e:
            console.log(f"[red]Error executing async task: {e}[/red]")
            return None

    async def _connect_async(self):
        """Establish WebSocket connection asynchronously."""
        try:
            uri = f"ws://{self.host}:{self.port}/ws"
            # Use ping_interval and ping_timeout to keep connection alive
            self.websocket = await websockets.connect(
                uri, ping_interval=20, ping_timeout=10
            )
            console.log(f"[green]Connected to RemoteViewer at {uri}[/green]")
        except Exception as e:
            console.log(f"[red]Failed to connect to RemoteViewer: {e}[/red]")
            raise

    def connect(self):
        """Connect to the Viewer server."""
        try:
            self._ensure_loop()
            self._run_async(self._connect_async())
        except Exception:
            raise

    def is_connected(self) -> bool:
        """Check if the RemoteViewer is connected to the server.

        Returns
        -------
        bool
            True if connected, False otherwise.
        """
        return self.websocket is not None

    async def _send_bytes_async(self, data: bytes):
        """Send binary data over WebSocket asynchronously."""
        if self.websocket is None:
            console.log("[yellow]WebSocket not connected. Cannot send data.[/yellow]")
            return
        try:
            await self.websocket.send(data)
        except Exception as e:
            console.log(f"[red]Error sending data: {e}[/red]")

    def _send_bytes(self, data: bytes):
        """Send binary data over WebSocket."""
        if self.websocket is None:
            console.log("[yellow]WebSocket not connected. Cannot send data.[/yellow]")
            return
        try:
            self._run_async(self._send_bytes_async(data))
        except Exception as e:
            console.log(f"[red]Error in _send_bytes: {e}[/red]")

    def _send_dictionary_message(self, msg: dict):
        """
        Send a dictionary message to the server as binary protobuf data.

        This method serializes the dictionary message to binary protobuf format
        and sends it through the WebSocket. The server will broadcast it to
        all connected clients.

        Parameters
        ----------
        msg : dict
            The message dictionary to send.
        """
        try:
            binary_data = compas_pb.pb_dump_bts(msg)
            self._send_bytes(binary_data)
        except Exception as e:
            console.log(f"[red]Error sending dictionary message: {e}[/red]")

    async def _disconnect_async(self):
        """Disconnect from the Viewer server asynchronously."""
        if self.websocket:
            try:
                await self.websocket.close()
            except Exception:
                pass
            self.websocket = None
            console.log("[green]Disconnected from RemoteViewer[/green]")

    def disconnect(self):
        """Disconnect from the Viewer server."""
        try:
            if self._loop and self._loop.is_running():
                self._run_async(self._disconnect_async())
                self._should_stop = True
                # Give it a moment to clean up
                time.sleep(0.2)
        except Exception:
            pass

    def __enter__(self):
        self.connect()
        return self

    def __exit__(self, exc_type, exc_val, exc_tb):
        self.disconnect()

    # ---- PROPERTIES (Viewer Settings) ---------------------------------------------------------------

    @property
    def background_color(self) -> Color:
        """Set or get the background color of the viewer."""
        return self._background_color

    @background_color.setter
    def background_color(self, value: Color):
        self._background_color = value
        msg = {
            "dispatch": "scene",
            "type": "background_color",
            "color": self._background_color.hex,
        }
        self._send_dictionary_message(msg)

    @property
    def camera_damping(self) -> bool:
        """Set or get whether camera damping is enabled."""
        return self._camera_damping

    @camera_damping.setter
    def camera_damping(self, value: bool):
        self._camera_damping = value
        msg = {
            "dispatch": "scene",
            "type": "controls_damping",
            "damping": self._camera_damping,
        }
        self._send_dictionary_message(msg)

    @property
    def world_axis(self) -> bool:
        """Set or get whether to show the world axis in the scene."""
        return self._world_axis

    @world_axis.setter
    def world_axis(self, value: bool):
        self._world_axis = value
        msg = {
            "dispatch": "scene",
            "type": "world_axis",
            "show": self._world_axis,
        }
        self._send_dictionary_message(msg)

    @property
    def picker(self) -> bool:
        """Set or get whether to enable the object picker in the scene."""
        return self._picker

    @picker.setter
    def picker(self, value: bool):
        self._picker = value
        msg = {
            "dispatch": "scene",
            "type": "picker",
            "enabled": self._picker,
        }
        self._send_dictionary_message(msg)

    @property
    def camera_fov(self) -> float:
        """Set or get the camera field of view (FOV) in degrees."""
        return self._camera_fov

    @camera_fov.setter
    def camera_fov(self, value: float):
        self._camera_fov = value
        msg = {
            "dispatch": "scene",
            "type": "camera_fov",
            "fov": self._camera_fov,
        }
        self._send_dictionary_message(msg)

    @property
    def dark_mode(self) -> bool:
        """Set or get dark mode for the viewer."""
        return self._dark_mode

    @dark_mode.setter
    def dark_mode(self, value: bool):
        self._dark_mode = bool(value)
        msg = {
            "dispatch": "theme",
            "type": "background_mode",
            "mode": "dark" if self._dark_mode else "light",
        }
        self._send_dictionary_message(msg)

    @property
    def camera_zoom(self) -> float:
        """Set or get the camera zoom level."""
        return self._camera_zoom

    @camera_zoom.setter
    def camera_zoom(self, value: float):
        self._camera_zoom = value
        msg = {
            "dispatch": "scene",
            "type": "camera_zoom",
            "zoom": self._camera_zoom,
        }
        self._send_dictionary_message(msg)

    @property
    def camera_position(self) -> Point:
        """Set or get the camera position in world coordinates."""
        return self._camera_position

    @camera_position.setter
    def camera_position(self, value):
        point = value if isinstance(value, Point) else Point(*value)
        self._camera_position = point
        msg = {
            "dispatch": "scene",
            "type": "camera_position",
            "x": point.x,
            "y": point.y,
            "z": point.z,
        }
        self._send_dictionary_message(msg)

    @property
    def camera_target(self) -> Point:
        """Set or get the camera target point used by orbit controls."""
        return self._camera_target

    @camera_target.setter
    def camera_target(self, value):
        point = value if isinstance(value, Point) else Point(*value)
        self._camera_target = point
        msg = {
            "dispatch": "scene",
            "type": "camera_target",
            "x": point.x,
            "y": point.y,
            "z": point.z,
        }
        self._send_dictionary_message(msg)

    @property
    def show_edges(self) -> bool:
        """Set or get whether to show edges of the mesh."""
        return self._show_edges

    @show_edges.setter
    def show_edges(self, value: bool):
        self._show_edges = value
        msg = {
            "dispatch": "scene",
            "type": "show_edges",
            "show": self._show_edges,
        }
        self._send_dictionary_message(msg)

    # ---- GEOMETRY -------------------------------------------------------------------------------

    def add_geometry(
        self,
        geometry,
        material: Optional[GenericMaterial] = None,
        metadata: Optional[Metadata] = None,
        actions: Optional[list[Button]] = None,
    ):
        """
        Adds a geometry object to the viewer. Optionally, a material can be associated with the geometry.

        Parameters
        ----------
        geometry : compas.geometry.Geometry | compas.datastructures.Mesh
            The geometry object to be added to the viewer. It must have a unique GUID.
        material : compas_threejs.material.Material, optional
            An optional material to be associated with the geometry.
        metadata : compas_threejs.metadata.Metadata, optional
            An optional metadata object to be associated with the geometry.
        actions : list of compas_threejs.ui.Button, optional
            An optional list of Button objects representing actions that can be performed on the geometry.
        """
        obj_id = geometry.guid

        # Send geometry
        binary_data = compas_pb.pb_dump_bts(geometry)
        self._send_bytes(binary_data)

        # Send material if provided
        if material:
            if hasattr(material, "_geometry_guid"):
                material._geometry_guid = str(obj_id)  # type: ignore
            material_data = compas_pb.pb_dump_bts(material.as_dict())
            self._send_bytes(material_data)

        # Store metadata and actions locally
        if metadata:
            self._metadata_registry[str(obj_id)] = metadata

        if actions:
            # Actions are stored locally; they would need custom handling for callbacks
            pass

        # Save the geometry for future reference
        self._geometry_registry[str(obj_id)] = geometry

    def add_geometries(self, geometries: list, material=None):
        """
        Adds multiple geometry objects to the viewer.

        Parameters
        ----------
        geometries : list
            A list of geometry objects to be added.
        material : compas_threejs.material.Material, optional
            An optional material to be associated with all geometries.
        """
        for geo in geometries:
            self.add_geometry(geo, material)

    def update_geometry(self, geometry):
        """
        Updates an existing geometry object in the viewer.

        Parameters
        ----------
        geometry : compas.geometry.Geometry | compas.datastructures.Mesh
            The geometry object to be updated.
        """
        obj_id = geometry.guid
        binary_data = compas_pb.pb_dump_bts(geometry)
        self._send_bytes(binary_data)
        self._geometry_registry[str(obj_id)] = geometry

    def remove_object(self, geometry):
        """
        Removes a geometry object from the viewer.

        Parameters
        ----------
        geometry : compas.geometry.Geometry | compas.datastructures.Mesh
            The geometry object to be removed.
        """
        obj_id = geometry.guid
        message = {"dispatch": "remove_object", "guid": str(obj_id)}
        self._send_dictionary_message(message)
        if str(obj_id) in self._geometry_registry:
            del self._geometry_registry[str(obj_id)]

    # ---- METADATA -------------------------------------------------------------------------------

    def update_metadata(self, metadata):
        """
        Updates the metadata associated with a geometry object in the viewer.

        Parameters
        ----------
        metadata : compas_threejs.metadata.Metadata
            The metadata object containing updated information. It must have a `guid` attribute.
        """
        for key, value in self._metadata_registry.items():
            if value.guid == metadata.guid:
                self._metadata_registry[key] = metadata
                break

    # ---- TEXT -----------------------------------------------------------------------------------

    def add_text(self, text, material=None):
        """
        Adds a text object to the viewer. Optionally, a material can be associated with the text.

        Parameters
        ----------
        text : compas.geometry.Text
            The text object to be added to the viewer. It must have a unique GUID.
        material : compas_threejs.material.Material, optional
            An optional material to be associated with the text.
        """
        obj_id = text.guid
        binary_data = compas_pb.pb_dump_bts(text.as_dict())
        self._send_bytes(binary_data)

        if material:
            if hasattr(material, "_geometry_guid"):
                material._geometry_guid = obj_id  # type: ignore
            material_data = compas_pb.pb_dump_bts(material.as_dict())
            self._send_bytes(material_data)

    # ---- LIGHTS ---------------------------------------------------------------------------------

    def add_light(self, light):
        """
        Adds a light object to the viewer.

        Parameters
        ----------
        light : compas_threejs.lights.Light
            The light object to be added to the viewer.
        """
        binary_data = compas_pb.pb_dump_bts(light.as_dict())
        self._send_bytes(binary_data)

    def update_light(self, light):
        """
        Updates an existing light object in the viewer.

        Parameters
        ----------
        light : compas_threejs.lights.Light
            The light object to be updated.
        """
        self.add_light(light)

    # ---- MATERIALS ------------------------------------------------------------------------------

    def update_material(self, material):
        """
        Updates an existing material in the viewer.

        Parameters
        ----------
        material : compas_threejs.material.Material
            The material object to be updated.
        """
        binary_data = compas_pb.pb_dump_bts(material.as_dict())
        self._send_bytes(binary_data)

    # ---- UI ELEMENTS ----------------------------------------------------------------------------

    def add_ui_element(self, element):
        """
        Adds a UI element (e.g., button) to the viewer.

        Parameters
        ----------
        element : compas_threejs.ui.UIElement
            The UI element to be added to the viewer.
        """
        if element.action is None:
            console.log(
                f"[yellow]Warning: UI element with GUID {element.guid} has no associated action.[/yellow]"
            )
        self._send_dictionary_message(element.as_dict())

    # ---- UTILITY METHODS ------------------------------------------------------------------------

    def show(self):
        """
        Opens the viewer in the default web browser.
        Note: This requires connecting to a Viewer server instance that is already running.
        """
        import webbrowser

        webbrowser.open(f"http://{self.host}:{self.port}/")
