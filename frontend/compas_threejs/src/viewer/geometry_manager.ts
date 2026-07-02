import { scene } from "./scene_manager";
import * as THREE from "three";
import { GEOMETRY_MATERIALS, SCENE_MATERIALS } from "./material_manager";
import { showEdges } from "@/store/store";
import { convertToThreeJSMesh } from "@/conversions";

export const SCENE_GEOMETRIES: { [guid: string]: THREE.Object3D } = {};

const ABSTRACT_GEOMETRIES = ["Line", "Point", "Vector", "Frame", "Plane", "Polyline"];

export function geometryManager(obj: any) {
    console.log(obj);

    // FILTER
    // if the geometry is abstract, than send it to another workflow\
    if (ABSTRACT_GEOMETRIES.includes(obj.name)) {
        abstractGeometryManager(obj);
    }

    const guid: string = obj.guid;
    const existingObj = SCENE_GEOMETRIES[guid];

    // 1. Get the new Mesh from your API
    const newMesh = convertToThreeJSMesh(obj);
    if (newMesh instanceof THREE.Mesh) {
        console.log("True");
    } else {
        console.log("False");
        return;
    }
    if (!(newMesh instanceof THREE.Mesh)) return;

    // 2. Extract and prepare the geometry from the new mesh
    const newGeo = newMesh.geometry;
    newGeo.computeBoundingSphere();
    newGeo.computeBoundingBox();

    if (existingObj instanceof THREE.Mesh) {
        // 3. UPDATE: Swap geometry only
        const oldGeo = existingObj.geometry;
        existingObj.geometry = newGeo;

        // 4. Transform: Copy position/rotation/scale from the new mesh
        existingObj.position.copy(newMesh.position);
        existingObj.quaternion.copy(newMesh.quaternion);
        existingObj.scale.copy(newMesh.scale);

        // 5. Cleanup
        if (oldGeo) oldGeo.dispose();

        // IMPORTANT: Since newMesh was just a temporary container from the API,
        // make sure it doesn't hang around in memory.
    } else {
        // MATERIALCHECK
        if (GEOMETRY_MATERIALS[guid]) {
            const material_guid = GEOMETRY_MATERIALS[guid];
            if (SCENE_MATERIALS[material_guid]) {
                newMesh.material = SCENE_MATERIALS[material_guid];
            }
        } else {
            // If no material is assigned, give it a default one
            newMesh.material = new THREE.MeshStandardMaterial({
                color: 0x088ff,
                roughness: 0.5,
                metalness: 0.5,
            });
        }

        // INITIAL CREATION
        // Since it's already a Mesh, we can just add it
        scene.add(newMesh);
        SCENE_GEOMETRIES[guid] = newMesh;

        if (showEdges.value) {
            const edgesGeometry = new THREE.EdgesGeometry(newMesh.geometry);
            const lineSegments = new THREE.LineSegments(
                edgesGeometry,
                new THREE.LineBasicMaterial({ color: 0x000000 }),
            );
            lineSegments.layers.set(1);

            newMesh.add(lineSegments);
        }
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
