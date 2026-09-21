from typing import Optional

_VALID_KINDS = ("button", "checkbox", "select", "separator")


class ToolbarItem:
    """A single toolbar entry (button/checkbox/select/separator).

    Constructed and owned internally by `Toolbar` - callers use `Toolbar.add_button`,
    `Toolbar.add_checkbox`, `Toolbar.add_select`, or `Toolbar.add_separator` instead of
    building one of these directly.
    """

    def __init__(
        self,
        id: str,
        kind: str,
        *,
        label: Optional[str] = None,
        icon: Optional[str] = None,
        tooltip: Optional[str] = None,
        enabled: bool = True,
        visible: bool = True,
        order: int = 0,
        color: Optional[str] = None,
        default_value=None,
        options: Optional[list] = None,
        action=None,
    ):
        if kind not in _VALID_KINDS:
            raise ValueError(f"Invalid toolbar item kind: {kind!r}. Must be one of {_VALID_KINDS}.")

        self.id = id
        self.kind = kind
        self.label = label
        self.icon = icon
        self.tooltip = tooltip
        self.enabled = enabled
        self.visible = visible
        self.order = order
        self.color = color
        self.default_value = default_value
        self.options = options
        # Kept for bookkeeping only (e.g. `Toolbar.remove` cleaning up the matching
        # registry) - never serialized, since the frontend never needs the callable itself.
        self.action = action

    def as_dict(self) -> dict:
        """Serializes this item to the wire contract's per-item shape."""
        payload = {
            "id": self.id,
            "kind": self.kind,
            "label": self.label,
            "icon": self.icon,
            "tooltip": self.tooltip,
            "enabled": self.enabled,
            "visible": self.visible,
            "order": self.order,
        }
        if self.kind == "checkbox":
            payload["color"] = self.color
            payload["default_value"] = self.default_value
        elif self.kind == "select":
            payload["options"] = self.options
            payload["default_value"] = self.default_value
        return payload


