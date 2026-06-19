from __future__ import print_function

import os

from compas_invocations2 import build, docs, mkdocs, style, tests
from invoke.collection import Collection
from invoke.tasks import task

ns = Collection(
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
