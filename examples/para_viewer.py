from compas.colors import Color

from compas_threejs.viewer.parasite_viewer import ParasiteViewer

paraviz = ParasiteViewer()

color = Color.blue()

message = {
    "dispatch": "scene",
    "type": "background_color",
    "color": color.hex,
}

paraviz._send_dictionary_message(message)
