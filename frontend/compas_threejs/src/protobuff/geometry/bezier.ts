import { BezierData } from "../generated/compas_pb/data/geometry";
import { Point } from "./point";
import * as THREE from "three";

export class Bezier {
  public readonly data: BezierData;
  private _points?: Point[];

  constructor(input: { bytes: Uint8Array } | { data: BezierData }) {
    let bezierData: BezierData;
    if ("bytes" in input) {
      bezierData = bytesToBezierData(input.bytes);
    } else {
      bezierData = input.data;
    }

    if (!bezierData.points || bezierData.points.length === 0) {
      throw new Error("Invalid BezierData: Missing required property points.");
    }
    this.data = bezierData;
  }

  get bytes(): Uint8Array {
    return bezierDataToBytes(this.data);
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
export function bytesToBezierData(bytes: Uint8Array): BezierData {
  return BezierData.decode(bytes);
}

export function bezierDataToBytes(data: BezierData): Uint8Array {
  return BezierData.encode(data).finish();
}
