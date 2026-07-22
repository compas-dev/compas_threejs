"""
Example: Using Remote class to connect to a App

This example demonstrates the basic usage of the Remote class.
The Remote class allows you to connect to a running App instance
and send geometry updates to it from a separate process or terminal.

To use this example:
1. First, run a App in one terminal
2. Then run this script in another terminal
3. The geometry will appear in the App window

For a complete working example, see:
- remote_viewer.py (the server)
- remote_client.py (the client)
- remote_animated.py (animated example)
"""

import time

from compas.colors import Color
from compas.geometry import Box, Point, Sphere, Vector

from compas_threejs.materials import Material
from compas_threejs.viewer import Remote

# Create and connect to the viewer
remote = Remote(host="localhost", port=9001)
print("Connecting to viewer...")
remote.connect()

if not remote.connected:
    print("ERROR: Could not connect to viewer.")
    print("Make sure a App is running first:")
    print("  from compas_threejs.viewer import App")
    print("  viz = App()")
    print("  viz.start(show=True)")
    exit(1)

print("Connected!")

# Add a box
box = Box(2, 2, 2)
box.frame.point = Point(0, 0, 0)
remote.add_geometry(box, Material(color=Color.red(), metalness=0.8, roughness=0.2))
print("Added red box")

# Add a sphere
sphere = Sphere(1.5)
sphere.frame.point = Point(5, 0, 0)
remote.add_geometry(sphere, Material(color=Color.blue(), metalness=0.3, roughness=0.7))
print("Added blue sphere")

# Update the camera
remote.camera_position = Point(15, -15, 10)
remote.camera_target = Point(0, 0, 0)
print("Updated camera position")

# Animate the sphere
print("Animating sphere for 5 seconds...")
for i in range(50):
    sphere.frame.point = Point(5 + i * 0.1, 0, 0)
    remote.update_geometry(sphere)
    time.sleep(0.1)

print("Animation complete!")
print("Disconnecting...")
remote.disconnect()
print("Done. The geometries remain in the viewer.")
