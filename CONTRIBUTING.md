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
- Node.js 18+ (for frontend development)

### Python Setup

Install the package in development mode with dev dependencies:

```bash
pip install -e ".[dev]"
```

### Frontend Setup

The frontend assets are built with Node.js and automatically synced to the Python package:

```bash
cd frontend/compas_threejs
npm install
npm run build
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

Before submitting a pull request, ensure your code doesn't break existing functionality:

```bash
# Run tests (when available)
pytest
```

### Frontend Changes

If you modify anything in `frontend/compas_threejs/`:

1. Test your changes locally:
   ```bash
   npm run dev
   ```
2. Build the production assets:
   ```bash
   npm run build
   ```
3. Commit the built files from `src/compas_threejs/viewer/` along with your source changes

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
