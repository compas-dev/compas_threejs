import compas_pb
import requests


class ParasiteViewer:
    """A viewer that sends commands to a running viewer server.

    Parameters
    ----------
    host : str, optional
        The host of the server.
    port : int, optional
        The port of the server.
    """

    def __init__(self, host="localhost", port=9001):
        self.url = f"http://{host}:{port}/broadcast"

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

    def add_geometry(self, geometry, name=None, visible=True, **kwargs):
        """Add a geometry to the viewer.

        Parameters
        ----------
        geometry : :class:`compas.geometry.Geometry`
            The geometry to add.
        name : str, optional
            The name of the geometry.
        visible : bool, optional
            Whether the geometry is visible.
        **kwargs : dict, optional
            Additional keyword arguments.
        """
        message = {
            "type": "add-geometry",
            "id": name,
            "geometry": geometry.to_data(),
            "options": kwargs,
        }
        self._send_dictionary_message(message)

    def add_geometries(self, geometries):
        """Add multiple geometries to the viewer.

        Parameters
        ----------
        geometries : list of dict
            A list of dictionaries, with each dictionary containing the geometry and its options.
        """
        for item in geometries:
            self.add_geometry(**item)

    def remove_object(self, name):
        """Remove an object from the viewer.

        Parameters
        ----------
        name : str
            The name of the object to remove.
        """
        message = {"type": "remove-object", "id": name}
        self._send_dictionary_message(message)

    def __enter__(self):
        return self

    def __exit__(self, exc_type, exc_val, exc_tb):
        pass
