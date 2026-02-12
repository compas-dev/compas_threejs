import { HyperbolaData } from "../generated/compas_pb/data/geometry";
import { Frame } from "./frame";
export class Hyperbola {
    data;
    _frame;
    constructor(input) {
        let hyperbolaData;
        if ("bytes" in input) {
            hyperbolaData = bytesToHyperbolaData(input.bytes);
        }
        else {
            hyperbolaData = input.data;
        }
        if (!hyperbolaData.major || !hyperbolaData.minor || !hyperbolaData.frame) {
            throw new Error("Invalid HyperbolaData: Missing required properties (a, b, or frame).");
        }
        this.data = hyperbolaData;
    }
    get bytes() {
        return hyperbolaDataToBytes(this.data);
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
export function bytesToHyperbolaData(bytes) {
    return HyperbolaData.decode(bytes);
}
export function hyperbolaDataToBytes(data) {
    return HyperbolaData.encode(data).finish();
}
