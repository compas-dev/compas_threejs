from compas.geometry import Frame, Sphere

from compas_threejs.ui import NumberField
from compas_threejs.viewer import App


class GridMaker:
    def __init__(self):
        self.view = App()
        self.nx = 3
        self.ny = 3
        self.nz = 3
        self.objects = []

    def create_grid(self):
        if self.objects:
            for obj in self.objects:
                self.view.remove_object(obj)
            self.objects = []

        for x in range(self.nx):
            for y in range(self.ny):
                for z in range(self.nz):
                    sphere = Sphere(0.2, Frame.worldXY())
                    sphere.frame.point = [x, y, z]
                    self.view.add_geometry(sphere)
                    self.objects.append(sphere)

    def update_nx(self, value):
        self.nx = int(value)
        self.create_grid()

    def update_ny(self, value):
        self.ny = int(value)
        self.create_grid()

    def update_nz(self, value):
        self.nz = int(value)
        self.create_grid()

    def setup_ui(self):
        self.view.add_ui_element(
            NumberField(
                label="Extent X",
                value=self.nx,
                min=1,
                max=5,
                step=1,
                action=self.update_nx,
            )
        )
        self.view.add_ui_element(
            NumberField(
                label="Extent Y",
                value=self.nx,
                min=1,
                max=5,
                step=1,
                action=self.update_ny,
            )
        )
        self.view.add_ui_element(
            NumberField(
                label="Extent Zs",
                value=self.nx,
                min=1,
                max=5,
                step=1,
                action=self.update_nz,
            )
        )

    def start(self):
        self.setup_ui()
        self.create_grid()
        self.view.start()


app = GridMaker()
app.start()
