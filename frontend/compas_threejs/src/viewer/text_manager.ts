import * as THREE from "three";
import { TextGeometry } from "three/addons/geometries/TextGeometry.js";
import { FontLoader } from "three/addons/loaders/FontLoader.js";
import { SCENE_GEOMETRIES } from "./geometry_manager";
import { GEOMETRY_MATERIALS, SCENE_MATERIALS } from "./material_manager";
import { scene } from "./scene_manager";

type TextData = Record<string, { value: unknown }>;

type TextGeometryParams = {
    text: string;
    fontName: string;
    fontWeight: string;
    size: number;
    depth: number;
};

type TextPositionParams = {
    point: THREE.Vector3;
    direction: THREE.Vector3;
    up: THREE.Vector3;
};

const FONT_CACHE: Record<string, THREE.Font> = {};
const FONT_PATH = "/fonts";
const DEFAULT_MATERIAL_COLOR = 0x00ffff;

export function textManager(data: TextData): void {
    if (data.type.value === "text_geometry") {
        void buildTextGeometry(data);
    }
}

async function loadFont(fontName: string, fontWeight: string): Promise<THREE.Font> {
    const cacheKey = `${fontName}_${fontWeight}`;

    if (FONT_CACHE[cacheKey]) {
        return FONT_CACHE[cacheKey];
    }

    const loader = new FontLoader();
    const path = `${FONT_PATH}/${cacheKey}.typeface.json`;

    return new Promise((resolve, reject) => {
        loader.load(
            path,
            (font: THREE.Font) => {
                FONT_CACHE[cacheKey] = font;
                resolve(font);
            },
            undefined,
            (err: ErrorEvent) => reject(err)
        );
    });
}

function extractTextParams(data: TextData): TextGeometryParams {
    return {
        text: data.text.value as string,
        fontName: data.font.value as string,
        fontWeight: data.weight.value as string,
        size: data.size.value as number,
        depth: data.depth.value as number,
    };
}

function extractPositionParams(data: TextData): TextPositionParams {
    return {
        point: new THREE.Vector3(
            data.point_x.value as number,
            data.point_y.value as number,
            data.point_z.value as number
        ),
        direction: new THREE.Vector3(
            data.direction_x.value as number,
            data.direction_y.value as number,
            data.direction_z.value as number
        ),
        up: new THREE.Vector3(
            data.up_x.value as number,
            data.up_y.value as number,
            data.up_z.value as number
        ),
    };
}

function getOrCreateMaterial(guid: string): THREE.MeshStandardMaterial {
    if (GEOMETRY_MATERIALS[guid]) {
        return SCENE_MATERIALS[GEOMETRY_MATERIALS[guid]];
    }

    return new THREE.MeshStandardMaterial({
        color: DEFAULT_MATERIAL_COLOR,
        side: THREE.DoubleSide,
    });
}

function calculateCenterOffset(geometry: TextGeometry, isCentered: boolean): number {
    if (!isCentered) {
        return 0;
    }

    geometry.computeBoundingBox();
    const boundingBox = geometry.boundingBox;
    if (!boundingBox) {
        return 0;
    }

    return -0.5 * (boundingBox.max.x - boundingBox.min.x);
}

function createTransformationMatrix(params: TextPositionParams): THREE.Matrix4 {
    const zAxis = new THREE.Vector3().crossVectors(params.direction, params.up).normalize();
    const xAxis = params.direction.clone().normalize();
    const yAxis = params.up.clone().normalize();

    const matrix = new THREE.Matrix4().makeBasis(xAxis, yAxis, zAxis);
    matrix.setPosition(params.point);
    return matrix;
}

async function buildTextGeometry(data: TextData): Promise<void> {
    const { text, fontName, fontWeight, size, depth } = extractTextParams(data);
    const positionParams = extractPositionParams(data);
    const guid = data.guid.value as string;
    const isCentered = data.centered.value as boolean;

    const font = await loadFont(fontName, fontWeight);
    const textGeometry = new TextGeometry(text, { font, size, depth });
    const material = getOrCreateMaterial(guid);

    const centerOffset = calculateCenterOffset(textGeometry, isCentered);
    const transformationMatrix = createTransformationMatrix(positionParams);

    const textMesh = new THREE.Mesh(textGeometry, material);
    textMesh.position.x = centerOffset;
    textMesh.applyMatrix4(transformationMatrix);

    SCENE_GEOMETRIES[guid] = textMesh;
    scene.add(textMesh);
}
