import { EllipseData } from "../generated/compas_pb/data/geometry";
import { Frame } from "./frame";
export class Ellipse {
    data;
    _frame;
    constructor(input) {
        let ellipseData;
        if ("bytes" in input) {
            ellipseData = bytesToEllipseData(input.bytes);
        }
        else {
            ellipseData = input.data;
        }
        if (!ellipseData.major || !ellipseData.minor || !ellipseData.frame) {
            throw new Error("Invalid EllipseData: Missing required properties (major, minor, or frame).");
        }
        this.data = ellipseData;
    }
    get bytes() {
        return ellipseDataToBytes(this.data);
    }
    get guid() {
        return this.data.guid;
    }
    get name() {
        return this.data.name;
    }
    get major() {
        return this.data.major;
    }
    get minor() {
        return this.data.minor;
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
export function bytesToEllipseData(bytes) {
    return EllipseData.decode(bytes);
}
export function ellipseDataToBytes(data) {
    return EllipseData.encode(data).finish();
}
