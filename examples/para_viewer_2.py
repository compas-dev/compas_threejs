import time

from compas.colors import Color

from compas_threejs.viewer.parasite_viewer import ParasiteViewer

paraviz = ParasiteViewer()

color = Color.cyan()

message = {
    "dispatch": "scene",
    "type": "background_color",
    "color": color.hex,
}


colors = [Color.green(), Color.cyan(), Color.magenta()]


for i in range(50):
    time.sleep(0.5)
    message["color"] = colors[i % len(colors)].hex
    paraviz._send_dictionary_message(message)
