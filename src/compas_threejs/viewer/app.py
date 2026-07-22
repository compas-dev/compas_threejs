import socket
import threading
import time
import webbrowser
from typing import Union

from compas.geometry import Point
from rich.console import Console

from .inbox import Inbox
from .outbox import Outbox
from .server import AppServer
from .workspace import CameraView, Workspace

console = Console()


def get_local_ip() -> str:
    """Best-effort discovery of this machine's LAN-facing IP address."""
    s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    try:
        s.connect(("8.8.8.8", 80))
        return s.getsockname()[0]
    except OSError:
        return "127.0.0.1"
    finally:
        s.close()


class App:
    """
    The App class runs the viewer server and hosts one or more Workspaces. Each Workspace is
    an isolated, browser-facing viewport with its own camera, lighting, and geometry; a new App
    always starts with a "main" workspace, and the properties and methods below are shorthands
    that forward to it.

    Attributes
    ----------
    loop : callable
        A user-defined callback function that will be called in each iteration of the main loop.

    loop_interval : float, optional
        The interval in seconds for the main loop to run. Default is 0.02 (50 FPS).

    background_color : Color
        The background color of the main workspace.

    camera_damping : bool
        Whether camera damping is enabled. Default is True.

    default_lighting : bool, optional
        Whether to include default lighting in the scene. Default is True.
        This attribute can only be modifief before calling `App.start()`.


    world_axis : bool, optional
        Whether to show the world axis in the scene. Default is True.

    picker : bool, optional
        Whether to enable the object picker in the scene. Default is True.

    camera_fov : float, optional
        The camera field of view (FOV) in degrees. Default is 60.

    camera_zoom : float, optional
        The camera zoom level. Default is 1.

    dark_mode : bool, optional
        Whether to enable dark mode for the main workspace. Default is False.

    camera_position : Point, optional
        The camera position in world coordinates. Default is (8, -15, 15).

    camera_target : Point, optional
        The camera target point used by orbit controls. Default is (0, 0, 0).

    show_edges : bool, optional
        Whether to show edges of the mesh. Default is False.

    """

    def __init__(self, host: str = "127.0.0.1", websocket_port: int = 9001):
        # Server
        self.host = host
        self.websocket_port = websocket_port
        self.websocket_server_thread = None

        self.server = AppServer()
        self.outbox = Outbox(self.server)
        self.inbox = Inbox()

        # Setter Attributes
        self._loop_interval = 0.01
        self._loop = None
        self._default_lighting = True

        # Workspaces
        self.workspaces = {}
        self.main = self.get_workspace("main")

    def __enter__(self):
        return self

    def __exit__(self, exc_type, exc_value, traceback):
        self.stop()

    # ---- WORKSPACES ---------------------------------------------------------------------------

    def get_workspace(self, workspace_id: str) -> Workspace:
        """Gets or creates an isolated workspace viewport."""
        if workspace_id not in self.workspaces:
            self.workspaces[workspace_id] = Workspace(self, workspace_id)
        return self.workspaces[workspace_id]

    # ---- ATTRIBUTES (forwarded to the main workspace) ------------------------------------------

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
    def default_lighting(self) -> bool:
        """Set or get whether to include default lighting in the scene."""
        return self._default_lighting

    @default_lighting.setter
    def default_lighting(self, value: bool):
        self._default_lighting = value

    @property
    def background_color(self):
        """Set or get the background color of the main workspace."""
        return self.main.background_color

    @background_color.setter
    def background_color(self, value):
        self.main.background_color = value

    @property
    def camera_damping(self):
        """Set or get whether camera damping is enabled on the main workspace."""
        return self.main.camera_damping

    @camera_damping.setter
    def camera_damping(self, value):
        self.main.camera_damping = value

    @property
    def world_axis(self):
        """Set or get whether to show the world axis on the main workspace."""
        return self.main.world_axis

    @world_axis.setter
    def world_axis(self, value):
        self.main.world_axis = value

    @property
    def picker(self):
        """Set or get whether the object picker is enabled on the main workspace."""
        return self.main.picker

    @picker.setter
    def picker(self, value):
        self.main.picker = value

    @property
    def camera_fov(self):
        """Set or get the camera field of view (FOV) in degrees on the main workspace."""
        return self.main.camera_fov

    @camera_fov.setter
    def camera_fov(self, value):
        self.main.camera_fov = value

    @property
    def dark_mode(self):
        """Get or set dark mode for the main workspace."""
        return self.main.dark_mode

    @dark_mode.setter
    def dark_mode(self, value):
        self.main.dark_mode = value

    @property
    def camera_zoom(self):
        """Set or get the camera zoom level on the main workspace."""
        return self.main.camera_zoom

    @camera_zoom.setter
    def camera_zoom(self, value):
        self.main.camera_zoom = value

    @property
    def camera_position(self):
        """Set or get the camera position in world coordinates on the main workspace."""
        return self.main.camera_position

    @camera_position.setter
    def camera_position(self, value):
        self.main.camera_position = value

    @property
    def camera_target(self):
        """Set or get the camera target point on the main workspace."""
        return self.main.camera_target

    @camera_target.setter
    def camera_target(self, value):
        self.main.camera_target = value

    @property
    def show_edges(self):
        """Get or set if edges of the mesh should be shown on the main workspace."""
        return self.main.show_edges

    @show_edges.setter
    def show_edges(self, value):
        self.main.show_edges = value

    @property
    def url(self) -> str:
        """Get the URL to access the viewer in a web browser."""
        display_host = self.host if self.host != "0.0.0.0" else get_local_ip()
        return f"http://{display_host}:{self.websocket_port}/?ws_host={display_host}&ws_port={self.websocket_port}"

    def set_view(self, view: Union[CameraView, Point, tuple, list], target=None):
        """Set the main workspace's camera view from a preset or explicit point.

        Parameters
        ----------
        view : CameraView | Point | tuple | list
            Either a CameraView preset or an XYZ camera position.
        target : Point | tuple | list, optional
            Target point for the camera to look at when `view` is an explicit position.
            If omitted, the current camera target is kept.
        """
        self.main.set_view(view, target)

    # ---- SERVER ---------------------------------------------------------------------------------

    def _initialize_server(self):
        """Starts the server in a background thread."""
        display_host = self.host if self.host != "0.0.0.0" else get_local_ip()

        console.log(
            f"http://{display_host}:{self.websocket_port}/?ws_host={display_host}&ws_port={self.websocket_port}"
        )
        self.websocket_server_thread = threading.Thread(
            target=self.server.run,
            args=(display_host, self.websocket_port, self),
            daemon=True,
        )
        self.websocket_server_thread.start()

        while self.server.get_loop() is None:
            time.sleep(0.05)
        console.log("[green]Server ready![/green]")

    def start(self, show=False):
        """Initializes the server and keeps the main thread alive."""
        self._initialize_server()

        # Re-send current main workspace settings now that the server (and its loop) exists
        self.main.background_color = self.main.background_color
        self.main.dark_mode = self.main.dark_mode
        self.main.camera_damping = self.main.camera_damping
        self.main.send_default_view()

        if self._default_lighting:
            self.main.add_default_lighting()

        self.outbox.flush()

        if show:
            self.show()

        with console.status("[bold yellow] Running viewer... ", spinner="dots"):
            try:
                i = 0
                while True:
                    time.sleep(self.loop_interval)
                    callback = self.loop
                    if callback:
                        callback(i)
                    i += 1
            except KeyboardInterrupt:
                console.log("[green]Interruption ordered[/green]")
            finally:
                self.stop()

    def stop(self):
        """Stops the background server gracefully."""
        console.log("[green]Stopping server...[/green]")
        self.server.stop()
        if self.websocket_server_thread:
            self.websocket_server_thread.join()
        console.log("[green]App stopped successfully![/green]")

    def show(self):
        """Opens the main workspace in a web browser."""
        if self.host == "0.0.0.0":
            connect_host = get_local_ip()
            console.log("[bold cyan]Network sharing enabled[/bold cyan]")
        else:
            connect_host = self.host

        shareable_url = (
            f"http://{connect_host}:{self.websocket_port}/?"
            f"ws_host={connect_host}&ws_port={self.websocket_port}"
        )
        console.log(f"[underline yellow]{shareable_url}[/underline yellow]")
        webbrowser.open(shareable_url)

    # ---- INCOMING MESSAGES ------------------------------------------------------------------------

    def on_message(self, message, workspace_id: str = "main"):
        """Default handler for messages received from the frontend."""
        self.inbox.handle(message, self.outbox, workspace_id=workspace_id)

    def update_metadata(self, metadata):
        """
        Updates the metadata associated with a geometry object in the viewer.

        Parameters
        ----------
        metadata : compas_threejs.metadata.Metadata
            The metadata object containing updated information. It must have a `guid` attribute that matches the geometry's GUID.
        """
        self.inbox.update_metadata(metadata)

    # ---- GEOMETRY / LIGHTS / MATERIALS / TEXT / UI (forwarded to the main workspace) -----------

    def add_geometry(self, geometry, material=None, metadata=None, actions=None):
        """Adds a geometry object to the main workspace. See `Workspace.add_geometry`."""
        return self.main.add_geometry(geometry, material, metadata, actions)

    def add_geometries(self, geometries: list, material=None):
        """Adds multiple geometry objects to the main workspace."""
        self.main.add_geometries(geometries, material)

    def update_geometry(self, geometry):
        """Updates an existing geometry object in the main workspace."""
        self.main.update_geometry(geometry)

    def remove_object(self, geometry):
        """Removes a geometry object from the main workspace."""
        self.main.remove_object(geometry)

    def add_text(self, text, material=None):
        """Adds a text object to the main workspace."""
        self.main.add_text(text, material)

    def add_light(self, light):
        """Adds a light object to the main workspace."""
        self.main.add_light(light)

    def update_light(self, light):
        """Updates an existing light object in the main workspace."""
        self.main.update_light(light)

    def update_material(self, material):
        """Updates an existing material in the main workspace."""
        self.main.update_material(material)

    def add_ui_element(self, element):
        """Adds a UI element (e.g. button) to the main workspace."""
        self.main.add_ui_element(element)
