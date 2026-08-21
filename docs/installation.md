# Installation

Install the released Python package with pip, or clone both repositories when
working on the bundled TypeScript viewer.

## Stable Release

For the latest stable release, you can install `compas_threejs` directly from the command line with `pip`:

```bash
pip install compas_threejs
```

Using a virtual environment is recommended.

## Developer Setup

Clone and install the Python package in editable mode:

### Python

```bash
git clone https://github.com/compas-dev/compas_threejs.git
cd compas_threejs
pip install -e ".[dev]"
```

The built frontend isn't committed to this repo, so the viewer won't render yet.
Run `invoke pre-build` to fetch and build the pinned `compas_threejs_ts` release (no
extra clone needed), or see below to build against a local frontend checkout instead.
See [FRONTEND_WORKFLOW.md](../FRONTEND_WORKFLOW.md) for details.

### Typescript Frontend

The TypeScript viewer lives in a separate repository. Clone it next to the
Python repository:

```bash
cd ..
git clone https://github.com/compas-dev/compas_threejs_ts.git
cd compas_threejs_ts
npm ci
npm run dev
```

To rebuild the viewer and copy it into the Python package, run this from the
Python repository:

```bash
cd ../compas_threejs
invoke sync-frontend
```

### Requirements

- Python 3.9+
- Node.js 22.12+ for frontend development
