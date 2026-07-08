# Remote Class - Quick Reference

## Installation
```bash
# The Remote class is included in compas_threejs
pip install compas_threejs
```

## Basic Usage

### Import
```python
from compas_threejs.viewer import Remote, Viewer
```

### Start a Viewer (Terminal 1)
```python
viz = Viewer()
viz.start(show=True)
```

### Connect a Remote (Terminal 2+)
```python
remote = Remote()  # defaults: host="localhost", port=9001
remote.connect()

# ... send geometry ...

remote.disconnect()
```

### With Context Manager
```python
with Remote() as remote:
    remote.add_geometry(geometry)
    # auto-disconnect on exit
```

## Geometry Operations

```python
from compas.geometry import Box, Sphere, Point
from compas.colors import Color
from compas_threejs.materials import Material

# Add geometry
box = Box(1, 1, 1)
material = Material(color=Color.red(), metalness=0.8, roughness=0.2)
remote.add_geometry(box, material)

# Update geometry
box.xsize = 2
remote.update_geometry(box)

# Remove geometry
remote.remove_object(box)

# Add multiple geometries
remote.add_geometries([box1, box2, box3], material)
```

## Camera Control

```python
from compas.geometry import Point

remote.camera_position = Point(10, -10, 10)
remote.camera_target = Point(0, 0, 0)
remote.camera_fov = 50
remote.camera_zoom = 1.5
remote.camera_damping = True
```

## Appearance

```python
from compas.colors import Color

remote.background_color = Color(0.1, 0.1, 0.1)
remote.dark_mode = True
remote.show_edges = True
```

## Advanced Features

### Custom Connection
```python
remote = Remote(host="192.168.1.100", port=8080)
```

### Check Connection Status
```python
if remote.connected:
    print("Connected!")
```

### Real-time Animation
```python
import time
import math

box = Box(1, 1, 1)
remote.add_geometry(box)

while True:
    x = 5 * math.cos(time.time())
    y = 5 * math.sin(time.time())
    box.frame.point = Point(x, y, 0)
    remote.update_geometry(box)
    time.sleep(0.05)  # 20 FPS
```

### Message Queueing
```python
# Messages sent before connection are queued
remote = Remote()
remote.add_geometry(box)  # queued
remote.connect()          # now sent
```

## Complete Methods

### Connection
- `remote.connect()` - Connect to viewer
- `remote.disconnect()` - Disconnect from viewer

### Geometry
- `remote.add_geometry(geo, material=None, metadata=None, actions=None)`
- `remote.add_geometries(geometries, material=None)`
- `remote.update_geometry(geo)`
- `remote.remove_object(geo)`

### Materials & Metadata
- `remote.update_material(material)`
- `remote.update_metadata(geo, metadata)`

### Lights
- `remote.add_light(light)`
- `remote.update_light(light)`

### Text
- `remote.add_text(text, position, size=1.0, color=None)`

### UI
- `remote.add_ui_element(element)`

## Properties (Read/Write)

- `remote.background_color` - Color
- `remote.camera_damping` - bool
- `remote.camera_fov` - float
- `remote.camera_zoom` - float
- `remote.camera_position` - Point
- `remote.camera_target` - Point
- `remote.dark_mode` - bool
- `remote.show_edges` - bool

## Properties (Read Only)

- `remote.host` - str
- `remote.port` - int
- `remote.ws_url` - str
- `remote.connected` - bool

## Examples

See `examples/` directory:
- `remote_viewer.py` - Server setup
- `remote_client.py` - Basic client
- `remote_animated.py` - Animation
- `remote_multiprocess.py` - Multi-process
- `REMOTE_EXAMPLES.md` - Detailed guide
