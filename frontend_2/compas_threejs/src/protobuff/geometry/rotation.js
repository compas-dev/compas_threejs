import { RotationData } from "../generated/compas_pb/data/geometry";
import { Vector } from "./vector";
import { Point } from "./point";
export class Rotation {
    data;
    _axis;
    _point;
    constructor(input) {
        let rotationData;
        if ("bytes" in input) {
            rotationData = bytesToRotationData(input.bytes);
        }
        else {
            rotationData = input.data;
        }
        if (!rotationData.axis || !rotationData.point || !rotationData.angle) {
            throw new Error("Invalid RotationData: Missing required properties (axis or point).");
        }
        this.data = rotationData;
    }
    get bytes() {
        return rotationDataToBytes(this.data);
    }
    get guid() {
        return this.data.guid;
    }
    get name() {
        return this.data.name;
    }
    get axis() {
        if (!this._axis) {
            this._axis = new Vector({
                data: this.data.axis,
            });
        }
        return this._axis;
    }
    get point() {
        if (!this._point) {
            this._point = new Point({
                data: this.data.point,
            });
        }
        return this._point;
    }
    get angle() {
        return this.data.angle;
    }
}
export function bytesToRotationData(bytes) {
    return RotationData.decode(bytes);
}
export function rotationDataToBytes(data) {
    return RotationData.encode(data).finish();
}
