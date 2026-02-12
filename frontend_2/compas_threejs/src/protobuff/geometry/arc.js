import { ArcData } from "../generated/compas_pb/data/geometry";
import { Circle } from "./circle";
export class Arc {
    data;
    _circle;
    constructor(input) {
        let arcData;
        if ("bytes" in input) {
            arcData = bytesToArcData(input.bytes);
        }
        else {
            arcData = input.data;
        }
        if (!arcData.startAngle || !arcData.endAngle || !arcData.circle) {
            throw new Error("Invalid ArcData: Missing required properties (startAngle, endAngle, or circle).");
        }
        this.data = arcData;
    }
    get bytes() {
        return arcDataToBytes(this.data);
    }
    get guid() {
        return this.data.guid;
    }
    get name() {
        return this.data.name;
    }
    get startAngle() {
        return this.data.startAngle;
    }
    get endAngle() {
        return this.data.endAngle;
    }
    get circle() {
        if (!this._circle) {
            this._circle = new Circle({ data: this.data.circle });
        }
        return this._circle;
    }
    buildGeometry() {
        throw new Error("Method not implemented.");
    }
}
export function bytesToArcData(bytes) {
    return ArcData.decode(bytes);
}
export function arcDataToBytes(data) {
    return ArcData.encode(data).finish();
}
