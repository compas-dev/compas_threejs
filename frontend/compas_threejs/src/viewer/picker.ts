import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { PickerManager } from "./picker_manager";
import { TransformMode } from "./transform_controls_manager";

// Highlight material configuration
const HIGHLIGHT_MATERIAL = new THREE.MeshStandardMaterial({
    color: "orange",
    emissive: "yellow",
    emissiveIntensity: 0.1,
});

// Singleton instance
let pickerManagerInstance: PickerManager | null = null;

/**
 * Initialize the picker system and return the manager instance
 */
export function initializePicker(
    camera: THREE.PerspectiveCamera,
    rendererElement: HTMLCanvasElement,
    scene: THREE.Scene,
    controls: OrbitControls
): PickerManager {
    if (pickerManagerInstance) {
        return pickerManagerInstance;
    }

    pickerManagerInstance = new PickerManager(
        camera,
        rendererElement,
        scene,
        controls,
        HIGHLIGHT_MATERIAL
    );

    return pickerManagerInstance;
}

/**
 * Set the transform mode (translate, rotate, scale)
 */
export function setTransformMode(mode: TransformMode): void {
    if (!pickerManagerInstance) {
        console.warn("Picker system not initialized. Call initializePicker() first.");
        return;
    }
    pickerManagerInstance.setTransformMode(mode);
}

/**
 * Get the picker manager instance
 */
export function getPickerManager(): PickerManager | null {
    return pickerManagerInstance;
}

// Re-export types for convenience
export type { TransformMode } from "./transform_controls_manager";
export { PickerManager } from "./picker_manager";
