import { RotationData } from "../generated/compas_pb/data/geometry";
import { Vector } from "./vector";
import { Point } from "./point";
import { buildTransformationFromFrame } from "./transformation";
import * as THREE from "three";

export class Rotation {
  public readonly data: RotationData;
  private _axis?: Vector;
  private _point?: Point;

  constructor(input: { bytes: Uint8Array } | { data: RotationData }) {
    let rotationData: RotationData;
    if ("bytes" in input) {
      rotationData = bytesToRotationData(input.bytes);
    } else {
      rotationData = input.data;
    }

    if (!rotationData.axis || !rotationData.point || !rotationData.angle) {
      throw new Error(
        "Invalid RotationData: Missing required properties (axis or point).",
      );
    }
    this.data = rotationData;
  }

  get bytes(): Uint8Array {
    return rotationDataToBytes(this.data);
  }

  get guid(): string {
    return this.data.guid;
  }

  get name(): string {
    return this.data.name;
  }

  get axis(): Vector {
    if (!this._axis) {
      this._axis = new Vector({
        data: this.data.axis!,
      });
    }
    return this._axis;
  }

  get point(): Point {
    if (!this._point) {
      this._point = new Point({
        data: this.data.point!,
      });
    }
    return this._point;
  }

  get angle(): number {
    return this.data.angle;
  }
}

export function bytesToRotationData(bytes: Uint8Array): RotationData {
  return RotationData.decode(bytes);
}

export function rotationDataToBytes(data: RotationData): Uint8Array {
  return RotationData.encode(data).finish();
}
