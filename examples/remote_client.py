"""
Example: Remote Viewer - Client

This script demonstrates how to use a Remote instance to connect to a running
Viewer and send geometry updates to it.

Usage:
1. First, run remote_viewer.py in one terminal
2. Then run this script: python remote_client.py
3. You can run multiple instances of this script in different terminals
"""

import random
import time

from compas.colors import Color
from compas.geometry import Box, Sphere, Vector

from compas_threejs.materials import Material
from compas_threejs.viewer import Remote

# Create a Remote instance and connect to the Viewer
remote = Remote(host="localhost", port=9001)
remote.connect()

# Wait a moment to ensure connection is established
time.sleep(0.5)

if not remote.connected:
    print("Failed to connect to viewer. Make sure remote_viewer.py is running first.")
    exit(1)

print("Connected to viewer! Adding geometries...")

# Add some random boxes
for i in range(5):
    box = Box(1, 1, 1)
    box.frame.point += Vector(
        random.randrange(-10, 10), random.randrange(-10, 10), random.randrange(0, 10)
    )
    color = Color.from_rgb255(
        random.randint(0, 255), random.randint(0, 255), random.randint(0, 255)
    )
    remote.add_geometry(box, Material(color=color, metalness=0.8, roughness=0.2))
    print(f"Added box {i + 1}/5")
    time.sleep(0.5)

# Add some spheres
for i in range(5):
    sphere = Sphere(0.5)
    sphere.frame.point += Vector(
        random.randrange(-10, 10), random.randrange(-10, 10), random.randrange(0, 10)
    )
    color = Color.from_rgb255(
        random.randint(0, 255), random.randint(0, 255), random.randint(0, 255)
    )
    remote.add_geometry(sphere, Material(color=color, metalness=0.3, roughness=0.7))
    print(f"Added sphere {i + 1}/5")
    time.sleep(0.5)

print("All geometries added! You can close this script or run it again to add more.")
print("The viewer will continue running in the other terminal.")

# Keep the script alive or disconnect
input("Press Enter to disconnect and exit...")
remote.disconnect()
