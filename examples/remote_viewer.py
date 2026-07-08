"""
Example: Remote Viewer - Server

This script demonstrates how to set up a Viewer instance that will receive
updates from one or more Remote instances running in separate terminals.

Usage:
1. Run this script first: python remote_viewer.py
2. Then run remote_client.py in one or more separate terminals
3. Watch as the Remote instances update the Viewer
"""

from compas.colors import Color
from compas.geometry import Box, Frame

from compas_threejs.materials import Material
from compas_threejs.viewer import CameraView, Viewer

# Create the viewer instance
viz = Viewer()
viz.default_lighting = True
viz.set_view(CameraView.FRONT_RIGHT)

# Add an initial box to show the viewer is running
box = Box(1, 1, 1)
viz.add_geometry(box, Material(color=Color.blue(), metalness=0.5, roughness=0.5))

print("Viewer is running. Open remote_client.py in another terminal to add geometries.")

# Start the viewer (this blocks and keeps the server running)
viz.start(show=True)
