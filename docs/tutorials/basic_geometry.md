# Basic Geometry

This tutorial covers the various ways you can add COMPAS geometry to the `compas_threejs` viewer, from single objects to multiple objects with custom appearances.


## 1. Adding a Single Geometry

```python
from compas.geometry import Box
from compas_threejs.viewer import App

# 1. Create a viewer instance
viz = App()

# 2. Create a COMPAS geometry
box = Box(1, 1, 1)

# 3. Add the geometry to the viewer
viz.add_geometry(box)

# 4. Start the viewer
viz.start()

```

The `add_geometry()` method is the core function for adding objects to the scene. It takes a COMPAS geometry object as its primary argument. When you call `viz.start()`, this object is serialized and sent to the frontend to be rendered. A websocket connection is open for the bidirectional communication between the backend and frontend.

## 2. Adding Multiple Geometries

You can add as many geometries as you like to the scene by calling `add_geometry()` multiple times or by using `add_geometries()`.

```python
from compas.geometry import Box, Sphere
from compas_threejs.viewer import App

viz = App()

# Create multiple geometries
box = Box(1, 1, 1)
sphere = Sphere(radius=0.5)

# Add them to the viewer one by one
viz.add_geometry(box)
viz.add_geometry(sphere)

# Or add them all at once
# viz.add_geometries([box, sphere])

viz.start()

```

The viewer maintains a registry of all objects in the scene. Each time you call `add_geometry()`, the new object is added to this registry. When the viewer starts, it sends all registered objects to the frontend. The `add_geometries()` method is a convenient way to add a list of objects in a single call.


## 3. Adding Geometry with a Custom Material

By default, geometries are rendered with a standard compas-blue material. To customize the appearance of an object, you can create a `Material` object and pass it to the `add_geometry()` method.

```python

from compas.geometry import Torus
from compas.colors import Color
from compas_threejs.viewer import App
from compas_threejs.materials import Material

viz = App()

# Create a geometry
torus = Torus(radius_axis=1, radius_pipe=0.3)

# Create a custom material
custom_material = Material(
    color=Color.blue(),
    metalness=0.8,
    roughness=0.2,
    wireframe=True
)

# Add the geometry with the custom material
viz.add_geometry(torus, material=custom_material)

viz.start()
```
The `Material` class allows you to control the visual properties of your geometry. Here are some of the key parameters:

*   `color`: The base color of the material (instance of `compas.colors.Color`).
*   `metalness`: A float between 0.0 (non-metallic) and 1.0 (fully metallic).
*   `roughness`: A float between 0.0 (smooth, reflective) and 1.0 (fully rough).
*   `emissive`: The color of light emitted by the material.
*   `emissive_intensity`: The intensity of the emissive light.
*   `flat_shading`: A boolean that determines whether to use flat or smooth shading.
*   `wireframe`: A boolean that, if `True`, renders the object as a wireframe.

By creating a `Material` object and passing it along with your geometry to `add_geometry()`, you are telling the viewer to associate that specific appearance with that object. The viewer then sends both the geometry data and the material properties to the frontend.
