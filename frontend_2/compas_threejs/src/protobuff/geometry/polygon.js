import { PolygonData } from "../generated/compas_pb/data/geometry";
import { Point } from "./point";
export class Polygon {
    data;
    _points;
    constructor(input) {
        let polygonData;
        if ("bytes" in input) {
            polygonData = bytesToPolygonData(input.bytes);
        }
        else {
            polygonData = input.data;
        }
        if (!polygonData.points || polygonData.points.length === 0) {
            throw new Error("Invalid PolygonData: Missing required property points.");
        }
        this.data = polygonData;
    }
    get bytes() {
        return polygonDataToBytes(this.data);
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
export function bytesToPolygonData(bytes) {
    return PolygonData.decode(bytes);
}
export function polygonDataToBytes(data) {
    return PolygonData.encode(data).finish();
}
