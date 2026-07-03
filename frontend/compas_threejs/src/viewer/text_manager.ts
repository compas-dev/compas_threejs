import * as THREE from "three";
import { TextGeometry } from "three/addons/geometries/TextGeometry.js";
import { FontLoader } from "three/addons/loaders/FontLoader.js";
import { SCENE_GEOMETRIES } from "./geometry_manager";
import { GEOMETRY_MATERIALS, SCENE_MATERIALS } from "./material_manager";
import { scene } from "./scene_manager";

export function textManager(data: Record<string, unknown>) {
    switch (data.type.value) {
        case "text_geometry":
            buildTextGeometry(data);
            break;
    }
}

// A simple object to store fonts we've already loaded
const FONT_CACHE: Record<string, unknown> = {};

async function loadFont(fontName: string, fontWeight: string): Promise<unknown> {
    const cacheKey = `${fontName}_${fontWeight}`;

    // 1. Check if we already have it
    if (FONT_CACHE[cacheKey]) {
        return FONT_CACHE[cacheKey];
    }

    const loader = new FontLoader();
    const path = `/fonts/${cacheKey}.typeface.json`;

    return new Promise((resolve, reject) => {
        loader.load(
            path,
            (response) => {
                // 2. Save it to cache before resolving
                FONT_CACHE[cacheKey] = response;
                resolve(response);
            },
            undefined,
            (err) => reject(err)
        );
    });
}

async function buildTextGeometry(data: Record<string, unknown>) {
    const text = data.text.value;
    const fontName = data.font.value;
    const fontWeight = data.weight.value;
    const depth = data.depth.value;
    const size = data.size.value;

    // AWAIT the font here. The code will pause until the font is ready.
    const font = await loadFont(fontName, fontWeight);

    const textGeometry = new TextGeometry(text, {
        font: font,
        size: size,
        depth: depth,
    });

    let material: THREE.MeshStandardMaterial;
    if (GEOMETRY_MATERIALS[data.guid.value]) {
        const material_guid = GEOMETRY_MATERIALS[data.guid.value];
        material = SCENE_MATERIALS[material_guid];
    } else {
        material = new THREE.MeshStandardMaterial({
            color: 0x00ffff,
            side: THREE.DoubleSide,
        });
    }

    let centerOffset: number;
    if (data.centered.value) {
        textGeometry.computeBoundingBox();
        centerOffset = -0.5 * (textGeometry.boundingBox.max.x - textGeometry.boundingBox.min.x);
    } else {
        centerOffset = 0;
    }

    const point = new THREE.Vector3(data.point_x.value, data.point_y.value, data.point_z.value);
    const direction = new THREE.Vector3(
        data.direction_x.value,
        data.direction_y.value,
        data.direction_z.value
    );
    const up = new THREE.Vector3(data.up_x.value, data.up_y.value, data.up_z.value);

    const zAxis = new THREE.Vector3().crossVectors(direction, up).normalize();
    const xAxis = direction.clone().normalize();
    const yAxis = up.clone().normalize();

    const transformationMatrix = new THREE.Matrix4().makeBasis(xAxis, yAxis, zAxis);
    transformationMatrix.setPosition(point);

    const textMesh = new THREE.Mesh(textGeometry, material);
    textMesh.position.x = centerOffset;
    textMesh.applyMatrix4(transformationMatrix);
    SCENE_GEOMETRIES[data.guid.value] = textMesh;
    scene.add(textMesh);
}
