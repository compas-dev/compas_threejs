import { QuaternionData } from "../generated/compas_pb/data/geometry";
export class Quaternion {
    data;
    constructor(input) {
        let quaternionData;
        if ("bytes" in input) {
            quaternionData = bytesToQuaternionData(input.bytes);
        }
        else {
            quaternionData = input.data;
        }
        if (!quaternionData.w ||
            !quaternionData.x ||
            !quaternionData.y ||
            !quaternionData.z) {
            throw new Error("Invalid QuaternionData: Missing required properties (w, x, y, or z).");
        }
        this.data = quaternionData;
    }
    get bytes() {
        return quaternionDataToBytes(this.data);
    }
    get guid() {
        return this.data.guid;
    }
    get name() {
        return this.data.name;
    }
    get w() {
        return this.data.w;
    }
    get x() {
        return this.data.x;
    }
    get y() {
        return this.data.y;
    }
    get z() {
        return this.data.z;
    }
}
export function bytesToQuaternionData(bytes) {
    return QuaternionData.decode(bytes);
}
export function quaternionDataToBytes(data) {
    return QuaternionData.encode(data).finish();
}
