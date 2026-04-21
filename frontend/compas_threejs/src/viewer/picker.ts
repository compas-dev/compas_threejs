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

class TransformControlsManager {
    private tControl: TransformControls;

    constructor(pickHelper?: PickHelper) {
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
                    objectInfoManager({} as any);
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
        this.setupEventListeners();
    }

    setupEventListeners() {
        window.addEventListener("keydown", (event) => {
            if (event.key === "Escape") {
                if (this.pickedObject) {
                    this.dehighlightObject(this.pickedObject);
                    objectInfoManager({} as any);
                }
            }
        });
    }

    getPickedObject(normalizedPosition: { x: number; y: number }) {
        this.raycaster.setFromCamera(normalizedPosition, camera);
        const intersectedObjects = this.raycaster.intersectObjects(
            SCENE_GEOMETRIES ? Object.values(SCENE_GEOMETRIES) : [],
            true,
        );
        return intersectedObjects.length ? intersectedObjects[0].object : null;
    }

    getPickedObjectKey(object: THREE.Object3D): string | undefined {
        return Object.keys(SCENE_GEOMETRIES).find(
            (key) => SCENE_GEOMETRIES[key] === object,
        );
    }

    sendMessage(pickedKey: string | undefined) {
        // Sends a message to the backend telling that an object was picked
        const message = {
            dispatch: "object_picked",
            guid: pickedKey,
        };
        sendData(message);
    }

    pick(normalizedPosition: { x: number; y: number }, scene: any) {
        if (!pickerEnabled.value) {
            return;
        }

        const picked = this.getPickedObject(normalizedPosition);

        if (picked) {
            // If we picked a new object, restore the previous one's color
            if (this.pickedObject !== picked) {
                if (this.pickedObject) {
                    this.dehighlightObject(this.pickedObject);
                }
            }

            // An object was clicked.
            this.pickedObject = picked;
            tControl.attach(this.pickedObject);

            // Find the key of the picked object in SCENE_GEOMETRIES
            const pickedKey = this.getPickedObjectKey(this.pickedObject);

            this.sendMessage(pickedKey);

            this.highlightObject(this.pickedObject);
        } else {
            // Nothing was clicked, so deselect.
            if (this.pickedObject) {
                this.dehighlightObject(this.pickedObject);
                this.pickedObject = null;
                tControl.detach();
                objectInfoManager({} as any);
            }
        }
    }

    dehighlightObject(object: THREE.Object3D) {
        if ((object as any).savedColor) {
            (object as any).material.color.copy((object as any).savedColor);
        }
    }

    highlightObject(object: THREE.Object3D) {
        if (!(object as any).savedColor) {
            (object as any).savedColor = (object as any).material.color.clone();
        }
        (object as any).material.color.set("yellow");
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

    const tControlsManager = new TransformControlsManager();
    tControl = tControlsManager.controls;

    pickPosition = { x: 0, y: 0 };
    window.addEventListener("mousedown", (event) => {
        if (event.button !== 0) return; // Only proceed if left-click
        if (tControl.dragging) return; // Don't pick while dragging
        setPickPosition(event);
        picker.pick(pickPosition, scene);
    });

    return picker;
}
