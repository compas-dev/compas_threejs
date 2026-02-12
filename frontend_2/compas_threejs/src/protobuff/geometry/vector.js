import { VectorData } from "../generated/compas_pb/data/geometry";
import * as THREE from "three";
export class Vector {
    data;
    constructor(input) {
        let vectorData;
        if ("bytes" in input) {
            vectorData = bytesToVectorData(input.bytes);
        }
        else {
            vectorData = input.data;
        }
        if (vectorData.x === undefined ||
            vectorData.y === undefined ||
            vectorData.z === undefined) {
            throw new Error("Invalid VectorData: Missing required properties (x, y, or z).");
        }
        this.data = vectorData;
    }
    get bytes() {
        return vectorDataToBytes(this.data);
    }
    get guid() {
        return this.data.guid;
    }
    get name() {
        return this.data.name;
    }
    get x() {
        return this.data.x;
    }
    get y() {
        return this.data.y;
    }
    get z() {
        return this.data.z;
    }
    buildGeometry(origin) {
        const direction = new THREE.Vector3(this.x, this.y, this.z);
        const length = direction.length();
        direction.normalize();
        let vectorOrigin;
        if (origin) {
            vectorOrigin = new THREE.Vector3(origin.x, origin.y, origin.z);
        }
        else {
            vectorOrigin = new THREE.Vector3(0, 0, 0);
        }
        let arrowHelper = new THREE.ArrowHelper(direction, vectorOrigin, length, 0xff0000);
        arrowHelper.setDirection(direction);
        return arrowHelper;
    }
}
export function bytesToVectorData(bytes) {
    return VectorData.decode(bytes);
}
export function vectorDataToBytes(vector) {
    return VectorData.encode(vector).finish();
}
