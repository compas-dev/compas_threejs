# Frontend Development Workflow

The frontend for `compas_threejs` has been moved to a separate repository for independent development.

## Repository Structure

- **Backend (this repo)**: `compas_threejs` - Python package with FastAPI server
- **Frontend (separate repo)**: `compas_threejs_ts` - Vue.js + Three.js viewer application

## Development Workflow

### 1. Frontend Development

Work in the separate frontend repository:

```bash
cd ../compas_threejs_ts
npm run dev  # Start development server
```

Make your changes, commit them to the frontend repo.

### 2. Sync Frontend Build to Backend

After making frontend changes, sync the build to this Python package:

**Windows:**
```bash
sync-frontend.bat
```

**Linux/Mac or from Python:**
```bash
python scripts/sync-frontend.py
```

**Or with invoke (if installed):**
```bash
invoke sync-frontend
```

This will:
1. Build the frontend from `../compas_threejs_ts`
2. Clear the old build from `src/compas_threejs/viewer/frontend/`
3. Copy the new build files

### 3. Test the Integration

```bash
# Run your Python examples to test the viewer
python examples/your_example.py
```

The viewer should open in your browser with the updated frontend.

### 4. Commit Both Repos

**Frontend repo:**
```bash
cd ../compas_threejs_ts
git add .
git commit -m "Your frontend changes"
git push
```

**Backend repo (after syncing):**
```bash
cd ../compas_threejs
git add src/compas_threejs/viewer/frontend/
git commit -m "Update frontend build"
git push
```

The frontend build **is committed** to the backend repo so users can install via pip without needing Node.js.

## Important Notes

### Current Setup
- Frontend build **is committed** in this repo for easier pip installation
- You must run `sync-frontend.bat` or `python scripts/sync-frontend.py` to update the viewer
- The Python and TypeScript repositories must be sibling directories
- Users installing via pip don't need Node.js

### Path Configuration
The sync script expects:
- Frontend repo: `../compas_threejs_ts/` (relative to this repo)
- Output location: `src/compas_threejs/viewer/frontend/`

If you move repositories, update the path in `scripts/sync-frontend.py`.

## Troubleshooting

### "FileNotFoundError" when running sync script
- Ensure `../compas_threejs_ts` exists and contains `package.json`
- Check that npm is installed and available

### "PlaneHelpers" import warnings during build
- These are non-fatal warnings from Three.js imports
- The build will still succeed

### Large bundle size warning
- Consider code-splitting in the frontend if bundle grows too large
- See: https://rollupjs.org/configuration-options/#output-manualchunks

## Future Improvements

### Option A: Publish Frontend to npm
1. Publish `compas_threejs_ts` as an npm package
2. Backend downloads it during Python package build
3. Most decoupled approach

### Option B: Git Submodule
1. Add frontend as a git submodule
2. Build during Python package installation
3. Users need Node.js installed

### Option C: Commit Built Frontend ✅ **CURRENT**
1. Run sync script before commits
2. Commit built files to backend repo
3. No Node.js required for users
4. Larger git history due to binary files

**Current strategy**: Option C. This keeps installation simple for end users.
