# Contributing to COMPAS ThreeJS

We welcome contributions to COMPAS ThreeJS! Whether you're reporting bugs, suggesting features, or submitting code, your help is appreciated.

## Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/compas_threejs.git
   cd compas_threejs
   ```
3. **Create a new branch** for your work:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## Development Setup

### Prerequisites

- Python 3.9 or higher
- Node.js 22.12+ (for frontend development)

### Python Setup

Install the package in development mode with dev dependencies:

```bash
pip install -e ".[dev]"
```

### Frontend Setup

The frontend is maintained in the separate `compas_threejs_ts` repository.
Clone it next to this repository and install its dependencies:

```bash
cd ..
git clone https://github.com/compas-dev/compas_threejs_ts.git
cd compas_threejs_ts
npm ci
```

## Making Changes

### Code Style

- Follow [PEP 8](https://www.python.org/dev/peps/pep-0008/) for Python code
- Use type hints where possible
- Write clear, descriptive commit messages

### Documentation

- Update docstrings for any public methods or classes using NumPy docstring style
- Update relevant documentation files in the `docs/` directory
- Add entries to the `CHANGELOG.md` under the "Unreleased" section

### Testing

Before submitting a pull request, run the formatter, linter, and tests:

```bash
invoke format
invoke lint
invoke test
```

### Frontend Changes

If you modify the sibling `compas_threejs_ts` repository:

1. Test your changes locally:
   ```bash
   cd ../compas_threejs_ts
   npm test
   npm run lint
   npm run dev
   ```
2. Build and sync the production assets from this Python repository:
   ```bash
   cd ../compas_threejs
   invoke sync-frontend
   ```
3. Commit and release the TypeScript source in its own repository. The build
   `invoke sync-frontend` copied in is only for local testing here -- it is **not**
   committed to this repository (see [FRONTEND_WORKFLOW.md](FRONTEND_WORKFLOW.md)).
4. Once `compas_threejs_ts` has a new tagged release, bump
   [`FRONTEND_VERSION`](FRONTEND_VERSION) in this repository to that version, verify
   with `invoke pre-build`, and commit the bump as its own reviewable PR.

## Releasing (maintainers)

Start from a clean, up-to-date `main` branch with all changes listed under
`Unreleased` in `CHANGELOG.md`, then run:

```bash
invoke pre-build
invoke release --release-type=minor
```

Use `major`, `minor`, or `patch` as appropriate. The task updates the package
version and changelog, commits and tags the release, builds the distributions,
prepares the next `Unreleased` section, and asks before pushing. Pushing the tag
triggers the Trusted Publishing workflow.

`invoke pre-build` builds the `compas_threejs_ts` release pinned in
[`FRONTEND_VERSION`](FRONTEND_VERSION) and vendors it into
`src/compas_threejs/viewer/frontend/` so the distributions built by `invoke release`
bundle it -- `invoke release` does not do this on its own. The automated GitHub
Actions release pipeline runs the equivalent step itself, so this manual step is only
needed for local releases.

## Submitting Changes

1. **Push your branch** to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```
2. **Open a Pull Request** on GitHub with a clear title and description:
   - Reference any related issues (e.g., "Fixes #123")
   - Describe the changes and why they're needed
   - List any breaking changes

3. **Respond to feedback** and make requested changes

## Reporting Issues

When reporting bugs or suggesting features:

- **Use descriptive titles** that summarize the issue
- **Provide detailed descriptions** including:
  - Steps to reproduce (for bugs)
  - Expected vs. actual behavior
  - Python and package versions
  - Operating system
- **Include code samples** or screenshots if relevant

## Code of Conduct

Please be respectful and constructive in all interactions. We aim to maintain a welcoming community.

## Questions?

If you have questions about contributing, feel free to open an issue or start a discussion on GitHub.

Thank you for contributing to COMPAS ThreeJS! 🎉
