import { CylinderData } from "../generated/compas_pb/data/geometry";
import { Frame } from "./frame";
import { buildTransformationFromFrame } from "./transformation";
import * as THREE from "three";
export class Cylinder {
    data;
    _frame;
    constructor(input) {
        let cylinderData;
        if ("bytes" in input) {
            cylinderData = bytesToCylinderData(input.bytes);
        }
        else {
            cylinderData = input.data;
        }
        if (!cylinderData.radius || !cylinderData.height || !cylinderData.frame) {
            throw new Error("Invalid CylinderData: Missing required properties (radius, height, or frame).");
        }
        this.data = cylinderData;
    }
    get bytes() {
        return cylinderDataToBytes(this.data);
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
        // geometry of the cylinder
        const cylinder_geometry = new THREE.CylinderGeometry(this.data.radius, this.data.radius, this.data.height, segments);
        // transform geometry to the correct position
        const transform = buildTransformationFromFrame(this.frame);
        cylinder_geometry.applyMatrix4(transform);
        return cylinder_geometry;
    }
}
export function bytesToCylinderData(bytes) {
    return CylinderData.decode(bytes);
}
export function cylinderDataToBytes(data) {
    return CylinderData.encode(data).finish();
}
