import * as THREE from "three";
import { ObjectPicker } from "./object_picker";
import { MaterialHighlighter } from "./material_highlighter";
import { PickerMessenger } from "./picker_messenger";
import { TransformControlsManager, TransformMode } from "./transform_controls_manager";
import { MousePositionManager } from "./mouse_position_manager";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { pickerEnabled, pickerMode } from "@/store/store";

/**
 * Main picker manager that orchestrates object picking, highlighting, and transformation
 */
export class PickerManager {
    private objectPicker: ObjectPicker;
    private materialHighlighter: MaterialHighlighter;
    private messenger: PickerMessenger;
    private transformControlsManager: TransformControlsManager;
    private mousePositionManager: MousePositionManager;

    private pickedObject: THREE.Object3D | null = null;

    constructor(
        camera: THREE.PerspectiveCamera,
        rendererElement: HTMLCanvasElement,
        scene: THREE.Scene,
        orbitalControls: OrbitControls,
        highlightMaterial: THREE.Material
    ) {
        // Get canvas for mouse position tracking
        const canvas = rendererElement as HTMLCanvasElement;

        // Initialize components
        this.objectPicker = new ObjectPicker(camera);
        this.materialHighlighter = new MaterialHighlighter(highlightMaterial);
        this.messenger = new PickerMessenger();
        this.transformControlsManager = new TransformControlsManager(
            camera,
            rendererElement,
            scene,
            orbitalControls,
            this.messenger
        );
        this.mousePositionManager = new MousePositionManager(canvas);

        // Setup event listeners
        this.setupMouseEventListeners();
        this.setupKeyboardEventListeners();
    }

    private setupMouseEventListeners(): void {
        window.addEventListener("mousedown", (event) => {
            if (event.button !== 0) return; // Only left-click
            if (this.transformControlsManager.isDragging) return;

            const normalizedPos = this.mousePositionManager.getNormalizedPosition(event);
            this.pick(normalizedPos);
        });
    }

    private setupKeyboardEventListeners(): void {
        window.addEventListener("keydown", (event) => {
            // Handle picker-specific key: Escape
            if (event.key === "Escape") {
                if (this.pickedObject) {
                    this.dehighlightCurrentObject();
                    this.messenger.resetObjectInfo();
                }
            }

            // Handle transform mode keys (W/E/R/P)
            if (!event.altKey && !event.ctrlKey && !event.metaKey) {
                switch (event.key) {
                    case "w":
                        if (this.objectPicker.canPick()) {
                            this.transformControlsManager.setMode("translate");
                            pickerMode.value = "translate";
                        }
                        break;
                    case "e":
                        if (this.objectPicker.canPick()) {
                            this.transformControlsManager.setMode("rotate");
                            pickerMode.value = "rotate";
                        }
                        break;
                    case "r":
                        if (this.objectPicker.canPick()) {
                            this.transformControlsManager.setMode("scale");
                            pickerMode.value = "scale";
                        }
                        break;
                    case "p":
                        pickerEnabled.value = !pickerEnabled.value;
                        break;
                }
            }
        });
    }

    /**
     * Pick an object at the given normalized position
     */
    private pick(normalizedPosition: { x: number; y: number }): void {
        if (!this.objectPicker.canPick()) {
            return;
        }

        const picked = this.objectPicker.getPickedObject(normalizedPosition);

        if (picked) {
            this.handleObjectPicked(picked);
        } else {
            this.handleNothingPicked();
        }
    }

    private handleObjectPicked(picked: THREE.Object3D): void {
        // If picking a different object, dehighlight the previous one
        if (this.pickedObject !== picked && this.pickedObject !== null) {
            this.dehighlightCurrentObject();
            this.messenger.resetObjectInfo();
        }

        // Highlight the new object
        this.pickedObject = picked;
        const guid = this.objectPicker.getObjectGuid(this.pickedObject);

        this.materialHighlighter.highlight(this.pickedObject, guid);
        this.transformControlsManager.attach(this.pickedObject);

        // Send message to backend
        if (guid) {
            this.messenger.sendObjectPickedMessage(guid);
        }
    }

    private handleNothingPicked(): void {
        if (this.pickedObject) {
            this.dehighlightCurrentObject();
            this.pickedObject = null;
            this.transformControlsManager.detach();
            this.messenger.resetObjectInfo();
        }
    }

    private dehighlightCurrentObject(): void {
        if (this.pickedObject) {
            this.materialHighlighter.dehighlight(this.pickedObject);
        }
    }

    /**
     * Set the transformation mode (translate, rotate, scale)
     */
    public setTransformMode(mode: TransformMode): void {
        this.transformControlsManager.setMode(mode);
    }

    /**
     * Get the currently picked object (if any)
     */
    public getPickedObject(): THREE.Object3D | null {
        return this.pickedObject;
    }

    /**
     * Get the transform controls manager for direct access if needed
     */
    public getTransformControls(): TransformControlsManager {
        return this.transformControlsManager;
    }
}
