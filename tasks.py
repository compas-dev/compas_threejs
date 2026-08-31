from __future__ import print_function

import os
import shutil
import subprocess
import tarfile
import tempfile
import urllib.request
from pathlib import Path

from compas_invocations2 import build, docs, mkdocs, style, tests
from invoke.collection import Collection
from invoke.tasks import task

FRONTEND_REPO_URL = "https://github.com/compas-dev/compas_threejs_ts.git"
FRONTEND_RELEASE_ASSET_URL = "https://github.com/compas-dev/compas_threejs_ts/releases/download/v{version}/compas-threejs-ts-dist.tar.gz"
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
    """Download the pinned compas_threejs_ts release build and vendor it into the package.

    This is the pre-build hook the release pipeline runs (via `run-prebuild` on
    compas-dev/compas-actions/prepare-release) so that published wheels/sdists
    bundle a prebuilt frontend and `pip install` never needs Node.js. It downloads
    the prebuilt app that compas_threejs_ts's own release workflow attaches to the
    tag recorded in FRONTEND_VERSION, so bumping that file is a deliberate,
    reviewable step rather than always picking up whatever is newest, and no
    Node.js toolchain is needed here to reproduce the build.
    """
    version = Path("FRONTEND_VERSION").read_text().strip()
    url = FRONTEND_RELEASE_ASSET_URL.format(version=version)

    with tempfile.TemporaryDirectory(prefix="compas_threejs_ts-") as tmp:
        archive_path = Path(tmp) / "dist.tar.gz"

        print(f"Downloading compas_threejs_ts@v{version} release build...")
        urllib.request.urlretrieve(url, archive_path)

        if FRONTEND_DEST.exists():
            shutil.rmtree(FRONTEND_DEST)
        FRONTEND_DEST.mkdir(parents=True)

        print("Extracting frontend build...")
        with tarfile.open(archive_path) as archive:
            try:
                archive.extractall(FRONTEND_DEST, filter="data")
            except TypeError:
                archive.extractall(FRONTEND_DEST)

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
