import * as THREE from "three";
import { updateMaterial } from "./geometry_manager";

export const GEOMETRY_MATERIALS: { [guid: string]: THREE.Material } = {};
export const SCENE_MATERIALS: { [guid: string]: THREE.Material } = {};

export function materialManager(matData: { [key: string]: any }) {
  let material: THREE.Material;

  // get the right material
  switch (matData.type.value) {
    case "standard_material":
      material = buildStandardMaterial(matData);
      break;
    case "line_material":
      material = buildLineMaterial(matData);
      break;
    case "point_material":
      material = buildPointsMaterial(matData);
      break;
    case "physical_material":
      material = buildPhysicalMaterial(matData);
      break;
  }

  console.log(material);

  // save the material
  SCENE_MATERIALS[matData.guid.value] = material;
  GEOMETRY_MATERIALS[matData.geometry_guid.value] = matData.guid.value;
  console.log(matData.geometry_guid.value);
  //update the material of the geometry
  updateMaterial(matData.geometry_guid.value, material);
}

function buildStandardMaterial(data: { [key: string]: any }) {
  let color = data.color.value;
  color = color.replace("#", "0x");
  let emissive = data.emissive.value;
  emissive = emissive.replace("#", "0x");

  const material = new THREE.MeshStandardMaterial({
    color: parseInt(color),
    metalness: data.metalness.value,
    roughness: data.roughness.value,
    emissive: parseInt(emissive),
    emissiveIntensity: data.emissive_intensity.value,
    flatShading: data.flat_shading.value,
    opacity: data.opacity.value,
    transparent: data.opacity.value < 1.0,
    depthWrite: data.opacity.value >= 1.0,
    wireframe: data.wireframe.value,
    side: THREE.DoubleSide,
  });
  return material;
}

function buildLineMaterial(data: {
  [key: string]: any;
}): THREE.LineBasicMaterial {
  let color = data.color.value;
  color = color.replace("#", "0x");

  const material = new THREE.LineBasicMaterial({
    color: parseInt(color),
  });
  return material;
}

function buildPointsMaterial(data: {
  [key: string]: any;
}): THREE.PointsMaterial {
  let color = data.color.value;
  color = color.replace("#", "0x");

  const material = new THREE.PointsMaterial({
    color: parseInt(color),
    size: data.size.value,
  });
  return material;
}

function buildPhysicalMaterial(data: {
  [key: string]: any;
}): THREE.MeshPhysicalMaterial {
  let color = data.color.value;
  color = color.replace("#", "0x");
  let emissive = data.emissive.value;
  emissive = emissive.replace("#", "0x");
  let attenuationColor = data.attenuation_color.value;
  attenuationColor = attenuationColor.replace("#", "0x");
  let sheenColor = data.sheen_color.value;
  sheenColor = sheenColor.replace("#", "0x");
  let specularColor = data.specular_color.value;
  specularColor = specularColor.replace("#", "0x");

  const material = new THREE.MeshPhysicalMaterial({
    color: parseInt(color),
    metalness: data.metalness.value,
    roughness: data.roughness.value,
    emissive: parseInt(emissive),
    emissiveIntensity: data.emissive_intensity.value,
    flatShading: data.flat_shading.value,
    wireframe: data.wireframe.value,
    side: THREE.DoubleSide,
    anisotropy: data.anisotropy.value,
    anisotropyRotation: data.anisotropy_rotation.value,
    attenuationColor: parseInt(attenuationColor),
    attenuationDistance: data.attenuation_distance.value,
    clearcoat: data.clearcoat.value,
    clearcoatRoughness: data.clearcoat_roughness.value,
    dispersion: data.dispersion.value,
    ior: data.ior.value,
    iridescence: data.iridescence.value,
    iridescenceIOR: data.iridescence_ior.value,
    iridescenceThicknessRange: [
      data.iridescence_thickness_start.value,
      data.iridescence_thickness_end.value,
    ],
    opacity: data.opacity.value,
    transparent: data.opacity.value < 1.0,
    depthWrite: data.opacity.value >= 1.0,
    reflectivity: data.reflectivity.value,
    sheen: data.sheen.value,
    sheenColor: parseInt(sheenColor),
    specularColor: parseInt(specularColor),
    sheenRoughness: data.sheen_roughness.value,
    specularIntensity: data.specular_intensity.value,
    thickness: data.thickness.value,
    transmission: data.transmission.value,
  });

  return material;
}
