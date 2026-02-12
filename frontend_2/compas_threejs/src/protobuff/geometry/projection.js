import { ProjectionData } from "../generated/compas_pb/data/geometry";
import * as THREE from "three";
export class Projection {
    data;
    constructor(input) {
        let projectionData;
        if ("bytes" in input) {
            projectionData = bytesToProjectionData(input.bytes);
        }
        else {
            projectionData = input.data;
        }
        if (!projectionData.matrix) {
            throw new Error("Invalid ProjectionData: Missing required properties (direction).");
        }
        this.data = projectionData;
    }
    get bytes() {
        return projectionDataToBytes(this.data);
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
export function bytesToProjectionData(bytes) {
    return ProjectionData.decode(bytes);
}
export function projectionDataToBytes(data) {
    return ProjectionData.encode(data).finish();
}
