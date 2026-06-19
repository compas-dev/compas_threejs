# COMPAS THREEJS

[![Made with COMPAS](https://compas.dev/badge.svg)](https://compas.dev/#/)

COMPAS ThreeJS is a package that connects the COMPAS framework for computational workflows with Three.js. This integration enables the visualization of and interaction with complex 3D objects directly within a standard web browser.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Examples](#examples)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Seamless Integration**: Connects the Python-based COMPAS framework with the JavaScript-based Three.js library.
- **Browser Visualization**: Easily render and interact with complex 3D objects directly in a web browser.
- **Interactive Workflows**: Build and deploy computational design workflows with rich graphical interfaces.

## Installation

Instructions on how to install the package. For example, using pip:

```bash
pip install compas_threejs
```

## Usage

Provide a basic example of how to use the package.

```python
from compas.geometry import Box
from compas_threejs.viewer import Viewer

# 1. Create a viewer instance
viz = Viewer()

# 2. Create a COMPAS geometry
box = Box(1, 1, 1)

# 3. Add the geometry to the viewer
viz.add_geometry(box)

# 4. Start the viewer
viz.start()

```

## Examples

Check out our [examples directory](./examples) for more detailed use cases and implementation strategies.

## Contributing

We welcome contributions! Please see our [contributing guidelines](CONTRIBUTING.md) for more information on how to get involved.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


---

<div align="center">
Made with ❤️
</div>
