import { ShearData } from "../generated/compas_pb/data/geometry";
import * as THREE from "three";
export class Shear {
    data;
    constructor(input) {
        let shearData;
        if ("bytes" in input) {
            shearData = bytesToShearData(input.bytes);
        }
        else {
            shearData = input.data;
        }
        if (!shearData.matrix) {
            throw new Error("Invalid ShearData: Missing required properties (matrix).");
        }
        this.data = shearData;
    }
    get bytes() {
        return shearDataToBytes(this.data);
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
export function bytesToShearData(bytes) {
    return ShearData.decode(bytes);
}
export function shearDataToBytes(data) {
    return ShearData.encode(data).finish();
}
