import * as THREE from "three";
import { pickerEnabled, blockPicker } from "@/store/store";
import { SCENE_GEOMETRIES } from "./geometry_manager";

/**
 * Configuration for object highlighting
 */
export interface HighlightConfig {
    highlightMaterial: THREE.Material;
    raycaster: THREE.Raycaster;
}

/**
 * Manages raycasting and object picking logic
 */
export class ObjectPicker {
    private raycaster: THREE.Raycaster;
    private camera: THREE.PerspectiveCamera;

    constructor(camera: THREE.PerspectiveCamera) {
        this.camera = camera;
        this.raycaster = new THREE.Raycaster();
        this.raycaster.layers.set(0);
    }

    /**
     * Find the first object intersected by a ray from the camera
     */
    getPickedObject(normalizedPosition: { x: number; y: number }): THREE.Object3D | null {
        this.raycaster.setFromCamera(normalizedPosition, this.camera);
        const sceneObjects = SCENE_GEOMETRIES ? Object.values(SCENE_GEOMETRIES) : [];
        const intersectedObjects = this.raycaster.intersectObjects(sceneObjects, true);
        return intersectedObjects.length ? intersectedObjects[0].object : null;
    }

    /**
     * Find the GUID key for an object by traversing the hierarchy
     */
    getObjectGuid(object: THREE.Object3D): string | undefined {
        let current: THREE.Object3D | null = object;
        while (current) {
            const key = Object.keys(SCENE_GEOMETRIES).find((k) => SCENE_GEOMETRIES[k] === current);
            if (key) {
                return key;
            }
            current = current.parent;
        }
        return undefined;
    }

    canPick(): boolean {
        return pickerEnabled.value && !blockPicker.value;
    }
}
