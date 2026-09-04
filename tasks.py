from __future__ import print_function

import os
import shutil
import subprocess
import tempfile
from pathlib import Path

from compas_invocations2 import build, docs, mkdocs, style, tests
from invoke.collection import Collection
from invoke.tasks import task

FRONTEND_PACKAGE_NAME = "@compas-dev/compas-threejs-ts"
FRONTEND_DEST = Path("src/compas_threejs/viewer/frontend")


def _npm_executable():
    npm = shutil.which("npm")
    if not npm:
        raise FileNotFoundError(
            "npm was not found on PATH. Install Node.js (see compas_threejs_ts's "
            "package.json 'engines' for the required version) before running this task."
        )
    return npm


@task
def sync_frontend(c):
    """Build the frontend from a sibling ../compas_threejs_ts checkout and copy it in.

    For local iteration when developing both repos side by side: always builds
    whatever is currently checked out there, ignoring FRONTEND_VERSION. Use
    `invoke pre-build` to reproduce exactly what a release build will bundle.
    """
    frontend_repo = Path("../compas_threejs_ts/")
    npm = _npm_executable()

    print("Building frontend...")
    subprocess.run([npm, "run", "build"], cwd=frontend_repo, check=True)

    if FRONTEND_DEST.exists():
        shutil.rmtree(FRONTEND_DEST)

    print("Copying frontend build...")
    shutil.copytree(frontend_repo / "dist", FRONTEND_DEST)

    print("Frontend synced successfully.")


@task
def pre_build(c):
    """Install the pinned compas_threejs_ts release from npm and vendor its build into the package.

    This is the pre-build hook the release pipeline runs (via `run-prebuild` on
    compas-dev/compas-actions/prepare-release) so that published wheels/sdists
    bundle a prebuilt frontend. It npm-installs compas_threejs_ts at the version
    recorded in FRONTEND_VERSION into a throwaway prefix and copies the app build
    out of node_modules, so bumping that file is a deliberate, reviewable step
    rather than always picking up whatever is newest.
    """
    version = Path("FRONTEND_VERSION").read_text().strip()
    npm = _npm_executable()

    with tempfile.TemporaryDirectory(prefix="compas_threejs_ts-") as tmp:
        tmp_dir = Path(tmp)

        print(f"Installing {FRONTEND_PACKAGE_NAME}@{version} via npm...")
        subprocess.run(
            [npm, "install", f"{FRONTEND_PACKAGE_NAME}@{version}", "--prefix", str(tmp_dir), "--no-save"],
            check=True,
        )

        package_dir = tmp_dir / "node_modules" / FRONTEND_PACKAGE_NAME

        if FRONTEND_DEST.exists():
            shutil.rmtree(FRONTEND_DEST)

        print("Copying frontend build...")
        shutil.copytree(package_dir / "dist", FRONTEND_DEST)

    print(f"Frontend v{version} vendored into {FRONTEND_DEST}")


ns = Collection(
    sync_frontend,
    pre_build,
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
