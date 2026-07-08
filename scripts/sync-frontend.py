import shutil
import subprocess
from pathlib import Path

FRONTEND_REPO = Path("../compas_threejs_ts/")  # Adjust path
BACKEND_DEST = Path("src/compas_threejs/viewer/frontend")


def sync_frontend():
    """Build frontend from external repo and copy into Python package."""

    # 1. Build the frontend
    print("🔨 Building frontend...")
    subprocess.run(["npm", "run", "build"], cwd=FRONTEND_REPO, check=True, shell=True)

    # 2. Clear old frontend files
    if BACKEND_DEST.exists():
        shutil.rmtree(BACKEND_DEST)

    # 3. Copy new build
    print("📦 Copying frontend build...")
    shutil.copytree(FRONTEND_REPO / "dist", BACKEND_DEST)

    print("✅ Frontend synced successfully!")


if __name__ == "__main__":
    sync_frontend()
