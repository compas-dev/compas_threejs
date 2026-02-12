import { SphereData } from "../generated/compas_pb/data/geometry";
import { Frame } from "./frame";
import { buildTransformationFromFrame } from "./transformation";
import * as THREE from "three";
export class Sphere {
    data;
    _frame;
    constructor(input) {
        let sphereData;
        if ("bytes" in input) {
            sphereData = bytesToSphereData(input.bytes);
        }
        else {
            sphereData = input.data;
        }
        if (!sphereData.radius || !sphereData.frame) {
            throw new Error("Invalid SphereData: Missing required properties (radius or frame).");
        }
        this.data = sphereData;
    }
    get bytes() {
        return sphereDataToBytes(this.data);
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
    get frame() {
        if (!this._frame) {
            this._frame = new Frame({ data: this.data.frame });
        }
        return this._frame;
    }
    buildGeometry(segments = 64) {
        const sphereGeometry = new THREE.SphereGeometry(this.radius, segments, segments);
        const transformationMatrix = buildTransformationFromFrame(this.data.frame);
        sphereGeometry.applyMatrix4(transformationMatrix);
        return sphereGeometry;
    }
}
export function bytesToSphereData(bytes) {
    return SphereData.decode(bytes);
}
export function sphereDataToBytes(data) {
    return SphereData.encode(data).finish();
}
