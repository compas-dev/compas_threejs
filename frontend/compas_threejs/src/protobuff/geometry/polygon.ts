import { PolygonData } from "../generated/compas_pb/data/geometry";
import { Point } from "./point";

export class Polygon {
  public readonly data: PolygonData;
  private _points?: Point[];

  constructor(input: { bytes: Uint8Array } | { data: PolygonData }) {
    let polygonData: PolygonData;
    if ("bytes" in input) {
      polygonData = bytesToPolygonData(input.bytes);
    } else {
      polygonData = input.data;
    }

    if (!polygonData.points || polygonData.points.length === 0) {
      throw new Error("Invalid PolygonData: Missing required property points.");
    }
    this.data = polygonData;
  }

  get bytes(): Uint8Array {
    return polygonDataToBytes(this.data);
  }

  get guid(): string {
    return this.data.guid;
  }

  get name(): string {
    return this.data.name;
  }

  get points(): Point[] {
    if (!this._points) {
      this._points = [];
      for (const pointData of this.data.points) {
        const point = new Point({ data: pointData! });
        this._points.push(point);
      }
    }
    return this._points;
  }

  buildGeometry() {
    throw Error("Method not implemented.");
  }
}

export function bytesToPolygonData(bytes: Uint8Array): PolygonData {
  return PolygonData.decode(bytes);
}

export function polygonDataToBytes(data: PolygonData): Uint8Array {
  return PolygonData.encode(data).finish();
}
