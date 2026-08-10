from __future__ import print_function

import os
import shutil
import subprocess
from pathlib import Path

from compas_invocations2 import build, docs, mkdocs, style, tests
from invoke.collection import Collection
from invoke.tasks import task


@task
def sync_frontend(c):
    """Build frontend from external repo and copy into Python package."""
    FRONTEND_REPO = Path("../compas_threejs_ts/")
    BACKEND_DEST = Path("src/compas_threejs/viewer/frontend")

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


ns = Collection(
    sync_frontend,
    docs.help,
    style.check,
    style.lint,
    style.format,
    mkdocs.docs,
    tests.test,
    tests.testdocs,
    tests.testcodeblocks,
    build.prepare_changelog,
    build.clean,
    build.release,
)

ns.configure(
    {
        "base_folder": os.path.dirname(__file__),
    }
)
