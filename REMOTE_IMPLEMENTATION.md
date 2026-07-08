# Remote Class Implementation Summary

## Overview

A `Remote` class has been added to `compas_threejs.viewer` that enables connecting to a running `Viewer` instance via websocket and sending geometry updates to it. This allows multiple Remote instances to update a single Viewer from different terminals or processes.

## Files Created/Modified

### Core Implementation
- **`src/compas_threejs/viewer/remote.py`** (NEW)
  - Main `Remote` class implementation
  - ~460 lines of code
  - Full API matching the Viewer for geometry operations

- **`src/compas_threejs/viewer/__init__.py`** (MODIFIED)
  - Added `Remote` to exports
  - Updated `__all__` list

### Documentation
- **`docs/remote.md`** (NEW)
  - Comprehensive documentation for the Remote class
  - Usage examples
  - API reference
  - Use cases and best practices

### Examples
- **`examples/remote_viewer.py`** (NEW)
  - Simple Viewer server setup
  - Entry point for testing Remote functionality

- **`examples/remote_client.py`** (NEW)
  - Basic Remote client example
  - Adds random boxes and spheres

- **`examples/remote_animated.py`** (NEW)
  - Advanced example with real-time animation
  - Demonstrates continuous updates

- **`examples/remote.py`** (UPDATED)
  - Simple standalone example
  - Good starting point for new users

- **`examples/test_remote.py`** (NEW)
  - Import and instantiation test
  - Verifies basic functionality

- **`examples/REMOTE_EXAMPLES.md`** (NEW)
  - Guide for all Remote examples
  - Quick start instructions
  - Troubleshooting tips

## Key Features

### Connection Management
- Connect to Viewer via websocket (`ws://host:port/ws`)
- Automatic message queueing before connection
- Clean disconnect handling
- Context manager support

### Geometry Operations
All main Viewer methods are supported:
- `add_geometry()` - Add geometry with optional material and metadata
- `add_geometries()` - Add multiple geometries at once
- `update_geometry()` - Update existing geometry
- `remove_object()` - Remove geometry from viewer
- `update_metadata()` - Update object metadata
- `add_text()` - Add text labels
- `add_light()` / `update_light()` - Lighting control
- `update_material()` - Material updates
- `add_ui_element()` - UI elements

### Camera & Appearance Control
Properties that can be set:
- `camera_position` - Camera position in 3D space
- `camera_target` - Camera target point
- `camera_fov` - Field of view
- `camera_zoom` - Zoom level
- `camera_damping` - Damping enabled/disabled
- `background_color` - Background color
- `dark_mode` - Dark mode toggle
- `show_edges` - Edge visibility

### Architecture
```
┌─────────────────┐
│  Viewer Server  │  (Terminal 1)
│  Port: 9001     │
└────────┬────────┘
         │ WebSocket
         │
    ┌────┴────┬────────┬────────┐
    │         │        │        │
┌───┴───┐ ┌───┴───┐ ┌──┴──┐  ┌──┴──┐
│Remote1│ │Remote2│ │ ... │  │ ... │
│(Term2)│ │(Term3)│ │     │  │     │
└───────┘ └───────┘ └─────┘  └─────┘
```

## Usage Example

### Terminal 1 - Start Viewer
```python
from compas_threejs.viewer import Viewer

viz = Viewer()
viz.start(show=True)
```

### Terminal 2+ - Connect Remote
```python
from compas.geometry import Box
from compas_threejs.viewer import Remote

remote = Remote()
remote.connect()

box = Box(1, 1, 1)
remote.add_geometry(box)

remote.disconnect()
```

## Technical Details

### Dependencies
- `websockets` - Already in project dependencies
- `asyncio` - Standard library
- `threading` - Standard library
- All other dependencies same as Viewer

### Message Protocol
- Uses same binary protocol as Viewer (compas_pb)
- Messages queued if not connected
- Automatic retry on connection

### Thread Safety
- Uses asyncio event loop in separate thread
- Thread-safe message sending via `asyncio.run_coroutine_threadsafe()`
- Message queueing for pre-connection calls

## Testing

Run the test to verify installation:
```bash
python examples/test_remote.py
```

Full integration test:
```bash
# Terminal 1
python examples/remote_viewer.py

# Terminal 2
python examples/remote_client.py
```

## Known Limitations

1. **One-way communication**: Remote sends to Viewer but doesn't receive UI callbacks
2. **No scene state sync**: Remote doesn't receive existing scene state on connect
3. **Connection required**: Must connect before geometry appears (though messages are queued)

## Future Enhancements (Optional)

1. Add callback support for UI elements
2. Sync scene state on connection
3. Automatic reconnection on disconnect
4. Connection status callbacks
5. Batch message sending for efficiency

## Implementation Notes

The Remote class follows these design principles:
- **API Parity**: Same interface as Viewer for easy switching
- **Minimal Dependencies**: No new dependencies required
- **Clean Architecture**: Separation of connection and messaging logic
- **User-Friendly**: Context managers, automatic queueing, clear error messages
- **Thread-Safe**: Safe to use from multiple threads
