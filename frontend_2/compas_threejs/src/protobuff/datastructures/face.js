import { FaceData } from "../generated/compas_pb/data/datastructures";
export class PolyhedronFace {
    data;
    constructor(input) {
        let faceData;
        if ("bytes" in input) {
            faceData = bytesToFaceData(input.bytes);
        }
        else {
            faceData = input.data;
        }
        if (!faceData.vertexIndices) {
            throw new Error("Invalid FaceData: Missing required property 'vertices'.");
        }
        this.data = faceData;
    }
    get bytes() {
        return faceDataToBytes(this.data);
    }
    get vertexIndices() {
        return this.data.vertexIndices;
    }
}
export function bytesToFaceData(bytes) {
    const faceData = FaceData.decode(bytes);
    return faceData;
}
export function faceDataToBytes(face) {
    return FaceData.encode(face).finish();
}
