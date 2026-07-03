import * as THREE from "three";

import { convertToThreeJSMaterial } from "../conversions/material";
import { SCENE_GEOMETRIES } from "./geometry_manager";

export const GEOMETRY_MATERIALS: { [guid: string]: THREE.Material } = {}; // Values are material GUID!
export const SCENE_MATERIALS: { [guid: string]: THREE.Material } = {};

export function materialManager(matData: Record<string, unknown>) {
    // get the material
    const material = convertToThreeJSMaterial(matData);

    // save the material
    SCENE_MATERIALS[matData.guid.value] = material;
    GEOMETRY_MATERIALS[matData.geometry_guid.value] = matData.guid.value;

    //update the material of the geometry
    updateMaterial(matData.geometry_guid.value, material);
}

export function updateMaterial(geometry_guid: string, material: THREE.Material) {
    const object = SCENE_GEOMETRIES[geometry_guid];
    if (!object) {
        return;
    }
    if (object) {
        object.material = material;
        return;
    }
    if (object instanceof THREE.ArrowHelper || object instanceof THREE.PlaneHelpers) {
        object.setColor(material.color);
    }
}

export function materialToLineMaterial(material: THREE.Material): THREE.LineBasicMaterial {
    return new THREE.LineBasicMaterial({
        color: material.color,
    });
}

export function materialToPointsMaterial(material: THREE.Material): THREE.PointsMaterial {
    return new THREE.PointsMaterial({
        color: material.color,
        size: 0.5,
    });
}
