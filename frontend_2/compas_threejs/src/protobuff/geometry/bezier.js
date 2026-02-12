import { BezierData } from "../generated/compas_pb/data/geometry";
import { Point } from "./point";
export class Bezier {
    data;
    _points;
    constructor(input) {
        let bezierData;
        if ("bytes" in input) {
            bezierData = bytesToBezierData(input.bytes);
        }
        else {
            bezierData = input.data;
        }
        if (!bezierData.points || bezierData.points.length === 0) {
            throw new Error("Invalid BezierData: Missing required property points.");
        }
        this.data = bezierData;
    }
    get bytes() {
        return bezierDataToBytes(this.data);
    }
    get guid() {
        return this.data.guid;
    }
    get name() {
        return this.data.name;
    }
    get points() {
        if (!this._points) {
            this._points = [];
            for (const pointData of this.data.points) {
                const point = new Point({ data: pointData });
                this._points.push(point);
            }
        }
        return this._points;
    }
    buildGeometry() {
        throw Error("Method not implemented.");
    }
}
export function bytesToBezierData(bytes) {
    return BezierData.decode(bytes);
}
export function bezierDataToBytes(data) {
    return BezierData.encode(data).finish();
}
