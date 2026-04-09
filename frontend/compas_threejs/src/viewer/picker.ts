import * as THREE from "three";
import { TransformControls } from "three/addons/controls/TransformControls.js";
import { camera, renderer, scene, controls } from "./scene_manager";
import { SCENE_GEOMETRIES } from "./geometry_manager";
import { sendData } from "@/communications/communication";
import { objectInfoManager } from "@/communications/objectInfo";
import { pickerEnabled } from "@/store/store";

export let pickPosition: { x: number; y: number };
let canvas: HTMLCanvasElement;
export let tControl: TransformControls;
let transformControlsPaused = false;

export type TransformMode = "translate" | "rotate" | "scale";

export function setTransformMode(mode: TransformMode) {
  if (!tControl || transformControlsPaused) {
    return;
  }

  tControl.setMode(mode);
}

export function setTransformControlsPaused(paused: boolean) {
  transformControlsPaused = paused;

  if (!tControl) {
    return;
  }

  tControl.enabled = !paused;

  if (paused) {
    controls.enabled = true;
  }
}

export function toggleTransformControlsPaused(): boolean {
  setTransformControlsPaused(!transformControlsPaused);
  return transformControlsPaused;
}

export function areTransformControlsPaused(): boolean {
  return transformControlsPaused;
}

class TransformControlsManager {
  private tControl: TransformControls;

  constructor() {
    this.tControl = new TransformControls(camera, renderer.domElement);
    scene.add(this.tControl.getHelper());
    this.setupEventListeners();
  }

  private setupEventListeners() {
    this.tControl.addEventListener("dragging-changed", (event: { value: boolean }) => {
      controls.enabled = !event.value;
    });

    window.addEventListener("keydown", (event) => {
      if (event.altKey || event.ctrlKey || event.metaKey) {
        return;
      }

      switch (event.key) {
        case "w":
        case "W":
          setTransformMode("translate");
          break;
        case "e":
        case "E":
          setTransformMode("rotate");
          break;
        case "s":
        case "S":
        case "r":
        case "R":
          setTransformMode("scale");
          break;
        case "Escape":
        case "Esc":
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

  pick(normalizedPosition: { x: number; y: number }, scene: THREE.Scene) {
    if (!pickerEnabled.value) {
      return;
    }

    this.raycaster.setFromCamera(normalizedPosition, camera);
    const intersectedObjects = this.raycaster.intersectObjects(
      SCENE_GEOMETRIES ? Object.values(SCENE_GEOMETRIES) : [],
      true,
    );

    if (intersectedObjects.length) {
      // An object was clicked.
      this.pickedObject = intersectedObjects[0].object;
      tControl.attach(this.pickedObject);

      // Find the key of the picked object in SCENE_GEOMETRIES
      const pickedKey = Object.keys(SCENE_GEOMETRIES).find(
        (key) => SCENE_GEOMETRIES[key] === this.pickedObject,
      );

      const message = {
        dispatch: "object_picked",
        guid: pickedKey,
      };
      sendData(message);

      console.log("Picked object key:", pickedKey);
    } else {
      // Nothing was clicked, so deselect.
      if (this.pickedObject) {
        this.pickedObject = null;
        tControl.detach();
        objectInfoManager(null);
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
