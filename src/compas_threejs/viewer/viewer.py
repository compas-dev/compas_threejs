import asyncio
import json
import threading
import time
import webbrowser
from ctypes import Union
from uuid import uuid4

import compas_pb
from compas.colors import Color
from compas.geometry import Point
from pydantic.fields import PropertyT
from rich.console import Console

from compas_threejs.lights.ambientlight import AmbientLight
from compas_threejs.lights.sunlight import Sunlight

from .server import broadcast, get_server_loop, run_server, stop_server

console = Console()


class Viewer:
    class Viewer:
        """
        The Viewer class is responsible for visualizing 3D geometry, lights, and other elements
        in a browser-based environment. It integrates with a server to enable real-time
        updates and interactions.


        Parameters
        ----------
        websocket_port : int, optional
            The port on which the WebSocket server will run. Default is 9001.
        background_color : Color, optional
            The background color of the viewer. Default is a light gray (0.9, 0.9, 0.9).


        Attributes
        ----------
        loop : callable
            A user-defined callback function that will be called in each iteration of the main loop.

        loop_interval : float, optional
            The interval in seconds for the main loop to run. Default is 0.02 (50 FPS).

        background_color : Color
            The background color of the viewer.

        camera_damping : bool
            Whether camera damping is enabled. Default is True.

        default_lighting : bool, optional
            Whether to include default lighting in the scene. Default is True.
            This attribute can only be modifief before calling `Viewer.start()`.


        """

    def __init__(
        self,
        websocket_port=9001,
        default_lighting: bool = True,
    ):
        # Server
        self.websocket_port = websocket_port
        self.websocket_server_thread = None

        # Setter Attributes
        self._loop_interval = 0.02
        self._loop = None
        self._background_color = Color(0.9, 0.9, 0.9)
        self._camera_damping = True
        self._default_lighting = True

        # Registry
        self.queued_messages = []
        self._buttons = dict()
        self._geoemetry_registry = dict()

    def __enter__(self):
        return self

    def __exit__(self, exc_type, exc_value, traceback):
        self.stop()

    # ---- ATTRIBUTES --------------------------------------------------------------------------------

    @property
    def loop(self) -> callable:
        """Set or get a user-defined callback function that will be called in each iteration of the main loop."""
        return self._loop

    @loop.setter
    def loop(self, callback: callable):
        self._loop = callback

    @property
    def loop_interval(self) -> float:
        """Set or get the interval in seconds for the main loop to run. Default is 0.02 (50 FPS)."""
        return self._loop_interval

    @loop_interval.setter
    def loop_interval(self, value: float):
        self._loop_interval = value

    @property
    def background_color(self) -> Color:
        """Set or get the background color of the viewer."""
        return self._background_color

    @background_color.setter
    def background_color(self, value: Color):
        self._background_color = value
        dict = {
            "dispatch": "scene",
            "type": "background_color",
            "color": self._background_color.hex,
        }
        self._send_dictionary_message(dict)

    @property
    def camera_damping(self) -> bool:
        """Set or get whether camera damping is enabled."""
        return self._camera_damping

    @camera_damping.setter
    def camera_damping(self, value: bool):
        self._camera_damping = value
        dict = {
            "dispatch": "scene",
            "type": "controls_damping",
            "damping": self._camera_damping,
        }
        self._send_dictionary_message(dict)

    @property
    def default_lighting(self) -> bool:
        """Set or get whether to include default lighting in the scene."""
        return self._default_lighting

    @default_lighting.setter
    def default_lighting(self, value: bool):
        self._default_lighting = value

    # ---- SERVER ---------------------------------------------------------------------------------

    def _initialize_server(self):
        """Starts the consolidated FastAPI server."""
        console.log(
            f"[green]Starting server on http://localhost:{self.websocket_port}...[/green]"
        )
        self.websocket_server_thread = threading.Thread(
            target=run_server, args=(self.websocket_port, self), daemon=True
        )
        self.websocket_server_thread.start()

        while get_server_loop() is None:
            time.sleep(0.05)
        console.log("[green]Server ready![/green]")

    def start(self, show=False):
        """Initializes the consolidated server and keeps the main thread alive."""
        self._initialize_server()

        # Update viewer settings
        self.background_color = self.background_color
        self.camera_damping = self.camera_damping

        # Send default lighting
        if self._default_lighting:
            self._send_default_lighting()

        # Send queued messages
        for msg, obj_id in self.queued_messages:
            loop = get_server_loop()
            if loop:
                asyncio.run_coroutine_threadsafe(broadcast(msg, obj_id), loop)
        self.queued_messages = []

        if show:
            self.show()

        with console.status("[bold yellow] Running viewer... ", spinner="dots"):
            try:
                while True:
                    time.sleep(self.loop_interval)
                    callback = self.loop
                    if callback:
                        callback()
            except KeyboardInterrupt:
                console.log("[green]Interruption ordered[/green]")
            finally:
                self.stop()

    def stop(self):
        """Stops the background server gracefully."""
        console.log("[green]Stopping server...[/green]")
        stop_server()
        if self.websocket_server_thread:
            self.websocket_server_thread.join()
        console.log("[green]Viewer stopped successfully![/green]")

    def show(self):
        """Opens the viewer in the default web browser."""
        webbrowser.open(f"http://localhost:{self.websocket_port}/")

    def _send_dictionary_message(self, msg: dict):
        """Helper method to send a dictionary message to the frontend."""
        binary_data = compas_pb.pb_dump_bts(msg)
        loop = get_server_loop()
        if loop:
            asyncio.run_coroutine_threadsafe(broadcast(binary_data, ""), loop)
        else:
            # Queue the message if the server is not running yet
            self.queued_messages.append((binary_data, ""))

    # ---- GEOMETRY --------------------------------------------------------------------------------

    def add_geometry(self, geometry, material=None):
        """
        Adds a geometry object to the viewer. Optionally, a material can be associated with the geometry.

        Parameters
        ----------
        geometry : compas.geometry.Geometry | compas.datastructures.Mesh
            The geometry object to be added to the viewer. It must have a unique GUID.
        material : compas_threejs.material.Material, optional
            An optional material to be associated with the geometry.

        Returns
        -------
        None

        """
        obj_id = geometry.guid

        binary_data = compas_pb.pb_dump_bts(geometry)
        loop = get_server_loop()

        # send material
        if material:
            material._geometry_guid = str(obj_id)
            material_data = compas_pb.pb_dump_bts(material.as_dict())
            if loop:
                asyncio.run_coroutine_threadsafe(
                    broadcast(material_data, str(uuid4())), loop
                )
            else:
                self.queued_messages.append((material_data, str(uuid4())))

        # send geometry
        if loop:
            asyncio.run_coroutine_threadsafe(broadcast(binary_data, obj_id), loop)
        else:
            self.queued_messages.append((binary_data, obj_id))

        # save the geometry for furture reference
        self._geoemetry_registry[str(obj_id)] = geometry

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
        loop = get_server_loop()
        if loop:
            asyncio.run_coroutine_threadsafe(broadcast(binary_data, obj_id), loop)
        else:
            self.queued_messages.append((binary_data, obj_id))

    # ---- TEXT --------------------------------------------------------------------------------

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
        loop = get_server_loop()
        if loop:
            asyncio.run_coroutine_threadsafe(broadcast(binary_data, obj_id), loop)
        else:
            self.queued_messages.append((binary_data, obj_id))
        if material:
            material._geometry_guid = obj_id
            material_data = compas_pb.pb_dump_bts(material.as_dict())
            if loop:
                asyncio.run_coroutine_threadsafe(
                    broadcast(material_data, str(uuid4())), loop
                )
            else:
                self.queued_messages.append((material_data, str(uuid4())))

    # ---- LIGHTS ----------------------------------------------------------------------------------
    def add_light(self, light):
        """
        Adds a light object to the viewer.

        Parameters
        ----------
        light : compas_threejs.lights.Light
            The light object to be added to the viewer.
        """
        obj_id = light.guid
        binary_data = compas_pb.pb_dump_bts(light.as_dict())
        loop = get_server_loop()
        if loop:
            asyncio.run_coroutine_threadsafe(broadcast(binary_data, obj_id), loop)
        else:
            self.queued_messages.append((binary_data, obj_id))

    def update_light(self, light):
        """
        Updates an existing light object in the viewer.

        Parameters
        ----------
        light : compas_threejs.lights.Light
            The light object to be updated.
        """
        self.add_light(light)

    def _send_default_lighting(self):
        sunlight = Sunlight(point=Point(30, -10, 30), intensity=1)
        self.add_light(sunlight)
        sunlight2 = Sunlight(point=Point(-30, -20, 30), intensity=0.5)
        self.add_light(sunlight2)
        sunlight3 = Sunlight(point=Point(-30, 20, 10), intensity=0.5)
        self.add_light(sunlight3)
        ambient_light = AmbientLight(color=Color.white(), intensity=0.5)
        self.add_light(ambient_light)
        console.log("[green]Default lighting sent![/green]")

    # ---- MATERIALS ----------------------------------------------------------------------------------

    def update_material(self, material):
        """
        Updates an existing material in the viewer.

        Parameters
        ----------
        material : compas_threejs.material.Material
            The material object to be updated.
        """
        mat_id = material.guid
        binary_data = compas_pb.pb_dump_bts(material.as_dict())
        loop = get_server_loop()
        if loop:
            asyncio.run_coroutine_threadsafe(broadcast(binary_data, mat_id), loop)
        else:
            self.queued_messages.append((binary_data, mat_id))

    # ---- BUTTONS ----------------------------------------------------------------------------------

    def add_ui_element(self, element):
        """
        Adds a UI element (e.g., button) to the viewer and registers its associated action.

        Parameters
        ----------
        element : compas_threejs.ui.UIElement
            The UI element to be added to the viewer. It must have a unique GUID and an
        """
        # register the function with the id
        self._buttons[element.guid] = element.action
        self._send_dictionary_message(element.as_dict())

    # ---- MESSAGES ----------------------------------------------------------------------------------

    def on_message(self, message):
        """
        Default handler for messages received from the frontend.
        """
        action_dictionary = self.process_message(message)

        if action_dictionary.get("dispatch") == "ui_callback":
            self.manage_ui_callback(action_dictionary)
        elif action_dictionary.get("dispatch") == "object_picked":
            self.manage_picked_object(action_dictionary)
        else:
            console.log(
                f"[yellow]Received unrecognized message from frontend: {action_dictionary}[/yellow]"
            )

    def process_message(self, message_in_bytes) -> dict:
        """Decodes a message from bytes to a string, then parses it as a JSON diction"""
        # First, decode the bytes to a UTF-8 string.
        message_str = message_in_bytes.decode("utf-8")
        # Then, parse the JSON string into a Python dictionary.
        message_dict = json.loads(message_str)
        return message_dict

    def manage_ui_callback(self, action_dictionary):
        """Handles all actions that are tied to an user-defined action in a ui-element."""

        action_id = action_dictionary.get("action")
        console.log(f"[blue]Received message from frontend: {action_dictionary}[/blue]")
        value = action_dictionary.get("value")
        if value is not None and action_id and action_id in self._buttons:
            console.log(f"[blue]Value associated with the action: {value}[/blue]")
            self._buttons[action_id](value[0])
        elif action_id and action_id in self._buttons:
            self._buttons[action_id]()
        else:
            print(f"Unrecognized action or missing handler for action ID: {action_id}")

    def manage_picked_object(self, action_dictionary):
        object_id = action_dictionary.get("guid")
        console.log(
            f"[blue]Received object picked message from frontend. Object ID: {object_id}[/blue]"
        )
        geometry = self._geoemetry_registry.get(object_id)
        print(str(geometry))
        message = dict()
        for key in geometry.__data__.keys():
            message[key] = str(geometry.__data__[key])
        message["dispatch"] = "object_infos"
        self._send_dictionary_message(message)
