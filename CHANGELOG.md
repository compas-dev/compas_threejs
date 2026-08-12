# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Public package documentation and release-oriented README
- Continuous integration for tests, documentation, and changelog verification

### Changed

- Transferred project ownership and copyright to the COMPAS Association
- Updated the bundled TypeScript viewer to the current public-release build
- Made the default physical-material attenuation distance JSON-safe

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
