# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Unreleased

### Added

### Changed

- The bundled frontend is no longer committed to the repository. It's now built automatically at release time from the `compas_threejs_ts` version pinned in `FRONTEND_VERSION`, via a new `invoke pre-build` task wired into the release pipeline (`run-prebuild` on `prepare-release@v1`). `pip install compas_threejs` still requires no Node.js. See `FRONTEND_WORKFLOW.md`.

### Removed

- `scripts/sync-frontend.py` and `sync-frontend.bat`, superseded by the `invoke sync-frontend` task.

## [1.0.1] - 2026-08-13

### Added

### Changed

- Aligned the release pipeline with `compas_pb` so publishing from `main` can proceed to GitHub release creation and documentation deployment
- Added package, Python, license, build, documentation, and COMPAS badges to the README
- Consolidated documentation automation in the release workflow

### Removed


## [1.0.0] - 2026-08-13

### Added

- Public package documentation and release-oriented README
- Continuous integration for tests, documentation, and changelog verification

### Changed

- Migrated CI, documentation, and trusted publishing to `compas-actions@v1` and repository-owned release pull requests
- Transferred project ownership and copyright to the COMPAS Association
- Updated the bundled TypeScript viewer to the current public-release build
- Made the default physical-material attenuation distance JSON-safe
- Standardized version bumping, Ruff checks, contributor guidance, documentation metadata, and Trusted Publishing releases

### Removed

## [0.1.0] - 2026-05-26

### Added

- Initial release of COMPAS ThreeJS
- Core viewer component for visualizing COMPAS geometry in Three.js
- Support for multiple material types:
  - Generic Material
  - Physical Material
  - Point Material
  - Line Material
- Lighting support:
  - Point Light
  - Spot Light
  - Rect Light
  - Sky (environment lighting)
  - Sun (directional light)
- UI Components:
  - Button
  - Slider
  - Number Field
- Metadata support for geometry annotation
- Text rendering capabilities
- WebSocket-based server for live updates using FastAPI
- Protobuf serialization for efficient data transfer
- Comprehensive documentation with MkDocs
- Python and frontend build automation with GitHub Actions
