import { ScaleData } from "../generated/compas_pb/data/geometry";
import * as THREE from "three";
export class Scale {
    data;
    constructor(input) {
        let scaleData;
        if ("bytes" in input) {
            scaleData = bytesToScaleData(input.bytes);
        }
        else {
            scaleData = input.data;
        }
        if (!scaleData.matrix) {
            throw new Error("Invalid ScaleData: Missing required properties (factor or frame).");
        }
        this.data = scaleData;
    }
    get bytes() {
        return scaleDataToBytes(this.data);
    }
    get guid() {
        return this.data.guid;
    }
    get name() {
        return this.data.name;
    }
    get matrix() {
        return this.data.matrix;
    }
    buildThreeMatrix() {
        const elements = this.data.matrix;
        const matrix = new THREE.Matrix4();
        // prettier-ignore
        matrix.set(elements[0], elements[4], elements[8], elements[12], elements[1], elements[5], elements[9], elements[13], elements[2], elements[6], elements[10], elements[14], elements[3], elements[7], elements[11], elements[15]);
        return matrix;
    }
}
export function bytesToScaleData(bytes) {
    return ScaleData.decode(bytes);
}
export function scaleDataToBytes(data) {
    return ScaleData.encode(data).finish();
}
