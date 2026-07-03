import * as THREE from "three";
import { GEOMETRY_MATERIALS, SCENE_MATERIALS } from "./material_manager";

/**
 * Manages material highlighting and restoration for picked objects
 */
export class MaterialHighlighter {
    private highlightMaterial: THREE.Material;
    private savedMaterialGuid: string | undefined;
    private savedOriginalMaterial: THREE.Material | THREE.Material[] | null = null;

    constructor(highlightMaterial: THREE.Material) {
        this.highlightMaterial = highlightMaterial;
    }

    /**
     * Apply highlight material to an object and save its original material
     */
    highlight(object: THREE.Object3D, geometryGuid: string | undefined): void {
        // Save the original material
        const material = (object as any).material;
        if (material instanceof THREE.Material || Array.isArray(material)) {
            this.savedOriginalMaterial = material;
        }

        // Save the material GUID for fallback restoration
        if (geometryGuid) {
            this.savedMaterialGuid = GEOMETRY_MATERIALS.get(geometryGuid);
        }

        // Apply highlight material
        (object as any).material = this.highlightMaterial;
    }

    /**
     * Restore the original material to an object
     */
    dehighlight(object: THREE.Object3D): void {
        if (this.savedOriginalMaterial) {
            // Restore from saved material
            if (
                this.savedOriginalMaterial instanceof THREE.Material ||
                Array.isArray(this.savedOriginalMaterial)
            ) {
                (object as any).material = this.savedOriginalMaterial;
            }
            this.savedOriginalMaterial = null;
        } else if (this.savedMaterialGuid && SCENE_MATERIALS.has(this.savedMaterialGuid)) {
            // Fallback: restore from SCENE_MATERIALS
            const entry = SCENE_MATERIALS.get(this.savedMaterialGuid);
            if (entry && entry.material instanceof THREE.Material) {
                (object as any).material = entry.material;
            }
        }
    }
}
