"""Reacting to geometry drawn in the viewer.

Run this script, then open a viewer that has drawing tools - for example
compas_threejs_draw's dev page (`npm run dev` there, then reload it once this script
is running). Whatever you draw arrives here as a real COMPAS object, and this script
responds to it:

- a drawn Polygon (or Rectangle) becomes the floor of a 3 m tall room, with a tag
  showing its area;
- drawn lines and polylines are colored by length: green when short, red when long;
- a tag above the scene keeps the total floor area of all rooms.

Deleting or undoing a polygon in the viewer removes its room and tag again.
"""

from compas.colors import Color
from compas.geometry import Line
from compas.geometry import Point
from compas.geometry import Polygon
from compas.geometry import Polyline

from compas_threejs.materials import Material
from compas_threejs.tag import TextTag
from compas_threejs.viewer import App
from compas_threejs.viewer.drawing import extrude

ROOM_HEIGHT = 3.0
# Lines this long or longer are fully red; shorter ones blend from green.
LONG_LINE = 5.0

app = App()
app.set_view(Point(12, -18, 16), target=Point(0, 0, 0))

room_material = Material(color=Color.from_hex("#8fb3de"), transparent=True, opacity=0.6)
total_tag = TextTag(point=Point(0, 0, 6), text="Floor area: 0.00 m²", color=Color.black())
app.add_tag(total_tag)

# polygon guid -> (room mesh, area tag, floor area)
rooms = {}


def update_total():
    total = sum(area for _, _, area in rooms.values())
    total_tag.text = f"Floor area: {total:.2f} m² in {len(rooms)} room(s)"
    app.update_tag(total_tag)


def add_room(polygon):
    room = extrude(polygon, ROOM_HEIGHT)
    if room is None:
        return
    area = polygon.area
    tag = TextTag(point=polygon.centroid + [0, 0, ROOM_HEIGHT], text=f"{area:.2f} m²")
    app.add_geometry(room, room_material)
    app.add_tag(tag)
    rooms[str(polygon.guid)] = (room, tag, area)
    update_total()


def color_by_length(curve):
    material = app.inbox.material_registry.get(str(curve.guid))
    if material is None:
        return
    t = min(curve.length / LONG_LINE, 1.0)
    material.color = Color(t, 1.0 - t, 0.2)
    app.update_material(material)


@app.on_create
def created(geometry):
    print(f"drawn: {type(geometry).__name__}")
    if isinstance(geometry, Polygon):
        add_room(geometry)
    elif isinstance(geometry, (Line, Polyline)):
        color_by_length(geometry)


@app.on_delete
def deleted(geometry):
    print(f"deleted: {type(geometry).__name__}")
    entry = rooms.pop(str(geometry.guid), None)
    if entry is None:
        return
    room, tag, _ = entry
    app.remove_object(room)
    app.remove_object(tag)
    update_total()


app.start()
