import { CircleData } from "../generated/compas_pb/data/geometry";
import { buildTransformationFromFrame } from "./transformation";
import { Frame } from "./frame";
import * as THREE from "three";
export class Circle {
    data;
    _frame;
    constructor(input) {
        let circleData;
        if ("bytes" in input) {
            circleData = bytesToCircleData(input.bytes);
        }
        else {
            circleData = input.data;
        }
        if (!circleData.radius || !circleData.frame) {
            throw new Error("Invalid CircleData: Missing required properties (radius or frame).");
        }
        this.data = circleData;
    }
    get bytes() {
        return circleDataToBytes(this.data);
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
        const circleGeometry = new THREE.CircleGeometry(this.data.radius, segments);
        const matrix = buildTransformationFromFrame(this.data.frame);
        circleGeometry.applyMatrix4(matrix);
        return circleGeometry;
    }
}
export function bytesToCircleData(bytes) {
    return CircleData.decode(bytes);
}
export function circleDataToBytes(circle) {
    return CircleData.encode(circle).finish();
}
