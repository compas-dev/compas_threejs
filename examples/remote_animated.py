"""
Example: Remote App - Animated Client

This script demonstrates continuous updates to a App from a Remote instance.
It creates animated geometries that update in real-time.

Usage:
1. First, run remote_viewer.py in one terminal
2. Then run this script: python remote_animated.py
3. You can run multiple instances in different terminals for simultaneous animations
"""

import math
import time

from compas.colors import Color
from compas.geometry import Box, Point

from compas_threejs.materials import Material
from compas_threejs.viewer import Remote

# Create a Remote instance and connect to the App
remote = Remote(host="localhost", port=9001)
remote.connect()

# Wait a moment to ensure connection is established
time.sleep(0.5)

if not remote.connected:
    print("Failed to connect to viewer. Make sure remote_viewer.py is running first.")
    exit(1)

print("Connected! Starting animation... Press Ctrl+C to stop.")

# Create a box that will be animated
box = Box(1, 1, 1)
material = Material(color=Color.red(), metalness=0.8, roughness=0.2)
remote.add_geometry(box, material)

# Animation loop
try:
    t = 0
    while True:
        # Calculate new position in a circular path
        radius = 5
        x = radius * math.cos(t)
        y = radius * math.sin(t)
        z = 2 + math.sin(t * 2)

        # Update box position
        box.frame.point = Point(x, y, z)

        # Update box size
        scale = 1 + 0.5 * math.sin(t * 3)
        box.xsize = scale
        box.ysize = scale
        box.zsize = scale

        # Send update to viewer
        remote.update_geometry(box)

        # Update material color
        r = (math.sin(t) + 1) / 2
        g = (math.sin(t + 2) + 1) / 2
        b = (math.sin(t + 4) + 1) / 2
        material.color = Color(r, g, b)
        remote.update_material(material)

        t += 0.05
        time.sleep(0.05)  # ~20 FPS

except KeyboardInterrupt:
    print("\nStopping animation...")
    remote.disconnect()
    print("Disconnected. Geometry remains in the viewer.")
