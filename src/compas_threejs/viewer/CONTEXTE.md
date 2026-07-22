# Viewer package — context for a future agent

This package was refactored from a single `Viewer`/`WorkspaceProxy` pair in `viewer.py`
into the current module layout. As of this writing **nothing here is committed yet**
(`git status` shows it all as pending changes) — check `git log` / `git status` before
assuming any of this has landed.

## Mental model

- **`App`** (`app.py`, was `Viewer`) — server lifecycle only: host/port, `start()`/`stop()`/`show()`,
  the main run loop, incoming-message entry point (`on_message`). It owns `self.main`, a
  `Workspace`, and a `self.workspaces` dict of any others created via `get_workspace(id)`.
  Nearly every "viewer-ish" method/property on `App` (camera, background_color, add_geometry, ...)
  is a one-line forward to `self.main`.
- **`Workspace`** (`workspace.py`, was `WorkspaceProxy`) — the actual viewport: camera, background,
  dark mode, lighting, geometry/text/light/material add & update. **This is where scene-property
  setters build outgoing messages.** Each workspace is independently addressable from a browser tab
  (`?workspace=<id>` query param), so each has its own camera/background/etc. — this was a deliberate
  change from the old `Viewer`, where these settings only ever applied to `"main"`.
- **`Outbox`** (`outbox.py`) — the single "send now via the server's broadcast if the event loop is
  up, otherwise queue" implementation. `Workspace` methods call `outbox.send_bytes(...)` (raw pb
  bytes, e.g. geometry/light/material) or `outbox.send_dict(...)` (JSON-like control messages,
  e.g. scene/theme). Do not reintroduce the old copy-pasted `if loop: ... else: queued.append(...)`
  pattern — route everything through `Outbox`.
- **`Inbox`** (`inbox.py`) — owns the registries needed to answer messages coming *from* the
  frontend: `buttons`, `geometry_registry`, `metadata_registry`, `object_actions_registry`,
  `brep_viewmesh_registry`. `Workspace.add_geometry`/`add_ui_element` populate it when sending
  things out; `App.on_message` → `Inbox.handle(raw_message, outbox)` decodes and routes incoming
  JSON via a dispatch table (`ui_callback`, `object_picked`, `object_action_callback`,
  `loaded_json`), calling back into `outbox` when a response needs to go out (e.g. metadata on
  object pick).
- **`AppServer`** (`server.py`, was module-level globals) — FastAPI/uvicorn/websocket plumbing,
  now a class so each `App` gets its own isolated server instance instead of sharing process-wide
  globals. `App._initialize_server()` runs `AppServer.run()` in a background thread.
- **`Remote`** (`remote.py`) — connects to a *running* `App` from a separate process/terminal over
  a real `websockets` client connection. It is built the same way `App` is: it owns a `Workspace`
  (`self.main`) and forwards to it, but backed by `RemoteOutbox` instead of `Outbox`.
  `RemoteOutbox` implements the same `send_bytes`/`send_dict` interface as `Outbox` (duck-typed,
  no shared base class) so `Workspace` doesn't need to know which transport it's driving. This is
  what makes `Remote` and `App`/`Workspace` share message-building code instead of duplicating it.

## The wire protocol — verify against the built frontend, not memory

