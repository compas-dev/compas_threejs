import * as THREE from "three";
import { TransformControls } from "three/addons/controls/TransformControls.js";
import { camera, renderer, scene, controls } from "./scene_manager";
import { SCENE_GEOMETRIES } from "./geometry_manager";
import { sendData } from "@/communications/communication";
import { objectInfoManager } from "@/communications/objectInfo";
import { pickerMode, pickerEnabled } from "@/store/store";

export let pickPosition: { x: number; y: number };
let canvas: HTMLCanvasElement;
export let tControl: TransformControls;
let initializedTControls = false;
let initializedPickHelper = false;

export type TransformMode = "translate" | "rotate" | "scale";

export function setTransformMode(mode: TransformMode) {
    if (!tControl) {
        return;
    }

    tControl.setMode(mode);
}

class TransformControlsManager {
    private tControl: TransformControls;

    constructor(pickHelper?: PickHelper) {
        if (initializedTControls) {
            throw new Error(
                "TransformControlsManager has already been initialized.",
            );
        }
        this.tControl = new TransformControls(camera, renderer.domElement);
        scene.add(this.tControl.getHelper());
        this.setupEventListeners();
        initializedTControls = true;
    }

    private setupEventListeners() {
        this.tControl.addEventListener(
            "dragging-changed",
            (event: { value: boolean }) => {
                controls.enabled = !event.value;
            },
        );

        window.addEventListener("keydown", (event) => {
            if (event.altKey || event.ctrlKey || event.metaKey) {
                return;
            }

            switch (event.key) {
                case "w":
                    if (!pickerEnabled.value) {
                        break;
                    }
                    setTransformMode("translate");
                    pickerMode.value = "translate";
                    break;
                case "e":
                    if (!pickerEnabled.value) {
                        break;
                    }
                    setTransformMode("rotate");
                    pickerMode.value = "rotate";
                    break;
                case "r":
                    if (!pickerEnabled.value) {
                        break;
                    }
                    setTransformMode("scale");
                    pickerMode.value = "scale";
                    break;
                case "p":
                    pickerEnabled.value = !pickerEnabled.value;
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
        if (initializedPickHelper) {
            throw new Error("PickHelper has already been initialized.");
        }
        this.raycaster = new THREE.Raycaster();
        this.pickedObject = null;
        this.setupEventListeners();
        initializedPickHelper = true;
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

        pickPosition = { x: 0, y: 0 };
        window.addEventListener("mousedown", (event) => {
            if (event.button !== 0) return; // Only proceed if left-click
            if (tControl.dragging) return; // Don't pick while dragging
            setPickPosition(event);
            this.pick(pickPosition, scene);
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

    sendMessage(pickedKey: string) {
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
            if (this.pickedObject !== picked && this.pickedObject !== null) {
                this.dehighlightObject(this.pickedObject);
            }

            // An object was clicked.
            this.pickedObject = picked;
            tControl.attach(this.pickedObject);

            // Find the key of the picked object in SCENE_GEOMETRIES
            const pickedKey = this.getPickedObjectKey(this.pickedObject);
            if (pickedKey) {
            }
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
            (object as any).material.emissive?.set("black");
            (object as any).material.emissiveIntensity = 0.0;
        }
    }

    highlightObject(object: THREE.Object3D) {
        if (!(object as any).savedColor) {
            (object as any).savedColor = (object as any).material.color.clone();
        }
        (object as any).material.color.set("orange");
        if ((object as any).material.emissive) {
            (object as any).material.emissive.set("yellow");
            (object as any).material.emissiveIntensity = 0.1;
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
    canvas = document.querySelector<HTMLCanvasElement>("canvas")!;
    const tControlsManager = new TransformControlsManager();
    tControl = tControlsManager.controls;

    return picker;
}
