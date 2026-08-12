# COMPAS ThreeJS

`compas_threejs` is a browser-based 3D viewer for COMPAS geometry. The Python
package serves a bundled Three.js frontend and exchanges geometry, scene, and
interaction messages through COMPAS Protobuf and WebSockets.

## Installation

```bash
pip install compas_threejs
```

## Quick start

```python
from compas.geometry import Box
from compas_threejs.viewer import App

viewer = App()
viewer.add_geometry(Box(2, 3, 1))
viewer.start(show=True)
```

The viewer runs until interrupted with `Ctrl+C`.

## Related projects

- [TypeScript viewer](https://github.com/compas-dev/compas_threejs_ts)
- [COMPAS](https://github.com/compas-dev/compas)
- [COMPAS Protobuf](https://github.com/gramaziokohler/compas_pb)

## License

MIT, copyright COMPAS Association. See [LICENSE](LICENSE).
