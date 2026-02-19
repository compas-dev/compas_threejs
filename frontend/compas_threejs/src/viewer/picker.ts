import * as THREE from "three";
import { TransformControls } from "three/addons/controls/TransformControls.js";
import { camera, renderer, scene, controls } from "./scene_manager";
import { SCENE_GEOMETRIES } from "./geometry_manager";

export let pickPosition: { x: number; y: number };
let canvas: HTMLCanvasElement;
export let tControl: TransformControls;

class TransformControlsManager {
  private tControl: TransformControls;

  constructor() {
    this.tControl = new TransformControls(camera, renderer.domElement);
    scene.add(this.tControl.getHelper());
    this.setupEventListeners();
  }

  private setupEventListeners() {
    this.tControl.addEventListener("dragging-changed", (event) => {
      controls.enabled = !event.value;
    });

    window.addEventListener("keydown", (event) => {
      switch (event.key) {
        case "w":
          this.tControl.setMode("translate");
          break;
        case "e":
          this.tControl.setMode("rotate");
          break;
        case "r":
          this.tControl.setMode("scale");
          break;
        case "Escape":
          this.tControl.detach();
          break;
      }
    });
  }

  public get controls(): TransformControls {
    return this.tControl;
  }
}

export class PickHelper {
  raycaster: THREE.Raycaster;
  pickedObject: THREE.Object3D | null;

  constructor() {
    this.raycaster = new THREE.Raycaster();
    this.pickedObject = null;
  }

  pick(normalizedPosition, scene) {
    this.raycaster.setFromCamera(normalizedPosition, camera);
    const intersectedObjects = this.raycaster.intersectObjects(
      SCENE_GEOMETRIES ? Object.values(SCENE_GEOMETRIES) : [],
      true,
    );

    if (intersectedObjects.length) {
      // An object was clicked.
      this.pickedObject = intersectedObjects[0].object;
      tControl.attach(this.pickedObject);
    } else {
      // Nothing was clicked, so deselect.
      if (this.pickedObject) {
        this.pickedObject = null;
        tControl.detach();
      }
    }
  }
}

function getCanvasRelativePosition(event: MouseEvent) {
  const rect = canvas.getBoundingClientRect();
  return {
    x: (event.clientX - rect.left) * (canvas.width / rect.width),
    y: (event.clientY - rect.top) * (canvas.height / rect.height),
  };
}

function setPickPosition(event: MouseEvent) {
  const pos = getCanvasRelativePosition(event);
  pickPosition.x = (pos.x / canvas.width) * 2 - 1;
  pickPosition.y = (pos.y / canvas.height) * -2 + 1; // note we flip Y
}

export function initializePicker(picker: PickHelper): PickHelper {
  canvas = document.querySelector("canvas") as HTMLCanvasElement;
  pickPosition = { x: 0, y: 0 };
  const tControlsManager = new TransformControlsManager();
  tControl = tControlsManager.controls;

  window.addEventListener("mousedown", (event) => {
    if (event.button !== 0) return; // Only proceed if left-click
    if (tControl.dragging) return; // Don't pick while dragging
    setPickPosition(event);
    picker.pick(pickPosition, scene);
  });

  return picker;
}
