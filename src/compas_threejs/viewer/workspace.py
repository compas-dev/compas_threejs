import webbrowser
from enum import IntEnum
from typing import Optional
from typing import Union

import compas_pb
from compas.colors import Color
from compas.geometry import Point
from compas_brep import Brep
from rich.console import Console

from compas_threejs.lights.ambientlight import AmbientLight
from compas_threejs.lights.sunlight import Sunlight

console = Console()


class CameraView(IntEnum):
    """Numpad-compatible camera view presets."""

    BOTTOM = 0
    FRONT_LEFT = 1
    FRONT = 2
    FRONT_RIGHT = 3
    LEFT = 4
    TOP = 5
    RIGHT = 6
    BACK_LEFT = 7
    BACK = 8
    BACK_RIGHT = 9


class Workspace:
    """An isolated viewport: its own camera, background, lighting, and geometry.

    An App always has a "main" workspace, and can host additional named workspaces,
    each independently addressable from a browser tab via `App.get_workspace(workspace_id)`.

    Attributes
    ----------
    background_color : Color
        The background color of this workspace.
    camera_damping : bool
        Whether camera damping is enabled. Default is True.
    world_axis : bool
        Whether to show the world axis in the scene. Default is True.
    picker : bool
        Whether to enable the object picker in the scene. Default is True.
    camera_fov : float
        The camera field of view (FOV) in degrees. Default is 60.
    camera_zoom : float
        The camera zoom level. Default is 1.
    dark_mode : bool
        Whether to enable dark mode for this workspace. Default is False.
    camera_position : Point
        The camera position in world coordinates. Default is (8, -15, 15).
    camera_target : Point
        The camera target point used by orbit controls. Default is (0, 0, 0).
    show_edges : bool
        Whether to show edges of the mesh. Default is False.
    """

    def __init__(self, app, workspace_id: str = "main"):
        self.app = app
        self.workspace_id = workspace_id

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

    def _send_scene_message(self, type_: str, **fields):
        # Each scene setting (camera position, background color, ...) represents a single
        # current value, so it's persisted under one stable key per type - re-sending an
        # updated value overwrites its own slot instead of piling up a new entry every time
        # (e.g. every camera move).
        self.app.outbox.send_dict(
            {"dispatch": "scene", "type": type_, **fields},
            workspace_id=self.workspace_id,
            obj_id=("scene", self.workspace_id, type_),
        )

    # ---- CAMERA / SCENE ATTRIBUTES ------------------------------------------------------------

    @property
    def background_color(self) -> Color:
        """Set or get the background color of this workspace."""
        return self._background_color

    @background_color.setter
    def background_color(self, value: Color):
        self._background_color = value
        self._send_scene_message("background_color", color=value.hex)

    @property
    def camera_damping(self) -> bool:
        """Set or get whether camera damping is enabled."""
        return self._camera_damping

    @camera_damping.setter
    def camera_damping(self, value: bool):
        self._camera_damping = value
        self._send_scene_message("controls_damping", damping=value)

    @property
    def world_axis(self) -> bool:
        """Set or get whether to show the world axis in the scene."""
        return self._world_axis

    @world_axis.setter
    def world_axis(self, value: bool):
        self._world_axis = value
        self._send_scene_message("world_axis", show=value)

    @property
    def picker(self) -> bool:
        """Set or get whether to enable the object picker in the scene."""
        return self._picker

    @picker.setter
    def picker(self, value: bool):
        self._picker = value
        self._send_scene_message("picker", enabled=value)

    @property
    def camera_fov(self) -> float:
        """Set or get the camera field of view (FOV) in degrees."""
        return self._camera_fov

    @camera_fov.setter
    def camera_fov(self, value: float):
        self._camera_fov = value
        self._send_scene_message("camera_fov", fov=value)

    @property
    def dark_mode(self) -> bool:
        """Get or set dark mode for this workspace. When set, the frontend will switch theme."""
        return self._dark_mode

    @dark_mode.setter
    def dark_mode(self, value: bool):
        self._dark_mode = bool(value)
        # Single current setting, like the scene messages above - stable key so toggling it
        # repeatedly overwrites its own slot instead of accumulating a new entry each time.
        self.app.outbox.send_dict(
            {
                "dispatch": "theme",
                "type": "background_mode",
                "mode": "dark" if self._dark_mode else "light",
            },
            workspace_id=self.workspace_id,
            obj_id=("theme", self.workspace_id),
        )

    @property
    def camera_zoom(self) -> float:
        """Set or get the camera zoom level."""
        return self._camera_zoom

    @camera_zoom.setter
    def camera_zoom(self, value: float):
        self._camera_zoom = value
        self._send_scene_message("camera_zoom", zoom=value)

    @property
    def camera_position(self) -> Point:
        """Set or get the camera position in world coordinates."""
        return self._camera_position

    @camera_position.setter
    def camera_position(self, value):
        point = value if isinstance(value, Point) else Point(*value)
        self._camera_position = point
        self._send_scene_message("camera_position", x=point.x, y=point.y, z=point.z)

    @property
    def camera_target(self) -> Point:
        """Set or get the camera target point used by orbit controls."""
        return self._camera_target

    @camera_target.setter
    def camera_target(self, value):
        point = value if isinstance(value, Point) else Point(*value)
        self._camera_target = point
        self._send_scene_message("camera_target", x=point.x, y=point.y, z=point.z)

    @property
    def show_edges(self) -> bool:
        """Get or set if edges of the mesh should be shown."""
        return self._show_edges

    @show_edges.setter
    def show_edges(self, value: bool):
        self._show_edges = value
        self._send_scene_message("show_edges", show=value)

    def set_view(self, view: Union[CameraView, Point, tuple, list], target=None):
        """Set camera view from a preset or explicit point.

        Parameters
        ----------
        view : CameraView | Point | tuple | list
            Either a CameraView preset or an XYZ camera position.
        target : Point | tuple | list, optional
            Target point for the camera to look at when `view` is an explicit position.
            If omitted, the current camera target is kept.
        """
        if isinstance(view, (Point, tuple, list)):
            camera_point = view if isinstance(view, Point) else Point(*view)
            self.camera_position = camera_point
            if target is not None:
                target_point = target if isinstance(target, Point) else Point(*target)
                self.camera_target = target_point
            return

        if not isinstance(view, CameraView):
            raise ValueError("Invalid view. Use CameraView for presets or Point/xyz for position")

        self._send_scene_message("camera_view", preset=view.name.lower())

    def send_default_view(self):
        """Re-sends the current camera position and target, e.g. once the server becomes ready."""
        self.camera_position = self.camera_position
        self.camera_target = self.camera_target
        console.log(f"[green]Default view sent to workspace '{self.workspace_id}'![/green]")

    # ---- LIGHTS ---------------------------------------------------------------------------------

    def add_default_lighting(self):
        """Adds the standard bundle of sun and ambient lights to this workspace."""
        sunlight = Sunlight(point=Point(30, -10, 30), intensity=1)
        self.add_light(sunlight)

        sunlight2 = Sunlight(point=Point(-30, -20, 30), intensity=0.5)
        self.add_light(sunlight2)

        sunlight3 = Sunlight(point=Point(-30, 20, 10), intensity=0.5)
        self.add_light(sunlight3)

        ambient_light = AmbientLight(color=Color.white(), intensity=0.5)
        self.add_light(ambient_light)
        console.log(f"[green]Default lighting sent to workspace '{self.workspace_id}'![/green]")

    def add_light(self, light):
        """Adds a light object to this workspace.

        Parameters
        ----------
        light : compas_threejs.lights.Light
            The light object to be added to the viewer.
        """
        obj_id = light.guid
        binary_data = compas_pb.pb_dump_bts(light.as_dict())
        self.app.outbox.send_bytes(binary_data, obj_id, workspace_id=self.workspace_id)

    def update_light(self, light):
        """Updates an existing light object in this workspace.

        Parameters
        ----------
        light : compas_threejs.lights.Light
            The light object to be updated.
        """
        self.add_light(light)

    # ---- GEOMETRY -------------------------------------------------------------------------------

    def add_geometry(self, geometry, material=None, metadata=None, actions=None):
        """
        Adds a geometry object to this workspace. Optionally, a material can be associated with the geometry.

        Parameters
        ----------
        geometry : compas.geometry.Geometry | compas.datastructures.Mesh
            The geometry object to be added to the viewer. It must have a unique GUID.
        material : compas_threejs.material.Material, optional
            An optional material to be associated with the geometry.
        metadata: compas_threejs.metadata.Metadata, optional
            An optional metadata object to be associated with the geometry. This metadata can be
            sent back to the frontend when the geometry is picked, allowing interactive exploration
            of object properties.
        actions: list of compas_threejs.ui.Button, optional
            An optional list of Button objects representing actions that can be performed on the geometry.
            The function associated with the button need to accept `object` parameter.

        Returns
        -------
        str
            The GUID of the `geometry` object passed in. For a `Brep`, this is the Brep's
            own GUID, not the GUID of the internal viewmesh sent to the frontend.
        """
        # if it is a Brep we need to get its viewmesh, but keep the Brep itself as the
        # object registered against its guid, so pick/action callbacks receive the Brep
        # the caller added rather than the internal viewmesh.
        original_geometry = geometry
        if isinstance(geometry, Brep):
            brep_id = geometry.guid
            brep_viewmesh = geometry.to_viewmesh()
            # Keyed by (workspace, brep guid), not just the brep guid: a Brep's `.geometry`
            # is typically cached, so the *same* Brep instance can legitimately be added to
            # more than one workspace (e.g. the main scene and a per-element viewer) - each
            # needs its own mapping to its own viewmesh, or a later add in one workspace
            # would silently overwrite the lookup the other workspace's remove/update relies on.
            self.app.inbox.brep_viewmesh_registry[(self.workspace_id, brep_id)] = brep_viewmesh
            # the geometry variable now gets the viewmesh
            geometry = brep_viewmesh

        obj_id = geometry.guid
        binary_data = compas_pb.pb_dump_bts(geometry)
        self.app.outbox.send_bytes(binary_data, obj_id, workspace_id=self.workspace_id)

        if material:
            material._geometry_guid = str(obj_id)
            material_dict = material.as_dict()
            material_dict["geometryBackendGuid"] = str(obj_id)
            material_data = compas_pb.pb_dump_bts(material_dict)
            # Keyed off the geometry's own id (not a fresh uuid4 each call) so re-adding the
            # same geometry's material overwrites this slot instead of leaving the previous
            # one behind as a permanent orphan - and so remove_object can clean it up below.
            self.app.outbox.send_bytes(material_data, ("material", obj_id), workspace_id=self.workspace_id)

        self.app.inbox.register_geometry(obj_id, original_geometry, metadata, actions)
        return str(original_geometry.guid)

    def add_geometries(self, geometries: list, material=None):
        """Adds multiple geometry objects to this workspace."""
        for geo in geometries:
            self.add_geometry(geo, material)

    def update_geometry(self, geometry):
        """
        Updates an existing geometry object in this workspace.

        Parameters
        ----------
        geometry : compas.geometry.Geometry | compas.datastructures.Mesh
            The geometry object to be updated.
        """
        obj_id = geometry.guid

        # If the geometry is a Brep get its respective viewmesh
        if isinstance(geometry, Brep):
            viewmesh = self.app.inbox.brep_viewmesh_registry.get((self.workspace_id, geometry.guid))
            if viewmesh:
                obj_id = viewmesh.guid
            geometry = geometry.to_viewmesh()

        binary_data = compas_pb.pb_dump_bts(geometry)
        self.app.outbox.send_bytes(binary_data, obj_id, workspace_id=self.workspace_id)

    def remove_object(self, geometry):
        """Removes a geometry object from this workspace."""
        # If the geometry is a Brep, remove its viewmesh from the registry
        if isinstance(geometry, Brep):
            viewmesh = self.app.inbox.brep_viewmesh_registry.get((self.workspace_id, geometry.guid))
            if viewmesh:
                geometry = viewmesh

        obj_id = geometry.guid
        self.app.outbox.send_dict(
            {"dispatch": "handle_geometry", "type": "remove", "guid": str(obj_id)},
            workspace_id=self.workspace_id,
            remove_key=obj_id,
        )
        # Drops the geometry's associated material/visibility slots too, if any - a no-op
        # for whichever it never had.
        self.app.outbox.forget(("material", obj_id), workspace_id=self.workspace_id)
        self.app.outbox.forget(("visibility", obj_id), workspace_id=self.workspace_id)

    def hide_geometry(self, geometry):
        """Hides a geometry object in this workspace without removing it.

        Parameters
        ----------
        geometry : compas.geometry.Geometry | compas.datastructures.Mesh
            The geometry object to hide.
        """
        self._set_geometry_visibility(geometry, visible=False)

    def show_geometry(self, geometry):
        """Shows a previously hidden geometry object in this workspace.

        Parameters
        ----------
        geometry : compas.geometry.Geometry | compas.datastructures.Mesh
            The geometry object to show.
        """
        self._set_geometry_visibility(geometry, visible=True)

    def _set_geometry_visibility(self, geometry, visible):
        # If the geometry is a Brep, target its displayed viewmesh instead
        if isinstance(geometry, Brep):
            viewmesh = self.app.inbox.brep_viewmesh_registry.get((self.workspace_id, geometry.guid))
            if viewmesh:
                geometry = viewmesh

        obj_id = geometry.guid
        # A geometry's visibility is a single current value, so it's persisted under a key
        # stable per object - re-toggling it overwrites its own slot instead of piling up a
        # new entry every time (e.g. every hide/show of a processing feature).
        self.app.outbox.send_dict(
            {
                "dispatch": "handle_geometry",
                "type": "set_visibility",
                "guid": str(obj_id),
                "visible": visible,
            },
            workspace_id=self.workspace_id,
            obj_id=("visibility", obj_id),
        )

    # ---- TEXT -----------------------------------------------------------------------------------

    def add_text(self, text, material=None):
        """
        Adds a text object to this workspace. Optionally, a material can be associated with the text.

        Parameters
        ----------
        text : compas.geometry.Text
            The text object to be added to the viewer. It must have a unique GUID.
        material : compas_threejs.material.Material, optional
            An optional material to be associated with the text.
        """
        obj_id = text.guid
        binary_data = compas_pb.pb_dump_bts(text.as_dict())
        self.app.outbox.send_bytes(binary_data, obj_id, workspace_id=self.workspace_id)
        if material:
            material._geometry_guid = obj_id
            material_data = compas_pb.pb_dump_bts(material.as_dict())
            self.app.outbox.send_bytes(material_data, ("material", obj_id), workspace_id=self.workspace_id)

    # ---- TAGS -----------------------------------------------------------------------------------

    def add_tag(self, tag):
        """
        Adds a screen-space text tag to this workspace, anchored to a 3D point in the scene.

        Parameters
        ----------
        tag : compas_threejs.tag.TextTag
            The tag object to be added to the viewer. It must have a unique GUID.
        """
        obj_id = tag.guid
        binary_data = compas_pb.pb_dump_bts(tag.as_dict())
        self.app.outbox.send_bytes(binary_data, obj_id, workspace_id=self.workspace_id)

    def update_tag(self, tag):
        """
        Updates an existing text tag in this workspace.

        Parameters
        ----------
        tag : compas_threejs.tag.TextTag
            The tag object to be updated.
        """
        self.add_tag(tag)

    def hide_tag(self, tag):
        """Hides a text tag in this workspace without removing it.

        Parameters
        ----------
        tag : compas_threejs.tag.TextTag
            The tag object to hide.
        """
        self._set_tag_visibility(tag, visible=False)

    def show_tag(self, tag):
        """Shows a previously hidden text tag in this workspace.

        Parameters
        ----------
        tag : compas_threejs.tag.TextTag
            The tag object to show.
        """
        self._set_tag_visibility(tag, visible=True)

    def _set_tag_visibility(self, tag, visible):
        obj_id = tag.guid
        # Same reasoning as _set_geometry_visibility above - stable per-tag key.
        self.app.outbox.send_dict(
            {
                "dispatch": "handle_geometry",
                "type": "set_visibility",
                "guid": str(obj_id),
                "visible": visible,
            },
            workspace_id=self.workspace_id,
            obj_id=("visibility", obj_id),
        )

    # ---- MATERIALS --------------------------------------------------------------------------------

    def update_material(self, material):
        """
        Updates an existing material in this workspace.

        Parameters
        ----------
        material : compas_threejs.material.Material
            The material object to be updated.
        """
        mat_id = material.guid
        binary_data = compas_pb.pb_dump_bts(material.as_dict())
        self.app.outbox.send_bytes(binary_data, mat_id, workspace_id=self.workspace_id)

    # ---- UI -----------------------------------------------------------------------------------------

    def add_ui_element(self, element):
        """
        Adds a UI element (e.g., button) to this workspace and registers its associated action.

        Parameters
        ----------
        element : compas_threejs.ui.UIElement
            The UI element to be added to the viewer. It must have a unique GUID and an action.
        """
        if element.action is None:
            console.log(f"[yellow]Warning: UI element with GUID {element.guid} has no associated action.[/yellow]")

        self.app.inbox.register_button(element.guid, element.action)

        msg = element.as_dict()
        msg["workspace_id"] = self.workspace_id
        binary_data = compas_pb.pb_dump_bts(msg)
        self.app.outbox.send_bytes(binary_data, element.guid, persist=True, workspace_id=self.workspace_id)

    # ---- SPINNER ----------------------------------------------------------------------------------

    def start_spinner(self, message: Optional[str] = None):
        """
        Shows a loading spinner overlay in this workspace's frontend.

        Use around long-running backend work (e.g. deserializing and building geometry for a
        large model) to give the user feedback while the UI would otherwise appear frozen.

        Parameters
        ----------
        message : str, optional
            A short description to display alongside the spinner, e.g. "Loading model...".
        """
        self.app.outbox.send_dict(
            {"dispatch": "spinner", "visible": True, "message": message},
            workspace_id=self.workspace_id,
        )

    def stop_spinner(self):
        """Hides the loading spinner overlay in this workspace's frontend."""
        self.app.outbox.send_dict(
            {"dispatch": "spinner", "visible": False},
            workspace_id=self.workspace_id,
        )

    def open_in_browser(self):
        """Launches a browser window tracking only this workspace."""
        connect_host = self.app.host if self.app.host != "0.0.0.0" else "127.0.0.1"

        url = f"http://{connect_host}:{self.app.websocket_port}/?ws_host={connect_host}&ws_port={self.app.websocket_port}&workspace={self.workspace_id}"
        webbrowser.open(url)
