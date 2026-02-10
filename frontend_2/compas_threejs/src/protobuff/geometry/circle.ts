import { CircleData } from "../generated/compas_pb/data/geometry";
import { buildTransformationFromFrame } from "./transformation";
import { Frame } from "./frame";
import * as THREE from "three";

export class Circle {
  public readonly data: CircleData;
  private _frame?: Frame;

  constructor(input: { bytes: Uint8Array } | { data: CircleData }) {
    let circleData: CircleData;
    if ("bytes" in input) {
      circleData = bytesToCircleData(input.bytes);
    } else {
      circleData = input.data;
    }

    if (!circleData.radius || !circleData.frame) {
      throw new Error(
        "Invalid CircleData: Missing required properties (radius or frame).",
      );
    }
    this.data = circleData;
  }

  get bytes(): Uint8Array {
    return circleDataToBytes(this.data);
  }

  get guid(): string {
    return this.data.guid;
  }

  get name(): string {
    return this.data.name;
  }

  get radius(): number {
    return this.data.radius;
  }

  get frame(): Frame {
    if (!this._frame) {
      this._frame = new Frame({ data: this.data.frame! });
    }
    return this._frame;
  }

  buildGeometry(segments: number = 64): THREE.CircleGeometry {
    const circleGeometry = new THREE.CircleGeometry(this.data.radius, segments);
    const matrix = buildTransformationFromFrame(this.data.frame!);
    circleGeometry.applyMatrix4(matrix);
    return circleGeometry;
  }
}

export function bytesToCircleData(bytes: Uint8Array): CircleData {
  return CircleData.decode(bytes);
}

export function circleDataToBytes(circle: CircleData): Uint8Array {
  return CircleData.encode(circle).finish();
}
