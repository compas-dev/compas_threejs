import { ConeData } from "../generated/compas_pb/data/geometry";
import { Frame } from "./frame";
import { buildTransformationFromFrame } from "./transformation";
import * as THREE from "three";
export class Cone {
    data;
    _frame;
    constructor(input) {
        let coneData;
        if ("bytes" in input) {
            coneData = bytesToConeData(input.bytes);
        }
        else {
            coneData = input.data;
        }
        if (!coneData.radius || !coneData.height || !coneData.frame) {
            throw new Error("Invalid ConeData: Missing required properties (radius, height, or frame).");
        }
        this.data = coneData;
    }
    get bytes() {
        return coneDataToBytes(this.data);
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
        const coneGeometry = new THREE.ConeGeometry(this.radius, this.height, segments);
        const transformationMatrix = buildTransformationFromFrame(this.data.frame);
        coneGeometry.applyMatrix4(transformationMatrix);
        return coneGeometry;
    }
}
export function bytesToConeData(bytes) {
    return ConeData.decode(bytes);
}
export function coneDataToBytes(data) {
    return ConeData.encode(data).finish();
}
