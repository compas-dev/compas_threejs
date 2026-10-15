from contextvars import ContextVar
from pathlib import Path

import compas_pb
from rich.console import Console

console = Console()

# The workspace whose message a plugin is handling: where `Plugin.send` answers.
_asking_workspace = ContextVar("asking_workspace", default=None)


def action(name):
    """Marks a `Plugin` method as the handler of the frontend's `channel.send(name, data)`.

    The method is called as ``method(data, workspace)`` on the server thread, with the
    `Workspace` of the browser tab the message came from.
    """

    def decorate(method):
        method._plugin_action = name
        return method

    return decorate


class Plugin:
    """A viewer plugin: toolbar buttons in the frontend, and their Python half.

    A subclass sets `name` and `static`, the folder holding the plugin's built frontend,
    `plugin.js` (and `plugin.css`, if it has one). `plugin.js` default-exports
    `definePlugin({ name, groups })` from `@compas-dev/compas-threejs-ts`, with the same
    `name`. Methods marked with `@action("...")` handle what the frontend sends, and are
    told which workspace (browser tab) sent it; `send` answers that tab, `send_all` talks
    to every tab.

    The plugin is one object for all workspaces: a workspace shows the plugins in
    `Workspace.plugins`, by default all of `App.plugins`.

    `hide`, `show`, `disable` and `enable` take the ids of button groups or single
    buttons, as the frontend names them in `groups`. A subclass may list them in `ids`,
    so that a misspelled id raises instead of doing nothing.

    Examples
    --------
    >>> app = App()
    >>> standard = Standard()
    >>> app.plugins = [standard, Camera()]
    >>> standard.hide("display")  # a whole group
    >>> standard.disable("scale")  # one button
    >>> app.start()
    """

    name = None
    static = None
    ids = None

    def __init__(self):
        if not self.name:
            raise ValueError(f"{type(self).__name__} has no plugin name")
        self.app = None
        self._handlers = {}
        self._hidden = set()
        self._disabled = set()
        for attribute in dir(type(self)):
            method = getattr(self, attribute, None)
            name = getattr(method, "_plugin_action", None)
            if name:
                self._handlers.setdefault(name, []).append(method)

    @property
    def static_dir(self):
        return Path(self.static) if self.static else None

    def manifest(self):
        """The entry `plugins.json` lists for this plugin; paths are relative to the page."""
        entry = {"name": self.name, "module": f"plugins/{self.name}/plugin.js"}
        if (self.static_dir / "plugin.css").exists():
            entry["style"] = f"plugins/{self.name}/plugin.css"
        return entry

    def on(self, action_name):
        """Adds a handler for `action_name` from outside the plugin, as a decorator.

        >>> @camera.on("save")
        ... def saved(data, workspace):
        ...     print(data, workspace.workspace_id)
        """

        def decorate(callback):
            self._handlers.setdefault(action_name, []).append(callback)
            return callback

        return decorate

    def handle(self, action_name, data, workspace):
        """Calls the handlers of `action_name` with `data` and the `Workspace` it came from."""
        handlers = self._handlers.get(action_name)
        if not handlers:
            console.log(f"[yellow]Plugin {self.name!r} has no handler for {action_name!r}[/yellow]")
            return
        token = _asking_workspace.set(workspace)
        try:
            for handler in handlers:
                handler(data, workspace)
        finally:
            _asking_workspace.reset(token)

    @property
    def hidden(self):
        """The ids of the hidden groups and buttons."""
        return frozenset(self._hidden)

    @property
    def disabled(self):
        """The ids of the disabled groups and buttons."""
        return frozenset(self._disabled)

    def hide(self, *ids):
        """Hides these groups or buttons."""
        self._hidden.update(self._known(ids))
        self.send_buttons()

    def show(self, *ids):
        """Shows these groups or buttons again."""
        self._hidden.difference_update(self._known(ids))
        self.send_buttons()

    def disable(self, *ids):
        """Greys out these groups or buttons; their clicks and shortcuts do nothing."""
        self._disabled.update(self._known(ids))
        self.send_buttons()

    def enable(self, *ids):
        """Enables these groups or buttons again."""
        self._disabled.difference_update(self._known(ids))
        self.send_buttons()

    def _known(self, ids):
        if self.ids is not None:
            unknown = [id_ for id_ in ids if id_ not in self.ids]
            if unknown:
                raise ValueError(f"Plugin {self.name!r} has no group or button {', '.join(map(repr, unknown))}; it has {', '.join(self.ids)}")
        return ids

    def attached(self):
        """Called once the plugin is added to an App: sends the state set before that.

        A subclass with state of its own extends it, calling ``super().attached()``.
        """
        if self._hidden or self._disabled:
            self.send_buttons()

    def send_buttons(self):
        """Sends every workspace which groups and buttons are hidden or disabled; kept for browsers that connect later."""
        if not self.app:
            return  # sent when the plugin is added to an App
        message = {"dispatch": "plugin_buttons", "plugin": self.name, "hidden": sorted(self._hidden), "disabled": sorted(self._disabled)}
        self.app.outbox.send_bytes(compas_pb.pb_dump_bts(message), f"plugin/{self.name}/buttons", persist=True, workspace_id=None)

    def send(self, action_name, data=None, *, workspace=None, key=None):
        """Sends `data` to the frontend's `channel.on(action_name, ...)` handlers in one workspace.

        That is `workspace` (a `Workspace` or its id) if given; otherwise, inside an action
        handler, the workspace the handled message came from, and elsewhere "main".

        With a `key`, the message is also kept (replacing the last one with that key) and
        replayed to browsers that connect later - for state, like a list of saved views.
        """
        if workspace is None:
            workspace = _asking_workspace.get() or "main"
        workspace_id = workspace if isinstance(workspace, str) else workspace.workspace_id
        self._send(action_name, data, key, workspace_id)

    def send_all(self, action_name, data=None, *, key=None):
        """Like `send`, to every workspace - for state the plugin shares between browser tabs.

        A keyed message is also replayed to tabs opened later, in any workspace.
        """
        self._send(action_name, data, key, None)

    def _send(self, action_name, data, key, workspace_id):
        if not self.app:
            raise RuntimeError(f"Plugin {self.name!r} is not added to an App")
        message = {"dispatch": "plugin", "plugin": self.name, "action": action_name, "data": data}
        persisted = key is not None
        self.app.outbox.send_bytes(
            compas_pb.pb_dump_bts(message),
            f"plugin/{self.name}/{key}" if persisted else "",
            persist=persisted,
            workspace_id=workspace_id,
        )
