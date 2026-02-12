import { PointcloudData } from "../generated/compas_pb/data/geometry";
import { Point } from "./point";
import * as THREE from "three";
export class Pointcloud {
    data;
    _points;
    constructor(input) {
        let pointcloudData;
        if ("bytes" in input) {
            pointcloudData = bytesToPointCloudData(input.bytes);
        }
        else {
            pointcloudData = input.data;
        }
        if (!pointcloudData.points || pointcloudData.points.length === 0) {
            throw new Error("Invalid PointcloudData: Missing required property points.");
        }
        this.data = pointcloudData;
    }
    get bytes() {
        return pointCloudDataToBytes(this.data);
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
        const material = new THREE.PointsMaterial({ size: 0.2, color: 0xff00ff });
        const points = new THREE.Points(geometry, material);
        return points;
    }
}
export function bytesToPointCloudData(bytes) {
    return PointcloudData.decode(bytes);
}
export function pointCloudDataToBytes(data) {
    return PointcloudData.encode(data).finish();
}
