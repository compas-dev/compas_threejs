# COMPAS THREEJS

[![Made with COMPAS](https://compas.dev/badge.svg)](https://compas.dev/#/)

A browser based viewer for COMPAS, built on top of THREEJS.

# Installation
    pip install git+https://github.com/gramaziokohler/compas_threejs.git



# Example

```python
from compas_threejs.viewer import Viewer
from compas.geometry import Box

viz = Viewer()

box = Box(1, 1, 1)
viz.add_geometry(box)

viz.start()
```


# Commands

The viewer includes a toolbar and quick keyboard shortcuts for navigation and interaction.

View shortcuts (numpad):
- `5`: Top view
- `2`: Front view
- `8`: Back view
- `4`: Left view
- `6`: Right view
- `1`: Front-left perspective
- `3`: Front-right perspective
- `7`: Back-left perspective
- `9`: Back-right perspective
- `0`: Bottom view

Object transform shortcuts:
- `W`: Move
- `E`: Rotate
- `S`: Scale
- `spacebar`: Play/pause movements

UI shortcuts:
- `I`: Show/hide the metadata bar
- `Q`: Show/hide the buttons and sliders bar



# Invokes

To start the development server, run the following command in a second terminal:
```
invoke rundev
```

To build the static files directly into the python package run the following command in the terminal:
```
invoke buildstatic
```
