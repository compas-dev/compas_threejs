"""Sessions: every browser has its own scene, and sees what this script adds at startup.

Open the viewer in two browsers (or a normal and a private window): the box is in both,
since it is added here, at startup. "Add a sphere" adds one to the scene of the browser
that clicked only; "Move the box" moves the box for that browser only (it gets its own
copy). Both tabs of one browser share its session.

    python examples/sessions.py

or, with the session records in Redis, in Docker:

    docker compose up --build

and open http://127.0.0.1:9001 - use the same host name as the viewer's WebSocket
(127.0.0.1 by default): the session cookie belongs to one host name.
"""

import os
import random

from compas.colors import Color
from compas.geometry import Box
from compas.geometry import Sphere
from compas.geometry import Translation

from compas_threejs.materials import Material
from compas_threejs.ui import Button
from compas_threejs.viewer import App
from compas_threejs.viewer import RedisSessionStore
from compas_threejs.viewer import current_session

redis_url = os.environ.get("COMPAS_THREEJS_REDIS_URL")
app = App(
    host=os.environ.get("COMPAS_THREEJS_HOST", "127.0.0.1"),
    sessions=True,
    session_store=RedisSessionStore(redis_url) if redis_url else None,
)

# At startup, outside of any session: everyone's.
box = Box(1)
app.add_geometry(box)


def add_sphere():
    # Runs for the browser that clicked: the shorthand adds to its own main workspace.
    point = [random.uniform(-3, 3), random.uniform(-3, 3), random.uniform(0, 2)]
    app.add_geometry(Sphere(0.3, point=point), Material(color=Color(0.9, 0.4, 0.2)))
    print(f"A sphere for session {current_session().id[:8]}")


def move_box():
    # Everyone's box, moved from a session: that session's own copy moves, the others' don't.
    app.main.transform_geometry(box, Translation.from_vector([1, 0, 0]))


app.add_ui_element(Button("Add a sphere", action=add_sphere))
app.add_ui_element(Button("Move the box", action=move_box))
app.start()
