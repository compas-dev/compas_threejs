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
