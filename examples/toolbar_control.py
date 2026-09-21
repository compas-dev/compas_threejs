from compas.geometry import Box

from compas_threejs.ui import Checkbox
from compas_threejs.viewer import App

app = App()
app.add_geometry(Box(1, 1, 1))

# Ids of built-in frontend toolbar buttons - see compas_threejs_ts's Toolbar.vue and
# its child components for the full list. The backend can only show/hide or
# enable/disable a button the frontend already defines by its id; it can't create,
# remove, relabel, or re-icon one.


def toggle_add_objects_visible(checked):
    app.toolbar.set_visible("add_objects", checked)


def toggle_move_enabled(checked):
    app.toolbar.set_enabled("move", checked)


check_visible = Checkbox(
    text="Show 'Add object' button",
    default_value=True,
    action=toggle_add_objects_visible,
)
app.add_ui_element(check_visible)

check_enabled = Checkbox(
    text="Enable 'Move' button",
    default_value=True,
    action=toggle_move_enabled,
)
app.add_ui_element(check_enabled)

app.start()
