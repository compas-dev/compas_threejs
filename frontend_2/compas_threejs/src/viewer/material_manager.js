import * as THREE from "three";
import { updateMaterial } from "./geometry_manager";
export const GEOMETRY_MATERIALS = {};
export const SCENE_MATERIALS = {};
export function materialManager(matData) {
    let material;
    // if (SCENE_MATERIALS[matData.guid.value]) {
    //   console.log("mat yes");
    //   material = SCENE_MATERIALS[matData.guid.value];
    // } else {
    console.log("mat no");
    material = buildMaterial(matData);
    SCENE_MATERIALS[matData.guid.value] = material;
    // }
    //update the material of the geometry
    updateMaterial(matData.geometry_guid.value, material);
    GEOMETRY_MATERIALS[matData.geometry_guid.value] = matData.guid.value;
}
function buildMaterial(data) {
    let color = data.color.value;
    color = color.replace("#", "0x");
    let emissive = data.emissive.value;
    emissive = emissive.replace("#", "0x");
    const geometry_guid = data.geometry_guid.value;
    const material = new THREE.MeshStandardMaterial({
        color: parseInt(color),
        metalness: data.metalness.value,
        roughness: data.roughness.value,
        emissive: parseInt(emissive),
        emissiveIntensity: data.emissive_intensity.value,
        flatShading: data.flat_shading.value,
        wireframe: data.wireframe.value,
        side: THREE.DoubleSide,
    });
    return material;
}
