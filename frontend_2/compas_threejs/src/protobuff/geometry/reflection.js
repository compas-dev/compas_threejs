import { ReflectionData } from "../generated/compas_pb/data/geometry";
import * as THREE from "three";
export class Reflection {
    data;
    constructor(input) {
        let reflectionData;
        if ("bytes" in input) {
            reflectionData = bytesToReflectionData(input.bytes);
        }
        else {
            reflectionData = input.data;
        }
        if (!reflectionData.matrix) {
            throw new Error("Invalid ReflectionData: Missing required properties (frame).");
        }
        this.data = reflectionData;
    }
    get bytes() {
        return reflectionDataToBytes(this.data);
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
export function bytesToReflectionData(bytes) {
    return ReflectionData.decode(bytes);
}
export function reflectionDataToBytes(data) {
    return ReflectionData.encode(data).finish();
}
