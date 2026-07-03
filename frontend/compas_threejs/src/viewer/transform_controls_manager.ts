import * as THREE from "three";
import { TransformControls } from "three/addons/controls/TransformControls.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export type TransformMode = "translate" | "rotate" | "scale";

/**
 * Interface for the messenger service
 */
interface Messenger {
    resetObjectInfo(): void;
}

/**
 * Manages transformation controls (translate, rotate, scale)
 */
export class TransformControlsManager {
    private tControl: TransformControls;
    private messenger: Messenger;
    private orbitalControls: OrbitControls;

    constructor(
        camera: THREE.PerspectiveCamera,
        rendererElement: HTMLCanvasElement,
        scene: THREE.Scene,
        orbitalControls: OrbitControls,
        messenger: Messenger
    ) {
        this.orbitalControls = orbitalControls;
        this.messenger = messenger;
        this.tControl = new TransformControls(camera, rendererElement);
        scene.add(this.tControl.getHelper());
        this.setupEventListeners();
    }

    private setupEventListeners(): void {
        // Disable orbital controls while transforming
        this.tControl.addEventListener("dragging-changed", (event: { value: boolean }) => {
            this.orbitalControls.enabled = !event.value;
        });
    }

    public setMode(mode: TransformMode): void {
        this.tControl.setMode(mode);
    }

    public attach(object: THREE.Object3D): void {
        this.tControl.attach(object);
    }

    public detach(): void {
        this.tControl.detach();
    }

    public get isDragging(): boolean {
        return this.tControl.dragging;
    }

    public get controls(): TransformControls {
        return this.tControl;
    }
}
