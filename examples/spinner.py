import time

from compas_threejs.ui import Button
from compas_threejs.viewer import App

app = App()


def spinner():
    app.start_spinner()
    time.sleep(3)
    app.stop_spinner()


button = Button("Spinner", action=spinner)
app.add_ui_element(button)

app.start()
