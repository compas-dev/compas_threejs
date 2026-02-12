import { FaceList } from "../generated/compas_pb/data/datastructures";
export class MeshFaceList {
    data;
    constructor(input) {
        let faceListData;
        if ("bytes" in input) {
            faceListData = bytesToFaceList(input.bytes);
        }
        else {
            faceListData = input.data;
        }
        if (!faceListData.indices) {
            throw new Error("Invalid FaceList: Missing required property 'faces'.");
        }
        this.data = faceListData;
    }
    get bytes() {
        return faceListToBytes(this.data);
    }
    get indices() {
        return this.data.indices;
    }
}
export function bytesToFaceList(bytes) {
    return FaceList.decode(bytes);
}
export function faceListToBytes(faceList) {
    return FaceList.encode(faceList).finish();
}
