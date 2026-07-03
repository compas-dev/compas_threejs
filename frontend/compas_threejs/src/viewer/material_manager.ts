import * as THREE from "three";
import { materialToThree } from "../conversions/material";
import { SCENE_GEOMETRIES } from "./geometry_manager";

interface MaterialEntry {
    material: THREE.Material;
    backendGuid: string;
    materialType: string;
}

// Maps backendGuid to material
export const SCENE_MATERIALS: Map<string, MaterialEntry> = new Map();

// Maps geometry backendGuid to material backendGuid
export const GEOMETRY_MATERIALS: Map<string, string> = new Map();

/**
 * Get material type from THREE.Material object
 */
function getMaterialTypeFromObject(material: THREE.Material): string {
    if (material instanceof THREE.MeshPhysicalMaterial) return "physical_material";
    if (material instanceof THREE.MeshStandardMaterial) return "standard_material";
    if (material instanceof THREE.LineBasicMaterial) return "line_material";
    if (material instanceof THREE.PointsMaterial) return "point_material";
    return "unknown";
}

/**
 * Get backend guid from material object by searching entries
 */
function getBackendGuidFromMaterial(material: THREE.Material): string | undefined {
    const entry = Array.from(SCENE_MATERIALS.values()).find((e) => e.material === material);
    return entry?.backendGuid;
}

/**
 * Main entry point for material management
 * Accepts a THREE.Material object and manages it
 */
export function materialManager(
    newMaterial: THREE.Material,
    materialBackendGuid: string,
    geometryBackendGuid: string
): void {
    if (!materialBackendGuid) {
        console.warn("Material management requires a materialBackendGuid");
        return;
    }

    const existingEntry = SCENE_MATERIALS.get(materialBackendGuid);
    if (existingEntry) {
        updateMaterial(materialBackendGuid, newMaterial);
    } else {
        addMaterial(newMaterial, materialBackendGuid);
    }

    // Link geometry to material
    GEOMETRY_MATERIALS.set(geometryBackendGuid, materialBackendGuid);

    // Apply material to geometry if it exists
    applyMaterialToGeometry(geometryBackendGuid, newMaterial);
}

/**
 * Convert material data and manage it (internal API)
 * Used when data conversion is needed
 */
export function materialManagerFromData(data: Record<string, unknown>): void {
    const materialBackendGuid = (data.guid as { value: string })?.value;
    const geometryBackendGuid = (data.geometry_guid as { value: string })?.value;
    const materialType = (data.type as { value: string })?.value;

    if (!materialBackendGuid) {
        console.warn("Material data missing materialBackendGuid");
        return;
    }

    if (!geometryBackendGuid) {
        console.warn("Material data missing geometryBackendGuid");
        return;
    }

    const newMaterial = materialToThree(data as any);
    if (!newMaterial) {
        console.warn(`Failed to convert material of type: ${materialType}`);
        return;
    }

    materialManager(newMaterial, materialBackendGuid, geometryBackendGuid);
}

/**
 * Add a new material
 */
export function addMaterial(newMaterial: THREE.Material, materialBackendGuid: string): void {
    const materialType = getMaterialTypeFromObject(newMaterial);

    const entry: MaterialEntry = {
        material: newMaterial,
        backendGuid: materialBackendGuid,
        materialType,
    };

    SCENE_MATERIALS.set(materialBackendGuid, entry);
}

/**
 * Remove a material
 */
export function removeMaterial(materialBackendGuidOrObject: string | THREE.Material): void {
    let materialBackendGuid: string;
    let entry: MaterialEntry | undefined;

    // Determine if parameter is a backend guid or a material object
    if (typeof materialBackendGuidOrObject === "string") {
        materialBackendGuid = materialBackendGuidOrObject;
        entry = SCENE_MATERIALS.get(materialBackendGuid);
    } else {
        // Find the entry by material object reference
        entry = Array.from(SCENE_MATERIALS.values()).find(
            (e) => e.material === materialBackendGuidOrObject
        );
        if (!entry) return;
        materialBackendGuid = entry.backendGuid;
    }

    if (!entry) {
        console.warn(`Material with materialBackendGuid ${materialBackendGuid} not found`);
        return;
    }

    SCENE_MATERIALS.delete(materialBackendGuid);
}

/**
 * Update an existing material
 */
export function updateMaterial(
    materialBackendGuidOrOldMaterial: string | THREE.Material,
    newMaterial: THREE.Material
): void {
    let materialBackendGuid: string;
    let entry: MaterialEntry | undefined;

    // Determine if first parameter is a backend guid or a material object
    if (typeof materialBackendGuidOrOldMaterial === "string") {
        materialBackendGuid = materialBackendGuidOrOldMaterial;
        entry = SCENE_MATERIALS.get(materialBackendGuid);
    } else {
        // Find the entry by old material object reference
        entry = Array.from(SCENE_MATERIALS.values()).find(
            (e) => e.material === materialBackendGuidOrOldMaterial
        );
        if (!entry) return;
        materialBackendGuid = entry.backendGuid;
    }

    if (!entry) {
        console.warn(`Material with materialBackendGuid ${materialBackendGuid} not found`);
        return;
    }

    const oldMaterial = entry.material;
    const newMaterialType = getMaterialTypeFromObject(newMaterial);

    entry.material = newMaterial;
    entry.materialType = newMaterialType;

    // Update all geometries using this material
    GEOMETRY_MATERIALS.forEach((matGuid, geomGuid) => {
        if (matGuid === materialBackendGuid) {
            applyMaterialToGeometry(geomGuid, newMaterial);
        }
    });
}

/**
 * Apply a material to a geometry
 */
function applyMaterialToGeometry(geometryBackendGuid: string, material: THREE.Material): void {
    const object = SCENE_GEOMETRIES[geometryBackendGuid];
    if (!object) {
        return;
    }

    if (object instanceof THREE.Mesh) {
        object.material = material;
        return;
    }

    if (object instanceof THREE.Line) {
        object.material = material;
        return;
    }

    if (object instanceof THREE.Points) {
        object.material = material;
        return;
    }

    if (object instanceof THREE.ArrowHelper || object instanceof THREE.PlaneHelpers) {
        object.setColor((material as any).color);
    }
}

/**
 * Get a specific material by materialBackendGuid
 */
export function getMaterial(materialBackendGuid: string): MaterialEntry | undefined {
    return SCENE_MATERIALS.get(materialBackendGuid);
}

/**
 * Get all materials in the scene
 */
export function getAllMaterials(): MaterialEntry[] {
    return Array.from(SCENE_MATERIALS.values());
}

/**
 * Clear all materials
 */
export function clearAllMaterials(): void {
    SCENE_MATERIALS.clear();
    GEOMETRY_MATERIALS.clear();
}

/**
 * Convert a material to line material
 */
export function convertToLineMaterial(material: THREE.Material): THREE.LineBasicMaterial {
    return new THREE.LineBasicMaterial({
        color: (material as any).color,
    });
}

/**
 * Convert a material to points material
 */
export function convertToPointsMaterial(
    material: THREE.Material,
    size: number = 0.5
): THREE.PointsMaterial {
    return new THREE.PointsMaterial({
        color: (material as any).color,
        size,
    });
}

/**
 * Get material by geometry backendGuid
 */
export function getMaterialByGeometry(geometryBackendGuid: string): MaterialEntry | undefined {
    const materialBackendGuid = GEOMETRY_MATERIALS.get(geometryBackendGuid);
    if (!materialBackendGuid) return undefined;
    return SCENE_MATERIALS.get(materialBackendGuid);
}
