import compas_pb
import requests

from .viewer import Viewer


class ParasiteViewer:
    """A viewer that connects to an existing websocket server.

    Parameters
    ----------
    host : str, optional
        The host of the websocket server.
    port : int, optional
        The port of the websocket server.
    """

    def __init__(self, host="localhost", port=9001):
        self.host = host
        self.port = port
        self._connect()

    def _connect(self):
        self.url = f"http://{self.host}:{self.port}/broadcast"

    def _send_dictionary_message(self, message):
        binary_data = compas_pb.pb_dump_bts(message)
        try:
            response = requests.post(
                self.url,
                data=binary_data,
                headers={"Content-Type": "application/octet-stream"},
            )
            response.raise_for_status()
        except requests.exceptions.RequestException as e:
            print(f"Failed to send message: {e}")

    def __enter__(self):
        return self

    def __exit__(self, exc_type, exc_val, exc_tb):
        self.close()
