# Installation

There are two ways to install `compas_threejs`: a stable release for regular users and a developer setup for those who want to contribute to the project.

## Stable Release

For the latest stable release, you can install `compas_threejs` directly from the command line with `pip`:

```bash
pip install compas_threejs
```

It is recommended to use a virtual environment to avoid conflicts with other packages.

## Developer Setup

COMPAS ThreeJS is composed by a python backend and a typescript frontend. To set up the development environment, clone the repository and install it in editable mode.

### Python

```bash
git clone https://github.com/compas-dev/compas_threejs.git
cd compas_threejs
pip install -e .
```
or for the full development version

```bash
pip install -e .["dev"]
```

### Typescript Frontend

To set up the typescript frontend, navigate to the `frontend` directory and install the dependencies:

```bash
cd frontend/compas_threejs
npm install
```

You can now run the development server and build the static files. To start the development server.

```bash
npm run dev
```

To build the static files, run the following command:

```bash
npm run build
```

### Requirements
- Python 3.8+
- Node.js 14+