class Toolbar:
    """Lets Python fully own the viewer toolbar's shape - items, icons, labels, grouping,
    order, enabled/visible state - and change it at any time after construction, unlike
    `Workspace.add_ui_element`-based widgets (`Checkbox`, `Selection`), which are add-once:
    rendered once at construction with no way to remove/reorder/rebuild them later.

    Every mutating call (`add_*`, `remove`, `set_enabled`, `set_visible`, `set_value`)
    re-serializes the *entire* toolbar and re-sends it in full under a single stable,
    persisted `obj_id` ("toolbar") - the same "single current value, stable persisted slot"
    pattern `Workspace`'s own scene/theme/spinner messages already use (see
    `Workspace._send_scene_message`, `Workspace.start_spinner`). A client that reconnects
    later always replays whichever toolbar state was sent most recently, instead of only
    ever seeing whichever state happened to be current the moment it first connected.

    Button callbacks are wired through `App.register_action`/`Inbox._handle_other_action`
    - the exact same bare, render-free dispatch path frontend elements not created by a
    backend UI element already use (`dispatch: "other_action"`). Checkbox/select callbacks
    are wired through the new `App.register_toggle_action`/`register_select_action` (see
    `Inbox.register_toggle_action`), which dispatch through the exact same `ui_callback`
    path `Checkbox`/`Selection` already use, minus their own `add_ui_element` render call -
    `Toolbar` renders the item itself via the `toolbar` dispatch instead.

    Groups and items are each kept in insertion order internally (plain dicts, relying on
    Python 3.7+ dict ordering) but rendered sorted by their own `order` field, so calls can
    happen in whatever order is convenient while still controlling the rendered order
    independently.
    """

    #: The persisted state key (see `Outbox.send_dict`'s `obj_id`) this toolbar's descriptor
    #: always occupies - stable across every add/remove/update, so a reconnecting client
    #: always replays the current toolbar rather than every historical version of it.
    OBJ_ID = "toolbar"

    def __init__(self, workspace):
        self.workspace = workspace
        # group_id -> {"order": int, "items": {item_id: ToolbarItem}}
        self._groups: dict = {}

    @property
    def app(self):
        return self.workspace.app

    # ---- BUILDING ---------------------------------------------------------------------------

    def add_button(
        self,
        id: str,
        *,
        label: str,
        action,
        icon: Optional[str] = None,
        tooltip: Optional[str] = None,
        group: str = "default",
        group_order: Optional[int] = None,
        order: int = 0,
        enabled: bool = True,
        visible: bool = True,
    ) -> None:
        """Adds (or replaces) a clickable button item.

        `action` is registered via `App.register_action(id, action)` - called with the
        message's `json_data` (usually `None` for a plain toolbar button click) when clicked,
        exactly like any other `register_action`-registered callback in this codebase.
        """
        item = ToolbarItem(
            id,
            "button",
            label=label,
            icon=icon,
            tooltip=tooltip,
            enabled=enabled,
            visible=visible,
            order=order,
            action=action,
        )
        self.app.register_action(id, action)
        self._add_item(item, group, group_order)

    def add_checkbox(
        self,
        id: str,
        *,
        label: str,
        action,
        color: Optional[str] = None,
        default_value: bool = False,
        icon: Optional[str] = None,
        tooltip: Optional[str] = None,
        group: str = "default",
        group_order: Optional[int] = None,
        order: int = 0,
        enabled: bool = True,
        visible: bool = True,
    ) -> None:
        """Adds (or replaces) a checkbox item.

        `action` is registered via `App.register_toggle_action(id, action)` - called with the
        checkbox's current boolean value on toggle, exactly like a `Checkbox` UI element's own
        `action` callback.
        """
        item = ToolbarItem(
            id,
            "checkbox",
            label=label,
            icon=icon,
            tooltip=tooltip,
            enabled=enabled,
            visible=visible,
            order=order,
            color=color,
            default_value=default_value,
            action=action,
        )
        self.app.register_toggle_action(id, action)
        self._add_item(item, group, group_order)

    def add_select(
        self,
        id: str,
        *,
        label: str,
        options: list,
        action,
        default_value=None,
        icon: Optional[str] = None,
        tooltip: Optional[str] = None,
        group: str = "default",
        group_order: Optional[int] = None,
        order: int = 0,
        enabled: bool = True,
        visible: bool = True,
    ) -> None:
        """Adds (or replaces) a select/dropdown item.

        `action` is registered via `App.register_select_action(id, action)` - called with the
        chosen option on selection, exactly like a `Selection` UI element's own `action`
        callback.
        """
        item = ToolbarItem(
            id,
            "select",
            label=label,
            icon=icon,
            tooltip=tooltip,
            enabled=enabled,
            visible=visible,
            order=order,
            options=list(options),
            default_value=default_value,
            action=action,
        )
        self.app.register_select_action(id, action)
        self._add_item(item, group, group_order)

    def add_separator(
        self,
        id: str,
        *,
        group: str = "default",
        group_order: Optional[int] = None,
        order: int = 0,
        visible: bool = True,
    ) -> None:
        """Adds (or replaces) a non-interactive separator item - no label/icon/callback."""
        item = ToolbarItem(id, "separator", enabled=True, visible=visible, order=order)
        self._add_item(item, group, group_order)

    # ---- MUTATING -----------------------------------------------------------------------------

    def remove(self, id: str) -> None:
        """Removes the item with the given `id`, wherever it is, and drops its registered
        callback (if any). A no-op if `id` isn't currently in the toolbar."""
        for entry in self._groups.values():
            item = entry["items"].pop(id, None)
            if item is not None:
                if item.action is not None:
                    self.app.inbox.unregister_action(id)
                self._send()
                return

    def set_enabled(self, id: str, enabled: bool) -> None:
        """Enables or disables the item with the given `id`, without touching its callback
        or currently displayed value."""
        item = self._require(id)
        item.enabled = enabled
        self._send()

    def set_visible(self, id: str, visible: bool) -> None:
        """Shows or hides the item with the given `id`, without touching its callback or
        currently displayed value."""
        item = self._require(id)
        item.visible = visible
        self._send()

    def set_value(self, id: str, value) -> None:
        """Updates a checkbox/select item's current displayed value (`default_value` on the
        wire) without touching its registered callback. Raises `ValueError` for a `button`
        or `separator` item, which carry no value."""
        item = self._require(id)
        if item.kind not in ("checkbox", "select"):
            raise ValueError(f"Toolbar item {id!r} is a {item.kind!r}, which has no value to set.")
        item.default_value = value
        self._send()

    # ---- SERIALIZATION / SENDING ----------------------------------------------------------------

    def as_dict(self) -> dict:
        """Serializes the current toolbar to the wire contract's `toolbar` shape:
        `{"groups": [{"id", "order", "items": [...]}]}`, groups and items both sorted by
        their own `order` field."""
        groups = []
        for group_id, entry in sorted(self._groups.items(), key=lambda kv: kv[1]["order"]):
            items = sorted(entry["items"].values(), key=lambda item: item.order)
            groups.append(
                {
                    "id": group_id,
                    "order": entry["order"],
                    "items": [item.as_dict() for item in items],
                }
            )
        return {"groups": groups}

    # ---- INTERNAL -------------------------------------------------------------------------------

    def _require(self, id: str) -> ToolbarItem:
        for entry in self._groups.values():
            item = entry["items"].get(id)
            if item is not None:
                return item
        raise KeyError(f"No toolbar item registered with id {id!r}.")

    def _group(self, group_id: str, order: Optional[int]) -> dict:
        entry = self._groups.get(group_id)
        if entry is None:
            # New group - falls back to 0 if this particular add_* call didn't specify
            # a group_order (e.g. a later item added to an already-positioned group).
            entry = {"order": order if order is not None else 0, "items": {}}
            self._groups[group_id] = entry
        elif order is not None:
            # Existing group - only overwrite its order when THIS call actually passed
            # one; otherwise adding a second item to a group would silently reset the
            # group's order back to the default every time.
            entry["order"] = order
        return entry

    def _add_item(self, item: ToolbarItem, group: str, group_order: Optional[int]) -> None:
        entry = self._group(group, group_order)
        entry["items"][item.id] = item
        self._send()

    def _send(self) -> None:
        # Both an explicit "obj_id" field in the message body (matching the wire contract
        # exactly, byte for byte) and the `obj_id=` kwarg below (which controls the actual
        # server-side persisted-state key, see `Outbox.send_dict`/`AppServer.broadcast`) are
        # needed - they serve different purposes but must agree, so both are set from the
        # same `Toolbar.OBJ_ID` constant.
        message = {"dispatch": "toolbar", "obj_id": self.OBJ_ID, "toolbar": self.as_dict()}
        self.app.outbox.send_dict(message, workspace_id=self.workspace.workspace_id, obj_id=self.OBJ_ID)
