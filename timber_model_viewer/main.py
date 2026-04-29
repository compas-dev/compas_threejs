import multiprocessing

from compas.colors import Color
from compas.geometry import Line, Point
from compas.tolerance import Tolerance
from compas_timber.connections import LButtJoint, LLapJoint, LMiterJoint
from compas_timber.elements import Beam
from compas_timber.fabrication import BTLxWriter
from compas_timber.model import TimberModel

from compas_threejs.materials import Material
from compas_threejs.metadata import Metadata
from compas_threejs.ui import Button
from compas_threejs.viewer import Viewer


def write_btlx(model):
    model_json = model.to_jsonstring()
    process = multiprocessing.Process(
        target=write_btlx_target, args=(model_json, "timber_model.btlx")
    )
    process.start()


def write_btlx_target(model_json, filename):
    model = TimberModel.from_jsonstring(model_json)
    model.process_joinery()
    writer = BTLxWriter("TEST BTLx")
    writer.write(model, filename)
    print(f"BTLx file written to {filename}")


class TimberModelViewer:
    def __init__(self):
        self.viewer = Viewer()
        self.timber_model: TimberModel = None
        self.beam_material = Material(Color.from_hex("#e9c884"))

        self.beam_geometries = []

        self.setup_ui()

    def setup_ui(self):
        process_joinery_button = Button(
            text="Process Joinery",
            action=self.process_model_joinery,
            label="Process the Joinery of the model.",
        )
        self.viewer.add_ui_element(process_joinery_button)

        save_model_button = Button(
            text="Save Model",
            action=self.save_json_model,
            label="Save the model as a JSON file.",
        )
        self.viewer.add_ui_element(save_model_button)

        load_model_button = Button(
            text="Load Model",
            action=self.load_json_model,
            label="Load a JSON model.",
        )
        self.viewer.add_ui_element(load_model_button)

        write_btlx_button = Button(
            text="Write BTLx",
            action=self.write_btlx,
            label="Write the model as a BTLx file.",
        )
        self.viewer.add_ui_element(write_btlx_button)

    def process_model_joinery(self):
        self.timber_model.process_joinery()
        for geometry in self.beam_geometries:
            self.viewer.remove_object(geometry)
        self.add_timber_model(self.timber_model)

    def save_json_model(self):
        self.timber_model.to_json("saved_timber_model.json", True)
        self.viewer.display_message("Model saved as timber_model.json")

    def load_json_model(self):
        timber_model = TimberModel.from_json("model_test.json")
        self.add_timber_model(timber_model)
        self.viewer.display_success("Model loaded!")

    def write_btlx(self):
        write_btlx(self.timber_model)

    def start(self):
        self.viewer.start()

    def add_timber_model(self, timber_model: TimberModel):
        timber_model.tolerance.unit = "MM"
        self.timber_model = timber_model
        self.viewer.camera_position = Point(5000, -5000, 5000)

        # self.timber_model.scale(0.01)
        unit = self.timber_model.tolerance.unit
        unit = unit.lower()
        self.beam_geometries = []
        for beam in self.timber_model.beams:
            # compute beam geometry
            brep = beam.geometry
            beam_geometry = brep.to_viewmesh()[0]
            self.beam_geometries.append(beam_geometry)

            # create beam metadata
            features = ", ".join([type(feat).__name__ for feat in beam.features])
            meta = Metadata(
                length=f"{round(beam.length, 2)} {unit}",
                width=f"{round(beam.width, 2)} {unit}",
                height=f"{round(beam.height, 2)} {unit}",
                features=features,
                name=beam.name,
            )

            self.viewer.add_geometry(beam_geometry, self.beam_material, meta)


def create_dummy_timber_model():
    model = TimberModel(tolerance=Tolerance(unit="MM"))

    beam1 = Beam.from_centerline(Line([0, 0, 0], [10, 10, 0]), 4, 2)
    beam2 = Beam.from_centerline(Line([0, 0, 0], [-10, 10, 0]), 4, 2)
    beam3 = Beam.from_centerline(Line([10, 10, 0], [-10, 10, 0]), 4, 2)
    model.add_elements([beam1, beam2, beam3])

    LMiterJoint.create(model, beam1, beam2)
    LButtJoint.create(model, beam2, beam3)
    LLapJoint.create(model, beam1, beam3)

    return model


def main():
    tmv = TimberModelViewer()

    # model = create_dummy_timber_model()
    # tmv.add_timber_model(model)

    tmv.start()

    # writer = BTLxWriter("TEST BTLx")
    # writer.write(model, "timber_model.btlx")


if __name__ == "__main__":
    main()
