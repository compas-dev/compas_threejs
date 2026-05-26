# Introduction

## Communication

![COMPAS ThreeJS scheme](assets/images/compas_threejs_scheme_white.png#only-light)
![COMPAS ThreeJS scheme](assets/images/compas_threejs_scheme_black.png#only-dark)

COMPAS sends instructions to the frontend on how to build and render the geometry. In exchange, Three.js communicates back by triggering callbacks, returning data, and handling user events.

Outside of this continuous communication loop between the backend and the frontend, the user interacts with the system. The user can simultaneously modify the underlying COMPAS scripts and directly manipulate the live 3D scene in the browser.


![Compas ThreeJS on Protobuff](assets/images/compas_pb_white.png#only-light)
![Compas ThreeJS on Protobuff](assets/images/compas_pb_black.png#only-dark)

Technically, this communication is facilitated by [COMPAS Protobuf](https://github.com/gramaziokohler/compas_pb), running on a FastAPI server and powered by WebSockets. WebSockets provide real-time, bi-directional data flow, allowing for many-to-one connections. This enables multiple scripts to interact with and influence a single staging environment simultaneously.
