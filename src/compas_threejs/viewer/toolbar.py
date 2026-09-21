class Toolbar:
    """Lets the backend show/hide or enable/disable a toolbar button the frontend already
    defines, by id. It cannot create, remove, relabel, or re-icon a button - a toolbar
    button is always a frontend `.vue` module (built-in or installed from an npm package),
    which owns its own icon, label, and click behavior. Ids are opaque strings owned by the
    frontend's button set; the backend has no way to validate one, so an id that doesn't
    match any button the frontend knows about is silently ignored - the same trust model as
    any other id (an object guid, an action name) crossing this wire.

    Every mutating call (`set_visible`, `set_enabled`) re-sends the *entire* current
    override map under a single stable, persisted `obj_id` ("toolbar") - the same
    "single current value, stable persisted slot" pattern `Workspace`'s own scene/theme/
    spinner messages already use (see `Workspace._send_scene_message`,
    `Workspace.start_spinner`). A client that reconnects later always replays whichever
    override state was sent most recently, instead of only ever seeing whichever state
    happened to be current the moment it first connected.
    """

    #: The persisted state key (see `Outbox.send_dict`'s `obj_id`) this toolbar's overrides
    #: always occupy - stable across every mutation, so a reconnecting client always
    #: replays the current overrides rather than every historical version of them.
    OBJ_ID = "toolbar"

    def __init__(self, workspace):
        self.workspace = workspace
        # id -> {"visible": bool, "enabled": bool} - only the keys that have been set.
        self._overrides: dict = {}

    @property
    def app(self):
        return self.workspace.app

    def set_visible(self, id: str, visible: bool) -> None:
        """Shows or hides the frontend button with the given `id`."""
        self._overrides.setdefault(id, {})["visible"] = visible
        self._send()

    def set_enabled(self, id: str, enabled: bool) -> None:
        """Enables or disables the frontend button with the given `id`."""
        self._overrides.setdefault(id, {})["enabled"] = enabled
        self._send()

    def _send(self) -> None:
        # Both an explicit "obj_id" field in the message body (matching the wire contract
        # exactly, byte for byte) and the `obj_id=` kwarg below (which controls the actual
        # server-side persisted-state key, see `Outbox.send_dict`/`AppServer.broadcast`) are
        # needed - they serve different purposes but must agree, so both are set from the
        # same `Toolbar.OBJ_ID` constant.
        message = {"dispatch": "toolbar_control", "obj_id": self.OBJ_ID, "overrides": self._overrides}
        self.app.outbox.send_dict(message, workspace_id=self.workspace.workspace_id, obj_id=self.OBJ_ID)
