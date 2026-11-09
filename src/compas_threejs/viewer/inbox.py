import json
from collections import ChainMap

from compas.colors import Color
from compas.geometry import Box
from compas.geometry import Frame
from compas.geometry import Point
from compas.geometry import Sphere
from compas.geometry import Transformation
from rich.console import Console

from compas_threejs.materials import Material

from .session import State

console = Console()

# Maps a frontend-creatable type name to its COMPAS constructor and the numeric
# parameter names a "create_geometry" message is allowed to set on it.
_CREATABLE_TYPES = {
    "box": (Box, ("xsize", "ysize", "zsize")),
    "sphere": (Sphere, ("radius",)),
    "point": (Point, ()),
}


class Inbox:
    """Routes messages coming in from the frontend to their handlers.

    The registries it resolves them with - guid to geometry, material, callback - are the
    current session's (see `State`): the attributes below are views onto them, kept under
    their old names for the code that reads them.
    """

    def __init__(self, app=None):
        self.app = app  # back-reference to the owning App, used to reach Workspace.update_geometry
        # Without an App with sessions (a `Remote`, a test's stand-in), the registries are
        # this inbox's own.
        self._state = None if getattr(app, "sessions", None) is not None else State()

        self._handlers = {
            "ui_callback": self._handle_ui_callback,
            "object_picked": self._handle_object_picked,
            "object_action_callback": self._handle_object_action_callback,
            "loaded_json": self._handle_loaded_json,
            "other_action": self._handle_other_action,
            "object_transform": self._handle_object_transform,
            "create_geometry": self._handle_create_geometry,
            "material_edit": self._handle_material_edit,
            "plugin": self._handle_plugin,
        }

    @property
    def state(self) -> State:
        """The `State` whose registries this resolves with: the current session's."""
        return self._state if self._state is not None else self.app.sessions.current().state

    def _shared(self, name):
        """The current session's registry `name`, falling back to the default session's: what
        was registered outside of any session (at startup, in app.py) is everyone's. Writes
        go to the current session's."""
        state = self.state
        if state.shared is None:
            return getattr(state, name)
        return ChainMap(getattr(state, name), getattr(state.shared, name))

    @property
    def buttons(self):
        """Callbacks by guid: UI elements and object actions - the session's, then everyone's."""
        return self._shared("buttons")

    @property
    def geometry_registry(self):
        """Geometry by guid - the session's, then everyone's. To change one, take it from
        `State.own`: everyone's must not be changed in place."""
        return self._shared("geometry")

    @property
    def material_registry(self):
        return self._shared("materials")

    @property
    def metadata_registry(self):
        return self._shared("metadata")

    @property
    def object_actions_registry(self):
        return self._shared("object_actions")

    @property
    def brep_viewmesh_registry(self):
        return self.state.brep_viewmeshes

    @property
    def action_registry(self):
        """Callables by action name (see `register_action`) - the session's, then everyone's."""
        return self._shared("actions")

    @property
    def lock(self):
        return self.state.lock

    # ---- REGISTRATION (see State) ---------------------------------------------------------------

    def register_geometry(self, obj_id, geometry, metadata=None, actions=None):
        self.state.register_geometry(obj_id, geometry, metadata, actions)

    def register_material(self, obj_id, material):
        self.state.register_material(obj_id, material)

    def register_button(self, guid, action):
        self.state.register_button(guid, action)

    def forget_geometry(self, obj_id: str) -> None:
        self.state.forget_geometry(obj_id)

    def register_action(self, name, callable_function):
        """Manually registers a callable against a fixed action name.

        Used for frontend elements that weren't created by a backend UI element (and so have no
        auto-registered guid), but instead send a `dispatch: "other_action"` message with a fixed
        `action` name, e.g. `{"dispatch": "other_action", "action": "load_timber_model", ...}`.
        """
        self.state.register_action(name, callable_function)

    def update_metadata(self, metadata):
        """Updates the metadata associated with a geometry object in the viewer."""
        self.state.update_metadata(metadata)

    # ---- ROUTING --------------------------------------------------------------------------------

    def handle(self, raw_message, outbox, workspace_id: str = "main"):
        """Decodes and routes a raw message received from the frontend."""
        message = self._decode(raw_message)
        handler = self._handlers.get(message.get("dispatch"))
        if handler:
            handler(message, outbox, workspace_id)
        else:
            console.log(f"[yellow]Received unrecognized message from frontend: {message}[/yellow]")

    def _decode(self, message_in_bytes) -> dict:
        """Decodes a message from bytes to a string, then parses it as a JSON dictionary."""
        message_str = message_in_bytes.decode("utf-8")
        return json.loads(message_str)

    def _handle_ui_callback(self, message, outbox, workspace_id):
        """Handles all actions that are tied to an user-defined action in a ui-element."""
        action_id = message.get("action")
        console.log(f"[blue]Received message from frontend: {message}[/blue]")
        value = message.get("value")

        callable_function = self.buttons[action_id]

        if not callable(callable_function):
            console.log(f"[yellow]Warning: The action associated with ID {action_id} did not return a callable function.[/yellow]")
            return

        if value is not None and action_id and action_id in self.buttons:
            console.log(f"[blue]Value associated with the action: {value}[/blue]")
            self.buttons[action_id](value)
        elif action_id and action_id in self.buttons:
            self.buttons[action_id]()
        else:
            console.log(f"[yellow]Unrecognized action or missing handler for action ID: {action_id}[/yellow]")

    def _handle_object_picked(self, message, outbox, workspace_id):
        object_id = message.get("guid")
        console.log(f"[blue]Received object picked message from frontend. Object ID: {object_id}[/blue]")
        metadata = self.metadata_registry.get(object_id)
        if metadata:
            fields = dict(metadata.metadata)
            console.log(f"[blue]Metadata associated with the object: {fields}[/blue]")
            # The message is a protobuf map, which loses the fields' order: "__order__"
            # carries it for the viewer to show them in.
            message = {**fields, "dispatch": "object_infos", "__order__": list(fields)}
            outbox.send_dict(message, workspace_id=workspace_id)
        else:
            outbox.send_dict(
                {
                    "dispatch": "object_infos",
                    "No metadata associated with this object.": "",
                },
                workspace_id=workspace_id,
            )

        object_actions = self.object_actions_registry.get(object_id)
        if object_actions:
            for action in object_actions:
                action_message = action.as_dict()
                action_message["dispatch"] = "object_action"
                action_message["object_guid"] = object_id
                outbox.send_dict(action_message, workspace_id=workspace_id)

    def _handle_object_action_callback(self, message, outbox, workspace_id):
        action_id = message.get("action_guid")
        object_id = message.get("object_guid")
        console.log(f"[blue]Received object action callback from frontend. Action ID: {action_id}, Object ID: {object_id}[/blue]")
        obj = self.state.own(object_id) if object_id else None  # the session's own: the callback may change it
        if action_id and action_id in self.buttons:
            value = message.get("value")
            console.log(f"[blue]Value associated with the action: {value}[/blue]")
            self.buttons[action_id](obj, value)
        else:
            console.log(f"[yellow]Unrecognized action or missing handler for action ID: {action_id}[/yellow]")

    def _handle_object_transform(self, message, outbox, workspace_id):
        """Applies a gizmo edit made in the frontend to the corresponding live backend object.

        `matrix` is a delta transform (a 4x4 nested list, row-major) - the frontend computes
        it as (matrix after drag) * (matrix before drag)^-1, so it represents the world-space
        change the drag applied, regardless of where the object started. Applying it in place
        (rather than replacing the registered object) means anything else still mutating this
        same object - e.g. a `App.loop` callback rotating it every frame - continues from the
        new position instead of the object snapping back.
        """
        guid = message.get("guid")
        matrix = message.get("matrix")
        console.log(f"[blue]Received object transform from frontend. Object ID: {guid}[/blue]")
        geometry = self.state.own(guid) if guid else None  # everyone's is copied first, not moved for all
        if geometry is None or matrix is None:
            console.log(f"[yellow]Unrecognized object_transform target: {guid}[/yellow]")
            return

        transformation = Transformation.from_matrix(matrix)
        with self.lock:
            geometry.transform(transformation)

        if self.app is not None:
            workspace = self.app.get_workspace(workspace_id)
            workspace.update_geometry(geometry)
            for callback in list(self.app._transform_callbacks):
                try:
                    callback(geometry, transformation, workspace)
                except Exception as error:  # a script's callback must not break the server
                    console.log(f"[red]Error in {getattr(callback, '__name__', callback)}: {error}[/red]")

    def _handle_create_geometry(self, message, outbox, workspace_id):
        """Creates a new backend geometry object from a frontend "Add Box/Sphere/Point" action.

        Reuses `Workspace.add_geometry` for the outbound side, so the created object is
        registered and broadcast exactly like anything added by a running script - the
        frontend needs no special handling to receive it, and it persists across
        reconnects the same way any other geometry does.
        """
        type_name = message.get("type")
        entry = _CREATABLE_TYPES.get(type_name)
        if entry is None:
            console.log(f"[yellow]Unrecognized create_geometry type: {type_name}[/yellow]")
            return
        if self.app is None:
            console.log("[yellow]create_geometry received but Inbox has no App reference[/yellow]")
            return

        constructor, allowed_params = entry
        point = message.get("point") or [0.0, 0.0, 0.0]
        params = message.get("params") or {}
        kwargs = {name: params.get(name, 1.0) for name in allowed_params}

        if type_name == "point":
            geometry = constructor(*point)
        else:
            frame = Frame(Point(*point), [1, 0, 0], [0, 1, 0])
            geometry = constructor(frame=frame, **kwargs)

        console.log(f"[blue]Creating {type_name} from frontend at {point}[/blue]")
        self.app.get_workspace(workspace_id).add_geometry(geometry, Material())

    def _handle_material_edit(self, message, outbox, workspace_id):
        """Applies a toolbar material edit (color/metalness/roughness) made in the frontend
        to the corresponding live backend Material instance.

        Reuses `Workspace.update_material` for the outbound side - the same method
        `examples/objects_action.py`'s "Make it blue" action already calls - so an edit made
        here and a script-driven update both end up mutating and broadcasting through the
        same live Material instance rather than drifting out of sync.
        """
        guid = message.get("guid")
        if self.geometry_registry.get(guid) is None or self.app is None:
            console.log(f"[yellow]Unrecognized material_edit target: {guid}[/yellow]")
            return

        material = self.state.own_material(guid)  # everyone's is copied first
        if material is None:
            material = Material()
            material._geometry_guid = str(guid)
            self.state.materials[guid] = material

        updates = {}
        if "color" in message:
            try:
                updates["color"] = Color.from_hex(message["color"])
            except (TypeError, ValueError) as error:
                console.log(f"[yellow]Ignoring invalid material_edit color for {guid}: {error}[/yellow]")
                return
        if "metalness" in message:
            updates["metalness"] = message["metalness"]
        if "roughness" in message:
            updates["roughness"] = message["roughness"]

        # Apply through the property setters (which validate ranges) against a rollback
        # snapshot, so a single invalid field can't leave `material` half-updated while
        # still skipping the broadcast below - either every field commits, or none do.
        original = {name: getattr(material, name) for name in updates}
        try:
            for name, value in updates.items():
                setattr(material, name, value)
        except (TypeError, ValueError) as error:
            for name, value in original.items():
                setattr(material, name, value)
            console.log(f"[yellow]Ignoring invalid material_edit for {guid}: {error}[/yellow]")
            return

        self.app.get_workspace(workspace_id).update_material(material)

    def _handle_loaded_json(self, message, outbox, workspace_id):
        console.log("[blue]Received loaded JSON from frontend.[/blue]")
        json_data = message.get("json_data")
        action_id = message.get("action")
        if action_id and action_id in self.buttons:
            self.buttons[action_id](json_data)

    def _handle_plugin(self, message, outbox, workspace_id):
        """Hands a plugin's `channel.send(action, data)` to that plugin's Python half."""
        name = message.get("plugin")
        plugin = self.app.get_plugin(name) if self.app else None
        if not plugin:
            console.log(f"[yellow]Received a message for unknown plugin {name!r}[/yellow]")
            return
        workspace = self.app.get_workspace(workspace_id)
        if plugin not in workspace.plugins:
            console.log(f"[yellow]Plugin {name!r} is not in workspace {workspace_id!r}[/yellow]")
            return
        plugin.handle(message.get("action"), message.get("data"), workspace)

    def _handle_other_action(self, message, outbox, workspace_id):
        """Handles messages from frontend elements not tied to a backend-registered guid,
        dispatched by a fixed action name instead - see `register_action`."""
        action_name = message.get("action")
        # Logs the action name only, not the full message - for actions carrying a large
        # `json_data` payload (e.g. a loaded model file), Rich's rendering of the full dict
        # can itself take several seconds, delaying `callable_function` below for no benefit.
        console.log(f"[blue]Received other_action message from frontend: action={action_name}[/blue]")

        callable_function = self.action_registry.get(action_name)
        if not callable_function:
            console.log(f"[yellow]Unrecognized or unregistered action name: {action_name}[/yellow]")
            return

        json_data = message.get("json_data")
        callable_function(json_data)
