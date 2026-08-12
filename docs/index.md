# COMPAS ThreeJS

COMPAS ThreeJS is a browser-based viewer for COMPAS geometry. It combines a
Python API for building interactive scenes with a Three.js frontend for
rendering and user interaction.

![COMPAS ThreeJS architecture](assets/images/compas_threejs_scheme_white.png#only-light)
![COMPAS ThreeJS architecture](assets/images/compas_threejs_scheme_black.png#only-dark)

## How it works

The Python backend sends geometry and scene commands to the frontend, where
Three.js builds and renders the 3D scene. User interactions such as picking and
UI actions travel back to Python as callbacks, allowing scripts and the browser
to participate in the same live workflow.

![COMPAS Protobuf communication](assets/images/compas_pb_white.png#only-light)
![COMPAS Protobuf communication](assets/images/compas_pb_black.png#only-dark)

[COMPAS Protobuf](https://github.com/gramaziokohler/compas_pb) serializes the
messages exchanged through a FastAPI WebSocket server. The same frontend can
also run as an embedded TypeScript library without the Python server.

Continue with [installation](installation.md), or see the
[remote-viewer guide](remote.md) to connect from another Python process.
