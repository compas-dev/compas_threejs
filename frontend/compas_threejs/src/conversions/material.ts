import * as THREE from "three";

interface MaterialData extends Record<string, unknown> {
    type: { value: string };
    color: { value: string };
}

export function materialToThree(materialData: MaterialData): THREE.Material | null {
    const materialType = materialData.type.value;

    switch (materialType) {
        case "standard_material":
            return buildStandardMaterial(materialData);
        case "line_material":
            return buildLineMaterial(materialData);
        case "point_material":
            return buildPointsMaterial(materialData);
        case "physical_material":
            return buildPhysicalMaterial(materialData);
        default:
            console.warn(`Unknown material type: ${materialType}`);
            return null;
    }
}

function parseColor(colorString: string): number {
    const hex = colorString.replace("#", "0x");
    return parseInt(hex);
}

function buildStandardMaterial(
    data: MaterialData & {
        metalness: { value: number };
        roughness: { value: number };
        emissive: { value: string };
        emissive_intensity: { value: number };
        flat_shading: { value: boolean };
        wireframe: { value: boolean };
    }
): THREE.MeshStandardMaterial {
    const material = new THREE.MeshStandardMaterial({
        color: parseColor(data.color.value),
        metalness: data.metalness.value,
        roughness: data.roughness.value,
        emissive: parseColor(data.emissive.value),
        emissiveIntensity: data.emissive_intensity.value,
        flatShading: data.flat_shading.value,
        wireframe: data.wireframe.value,
        side: THREE.DoubleSide,
    });
    return material;
}

function buildLineMaterial(data: MaterialData): THREE.LineBasicMaterial {
    const material = new THREE.LineBasicMaterial({
        color: parseColor(data.color.value),
    });
    return material;
}

function buildPointsMaterial(
    data: MaterialData & {
        size: { value: number };
    }
): THREE.PointsMaterial {
    const material = new THREE.PointsMaterial({
        color: parseColor(data.color.value),
        size: data.size.value,
    });
    return material;
}

function buildPhysicalMaterial(
    data: MaterialData & {
        metalness: { value: number };
        roughness: { value: number };
        emissive: { value: string };
        emissive_intensity: { value: number };
        flat_shading: { value: boolean };
        wireframe: { value: boolean };
        anisotropy: { value: number };
        anisotropy_rotation: { value: number };
        attenuation_color: { value: string };
        attenuation_distance: { value: number };
        clearcoat: { value: number };
        clearcoat_roughness: { value: number };
        dispersion: { value: number };
        ior: { value: number };
        iridescence: { value: number };
        iridescence_ior: { value: number };
        iridescence_thickness_start: { value: number };
        iridescence_thickness_end: { value: number };
        reflectivity: { value: number };
        sheen: { value: number };
        sheen_color: { value: string };
        sheenRoughness: { value: number };
        sheen_roughness: { value: number };
        specular_color: { value: string };
        specular_intensity: { value: number };
        thickness: { value: number };
        transmission: { value: number };
    }
): THREE.MeshPhysicalMaterial {
    const material = new THREE.MeshPhysicalMaterial({
        color: parseColor(data.color.value),
        metalness: data.metalness.value,
        roughness: data.roughness.value,
        emissive: parseColor(data.emissive.value),
        emissiveIntensity: data.emissive_intensity.value,
        flatShading: data.flat_shading.value,
        wireframe: data.wireframe.value,
        side: THREE.DoubleSide,
        anisotropy: data.anisotropy.value,
        anisotropyRotation: data.anisotropy_rotation.value,
        attenuationColor: parseColor(data.attenuation_color.value),
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
        reflectivity: data.reflectivity.value,
        sheen: data.sheen.value,
        sheenColor: parseColor(data.sheen_color.value),
        specularColor: parseColor(data.specular_color.value),
        sheenRoughness: data.sheen_roughness.value,
        specularIntensity: data.specular_intensity.value,
        thickness: data.thickness.value,
        transmission: data.transmission.value,
    });

    return material;
}
