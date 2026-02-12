import { PointData } from "../generated/compas_pb/data/geometry";
import * as THREE from "three";
export class Point {
    data;
    constructor(input) {
        let pointData;
        if ("bytes" in input) {
            pointData = bytesToPointData(input.bytes);
        }
        else {
            pointData = input.data;
        }
        if (pointData.x === undefined ||
            pointData.y === undefined ||
            pointData.z === undefined) {
            throw new Error("Invalid PointData: Missing required properties (x, y, or z).");
        }
        this.data = pointData;
    }
    get bytes() {
        return pointDataToBytes(this.data);
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
    buildGeometry() {
        const geometry = new THREE.BufferGeometry();
        const vertices = new Float32Array([this.x, this.y, this.z]);
        geometry.setAttribute("position", new THREE.BufferAttribute(vertices, 3));
        const material = new THREE.PointsMaterial({ size: 0.2, color: 0x0000ff });
        return new THREE.Points(geometry, material);
    }
}
export function bytesToPointData(bytes) {
    return PointData.decode(bytes);
}
export function pointDataToBytes(point) {
    return PointData.encode(point).finish();
}
