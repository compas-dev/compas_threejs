import { ParabolaData } from "../generated/compas_pb/data/geometry";
import { Frame } from "./frame";
export class Parabola {
    data;
    _frame;
    constructor(input) {
        let parabolaData;
        if ("bytes" in input) {
            parabolaData = bytesToParabolaData(input.bytes);
        }
        else {
            parabolaData = input.data;
        }
        if (!parabolaData.focal || !parabolaData.frame) {
            throw new Error("Invalid ParabolaData: Missing required properties (focal_length or frame).");
        }
        this.data = parabolaData;
    }
    get bytes() {
        return parabolaDataToBytes(this.data);
    }
    get guid() {
        return this.data.guid;
    }
    get name() {
        return this.data.name;
    }
    get focal() {
        return this.data.focal;
    }
    get frame() {
        if (!this._frame) {
            this._frame = new Frame({ data: this.data.frame });
        }
        return this._frame;
    }
    buildGeometry(segments = 64) {
        throw Error("Method not implemented.");
    }
}
export function bytesToParabolaData(bytes) {
    return ParabolaData.decode(bytes);
}
export function parabolaDataToBytes(data) {
    return ParabolaData.encode(data).finish();
}
