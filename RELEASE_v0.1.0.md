# Quick Release Checklist for v0.1.0

## Steps to Release v0.1.0

Follow these steps to perform the initial release:

### 1. Prerequisites
- [ ] Verify PyPI account exists and API token is set in GitHub Secrets as `PYPI_API_TOKEN`
- [ ] Ensure main branch is up-to-date with all changes
- [ ] Documentation builds successfully locally: `mkdocs serve`

### 2. Release Commands
Run these commands from the repository root on the main branch:

```bash
# Verify current version
grep 'version' pyproject.toml

# Create git tag (this triggers the automated release)
git tag -a v0.1.0 -m "Release version 0.1.0"

# Push tag to GitHub (this starts the GitHub Actions workflow)
git push origin v0.1.0
```

### 3. Verify Release
After pushing the tag:
- [ ] Check GitHub Actions tab for the "Release" workflow status
- [ ] Verify package appears on PyPI: https://pypi.org/project/compas_threejs/
- [ ] Test installation: `pip install compas_threejs==0.1.0`
- [ ] Check GitHub Releases: https://github.com/gramaziokohler/compas_threejs/releases

## Current Status

✅ Version configured in:
- `pyproject.toml`: 0.1.0
- `src/compas_threejs/__init__.py`: 0.1.0

✅ Release workflow created: `.github/workflows/release.yml`

✅ Full release guide: `RELEASE.md`

✅ CHANGELOG.md updated with v0.1.0 contents

## Important Notes

- The release workflow requires the `PYPI_API_TOKEN` secret to be configured in GitHub
- The workflow will run automatically when a git tag `v*` is pushed
- No manual PyPI upload is needed—it's fully automated

For detailed information, see [RELEASE.md](RELEASE.md)
