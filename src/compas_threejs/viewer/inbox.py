import json

from rich.console import Console

console = Console()


class Inbox:
    """Routes messages coming in from the frontend and owns the registries needed to resolve them."""

    def __init__(self):
        self.buttons = dict()
        self.geometry_registry = dict()
        self.metadata_registry = dict()
        self.object_actions_registry = dict()
        self.brep_viewmesh_registry = dict()  # brep_id -> viewmesh

        self._handlers = {
            "ui_callback": self._handle_ui_callback,
            "object_picked": self._handle_object_picked,
            "object_action_callback": self._handle_object_action_callback,
            "loaded_json": self._handle_loaded_json,
        }

    # ---- REGISTRATION (called by Workspace when something is sent out) -------------------------

    def register_geometry(self, obj_id, geometry, metadata=None, actions=None):
        obj_id = str(obj_id)
        self.geometry_registry[obj_id] = geometry
        if metadata:
            self.metadata_registry[obj_id] = metadata
        if actions:
            self.object_actions_registry[obj_id] = actions
            for action in actions:
                self.buttons[str(action.guid)] = action.action

    def register_button(self, guid, action):
        self.buttons[guid] = action

    def update_metadata(self, metadata):
        """Updates the metadata associated with a geometry object in the viewer."""
        for key, value in self.metadata_registry.items():
            if value.guid == metadata.guid:
                self.metadata_registry[key] = metadata
                break

    # ---- ROUTING --------------------------------------------------------------------------------

    def handle(self, raw_message, outbox):
        """Decodes and routes a raw message received from the frontend."""
        message = self._decode(raw_message)
        handler = self._handlers.get(message.get("dispatch"))
        if handler:
            handler(message, outbox)
        else:
            console.log(
                f"[yellow]Received unrecognized message from frontend: {message}[/yellow]"
            )

    def _decode(self, message_in_bytes) -> dict:
        """Decodes a message from bytes to a string, then parses it as a JSON dictionary."""
        message_str = message_in_bytes.decode("utf-8")
        return json.loads(message_str)

    def _handle_ui_callback(self, message, outbox):
        """Handles all actions that are tied to an user-defined action in a ui-element."""
        action_id = message.get("action")
        console.log(f"[blue]Received message from frontend: {message}[/blue]")
        value = message.get("value")

        callable_function = self.buttons[action_id]

        if not callable(callable_function):
            console.log(
                f"[yellow]Warning: The action associated with ID {action_id} did not return a callable function.[/yellow]"
            )
            return

        if value is not None and action_id and action_id in self.buttons:
            console.log(f"[blue]Value associated with the action: {value}[/blue]")
            self.buttons[action_id](value)
        elif action_id and action_id in self.buttons:
            self.buttons[action_id]()
        else:
            console.log(
                f"[yellow]Unrecognized action or missing handler for action ID: {action_id}[/yellow]"
            )

    def _handle_object_picked(self, message, outbox):
        object_id = message.get("guid")
        console.log(
            f"[blue]Received object picked message from frontend. Object ID: {object_id}[/blue]"
        )
        metadata = self.metadata_registry.get(object_id)
        if metadata:
            metadata["dispatch"] = "object_infos"
            console.log(f"[blue]Metadata associated with the object: {metadata}[/blue]")
            outbox.send_dict(metadata.metadata)
        else:
            outbox.send_dict(
                {
                    "dispatch": "object_infos",
                    "No metadata associated with this object.": "",
                }
            )

        object_actions = self.object_actions_registry.get(object_id)
        if object_actions:
            for action in object_actions:
                action_message = action.as_dict()
                action_message["dispatch"] = "object_action"
                action_message["object_guid"] = object_id
                outbox.send_dict(action_message)

    def _handle_object_action_callback(self, message, outbox):
        action_id = message.get("action_guid")
        object_id = message.get("object_guid")
        console.log(
            f"[blue]Received object action callback from frontend. Action ID: {action_id}, Object ID: {object_id}[/blue]"
        )
        obj = self.geometry_registry.get(object_id)
        if action_id and action_id in self.buttons:
            function = self.buttons[action_id]
            if function.__code__.co_argcount == 2:
                self.buttons[action_id](object_id)
            elif function.__code__.co_argcount == 3:
                value = message.get("value")
                console.log(f"[blue]Value associated with the action: {value}[/blue]")
                self.buttons[action_id](obj, value)
        else:
            console.log(
                f"[yellow]Unrecognized action or missing handler for action ID: {action_id}[/yellow]"
            )

    def _handle_loaded_json(self, message, outbox):
        console.log("[blue]Received loaded JSON from frontend.[/blue]")
        json_data = message.get("json_data")
        action_id = message.get("action")
        if action_id and action_id in self.buttons:
            self.buttons[action_id](json_data)
