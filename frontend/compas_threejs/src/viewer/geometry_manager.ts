import { scene } from "./scene_manager";
import * as THREE from "three";
import { GEOMETRY_MATERIALS, SCENE_MATERIALS } from "./material_manager";

export const SCENE_GEOMETRIES: { [guid: string]: THREE.Object3D } = {};

export function geometryManager(obj: any) {
  const guid: string = obj.guid;

  // check if object is already in scene
  if (guid in SCENE_GEOMETRIES) {
    const oldObject = SCENE_GEOMETRIES[guid];
    scene.remove(oldObject);
    delete SCENE_GEOMETRIES[guid];
  }

  const threeGeometry = obj.buildGeometry();
  dispatchGeometry(threeGeometry, guid);
}

function dispatchGeometry(geometry: THREE.Object3D, guid: string) {
  if (geometry instanceof THREE.BufferGeometry) {
    // A buffer geometry needs to be conveted into a mesh
    addBufferGeometryToScene(geometry as THREE.BufferGeometry, guid);
  } else {
    scene.add(geometry);
    SCENE_GEOMETRIES[guid] = geometry;
  }
}

function addBufferGeometryToScene(
  geometry: THREE.BufferGeometry,
  guid: string,
) {
  let material;
  if (GEOMETRY_MATERIALS[guid]) {
    const material_guid = GEOMETRY_MATERIALS[guid];
    material = SCENE_MATERIALS[material_guid];
  } else {
    material = new THREE.MeshStandardMaterial({
      color: 0x0099ff,
      side: THREE.DoubleSide,
    });
  }

  const mesh = new THREE.Mesh(geometry, material);
  // mesh.castShadow = true;
  // mesh.receiveShadow = true;
  // mesh.computeVertexNormals();
  scene.add(mesh);
  SCENE_GEOMETRIES[guid] = mesh;
}

export function updateMaterial(
  geometry_guid: string,
  material: THREE.MeshStandardMaterial,
) {
  const object = SCENE_GEOMETRIES[geometry_guid];
  if (object && object instanceof THREE.Mesh) {
    object.material = material;
  }
}
