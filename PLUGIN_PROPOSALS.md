# Plugin system: proposals for multi-workspace apps

Next steps for viewer plugins, worked out against a real app,
[`timber_model_viewer`](#case-study-timber_model_viewer). These are proposals, not
decisions.

## Where the plugin system stands

The viewer has no toolbar of its own. Everything interactive comes from plugins,
installed with pip and enabled in Python:

```python
app = App()
app.plugins = [Essentials(), Views(), Draw()]   # toolbar sections, in this order
```

A plugin is one Python package with two halves:

- **Frontend** - `.vue` components built into `static/plugin.js` (shipped in the
  wheel). It declares named toolbar `groups` of buttons and `objectActions` (shown in
  the FUNCTIONS panel for the selected object), and builds its behaviour on the
  viewer's primitives (`useViewer()`, `viewer.three`).
- **Python** - a `Plugin` subclass: `@action` handlers for what the frontend sends,
  `send()` to answer, and `hide` / `show` / `disable` / `enable` for its buttons.

The viewer page loads the plugins listed at `/plugins.json`; `vue`, `three` and the
viewer API are shared through an import map. Existing plugins:
`compas_threejs_essentials` (gizmo, hide/lock, screenshot), `compas_threejs_views`
(view presets, saved views) and `compas_threejs_draw` (drawing tools).

Implemented on `feature/plugins` in `compas_threejs` and `compas_threejs_ts`.

## Case study: timber_model_viewer

The timber app is a good test of what plugins still lack. Today it:

1. **Opens a workspace per element.** "Open beam" (an object action defined in
   Python) creates a workspace (`app.get_workspace(str(beam.guid))`), fills it with
   that beam and its processings, and calls `workspace.open_in_browser()`, which opens
   a new tab on the same viewer page with `?workspace=<guid>`.
2. **Serves side pages.** The tree, graph and table viewers are separate HTML pages
   (`app.add_static_mount("/tree", ...)`) fed by JSON routes
   (`app.add_route("/tree/api/tree", ...)`).
3. **Adds its own tools.** Load model, Process joinery, Export BTLX - through a custom
   frontend build (`frontend-src/`) on an earlier viewer extension branch.

Much of this already fits a plugin. A `Timber` plugin's Python half has `self.app`, so
it can create workspaces, add routes, and serve extra pages from its own `static/`
folder (served at `/plugins/timber/`). Load model and Process joinery become toolbar
buttons; Open beam and Export BTLX become object actions. The app would then be:

```python
app.plugins = [Essentials(), Views(), Timber()]
```

with no custom viewer build. Four things stand in the way.

## Proposals

### 1. Workspace-aware plugins

**Problem.** A plugin only talks to the main workspace: `Plugin.send()` broadcasts to
`"main"`, and `@action` handlers aren't told which workspace (browser tab) a message
came from - the inbox knows it, but `Plugin.handle` drops it. A button in a beam's tab
can't answer that tab.

**Proposal.** Pass the workspace through, both ways:

```python
class Timber(Plugin):
    name = "timber"

    @action("open_element")
    def _open(self, data, workspace):          # the workspace the click came from
        beam_ws = self.app.get_workspace(data["guid"])
        ...
        self.send("opened", {"workspace": data["guid"]}, workspace=workspace)
```

- Handlers that take a second parameter get the `Workspace`; one-parameter handlers
  keep working.
- `send(..., workspace=None)` defaults to the main workspace, as today; `key=` state
  is kept per workspace.
- `hide` / `disable` could take a `workspace=` too, so a tab can have its own button
  state.

### 2. Plugins per workspace

**Problem.** Every tab loads every plugin, from one `/plugins.json`. A beam tab
probably wants Essentials, but not Draw.

**Proposal.**

```python
beam_ws = app.get_workspace(str(beam.guid))
beam_ws.plugins = [essentials, timber]     # same instances, a subset
```

- The page asks for `/plugins.json?workspace=<id>`; a workspace without its own list
  gets `app.plugins`.
- Plugin instances are shared across workspaces (one Python state per plugin), which
  is why proposal 1 is needed: the plugin learns which tab is talking to it.

### 3. Open a workspace in the user's browser

**Problem.** `workspace.open_in_browser()` calls `webbrowser.open` on the machine
running Python. With `App(host="0.0.0.0")` and the viewer used from another computer,
the tab opens on the wrong machine (or nowhere).

**Proposal.** Let the frontend open it, from the click that asked for it:

- a viewer primitive `viewer.workspaceUrl(id)` (the current page's URL with
  `workspace=<id>`), so a plugin button can `window.open(viewer.workspaceUrl(guid))`;
- or a Python call that asks the browser to do it:
  `workspace.open_in_browser(from_workspace=workspace)` sending an "open this URL"
  message to that tab.

The first is a two-line primitive and keeps the opening in the button that was
clicked (browsers block pop-ups that aren't triggered by a click). Python still
creates and fills the workspace first.

### 4. Panels

**Problem.** The tree, graph and table are separate pages. They work, but they don't
know about the 3D view: clicking a beam in the tree can't select it in the viewer.

**Proposal.** A third extension point next to `groups` and `objectActions`:

```ts
definePlugin({
  name: "timber",
  groups: { model: { load: LoadButton, joinery: JoineryButton } },
  objectActions: { open: OpenElementAction, btlx: ExportBtlxAction },
  panels: { tree: TreePanel, graph: GraphPanel, table: TablePanel },
});
```

- A panel is a Vue component docked in the viewer (left, right or bottom - the docking
  layout from the earlier panel-docking work, PR #28, could be reused), shown, hidden
  and disabled by id from Python like buttons.
- It has the same `useViewer()` as buttons, so it can select objects
  (`viewer.selection`), follow the selection, and talk to its Python half over its
  channel instead of separate HTTP routes.
- Separate pages stay possible for anything that needs a full window - the plugin's
  `static/` folder is already served.

## Suggested order

1. **Workspace-aware plugins** and **plugins per workspace** (proposals 1 and 2):
   small, needed by any multi-tab plugin, and backward compatible.
2. **`viewer.workspaceUrl`** (proposal 3): a tiny core primitive.
3. **Panels** (proposal 4): the larger design question - best done while porting the
   timber app as the first plugin outside the three we have, so the API is shaped by a
   real use.

## Open questions

- Should a workspace's plugin list be fixed when the tab opens, or changeable live?
- Panels: one shared dock per side, or one dock per plugin? Resizable? Remembered per
  user (browser storage) or set from Python?
- Cross-plugin talk is so far a shared-state primitive (`viewer.state.snap`, set by
  Draw and read by Essentials). If more of those appear, a general mechanism
  (`viewer.provide` / `viewer.inject` between plugins) may be cleaner than adding each
  one to the core.

## Ideas for more plugins

Plugins the COMPAS ecosystem could have, with what each would need from the viewer
core - which shows where the plugin API still has to grow.

### General tools

Useful whatever is being modelled.

| Plugin | What it does | Frontend / Python | Needs from core |
|---|---|---|---|
| **Measure** | Distances, angles and areas, clicked and snapped like Draw | Mostly frontend; Python can read the results | Nothing new: `beginInteraction`, `pointerRay` and object snap exist |
| **Section** | Clipping planes / section boxes to look inside a model | Frontend; Python sets planes for a figure or report | A clipping-plane primitive (renderer setting) |
| **Scene tree / Layers** | Objects grouped by layer or type; show, hide, lock, isolate | Python holds the groups; frontend shows them | `panels` (proposal 4) |
| **Inspector** | Attributes and metadata of the selection, editable, with changes sent back to Python | Both | `panels`; could replace the core's metadata panel |
| **Parameters** | Sliders, number fields, selects driving a Python function live | Both | Nothing - the core's `ui` elements (Slider, Button, ...) could move here, as the toolbar did |
| **Timeline / Animation** | Play / pause / scrub frames computed in Python | Both | Cheap per-frame updates (transforms without rebuilding); PR #20 (Play/Pause object motion) is a start |
| **Export** | glTF / OBJ / STL of the scene, or COMPAS JSON | Python exports; frontend downloads | Nothing |
| **Review / Annotations** | Pins and notes on objects, stored in Python, shared by everyone viewing | Both | Workspace-aware plugins (proposal 1) |

### Plugins for COMPAS packages

| Plugin | Package | What it would add |
|---|---|---|
| **Timber** | `compas_timber` | Load model, process joinery, element tree / graph / table, open element, export BTLX - the [case study](#case-study-timber_model_viewer) |
| **Robots** | `compas_robots` | A robot model with joint sliders, configuration snapshots, end-effector frame |
| **Fab** | `compas_fab` | Plan motions on the backend, play trajectories on a timeline, show collisions (PR #2, compas_fab trajectory integration, started this) |
| **Slicer** | `compas_slicer` | A layer slider, toolpath preview coloured by speed or height, print-order playback |
| **Model** | `compas_model` | Element tree, interaction graph, element properties - a general base Timber could build on |
| **Eve** | `compas_eve` | Subscribe to pub/sub topics and show live data: sensors, a robot's current pose, a remote script's output |
| **Brep** | `compas_occ` / `compas_brep` | Booleans, fillets and offsets on selected objects, computed in Python - "CAD actions" as object actions next to Draw |
| **Analysis** | `compas_fea2`, results in general | Colour maps on meshes, a legend, deformed shapes with a scale slider |
| **Form finding** | `compas_fd`, `compas_ags` | Live form finding: drag supports or change force densities, Python re-solves, the viewer updates |
| **IFC** | `compas_ifc` | Load IFC, browse the spatial tree, show element properties |

### Where to start

- **Measure** - small and frontend-only; shows that tools beyond drawing work on the
  current primitives.
- **Robots, then Fab** - wide interest, existing PR work to reuse, and they drive the
  timeline / animation primitives that Slicer and Analysis also need.
- **Timber** - the real multi-workspace app, which shapes proposals 1, 2 and 4.

Several general tools are building blocks that domain plugins would reuse: Timber
wants the scene tree, while Fab, Slicer and Analysis want the timeline. That argues
for the general way for plugins to talk to each other (see the last open question)
rather than each domain plugin rebuilding its own copies.
