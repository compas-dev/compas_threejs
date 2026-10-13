from pathlib import Path

import compas_pb
from rich.console import Console

console = Console()


def action(name):
    """Marks a `Plugin` method as the handler of the frontend's `channel.send(name, data)`.

    The method is called as ``method(data)`` on the server thread.
    """

    def decorate(method):
        method._plugin_action = name
        return method

    return decorate


class Plugin:
    """A viewer plugin: toolbar buttons in the frontend, and their Python half.

    A subclass sets `name` and `static`, the folder holding the plugin's built frontend,
    `plugin.js` (and `plugin.css`, if it has one). `plugin.js` default-exports
    `definePlugin({ name, buttons })` from `@compas-dev/compas-threejs-ts`, with the same
    `name`. Methods marked with `@action("...")` handle what the frontend sends; `send`
    talks back.

    Examples
    --------
    >>> app = App()
    >>> app.plugins = [Standard(), Camera()]
    >>> app.start()
    """

    name = None
    static = None

    def __init__(self):
        if not self.name:
            raise ValueError(f"{type(self).__name__} has no plugin name")
        self.app = None
        self._handlers = {}
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
        ... def saved(data):
        ...     print(data)
        """

        def decorate(callback):
            self._handlers.setdefault(action_name, []).append(callback)
            return callback

        return decorate

    def handle(self, action_name, data):
        handlers = self._handlers.get(action_name)
        if not handlers:
            console.log(f"[yellow]Plugin {self.name!r} has no handler for {action_name!r}[/yellow]")
            return
        for handler in handlers:
            handler(data)

    def send(self, action_name, data=None, *, key=None):
        """Sends `data` to the frontend's `channel.on(action_name, ...)` handlers.

        With a `key`, the message is also kept (replacing the last one with that key) and
        replayed to browsers that connect later - for state, like a list of saved views.
        """
        if not self.app:
            raise RuntimeError(f"Plugin {self.name!r} is not added to an App")
        message = {"dispatch": "plugin", "plugin": self.name, "action": action_name, "data": data}
        persisted = key is not None
        self.app.outbox.send_bytes(
            compas_pb.pb_dump_bts(message),
            f"plugin/{self.name}/{key}" if persisted else "",
            persist=persisted,
        )
