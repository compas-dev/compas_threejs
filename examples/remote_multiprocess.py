"""
Example: Multi-Process Visualization

This example demonstrates a more realistic use case where multiple independent
processes are performing computations and visualizing their results in a shared App.

Scenario: Three different algorithms running in parallel, each visualizing their progress.

Usage:
1. Run remote_viewer.py in Terminal 1
2. Run this script - it will spawn 3 worker processes
3. Watch as all three algorithms update the same viewer
"""

import math
import multiprocessing as mp
import time

from compas.colors import Color
from compas.geometry import Box, Point, Sphere

from compas_threejs.materials import Material
from compas_threejs.viewer import Remote


def algorithm_1(name, start_x):
    """Simulates an algorithm creating a grid of boxes."""
    remote = Remote()
    remote.connect()

    if not remote.connected:
        print(f"{name}: Failed to connect")
        return

    print(f"{name}: Starting grid algorithm")

    boxes = []
    for i in range(5):
        for j in range(5):
            box = Box(0.5, 0.5, 0.5)
            box.frame.point = Point(start_x + i, j, 0)
            material = Material(
                color=Color(i / 5, j / 5, 0.5), metalness=0.5, roughness=0.5
            )
            remote.add_geometry(box, material)
            boxes.append(box)
            time.sleep(0.1)

    print(f"{name}: Grid complete")

    # Animate the grid
    print(f"{name}: Animating...")
    for t in range(100):
        for i, box in enumerate(boxes):
            z = 0.5 * math.sin(t * 0.1 + i * 0.2)
            box.frame.point.z = z
            remote.update_geometry(box)
        time.sleep(0.05)

    print(f"{name}: Complete")
    remote.disconnect()


def algorithm_2(name, start_x):
    """Simulates an algorithm creating a spiral of spheres."""
    remote = Remote()
    remote.connect()

    if not remote.connected:
        print(f"{name}: Failed to connect")
        return

    print(f"{name}: Starting spiral algorithm")

    spheres = []
    for i in range(50):
        angle = i * 0.5
        radius = i * 0.2
        x = start_x + radius * math.cos(angle)
        y = radius * math.sin(angle)
        z = i * 0.1

        sphere = Sphere(0.3)
        sphere.frame.point = Point(x, y, z)
        material = Material(
            color=Color.from_rgb255(255, int(255 * i / 50), 0),
            metalness=0.8,
            roughness=0.2,
        )
        remote.add_geometry(sphere, material)
        spheres.append(sphere)
        time.sleep(0.05)

    print(f"{name}: Spiral complete")

    # Rotate the spiral
    print(f"{name}: Rotating...")
    for t in range(100):
        for i, sphere in enumerate(spheres):
            angle = i * 0.5 + t * 0.05
            radius = i * 0.2
            x = start_x + radius * math.cos(angle)
            y = radius * math.sin(angle)
            sphere.frame.point.x = x
            sphere.frame.point.y = y
            remote.update_geometry(sphere)
        time.sleep(0.05)

    print(f"{name}: Complete")
    remote.disconnect()


def algorithm_3(name, start_x):
    """Simulates an algorithm creating random shapes."""
    remote = Remote()
    remote.connect()

    if not remote.connected:
        print(f"{name}: Failed to connect")
        return

    print(f"{name}: Starting random generation")

    import random

    geometries = []

    for i in range(30):
        if random.random() > 0.5:
            geo = Box(
                random.uniform(0.5, 1.5),
                random.uniform(0.5, 1.5),
                random.uniform(0.5, 1.5),
            )
        else:
            geo = Sphere(random.uniform(0.3, 1.0))

        geo.frame.point = Point(
            start_x + random.uniform(-2, 2), random.uniform(-2, 2), random.uniform(0, 5)
        )

        material = Material(
            color=Color(random.random(), random.random(), random.random()),
            metalness=random.random(),
            roughness=random.random(),
        )

        remote.add_geometry(geo, material)
        geometries.append(geo)
        time.sleep(0.1)

    print(f"{name}: Generation complete")

    # Random movement
    print(f"{name}: Animating...")
    for t in range(100):
        for geo in geometries:
            geo.frame.point.z += random.uniform(-0.1, 0.1)
            remote.update_geometry(geo)
        time.sleep(0.05)

    print(f"{name}: Complete")
    remote.disconnect()


def main():
    """Spawns multiple processes that all connect to the same viewer."""
    print("=" * 60)
    print("Multi-Process Visualization Example")
    print("=" * 60)
    print()
    print("Make sure remote_viewer.py is running first!")
    print()
    print("Starting 3 worker processes...")
    print()

    # Create processes for each algorithm
    processes = [
        mp.Process(target=algorithm_1, args=("Worker-1", -10)),
        mp.Process(target=algorithm_2, args=("Worker-2", 0)),
        mp.Process(target=algorithm_3, args=("Worker-3", 10)),
    ]

    # Start all processes
    for p in processes:
        p.start()
        time.sleep(0.5)  # Stagger starts slightly

    # Wait for all to complete
    for p in processes:
        p.join()

    print()
    print("=" * 60)
    print("All workers complete!")
    print("=" * 60)


if __name__ == "__main__":
    main()
