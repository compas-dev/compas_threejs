import { CapsuleData } from "../generated/compas_pb/data/geometry";
import { Frame } from "./frame";
import { buildTransformationFromFrame } from "./transformation";
import * as THREE from "three";
export class Capsule {
    data;
    _frame;
    constructor(input) {
        let capsuleData;
        if ("bytes" in input) {
            capsuleData = bytesToCapsuleData(input.bytes);
        }
        else {
            capsuleData = input.data;
        }
        if (!capsuleData.radius || !capsuleData.height || !capsuleData.frame) {
            throw new Error("Invalid CapsuleData: Missing required properties (radius, height, or frame).");
        }
        this.data = capsuleData;
    }
    get bytes() {
        return capsuleDataToBytes(this.data);
    }
    get guid() {
        return this.data.guid;
    }
    get name() {
        return this.data.name;
    }
    get radius() {
        return this.data.radius;
    }
    get height() {
        return this.data.height;
    }
    get frame() {
        if (!this._frame) {
            this._frame = new Frame({ data: this.data.frame });
        }
        return this._frame;
    }
    buildGeometry(segments = 64) {
        const capsuleGeometry = new THREE.CapsuleGeometry(this.data.radius, this.data.height, segments, segments);
        const transformationMatrix = buildTransformationFromFrame(this.data.frame);
        capsuleGeometry.applyMatrix4(transformationMatrix);
        return capsuleGeometry;
    }
}
export function bytesToCapsuleData(bytes) {
    return CapsuleData.decode(bytes);
}
export function capsuleDataToBytes(data) {
    return CapsuleData.encode(data).finish();
}
