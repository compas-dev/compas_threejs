# Release Guide

This document describes the process for releasing a new version of COMPAS ThreeJS.

## Pre-Release Checklist

Before starting a release, ensure:

- [ ] All intended features are merged into the main branch
- [ ] All tests pass locally and in CI/CD
- [ ] Documentation is up-to-date
- [ ] CHANGELOG.md is complete with all changes in this release
- [ ] No outstanding issues tagged as blockers
- [ ] Code review is complete for all changes

## Release Process

### 1. Update Version Numbers

**Update `pyproject.toml`:**
```toml
[project]
version = "0.X.0"  # Update to your new version
```

The version in `pyproject.toml` is the single source of truth. The `__init__.py` will be updated automatically in step 3.

### 2. Finalize CHANGELOG.md

Update `CHANGELOG.md` to move changes from "Unreleased" to the new version:

```markdown
## [0.X.0] - YYYY-MM-DD

### Added
- Feature 1
- Feature 2

### Changed
- Change 1

### Removed
- Deprecation 1
```

Keep the "Unreleased" section with empty subsections for future changes.

### 3. Update `__init__.py`

Update the version in `src/compas_threejs/__init__.py`:
```python
__version__ = "0.X.0"
```

### 4. Commit Changes

```bash
git add pyproject.toml src/compas_threejs/__init__.py CHANGELOG.md
git commit -m "chore: bump version to 0.X.0"
git push origin main
```

### 5. Create and Push Git Tag

```bash
# Create an annotated tag
git tag -a v0.X.0 -m "Release version 0.X.0"

# Push the tag to GitHub
git push origin v0.X.0
```

### 6. Automated Release

Once the tag is pushed, the GitHub Actions workflow (`.github/workflows/release.yml`) will automatically:

1. Build the distribution (wheel and source distribution)
2. Publish to PyPI
3. Create a GitHub Release with changelog information

## Pre-Release Setup (One-Time)

### PyPI Token

Before the first release, you need to:

1. Create a PyPI account at https://pypi.org
2. Generate an API token:
   - Go to Account Settings → API tokens
   - Create a new token with "Entire repository" scope
3. Add the token as a GitHub secret:
   - Go to repository Settings → Secrets → Actions
   - Create a new secret named `PYPI_API_TOKEN`
   - Paste the token value

### Repository Settings

Ensure GitHub repository settings allow:
- Actions to create releases
- Push access for automated workflows

## Verifying the Release

After the workflow completes:

1. **Check PyPI**: Visit https://pypi.org/project/compas_threejs/ and verify the new version appears
2. **Check GitHub Release**: Verify the release page is created at https://github.com/gramaziokohler/compas_threejs/releases
3. **Test Installation**: 
   ```bash
   pip install compas_threejs==0.X.0
   ```

## Rollback

If there's a critical issue with a release:

1. Delete the GitHub release
2. Delete the Git tag locally and remotely:
   ```bash
   git tag -d v0.X.0
   git push origin :refs/tags/v0.X.0
   ```
3. Yank the PyPI release (via PyPI website settings)
4. Fix the issue and re-release with a patch version

## Versioning

This project follows [Semantic Versioning](https://semver.org/):

- **MAJOR**: Breaking changes
- **MINOR**: New features (backward compatible)
- **PATCH**: Bug fixes

Example: `0.1.0` → `0.2.0` (new features) or `0.1.1` (bug fix)

## Post-Release

After a successful release:

1. Monitor for any reported issues
2. Plan the next release
3. Close any related issues on GitHub
4. Announce the release if appropriate

---

For questions or issues, refer to [CONTRIBUTING.md](CONTRIBUTING.md).
