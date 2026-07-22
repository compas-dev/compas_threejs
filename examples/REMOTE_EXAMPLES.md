# Remote App Examples

These examples demonstrate how to use the `Remote` class to connect to a running `App` instance and send geometry updates to it from separate processes or terminals.

## Overview

The Remote functionality allows you to:
- Run a App in one terminal and update it from multiple other terminals
- Separate visualization from computation
- Create collaborative or distributed visualization workflows
- Update a long-running viewer from different scripts

## Quick Start

### 1. Start a App Server

In **Terminal 1**, run:
```bash
python remote_viewer.py
```

This starts a App that listens for connections on `ws://localhost:9001/ws`

### 2. Connect from a Remote

In **Terminal 2** (or more), run:
```bash
python remote_client.py
```

This connects to the App and adds random geometries to it.

## Example Files

### `remote_viewer.py` - The Server
A simple App setup that acts as a server. This is what you run first and keep running.

**Features:**
- Starts a App instance
- Opens a browser window
- Waits for Remote connections
- Displays all geometries sent by Remote instances

### `remote_client.py` - Basic Client
Demonstrates basic Remote usage by adding random boxes and spheres.

**Features:**
- Connects to a running App
- Adds 5 random boxes
- Adds 5 random spheres
- Each with random colors and positions

**Usage:**
```bash
# First terminal
python remote_viewer.py

# Second terminal (can run multiple times)
python remote_client.py
```

### `remote_animated.py` - Animated Updates
Shows how to create real-time animations by continuously updating geometry.

**Features:**
- Creates an animated box that moves in a circle
- Updates position, size, and color in real-time
- Demonstrates the `update_geometry()` method
- Runs at ~20 FPS

**Usage:**
```bash
# First terminal
python remote_viewer.py

# Second terminal
python remote_animated.py
# Press Ctrl+C to stop the animation
```

### `remote.py` - Simple Demo
A straightforward example showing basic Remote operations.

**Features:**
- Connect to viewer
- Add a box and sphere
- Update camera position
- Animate a sphere
- Disconnect cleanly

### `test_remote.py` - Import Test
Verifies that the Remote class can be imported and instantiated.

**Usage:**
```bash
python test_remote.py
```

## Multiple Remote Instances

You can run multiple Remote instances simultaneously:

```bash
# Terminal 1: Start the viewer
python remote_viewer.py

# Terminal 2: First client
python remote_client.py

# Terminal 3: Second client
python remote_client.py

# Terminal 4: Animation
python remote_animated.py
```

All geometries from all Remote instances will appear in the same App window!

## API Highlights

### Connection
```python
from compas_threejs.viewer import Remote

# Create and connect
remote = Remote(host="localhost", port=9001)
remote.connect()

# Check connection status
if remote.connected:
    print("Connected!")

# Disconnect when done
remote.disconnect()
```

### Context Manager
```python
with Remote() as remote:
    remote.add_geometry(box)
    # Automatically disconnects
```

### Add Geometry
```python
from compas.geometry import Box
from compas_threejs.materials import Material
from compas.colors import Color

box = Box(1, 1, 1)
material = Material(color=Color.red(), metalness=0.8, roughness=0.2)
remote.add_geometry(box, material)
```

### Update Geometry
```python
# Modify the geometry
box.xsize = 2

# Send update
remote.update_geometry(box)
```

### Camera Control
```python
from compas.geometry import Point

remote.camera_position = Point(10, -10, 10)
remote.camera_target = Point(0, 0, 0)
remote.camera_fov = 50
```

### Other Features
```python
# Background color
remote.background_color = Color(0.1, 0.1, 0.1)

# Dark mode
remote.dark_mode = True

# Show edges
remote.show_edges = True

# Remove geometry
remote.remove_object(box)
```

## Troubleshooting

### "Connection timeout" or "Failed to connect"
- Make sure `remote_viewer.py` is running first
- Check that the port (9001) is not blocked
- Verify the host and port match

### Geometry doesn't appear
- Check if the Remote is connected: `remote.connected`
- Make sure you called `remote.connect()`
- Check the console for error messages

### Updates are slow
- Reduce the update frequency
- Consider batching multiple updates
- Check network latency if using remote host

## Advanced Usage

### Custom Host and Port
```python
remote = Remote(host="192.168.1.100", port=8080)
```

### Message Queueing
Messages are automatically queued if sent before connection:
```python
remote = Remote()
remote.add_geometry(box1)  # Queued
remote.add_geometry(box2)  # Queued
remote.connect()           # Both sent automatically
```

### Real-time Updates
```python
import time
import math

remote = Remote()
remote.connect()

box = Box(1, 1, 1)
remote.add_geometry(box)

while True:
    # Calculate new position
    x = 5 * math.cos(time.time())
    y = 5 * math.sin(time.time())
    box.frame.point = Point(x, y, 0)
    
    # Update viewer
    remote.update_geometry(box)
    time.sleep(0.05)  # 20 FPS
```

## See Also

- [Remote Documentation](../docs/remote.md) - Detailed API reference
- [App Documentation](../docs/) - Main App documentation
