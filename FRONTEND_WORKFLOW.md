# Frontend Development Workflow

The frontend for `compas_threejs` has been moved to a separate repository for independent development.

## Repository Structure

- **Backend (this repo)**: `compas_threejs` - Python package with FastAPI server
- **Frontend (separate repo)**: `compas_threejs_ts` - Vue.js + Three.js viewer application

The built frontend (`src/compas_threejs/viewer/frontend/`) is **not** committed to this
repo. It's generated on demand by one of two invoke tasks, and it's `.gitignore`d.
That means a fresh clone has no working viewer until you run one of them once.

## Two ways to get a built frontend

### `invoke pre-build` — reproduces a release build

Clones `compas_threejs_ts` at the tag recorded in [`FRONTEND_VERSION`](FRONTEND_VERSION),
builds it, and copies `dist/` into `src/compas_threejs/viewer/frontend/`. This is
exactly what the release pipeline runs (see "Releasing" below), so it's the way to
reproduce locally what a `pip install compas_threejs` will actually ship. No sibling
checkout needed — it clones a throwaway copy into a temp directory.

```bash
invoke pre-build
```

Use this when you just want a working viewer, or when verifying a `FRONTEND_VERSION`
bump before committing it.

### `invoke sync-frontend` — fast loop against a local frontend checkout

Builds whatever is currently checked out in a sibling `../compas_threejs_ts` directory
and copies its `dist/` in. Ignores `FRONTEND_VERSION` entirely — it always reflects
your local working tree, including uncommitted changes.

```bash
cd ../compas_threejs_ts
npm run dev   # iterate here first if you like
cd ../compas_threejs
invoke sync-frontend
python examples/your_example.py   # test the integration
```

Use this while actively developing `compas_threejs_ts` itself.

Both tasks need Node.js available on `PATH` (see `compas_threejs_ts`'s `package.json`
`engines` field for the minimum version) and, for `sync-frontend`, expect the Python
and TypeScript repositories to be sibling directories.

## Picking up a new compas_threejs_ts release

1. Finish and release the change in `compas_threejs_ts` (tagged `vX.Y.Z`, published to npm).
2. In `compas_threejs`, edit [`FRONTEND_VERSION`](FRONTEND_VERSION) to `X.Y.Z`.
3. Run `invoke pre-build` and test (`pytest`, `python examples/your_example.py`).
4. Commit the `FRONTEND_VERSION` bump. Do **not** commit the generated
   `src/compas_threejs/viewer/frontend/` directory — it's gitignored on purpose.

Pinning the version this way (rather than always building whatever is newest) is
deliberate: `compas_threejs_ts` and this package share a wire-format contract via
`compas-pb`/`compas-pb-ts`, and an unreviewed frontend bump could silently break that
contract. Bumping `FRONTEND_VERSION` is a normal, reviewable PR.

## Releasing (maintainers)

The GitHub Actions release pipeline (`.github/workflows/release.yml`) builds the
frontend automatically: the `prepare` job sets up Node.js and calls
`compas-dev/compas-actions/prepare-release@v1` with `run-prebuild: "true"`, which runs
`invoke pre-build` before building the sdist/wheel. So published distributions always
bundle the frontend pinned in `FRONTEND_VERSION` at release time, and `pip install
compas_threejs` never needs Node.js on the end user's machine.

If you release locally instead (e.g. via `invoke release`), run `invoke pre-build`
first — that path does not run it for you.

## Troubleshooting

### "npm was not found on PATH"

Install Node.js (matching `compas_threejs_ts`'s `engines.node` requirement) and make
sure `npm` is on `PATH`.

### `invoke pre-build` fails to clone

Check that `FRONTEND_VERSION` names a tag that actually exists on
`compas_threejs_ts` (tags are `vX.Y.Z`, e.g. `v1.2.0`).

### "PlaneHelpers" import warnings during build

These are non-fatal warnings from Three.js imports. The build will still succeed.

### Large bundle size warning

Consider code-splitting in the frontend if the bundle grows too large. See:
https://rollupjs.org/configuration-options/#output-manualchunks
