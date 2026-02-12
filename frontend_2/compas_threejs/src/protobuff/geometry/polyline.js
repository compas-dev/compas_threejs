import { PolylineData } from "../generated/compas_pb/data/geometry";
import { Point } from "./point";
import * as THREE from "three";
export class Polyline {
    data;
    _points;
    constructor(input) {
        let polylineData;
        if ("bytes" in input) {
            polylineData = bytesToPolylineData(input.bytes);
        }
        else {
            polylineData = input.data;
        }
        if (!polylineData.points || polylineData.points.length === 0) {
            throw new Error("Invalid PolylineData: Missing required property points.");
        }
        this.data = polylineData;
    }
    get bytes() {
        return polylineDataToBytes(this.data);
    }
    get guid() {
        return this.data.guid;
    }
    get name() {
        return this.data.name;
    }
    get points() {
        if (!this._points) {
            this._points = [];
            for (const pointData of this.data.points) {
                const point = new Point({ data: pointData });
                this._points.push(point);
            }
        }
        return this._points;
    }
    buildGeometry() {
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(this.points.length * 3);
        for (let i = 0; i < this.points.length; i++) {
            positions[i * 3] = this.points[i].x;
            positions[i * 3 + 1] = this.points[i].y;
            positions[i * 3 + 2] = this.points[i].z;
        }
        geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
        const material = new THREE.LineBasicMaterial({ color: 0x000000 });
        const line = new THREE.Line(geometry, material);
        return line;
    }
}
export function bytesToPolylineData(bytes) {
    return PolylineData.decode(bytes);
}
export function polylineDataToBytes(data) {
    return PolylineData.encode(data).finish();
}
