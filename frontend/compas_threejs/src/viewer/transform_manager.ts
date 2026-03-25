import * as THREE from "three";
import { scene } from "./scene_manager";

const DEBUG_TRANSFORMS = false;

/**
 * Robust matrix extraction that handles both JSON arrays 
 * and Protobuf-encoded Uint8Arrays.
 */
function extractMatrix(data: any): number[] | null {
    // 1. Safety check: if data itself is missing, stop here
    if (!data) return null;

    // 2. Case: Already a flat array (JSON fallback)
    if (Array.isArray(data) && data.length === 16) return data;

    // 3. Case: Protobuf structure (find the 16 numbers)
    if (typeof data === 'object') {

        // If data.message doesn't exist, 'value' becomes undefined instead of crashing
        const message = data?.message || data;
        const value = message?.value; 

        if (value instanceof Uint8Array) {
            const matrix: number[] = [];
            const view = new DataView(value.buffer, value.byteOffset, value.byteLength);
            
            try {
                for (let i = 0; i < 16; i++) {
                    matrix.push(view.getFloat64(5 + (i * 13), true));
                }
                return matrix;
            } catch (e) {
            }
        }
        
        // 4. Final attempt: Recursively search nested properties
        for (const key in data) {
            if (Object.prototype.hasOwnProperty.call(data, key)) {
                if (data[key] !== null && typeof data[key] === 'object') {
                    const result = extractMatrix(data[key]);
                    if (result) return result;
                }
            }
        }
    }
    return null;
}

export function transformManager(data: { [key: string]: any }) {
    const targetGuid = String(data.guid?.value || data.guid || "").trim();
    const matrixArray = extractMatrix(data.matrix);

    let targetObject: THREE.Object3D | undefined;
    scene.traverse((child) => {
        if (child.name && String(child.name).trim() === targetGuid) {
            targetObject = child;
        }
    });

    if (targetObject && matrixArray && matrixArray.length === 16) {
        const matrix = new THREE.Matrix4();
        
        /**
         * COMPAS to Three.js mapping.
         * COMPAS: Row-Major [m00, m01, m02, m03, ...]
         * Three.js .set(): Takes Row-Major arguments.
         */
        matrix.set(
            matrixArray[0], matrixArray[1], matrixArray[2], matrixArray[3],
            matrixArray[4], matrixArray[5], matrixArray[6], matrixArray[7],
            matrixArray[8], matrixArray[9], matrixArray[10], matrixArray[11],
            matrixArray[12], matrixArray[13], matrixArray[14], matrixArray[15]
        );

        targetObject.matrixAutoUpdate = false;
        targetObject.matrix.copy(matrix);
        targetObject.updateMatrixWorld(true);
        
        if (DEBUG_TRANSFORMS) {
            console.log(`✅ Successfully transformed ${targetGuid}`);
        }
    } 
}