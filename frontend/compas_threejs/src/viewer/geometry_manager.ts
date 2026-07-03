/** Manages the geometry of the scene, including adding, updating, and removing meshes.
 */

import { scene } from "./scene_manager";
import * as THREE from "three";
import { GEOMETRY_MATERIALS, SCENE_MATERIALS } from "./material_manager";
import { showEdges } from "@/store/store";
import { convertToThreeJSMesh } from "@/conversions";
import { ThrowStatement } from "typescript";

// Stores the meshes of the scene, keyed by the GUID of the object
// Object GUID --> Mesh Geometry
export const SCENE_GEOMETRIES: { [guid: string]: THREE.Object3D } = {};

const ABSTRACT_GEOMETRIES = ["Line", "Point", "Vector", "Frame", "Plane", "Polyline"];

export function getObjectMaterial(obj: any): THREE.Material {
    if (GEOMETRY_MATERIALS[obj.guid]) {
        const material_guid = GEOMETRY_MATERIALS[obj.guid];
        if (SCENE_MATERIALS[material_guid]) {
            return SCENE_MATERIALS[material_guid];
        }
        return null;
    }
}

export function addObject(obj: any) {
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
    // Add the mesh to the scene
    const mesh = convertToThreeJSMesh(obj);
    mesh.material = material;
    scene.add(mesh);
    SCENE_GEOMETRIES[obj.guid] = mesh;
    // If the show edges option is active, show the edges
    if (showEdges.value) {
        const edgesGeometry = new THREE.EdgesGeometry(mesh.geometry);
        const lineSegments = new THREE.LineSegments(
            edgesGeometry,
            new THREE.LineBasicMaterial({ color: 0x000000 }),
        );
        lineSegments.layers.set(1);
        mesh.add(lineSegments);
    }
}

export function updateObject(obj: any) {
    console.log(obj);
    // Extract the new mesh
    const newMesh = convertToThreeJSMesh(obj);
    console.log(newMesh);
    // Extract and prepare the geometry for the new mesh.
    const newGeo = newMesh.geometry;
    newGeo.computeBoundingSphere();
    newGeo.computeBoundingBox();
    // Update swap the geometries
    const meshToUpdate = SCENE_GEOMETRIES[obj.guid];
    const oldGeo = meshToUpdate?.geometry;
    meshToUpdate.geometry = newGeo;
    // Transform: copy positio rotation and scale to the new mesh
    meshToUpdate.position.copy(newMesh.position);
    meshToUpdate.rotation.copy(newMesh.rotation);
    meshToUpdate.scale.copy(newMesh.scale);
    // Cleanup: dispose of the old mesh
    oldGeo?.dispose();
}

export function isObjectInRegistry(obj: any): boolean {
    const objGuid = obj.guid;
    const existingObj = SCENE_GEOMETRIES[objGuid];
    return existingObj !== undefined;
}

export function geometryManager(obj: any) {
    // if the geometry is abstract, than send it to another workflow\
    if (ABSTRACT_GEOMETRIES.includes(obj.name)) {
        abstractGeometryManager(obj);
    } else {
        solidGeometryManager(obj);
    }
}

export function solidGeometryManager(obj: any) {
    if (isObjectInRegistry(obj)) {
        updateObject(obj);
        return;
    } else {
        addObject(obj);
    }
}

function abstractGeometryManager(obj: any) {
    const geometry = obj.buildGeometry();
    const guid: string = obj.guid;

    // MATERIAL
    let material: THREE.Material;

    if (GEOMETRY_MATERIALS[guid]) {
        const material_guid = GEOMETRY_MATERIALS[guid];
        if (SCENE_MATERIALS[material_guid]) {
            material = SCENE_MATERIALS[material_guid];
        }
    } else {
        return;
    }

    // GEOMETRY
    if (geometry instanceof THREE.Line || geometry instanceof THREE.Points) {
        geometry.material = material;
    } else if (geometry instanceof THREE.ArrowHelper || geometry instanceof THREE.PlaneHelpers) {
        geometry.setColor(material.color);
    }

    scene.add(geometry);
    SCENE_GEOMETRIES[guid] = geometry;
}

export function updateMaterial(geometry_guid: string, material: THREE.MeshStandardMaterial) {
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
