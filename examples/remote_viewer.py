"""
Example demonstrating the use of RemoteViewer to connect to a running Viewer server
and dynamically add geometries, materials, and metadata.

Usage:
    Terminal 1: python examples/box.py
    Terminal 2: python examples/remote_viewer.py
"""

import time

from compas.colors import Color
from compas.geometry import Box, Sphere, Vector

from compas_threejs.materials import Material
from compas_threejs.viewer import RemoteViewer

# Create a RemoteViewer instance and connect to the running server
remote = RemoteViewer(host="localhost", port=9001)

print("Connecting to Viewer server...")
remote.connect()
if remote.is_connected():
    print("Connected!")


# Change the background color
remote.background_color = Color.blue()
remote.dark_mode = True

# Add some geometries with materials
print("\nAdding geometries...")
for i in range(5):
    box = Box(1, 1, 1)
    box.frame.point += Vector(i * 3, 0, 0)

    # Alternate between different materials
    if i % 2 == 0:
        material = Material(color=Color.red(), metalness=0.8, roughness=0.2)
    else:
        material = Material(color=Color.blue(), metalness=0.3, roughness=0.7)

    remote.add_geometry(box, material=material)
    print(f"Added box {i + 1}")
    time.sleep(0.5)

# Add a sphere with a different material
sphere = Sphere(1.5)
sphere.frame.point = Vector(10, 5, 0)
sphere_material = Material(color=Color.green(), metalness=0.5, roughness=0.5)
remote.add_geometry(sphere, material=sphere_material)
print("Added sphere")

# Update scene settings
print("\nUpdating scene settings...")
remote.camera_position = (15, -25, 20)
remote.camera_zoom = 1.2
