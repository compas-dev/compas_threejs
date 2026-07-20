from compas.geometry import Box

from compas_threejs.ui import LoadJsonButton
from compas_threejs.viewer import Viewer


def load_json(json_data: dict):
    print(json_data)
    print(type(json_data))
    print(json_data["name"])
    print(json_data["number"])


viz = Viewer()

jsonButton = LoadJsonButton(
    text="Load JSON",
    action=load_json,
    label="Load JSON",
)

viz.add_ui_element(jsonButton)

viz.start()
