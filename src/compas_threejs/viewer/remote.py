import asyncio
import threading
import time
from typing import Optional

import compas_pb
import websockets
from compas.colors import Color
from compas.geometry import Point
from compas_brep import Brep
from rich.console import Console

from compas_threejs.materials.generic_material import GenericMaterial
from compas_threejs.metadata import Metadata
from compas_threejs.ui import Button

console = Console()


class Remote:
    """
    The Remote class provides the same interface as Viewer but connects to an existing
    Viewer instance via websocket instead of starting its own server.

    This allows multiple Remote instances to update a single Viewer from different
    terminals or processes.

    Parameters
    ----------
    host : str, optional
        The host address of the Viewer server. Default is "localhost".
    port : int, optional
        The websocket port of the Viewer server. Default is 9001.

    Attributes
    ----------
    background_color : Color
        The background color of the viewer.
    camera_damping : bool
        Whether camera damping is enabled.
    camera_fov : float
        The camera field of view (FOV) in degrees.
    camera_zoom : float
        The camera zoom level.
    dark_mode : bool
        Whether to enable dark mode for the viewer.
    camera_position : Point
        The camera position in world coordinates.
    camera_target : Point
        The camera target point used by orbit controls.
    show_edges : bool
        Whether to show edges of the mesh.
    """

    def __init__(self, host: str = "localhost", port: int = 9001):
        # Connection settings
        self.host = host
        self.port = port
        self.ws_url = f"ws://{host}:{port}/ws"
        self.websocket = None
        self.connected = False
        self.connection_thread = None
        self.loop = None

        # Setter Attributes (matching Viewer)
        self._background_color = Color(0.9, 0.9, 0.9)
        self._dark_mode = False
        self._camera_damping = True
        self._camera_fov = 60
        self._camera_zoom = 1
        self._camera_position = Point(8, -15, 15)
        self._camera_target = Point(0, 0, 0)
        self._show_edges = False

        # Registry
        self._geometry_registry = dict()
        self._metadata_registry = dict()
        self._object_actions_registry = dict()
        self._brep_viewmesh_registry = dict()

        # Message queue for when not connected
        self.queued_messages = []

    def __enter__(self):
        return self

    def __exit__(self, *args):
        self.disconnect()

    # ---- PROPERTIES -------------------------------------------------------------------------

    @property
    def background_color(self) -> Color:
        """The background color of the viewer."""
        return self._background_color

    @background_color.setter
    def background_color(self, value: Color):
        """Sets the background color and sends it to the viewer."""
        self._background_color = value
        r, g, b = value.rgb255
        message = {"dispatch": "background_color", "r": r, "g": g, "b": b}
        self._send_dictionary_message(message)

    @property
    def camera_damping(self) -> bool:
        """Whether camera damping is enabled."""
        return self._camera_damping

    @camera_damping.setter
    def camera_damping(self, value: bool):
        """Sets the camera damping and sends it to the viewer."""
        self._camera_damping = value
        message = {"dispatch": "camera_damping", "enabled": value}
        self._send_dictionary_message(message)

    @property
    def camera_fov(self) -> float:
        """The camera field of view (FOV) in degrees."""
        return self._camera_fov

    @camera_fov.setter
    def camera_fov(self, value: float):
        """Sets the camera FOV and sends it to the viewer."""
        self._camera_fov = value
        message = {"dispatch": "camera_fov", "fov": value}
        self._send_dictionary_message(message)

    @property
    def dark_mode(self) -> bool:
        """Whether dark mode is enabled."""
        return self._dark_mode

    @dark_mode.setter
    def dark_mode(self, value: bool):
        """Sets dark mode and sends it to the viewer."""
        self._dark_mode = value
        message = {"dispatch": "dark_mode", "enabled": value}
        self._send_dictionary_message(message)

    @property
    def camera_zoom(self) -> float:
        """The camera zoom level."""
        return self._camera_zoom

    @camera_zoom.setter
    def camera_zoom(self, value: float):
        """Sets the camera zoom and sends it to the viewer."""
        self._camera_zoom = value
        message = {"dispatch": "camera_zoom", "zoom": value}
        self._send_dictionary_message(message)

    @property
    def camera_position(self) -> Point:
        """The camera position in world coordinates."""
        return self._camera_position

    @camera_position.setter
    def camera_position(self, value: Point):
        """Sets the camera position and sends it to the viewer."""
        self._camera_position = value
        x, y, z = value
        message = {"dispatch": "camera_position", "x": x, "y": y, "z": z}
        self._send_dictionary_message(message)

    @property
    def camera_target(self) -> Point:
        """The camera target point."""
        return self._camera_target

    @camera_target.setter
    def camera_target(self, value: Point):
        """Sets the camera target and sends it to the viewer."""
        self._camera_target = value
        x, y, z = value
        message = {"dispatch": "camera_target", "x": x, "y": y, "z": z}
        self._send_dictionary_message(message)

    @property
    def show_edges(self) -> bool:
        """Whether to show edges of meshes."""
        return self._show_edges

    @show_edges.setter
    def show_edges(self, value: bool):
        """Sets edge visibility and sends it to the viewer."""
        self._show_edges = value
        message = {"dispatch": "show_edges", "enabled": value}
        self._send_dictionary_message(message)

    # ---- CONNECTION -------------------------------------------------------------------------

    async def _connect_websocket(self):
        """Establishes and maintains websocket connection."""
        try:
            console.log(f"[green]Connecting to viewer at {self.ws_url}...[/green]")
            async with websockets.connect(self.ws_url) as websocket:
                self.websocket = websocket
                self.connected = True
                console.log("[green]Connected to viewer![/green]")

                # Send all queued messages
                for msg in self.queued_messages:
                    await websocket.send(msg)
                self.queued_messages = []

                # Keep connection alive and handle incoming messages
                try:
                    async for message in websocket:
                        # Remote typically doesn't need to receive messages,
                        # but we keep the connection alive
                        pass
                except websockets.exceptions.ConnectionClosed:
                    console.log("[yellow]Connection to viewer closed[/yellow]")
        except Exception as e:
            console.log(f"[red]Failed to connect to viewer: {e}[/red]")
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
        """Connects to the Viewer server."""
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
        """Disconnects from the Viewer server."""
        if self.loop and self.websocket:
            asyncio.run_coroutine_threadsafe(self.websocket.close(), self.loop)
        self.connected = False
        console.log("[green]Disconnected from viewer[/green]")

    # ---- MESSAGING --------------------------------------------------------------------------

    def _send_binary_message(self, binary_data: bytes):
        """Sends binary data to the viewer."""
        if self.connected and self.loop and self.websocket:
            asyncio.run_coroutine_threadsafe(
                self.websocket.send(binary_data), self.loop
            )
        else:
            # Queue the message if not connected yet
            self.queued_messages.append(binary_data)

    def _send_dictionary_message(self, msg: dict):
        """Converts a dictionary to binary and sends it to the viewer."""
        binary_data = compas_pb.pb_dump_bts(msg)
        self._send_binary_message(binary_data)

    # ---- GEOMETRY METHODS -------------------------------------------------------------------

    def add_geometry(
        self,
        geometry,
        material: Optional[GenericMaterial] = None,
        metadata: Optional[Metadata] = None,
        actions: Optional[list[Button]] = None,
    ):
        """
        Adds a geometry object to the viewer.

        Parameters
        ----------
        geometry : compas.geometry.Geometry | compas.datastructures.Mesh
            The geometry object to be added to the viewer.
        material : compas_threejs.material.Material, optional
            An optional material to be associated with the geometry.
        metadata : compas_threejs.metadata.Metadata, optional
            An optional metadata object to be associated with the geometry.
        actions : list of compas_threejs.ui.Button, optional
            An optional list of Button objects representing actions.

        Returns
        -------
        None
        """
        # Handle Brep geometry
        if isinstance(geometry, Brep):
            brep_id = geometry.guid
            brep_viewmesh = geometry.to_viewmesh()
            self._brep_viewmesh_registry[brep_id] = brep_viewmesh
            geometry = brep_viewmesh

        obj_id = geometry.guid

        # Send material if provided
        if material:
            material._geometry_guid = str(obj_id)
            material_data = compas_pb.pb_dump_bts(material.as_dict())
            self._send_binary_message(material_data)

        if metadata:
            self._metadata_registry[str(obj_id)] = metadata

        if actions:
            self._object_actions_registry[str(obj_id)] = actions

        # Send geometry
        binary_data = compas_pb.pb_dump_bts(geometry)
        self._send_binary_message(binary_data)

        # Save the geometry for future reference
        self._geometry_registry[str(obj_id)] = geometry

    def add_geometries(self, geometries: list, material=None):
        """Adds multiple geometries to the viewer."""
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

        # Handle Brep geometry
        if isinstance(geometry, Brep):
            viewmesh = self._brep_viewmesh_registry.get(geometry.guid)
            if viewmesh:
                obj_id = viewmesh.guid
            geometry = geometry.to_viewmesh()

        binary_data = compas_pb.pb_dump_bts(geometry)
        self._send_binary_message(binary_data)

    def remove_object(self, geometry):
        """
        Removes a geometry object from the viewer.

        Parameters
        ----------
        geometry : compas.geometry.Geometry | compas.datastructures.Mesh
            The geometry object to be removed.
        """
        # Handle Brep geometry
        if isinstance(geometry, Brep):
            viewmesh = self._brep_viewmesh_registry.get(geometry.guid)
            if viewmesh:
                geometry = viewmesh

        obj_id = geometry.guid
        message = {"dispatch": "remove_object", "guid": str(obj_id)}
        self._send_dictionary_message(message)

    def update_metadata(self, geometry, metadata: Metadata):
        """
        Updates metadata for a geometry object.

        Parameters
        ----------
        geometry : compas.geometry.Geometry | compas.datastructures.Mesh
            The geometry object whose metadata is to be updated.
        metadata : compas_threejs.metadata.Metadata
            The new metadata to associate with the geometry.
        """
        obj_id = str(geometry.guid)
        self._metadata_registry[obj_id] = metadata
        message = {"dispatch": "update_metadata", "object_id": obj_id, "data": metadata}
        self._send_dictionary_message(message)

    def add_text(
        self,
        text: str,
        position: Point,
        size: float = 1.0,
        color: Optional[Color] = None,
    ):
        """
        Adds text to the viewer.

        Parameters
        ----------
        text : str
            The text to display.
        position : Point
            The position of the text in world coordinates.
        size : float, optional
            The size of the text. Default is 1.0.
        color : Color, optional
            The color of the text. Default is black.
        """
        if color is None:
            color = Color(0, 0, 0)

        message = {
            "dispatch": "add_text",
            "text": text,
            "position": {"x": position.x, "y": position.y, "z": position.z},
            "size": size,
            "color": {"r": color.r, "g": color.g, "b": color.b},
        }
        self._send_dictionary_message(message)

    def add_light(self, light):
        """
        Adds a light to the viewer.

        Parameters
        ----------
        light : compas_threejs.lights.Light
            The light object to add.
        """
        binary_data = compas_pb.pb_dump_bts(light.as_dict())
        self._send_binary_message(binary_data)

    def update_light(self, light):
        """
        Updates a light in the viewer.

        Parameters
        ----------
        light : compas_threejs.lights.Light
            The light object to update.
        """
        binary_data = compas_pb.pb_dump_bts(light.as_dict())
        self._send_binary_message(binary_data)

    def update_material(self, material: GenericMaterial):
        """
        Updates a material in the viewer.

        Parameters
        ----------
        material : compas_threejs.materials.GenericMaterial
            The material to update.
        """
        binary_data = compas_pb.pb_dump_bts(material.as_dict())
        self._send_binary_message(binary_data)

    def add_ui_element(self, element):
        """
        Adds a UI element to the viewer.

        Parameters
        ----------
        element : compas_threejs.ui element
            The UI element to add.
        """
        message = element.as_dict()
        self._send_dictionary_message(message)
