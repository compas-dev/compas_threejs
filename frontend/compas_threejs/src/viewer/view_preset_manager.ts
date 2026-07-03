import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export type ViewPreset =
    | "top"
    | "bottom"
    | "front"
    | "back"
    | "left"
    | "right"
    | "front_left"
    | "front_right"
    | "back_left"
    | "back_right";

const VIEW_PRESETS: Record<ViewPreset, THREE.Vector3> = {
    top: new THREE.Vector3(0, 0, 1),
    bottom: new THREE.Vector3(0, 0, -1),
    front: new THREE.Vector3(0, -1, 0),
    back: new THREE.Vector3(0, 1, 0),
    left: new THREE.Vector3(-1, 0, 0),
    right: new THREE.Vector3(1, 0, 0),
    front_left: new THREE.Vector3(-1, -1, 1),
    front_right: new THREE.Vector3(1, -1, 1),
    back_left: new THREE.Vector3(-1, 1, 1),
    back_right: new THREE.Vector3(1, 1, 1),
};

const NUMPAD_TO_PRESET = new Map<string, ViewPreset>([
    ["Numpad5", "top"],
    ["Numpad0", "bottom"],
    ["Numpad2", "front"],
    ["Numpad8", "back"],
    ["Numpad4", "left"],
    ["Numpad6", "right"],
    ["Numpad1", "front_left"],
    ["Numpad3", "front_right"],
    ["Numpad7", "back_left"],
    ["Numpad9", "back_right"],
]);

/**
 * Manages camera view presets and applies them based on keyboard input.
 */
export class ViewPresetManager {
    constructor(
        private camera: THREE.PerspectiveCamera,
        private controls: OrbitControls
    ) {
        this.setupKeyboardListener();
    }

    private setupKeyboardListener(): void {
        window.addEventListener("keydown", (event) => {
            if (event.altKey || event.ctrlKey || event.metaKey) {
                return;
            }

            const preset = this.getPresetFromKeyCode(event.code);
            if (preset) {
                this.applyPreset(preset);
                event.preventDefault();
            }
        });
    }

    private getPresetFromKeyCode(code: string): ViewPreset | null {
        return NUMPAD_TO_PRESET.get(code) ?? null;
    }

    applyPreset(preset: ViewPreset): void {
        const target = this.controls.target.clone();
        const direction = VIEW_PRESETS[preset].clone().normalize();
        const distance = this.camera.position.distanceTo(target);

        this.camera.position.copy(target.clone().add(direction.multiplyScalar(distance)));
        this.controls.update();
    }
}
