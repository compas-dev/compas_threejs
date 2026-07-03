/** Manages the geometry of the scene, including adding, updating, and removing meshes.
 */

import { scene } from "./scene_manager";
import * as THREE from "three";
import { convertToLineMaterial, convertToPointsMaterial } from "./material_manager";
import { showEdges } from "@/store/store";
import { convertToThreeJSGeometry } from "@/conversions";

export const SCENE_GEOMETRIES: { [guid: string]: THREE.Object3D } = {};

export function getObjectMaterial(obj: { guid: string }): THREE.Material | null {
    const materialEntry = getMaterialByGeometry(obj.guid);
    return materialEntry?.material || null;
}

function getMaterialByGeometry(guid: string): { material: THREE.Material } | undefined {
    const object = SCENE_GEOMETRIES[guid];
    if (object && "material" in object) {
        return { material: (object as any).material };
    }
    return undefined;
}

export function addObject(obj: undefined) {
    // Check if a material for this object already exist
    // Otherwise give a standard material
    let material = getObjectMaterial(obj);
    if (!material) {
        material = new THREE.MeshStandardMaterial({
            color: 0x088ff,
            roughness: 0.5,
            metalness: 0.5,
        });
    }

    // Get the threejs geometry
    const three_geometry = convertToThreeJSGeometry(obj);
    console.log(three_geometry);

    // Assign the material
    if (three_geometry instanceof THREE.Mesh) {
        three_geometry.material = material;
    } else if (three_geometry instanceof THREE.Line) {
        // Lines use LineBasicMaterial
        if (!(material instanceof THREE.LineBasicMaterial)) {
            material = convertToLineMaterial(material);
        }
        three_geometry.material = material;
    } else if (three_geometry instanceof THREE.Points) {
        // Points use PointsMaterial
        if (!(material instanceof THREE.PointsMaterial)) {
            material = convertToPointsMaterial(material);
        }
        three_geometry.material = material;
    } else if (
        three_geometry instanceof THREE.ArrowHelper ||
        three_geometry instanceof THREE.PlaneHelpers
    ) {
        three_geometry.setColor(material.color);
    }

    // Add it to the scene and the registry
    scene.add(three_geometry);
    SCENE_GEOMETRIES[obj.guid] = three_geometry;

    // If the show edges option is active, show the edges
    if (showEdges.value && three_geometry instanceof THREE.Mesh) {
        const edgesGeometry = new THREE.EdgesGeometry(three_geometry.geometry);
        const lineSegments = new THREE.LineSegments(
            edgesGeometry,
            new THREE.LineBasicMaterial({ color: 0x000000 })
        );
        lineSegments.layers.set(1);
        three_geometry.add(lineSegments);
    }
}

export function updateObject(obj: undefined) {
    // Extract the new mesh
    const newThreeGeometry = convertToThreeJSGeometry(obj);

    const threeGometryToUpdate = SCENE_GEOMETRIES[obj.guid];

    // Handle different geometry types
    if (newThreeGeometry instanceof THREE.Mesh) {
        // Extract and prepare the geometry for the new mesh.
        const newGeo = newThreeGeometry.geometry;
        newGeo.computeBoundingSphere();
        newGeo.computeBoundingBox();
        // Update swap the geometries
        const oldGeo = threeGometryToUpdate?.geometry;
        threeGometryToUpdate.geometry = newGeo;
        // Transform: copy positio rotation and scale to the new mesh
        threeGometryToUpdate.position.copy(newThreeGeometry.position);
        threeGometryToUpdate.rotation.copy(newThreeGeometry.rotation);
        threeGometryToUpdate.scale.copy(newThreeGeometry.scale);
        // Cleanup: dispose of the old mesh
        oldGeo?.dispose();
    } else if (newThreeGeometry instanceof THREE.Points || newThreeGeometry instanceof THREE.Line) {
        // For Points and Lines, update geometry and position
        const newGeo = newThreeGeometry.geometry;
        const oldGeo = threeGometryToUpdate?.geometry;
        threeGometryToUpdate.geometry = newGeo;
        threeGometryToUpdate.position.copy(newThreeGeometry.position);
        threeGometryToUpdate.rotation.copy(newThreeGeometry.rotation);
        threeGometryToUpdate.scale.copy(newThreeGeometry.scale);
        // Cleanup: dispose of the old geometry
        oldGeo?.dispose();
    }
}

export function isObjectInRegistry(obj: any): boolean {
    const objGuid = obj.guid;
    const existingObj = SCENE_GEOMETRIES[objGuid];
    return existingObj !== undefined;
}

export function removeObject(obj: undefined) {
    const objGuid = obj.guid;
    const existingObj = SCENE_GEOMETRIES[objGuid];
    if (existingObj) {
        scene.remove(existingObj);
        delete SCENE_GEOMETRIES[objGuid];
    }
}

export function geometryManager(obj: any) {
    if (isObjectInRegistry(obj)) {
        updateObject(obj);
        return;
    } else {
        addObject(obj);
    }
}
