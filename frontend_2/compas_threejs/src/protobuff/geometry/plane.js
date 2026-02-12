import { PlaneData } from "../generated/compas_pb/data/geometry";
import { Point } from "./point";
import { Vector } from "./vector";
import * as THREE from "three";
export class Plane {
    data;
    _point;
    _normal;
    constructor(input) {
        let planeData;
        if ("bytes" in input) {
            planeData = bytesToPlaneData(input.bytes);
        }
        else {
            planeData = input.data;
        }
        if (!planeData.point || !planeData.normal) {
            throw new Error("Invalid PlaneData: Missing required properties (point or normal).");
        }
        this.data = planeData;
    }
    get bytes() {
        return planeDataToBytes(this.data);
    }
    get guid() {
        return this.data.guid;
    }
    get name() {
        return this.data.name;
    }
    get point() {
        if (!this._point) {
            this._point = new Point({ data: this.data.point });
        }
        return this._point;
    }
    get normal() {
        if (!this._normal) {
            this._normal = new Vector({ data: this.data.normal });
        }
        return this._normal;
    }
    buildGeometry(size = 2) {
        const plane = new THREE.Plane(new THREE.Vector3(this.normal.x, this.normal.y, this.normal.z), 0);
        plane.translate(new THREE.Vector3(this.point.x, this.point.y, this.point.z));
        const planeGeometry = new THREE.PlaneHelper(plane, size, 0xff00ff);
        return planeGeometry;
    }
}
export function bytesToPlaneData(bytes) {
    return PlaneData.decode(bytes);
}
export function planeDataToBytes(plane) {
    return PlaneData.encode(plane).finish();
}
