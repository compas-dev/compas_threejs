# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Unreleased

### Added

### Changed

- Bumped `compas-pb` to 1.2.0 (within the existing `>=1,<2` constraint), matching the version the bundled frontend's `compas-pb-ts` was upgraded to.
- Fixed `Workspace.remove_object()` never clearing an object's `Inbox`-side registrations (`geometry_registry`, `metadata_registry`, `object_actions_registry`, the guid-keyed `buttons` callback map, and a removed `Brep`'s `brep_viewmesh_registry` entry) - only the `Outbox`'s persisted material/visibility slots were forgotten, so any workflow that repeatedly removes and re-adds objects under the same guid (e.g. a viewer that rebuilds part of its own scene, or an object action whose geometry gets refreshed to pick up a new default value) leaked a growing set of stale entries, unbounded, for the life of the process.

### Removed


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
