import asyncio
import json
import threading
import time
import webbrowser
from uuid import uuid4

import compas_pb
from compas.colors import Color
from compas.geometry import Point
from rich.console import Console

from compas_threejs.lights.ambientlight import AmbientLight
from compas_threejs.lights.sunlight import Sunlight

from .server import broadcast, get_server_loop, run_server, stop_server

console = Console()


class Viewer:
    def __init__(
        self,
        websocket_port=9001,
        # frontend_port is no longer strictly needed but we keep it for compatibility
        background_color: Color = Color(0.9, 0.9, 0.9),
        default_lighting: bool = True,
        camera_damping: bool = True,
        loop_interval: float = 0.02,
    ):
        self.websocket_port = websocket_port
        self.websocket_server_thread = None
        # We've removed the frontend_server_thread variables
        self.loop_interval = loop_interval
        self._loop = None
        self._background_color = background_color
        self._camera_damping = camera_damping
        self._default_lighting = default_lighting
        self.queued_messages = []
        self._buttons = dict()

    def __enter__(self):
        return self

    def __exit__(self, exc_type, exc_value, traceback):
        self.stop()

    # ---- ATTRIBUTES --------------------------------------------------------------------------------

    @property
    def loop(self):
        return self._loop

    @loop.setter
    def loop(self, callback):
        self._loop = callback

    @property
    def background_color(self):
        return self._background_color

    @background_color.setter
    def background_color(self, value):
        self._background_color = value
        dict = {
            "dispatch": "scene",
            "type": "background_color",
            "color": self._background_color.hex,
        }
        self._send_dictionary_message(dict)

    @property
    def camera_damping(self) -> bool:
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
        # We now point to the websocket_port because FastAPI is serving the HTML there
        webbrowser.open(f"http://localhost:{self.websocket_port}/")

    def _send_dictionary_message(self, msg: dict):
        binary_data = compas_pb.pb_dump_bts(msg)
        loop = get_server_loop()
        if loop:
            asyncio.run_coroutine_threadsafe(broadcast(binary_data, ""), loop)
        else:
            # Queue the message if the server is not running yet
            self.queued_messages.append((binary_data, ""))

    # ---- GEOMETRY --------------------------------------------------------------------------------

    def add_geometry(self, geometry, material=None):
        obj_id = geometry.guid
        binary_data = compas_pb.pb_dump_bts(geometry)
        loop = get_server_loop()
        if loop:
            asyncio.run_coroutine_threadsafe(broadcast(binary_data, obj_id), loop)
        else:
            self.queued_messages.append((binary_data, obj_id))

        if material:
            material._geometry_guid = str(obj_id)
            material_data = compas_pb.pb_dump_bts(material.as_dict())
            if loop:
                asyncio.run_coroutine_threadsafe(
                    broadcast(material_data, str(uuid4())), loop
                )
            else:
                self.queued_messages.append((material_data, str(uuid4())))

    def update_geometry(self, geometry):
        obj_id = geometry.guid
        binary_data = compas_pb.pb_dump_bts(geometry)
        loop = get_server_loop()
        if loop:
            asyncio.run_coroutine_threadsafe(broadcast(binary_data, obj_id), loop)
        else:
            self.queued_messages.append((binary_data, obj_id))

    # ---- LIGHTS ----------------------------------------------------------------------------------
    def add_light(self, light):
        obj_id = light.guid
        binary_data = compas_pb.pb_dump_bts(light.as_dict())
        loop = get_server_loop()
        if loop:
            asyncio.run_coroutine_threadsafe(broadcast(binary_data, obj_id), loop)
        else:
            self.queued_messages.append((binary_data, obj_id))

    def update_light(self, light):
        self.add_light(light)

    def _send_default_lighting(self):
        sunlight = Sunlight(point=Point(30, 30, 10), intensity=2)
        self.add_light(sunlight)
        sunlight2 = Sunlight(point=Point(-30, 30, 20), intensity=1)
        self.add_light(sunlight2)
        sunlight3 = Sunlight(point=Point(-30, 10, -20), intensity=1)
        self.add_light(sunlight3)
        ambient_light = AmbientLight(color=Color.white(), intensity=0.5)
        self.add_light(ambient_light)
        console.log("[green]Default lighting sent![/green]")

    # ---- MATERIALS ----------------------------------------------------------------------------------

    def update_material(self, material):
        mat_id = material.guid
        binary_data = compas_pb.pb_dump_bts(material.as_dict())
        loop = get_server_loop()
        if loop:
            asyncio.run_coroutine_threadsafe(broadcast(binary_data, mat_id), loop)
        else:
            self.queued_messages.append((binary_data, mat_id))

    # ---- BUTTONS ----------------------------------------------------------------------------------

    def add_ui_element(self, element):
        # register the function with the id
        self._buttons[element.guid] = element.action
        self._send_dictionary_message(element.as_dict())

    # ---- MESSAGES ----------------------------------------------------------------------------------

    def on_message(self, message):
        """
        Default handler for messages received from the frontend.
        This method can be overridden in a subclass.
        """
        # Decode the message from bytes to string and parse it as JSON
        decoded_message = json.loads(message.decode("utf-8"))
        # Transform the message into a usable dictionary
        action_id = decoded_message.get("action")
        console.log(f"[blue]Received message from frontend: {decoded_message}[/blue]")

        value = decoded_message.get("value")
        if value is not None and action_id and action_id in self._buttons:
            console.log(f"[blue]Value associated with the action: {value}[/blue]")
            self._buttons[action_id](value[0])

        elif action_id and action_id in self._buttons:
            self._buttons[action_id]()

        else:
            print(f"Unrecognized action or missing handler for action ID: {action_id}")
