# Remote App

The `Remote` class allows you to connect to a running `App` instance from a separate process or terminal and send geometry updates to it. This enables collaborative or distributed visualization workflows where multiple scripts can update the same viewer.

## Basic Usage

### Step 1: Start a App Server

In one terminal, start a `App` instance:

```python
from compas_threejs.viewer import App

# Create and start the viewer
viz = App()
viz.start(show=True)
```

This creates a server at `http://localhost:9001` that will receive updates from Remote instances.

### Step 2: Connect from a Remote

In another terminal (or process), create a `Remote` instance to connect to the App:

```python
from compas.geometry import Box
from compas_threejs.viewer import Remote

# Create a Remote instance and connect
remote = Remote(host="localhost", port=9001)
remote.connect()

# Add geometry - it will appear in the App
box = Box(1, 1, 1)
remote.add_geometry(box)

# Don't forget to disconnect when done
remote.disconnect()
```

## Features

The `Remote` class provides the same geometry and visualization API as the `App` class, including:

- **Geometry Management**: `add_geometry()`, `add_geometries()`, `update_geometry()`, `remove_object()`
- **Materials**: Support for all material types
- **Metadata**: Attach metadata to objects
- **Camera Control**: Set camera position, target, FOV, etc.
- **Lighting**: Add and update lights
- **Appearance**: Background color, dark mode, edge visibility

## Multiple Remote Instances

You can run multiple `Remote` instances simultaneously, all updating the same `App`:

```python
# Terminal 1: Start the viewer
from compas_threejs.viewer import App
viz = App()
viz.start(show=True)

# Terminal 2: Remote instance #1
from compas.geometry import Box
from compas_threejs.viewer import Remote
remote1 = Remote()
remote1.connect()
remote1.add_geometry(Box(1, 1, 1))

# Terminal 3: Remote instance #2
from compas.geometry import Sphere
from compas_threejs.viewer import Remote
remote2 = Remote()
remote2.connect()
remote2.add_geometry(Sphere(1))
```

Both the box and sphere will appear in the same viewer window.

## Connection Management

### Automatic Connection

```python
remote = Remote()
remote.connect()

# Use the remote...

remote.disconnect()
```

### Context Manager

```python
with Remote() as remote:
    box = Box(1, 1, 1)
    remote.add_geometry(box)
    # Automatically disconnects when exiting the context
```

### Connection Status

```python
remote = Remote()
remote.connect()

if remote.connected:
    print("Successfully connected!")
    remote.add_geometry(box)
else:
    print("Connection failed")
```

## Message Queueing

If you send messages before the connection is established, they will be queued and sent automatically once connected:

```python
remote = Remote()

# These messages are queued
remote.add_geometry(box1)
remote.add_geometry(box2)

# Connect and send queued messages
remote.connect()  # box1 and box2 are sent automatically
```

## Real-time Updates

The `Remote` class is perfect for real-time visualizations:

```python
import time
import math
from compas.geometry import Box, Point
from compas_threejs.viewer import Remote

remote = Remote()
remote.connect()

box = Box(1, 1, 1)
remote.add_geometry(box)

# Animate the box
t = 0
while True:
    x = 5 * math.cos(t)
    y = 5 * math.sin(t)
    box.frame.point = Point(x, y, 0)
    remote.update_geometry(box)
    
    t += 0.1
    time.sleep(0.05)  # ~20 FPS
```

## Use Cases

1. **Distributed Computing**: Different processes can visualize their results in a shared viewer
2. **Interactive Development**: Keep a viewer open while running different analysis scripts
3. **Debugging**: Multiple scripts can add debug visualizations to the same viewer
4. **Collaborative Work**: Team members can send geometries to a shared visualization
5. **Long-running Simulations**: Update visualization from a background process

## API Reference

### Constructor

```python
Remote(host="localhost", port=9001)
```

**Parameters:**
- `host` (str): The hostname or IP address of the App server. Default is `"localhost"`.
- `port` (int): The websocket port of the App server. Default is `9001`.

### Methods

All geometry and visualization methods from the `App` class are available:

- `connect()`: Establish connection to the App
- `disconnect()`: Close the connection
- `add_geometry(geometry, material=None, metadata=None, actions=None)`: Add geometry
- `add_geometries(geometries, material=None)`: Add multiple geometries
- `update_geometry(geometry)`: Update existing geometry
- `remove_object(geometry)`: Remove geometry
- `update_metadata(geometry, metadata)`: Update object metadata
- `add_text(text, position, size=1.0, color=None)`: Add text
- `add_light(light)`: Add a light
- `update_light(light)`: Update a light
- `update_material(material)`: Update a material
- `add_ui_element(element)`: Add UI element

### Properties

Camera and appearance properties (read/write):

- `background_color`: Background color of the viewer
- `camera_damping`: Enable/disable camera damping
- `camera_fov`: Camera field of view in degrees
- `camera_zoom`: Camera zoom level
- `camera_position`: Camera position (Point)
- `camera_target`: Camera target point (Point)
- `dark_mode`: Enable/disable dark mode
- `show_edges`: Show/hide mesh edges

## Examples

See the following example files in the `examples/` directory:

- `remote_viewer.py`: Basic viewer server setup
- `remote_client.py`: Connecting and adding geometries
- `remote_animated.py`: Real-time animation updates
