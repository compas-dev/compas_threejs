import { LineData } from "../generated/compas_pb/data/geometry";
import * as THREE from "three";
import { Point } from "./point";
export class Line {
    data;
    _start;
    _end;
    constructor(input) {
        let lineData;
        if ("bytes" in input) {
            lineData = bytesToLineData(input.bytes);
        }
        else {
            lineData = input.data;
        }
        if (!lineData.start || !lineData.end) {
            throw new Error("Invalid LineData: Missing required properties (start or end).");
        }
        this.data = lineData;
    }
    get bytes() {
        return lineDataToBytes(this.data);
    }
    get guid() {
        return this.data.guid;
    }
    get name() {
        return this.data.name;
    }
    get start() {
        if (!this._start) {
            this._start = new Point({ data: this.data.start });
        }
        return this._start;
    }
    get end() {
        if (!this._end) {
            this._end = new Point({ data: this.data.end });
        }
        return this._end;
    }
    buildGeometry() {
        const start_point = new THREE.Vector3(this.data.start.x, this.data.start.y, this.data.start.z);
        const end_point = new THREE.Vector3(this.data.end.x, this.data.end.y, this.data.end.z);
        const geometry = new THREE.BufferGeometry().setFromPoints([
            start_point,
            end_point,
        ]);
        const material = new THREE.LineBasicMaterial({ color: 0x0000ff });
        return new THREE.Line(geometry, material);
    }
}
export function bytesToLineData(bytes) {
    return LineData.decode(bytes);
}
export function lineDataToBytes(line) {
    return LineData.encode(line).finish();
}
