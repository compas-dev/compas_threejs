# Remote Architecture

## System Overview

```
┌─────────────────────────────────────────────────────────────┐
│                     Browser Window                          │
│  ┌───────────────────────────────────────────────────────┐  │
│  │                                                       │  │
│  │            Three.js Renderer                          │  │
│  │                                                       │  │
│  │    [3D Scene with geometries from all Remotes]       │  │
│  │                                                       │  │
│  └───────────────────────────────────────────────────────┘  │
└──────────────────────────┬──────────────────────────────────┘
                           │ HTTP/WebSocket
                           │
┌──────────────────────────┴──────────────────────────────────┐
│                   Viewer Server Process                     │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  FastAPI Server (port 9001)                         │   │
│  │  - Serves HTML/JS frontend                          │   │
│  │  - WebSocket endpoint (/ws)                         │   │
│  │  - Scene state management                           │   │
│  │  - Broadcasts to all connected clients             │   │
│  └─────────────────────────────────────────────────────┘   │
└──────────────────────────┬──────────────────────────────────┘
                           │ WebSocket
                ┌──────────┼──────────┬──────────┬──────────┐
                │          │          │          │          │
    ┌───────────┴───┐  ┌───┴────┐  ┌──┴─────┐  ┌─┴────────┐ ...
    │  Remote #1    │  │Remote#2│  │Remote#3│  │  Remote#N│
    │  Process/     │  │Process/│  │Process/│  │  Process/ │
    │  Terminal     │  │Terminal│  │Terminal│  │  Terminal │
    └───────────────┘  └────────┘  └────────┘  └──────────┘
```

## Message Flow

### Adding Geometry

```
Remote Instance                    Viewer Server
     │                                   │
     │  1. Create geometry               │
     │     box = Box(1,1,1)              │
     │                                   │
     │  2. Serialize to binary           │
     │     binary = pb_dump_bts(box)     │
     │                                   │
     │  3. Send via WebSocket            │
     ├──────────────────────────────────>│
     │   websocket.send(binary)          │
     │                                   │
     │                                   │  4. Store in scene_state
     │                                   │     scene_state[guid] = binary
     │                                   │
     │                                   │  5. Broadcast to all clients
     │                                   ├────────────────────┐
     │                                   │                    │
     │                                   │                    ▼
     │                                   │            Browser Client(s)
     │                                   │            - Receive binary
     │                                   │            - Deserialize
     │                                   │            - Render in Three.js
```

### Update Geometry

```
Remote Instance                    Viewer Server
     │                                   │
     │  1. Modify geometry               │
     │     box.xsize = 2                 │
     │                                   │
     │  2. Serialize & send              │
     ├──────────────────────────────────>│
     │   update_geometry(box)            │
     │                                   │
     │                                   │  3. Update scene_state
     │                                   │  4. Broadcast to clients
     │                                   ├────────────────────┐
     │                                   │                    ▼
     │                                   │            Browser updates
```

## Connection Lifecycle

```
┌─────────────┐
│   Created   │  remote = Remote()
└──────┬──────┘
       │
       │  remote.connect()
       │
       ▼
┌─────────────┐
│ Connecting  │  - Start event loop thread
└──────┬──────┘  - Establish WebSocket connection
       │
       │  Connection established
       │
       ▼
┌─────────────┐
│  Connected  │  - Send queued messages
└──────┬──────┘  - Ready to send new messages
       │
       │  remote.disconnect()
       │
       ▼
┌─────────────┐
│Disconnected │  - Close WebSocket
└─────────────┘  - Stop event loop
```

## Threading Model

### Remote Process

```
Main Thread                      Background Thread
    │                                   │
    │  remote = Remote()                │
    │  remote.connect()                 │
    ├──────────────────────────────────>│
    │                                   │  Start asyncio loop
    │                                   │  Connect WebSocket
    │                                   │  ┌─────────────────┐
    │  remote.add_geometry(box)         │  │  Event Loop     │
    ├──────────────────────────────────>│  │  Running...     │
    │  (queues coroutine)               │  │                 │
    │                                   │  └─────────────────┘
    │                                   │
    │  remote.disconnect()              │
    ├──────────────────────────────────>│
    │                                   │  Close WebSocket
    │                                   │  Stop loop
    │<──────────────────────────────────┤
    │                                   │
    ▼                                   ▼
```

## Data Format

### Geometry Message (Binary)

```
┌──────────────────────────────────────┐
│  Protocol Buffer (compas_pb)         │
│  ┌────────────────────────────────┐  │
│  │  Type: "compas.geometry.Box"   │  │
│  │  GUID: "uuid-string"           │  │
│  │  Data: {                       │  │
│  │    xsize: 1.0                  │  │
│  │    ysize: 1.0                  │  │
│  │    zsize: 1.0                  │  │
│  │    frame: {...}                │  │
│  │  }                             │  │
│  └────────────────────────────────┘  │
└──────────────────────────────────────┘
```

### Control Message (Binary)

```
┌──────────────────────────────────────┐
│  Protocol Buffer Dictionary          │
│  ┌────────────────────────────────┐  │
│  │  {                             │  │
│  │    "dispatch": "camera_position"│  │
│  │    "x": 10.0                   │  │
│  │    "y": -10.0                  │  │
│  │    "z": 10.0                   │  │
│  │  }                             │  │
│  └────────────────────────────────┘  │
└──────────────────────────────────────┘
```

## Comparison: Viewer vs Remote

| Feature           | Viewer                    | Remote                   |
|-------------------|---------------------------|--------------------------|
| Server            | ✓ Starts FastAPI server   | ✗ Connects as client    |
| Browser           | ✓ Opens automatically     | ✗ N/A                   |
| Main Loop         | ✓ Blocking event loop     | ✗ Non-blocking          |
| UI Callbacks      | ✓ Receives from browser   | ✗ Send-only             |
| Scene State       | ✓ Maintains full state    | ✗ Minimal local state   |
| Add Geometry      | ✓                         | ✓                        |
| Update Geometry   | ✓                         | ✓                        |
| Remove Geometry   | ✓                         | ✓                        |
| Camera Control    | ✓                         | ✓                        |
| Lighting          | ✓                         | ✓                        |
| Materials         | ✓                         | ✓                        |
| Multiple Instances| 1 per port                | Unlimited               |

## Use Cases

### Single Viewer
```
[Viewer] ←→ [Browser]
```
Traditional usage - single process visualization

### Distributed Computation
```
                    [Viewer] ←→ [Browser]
                       ↑
            ┌──────────┼──────────┐
            │          │          │
        [Remote]   [Remote]   [Remote]
        Worker1    Worker2    Worker3
```
Multiple computation processes updating shared visualization

### Interactive Development
```
    [Viewer] ←→ [Browser]
       ↑
    [Remote]
    Script.py (run multiple times)
```
Keep viewer open, run different scripts

### Monitoring/Debugging
```
    [Viewer] ←→ [Browser]
       ↑
       │
    [Remote]
    Long-running process
    (periodic updates)
```
Visualize progress of long computation