The frontend source isn't in this repo — only the built bundle at
`src/compas_threejs/viewer/frontend/assets/index.js` (minified). **When in doubt about message
shape, grep that file rather than guessing.** The full set of `dispatch` values the frontend
recognizes (found via `handleSceneUpdate`'s switch statement) is:

```
material, light, scene, theme, ui, text, object_infos, object_action, remove_object
```

Scene/theme control messages have the shape `{"dispatch": "scene", "type": "<name>", ...fields}`
(see `Workspace._send_scene_message`) or `{"dispatch": "theme", "type": "background_mode", "mode": "dark"|"light"}`.
Anything else hits the frontend's `default: console.warn("Unknown dispatch value", ...)` branch —
i.e. it's silently dropped. This is exactly how the `Remote.background_color`/`camera_position`/etc.
bug was found: the old `Remote` sent flat `{"dispatch": "background_color", "r":, "g":, "b":}`
messages that never matched anything the frontend listens for. It was pure dead code, verified by
grepping the bundle before touching anything.

## Behavior changes made during the refactor (not just renames)

- `Remote.background_color` / `camera_damping` / `camera_fov` / `dark_mode` / `camera_zoom` /
  `camera_position` / `camera_target` / `show_edges` — previously sent wrong-shaped messages that
  the frontend silently ignored. Now delegate to `Workspace`, so they actually work.
- `Remote.add_text(text, material=None)` — old signature was `(text: str, position: Point, size,
  color)` and built a `"dispatch": "add_text"` message that doesn't exist in the frontend's dispatch
  table. Now matches `Workspace.add_text`: takes a `compas.geometry.Text`-like object with a
  `.guid`, sent via `compas_pb` like any other geometry.
- `Remote.update_metadata(metadata)` — old signature was `(geometry, metadata)` and sent a
  `"dispatch": "update_metadata"` message. Two problems: that dispatch value doesn't exist either,
  and even a correctly-shaped message couldn't have worked — `AppServer._websocket_endpoint` only
  routes *text* (JSON) frontend→backend messages to `App.on_message`; anything a `Remote` sends is
  binary and gets rebroadcast to other clients in the same workspace, never routed back to
  `Inbox`. So there was never a way for a separate process to push metadata into a running App's
  registry over the wire. New signature matches `Inbox.update_metadata(metadata)`: local bookkeeping
  only, in the `Remote`'s own (disconnected-from-the-live-App) `Inbox` instance — same limited
  scope `App.update_metadata` already had.
- `get_local_ip()` was called in three places in the old `viewer.py` (`url`, `_initialize_server`,
  `show()`) but never defined or imported anywhere — `App(host="0.0.0.0")` would have raised
  `NameError`. Implemented in `app.py` (simple UDP-socket trick, falls back to `127.0.0.1`).
- `show()` used to hardcode `frontend_port = 3000` while `url` used `self.websocket_port` — now
  consistent (both use `websocket_port`).

## What did *not* change (checked before "fixing")

- `Inbox._handle_object_picked` does `metadata["dispatch"] = "object_infos"` then sends
  `metadata.metadata`. Looks like a dict/attribute mismatch at a glance, but `Metadata`
  (`src/compas_threejs/metadata/metadata.py`) implements `__setitem__`/`__getitem__` delegating to
  `self.metadata`, so this is correct as written — don't "fix" it.
- `Workspace.open_in_browser()` falls back to `"127.0.0.1"` (not `get_local_ip()`) when
  `host == "0.0.0.0"`, unlike `App.show()`/`App.url`. This inconsistency predates the refactor and
  was preserved rather than silently changed.

## Verifying changes (no test suite exists)

There is no `tests/` directory for this package. Verification during this refactor was done with
ad hoc scripts: start a real `App` (`app._initialize_server()`), optionally connect a `Remote` to
it, exercise the API, then decode `app.server.workspace_states["<workspace_id>"]` with
`compas_pb.pb_load_bts(...)` to see exactly what got persisted server-side — this is how the
`Remote` message-format bug was confirmed fixed rather than just assumed fixed. Also ran the real
`examples/remote_viewer.py` + `examples/remote.py` against each other end-to-end. If you change
message shapes again, verify the same way rather than trusting that "no exception was raised."

## Windows PowerShell gotchas hit during this refactor

- `-replace` is **case-insensitive by default** in PowerShell. A bulk rename using
  `-replace 'Viewer', 'App'` corrupted the lowercase `compas_threejs.viewer` module path and
  `self.viewer` variables into `App` across ~20 files. Use `-creplace` (case-sensitive) for any
  future identifier renames.
- `Set-Content -Encoding utf8` / `Get-Content -Encoding utf8` in Windows PowerShell 5.1 writes a
  UTF-8 **BOM**, which shows up as a stray `﻿` at the start of the file in diffs. Use
  `[System.IO.File]::ReadAllText/WriteAllText` with `New-Object System.Text.UTF8Encoding $false`
  instead when doing bulk text edits across many files.

## Renamed across the repo

`Viewer` → `App`, `WorkspaceProxy` → `Workspace`, everywhere: `__init__.py`, all `examples/*.py`,
`mkdocs.yml` nav, `docs/reference/{viewer,text}/viewer.md` (now point at `compas_threejs.viewer.app`),
`docs/remote.md`, `docs/tutorials/basic_geometry.md`, and the root-level `REMOTE_*.md` docs. The
package directory itself is still named `viewer/` (not renamed) — only the class names changed.
