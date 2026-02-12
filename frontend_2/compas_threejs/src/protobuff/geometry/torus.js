import { TorusData } from "../generated/compas_pb/data/geometry";
import { Frame } from "./frame";
import { buildTransformationFromFrame } from "./transformation";
import * as THREE from "three";
export class Torus {
    data;
    _frame;
    constructor(input) {
        let torusData;
        if ("bytes" in input) {
            torusData = bytesToTorusData(input.bytes);
        }
        else {
            torusData = input.data;
        }
        if (!torusData.radiusAxis || !torusData.radiusPipe || !torusData.frame) {
            throw new Error("Invalid TorusData: Missing required properties (major, minor, or frame).");
        }
        this.data = torusData;
    }
    get bytes() {
        return torusDataToBytes(this.data);
    }
    get guid() {
        return this.data.guid;
    }
    get name() {
        return this.data.name;
    }
    get radiusAxis() {
        return this.data.radiusAxis;
    }
    get radiusPipe() {
        return this.data.radiusPipe;
    }
    get frame() {
        if (!this._frame) {
            this._frame = new Frame({ data: this.data.frame });
        }
        return this._frame;
    }
    buildGeometry(segmentsTubular = 64, segmentsRadial = 64) {
        const torusGeometry = new THREE.TorusGeometry(this.radiusAxis, this.radiusPipe, segmentsTubular, segmentsRadial);
        const transformationMatrix = buildTransformationFromFrame(this.data.frame);
        torusGeometry.applyMatrix4(transformationMatrix);
        return torusGeometry;
    }
}
export function bytesToTorusData(bytes) {
    return TorusData.decode(bytes);
}
export function torusDataToBytes(data) {
    return TorusData.encode(data).finish();
}
