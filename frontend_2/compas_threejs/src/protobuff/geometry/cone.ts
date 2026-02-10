import { ConeData } from "../generated/compas_pb/data/geometry";
import { Frame } from "./frame";
import { buildTransformationFromFrame } from "./transformation";
import * as THREE from "three";

export class Cone {
  public readonly data: ConeData;
  private _frame?: Frame;

  constructor(input: { bytes: Uint8Array } | { data: ConeData }) {
    let coneData: ConeData;
    if ("bytes" in input) {
      coneData = bytesToConeData(input.bytes);
    } else {
      coneData = input.data;
    }

    if (!coneData.radius || !coneData.height || !coneData.frame) {
      throw new Error(
        "Invalid ConeData: Missing required properties (radius, height, or frame).",
      );
    }
    this.data = coneData;
  }

  get bytes(): Uint8Array {
    return coneDataToBytes(this.data);
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

  get height(): number {
    return this.data.height;
  }

  get frame(): Frame {
    if (!this._frame) {
      this._frame = new Frame({ data: this.data.frame! });
    }
    return this._frame;
  }

  buildGeometry(segments: number = 64): THREE.ConeGeometry {
    const coneGeometry = new THREE.ConeGeometry(
      this.radius,
      this.height,
      segments,
    );
    const transformationMatrix = buildTransformationFromFrame(this.data.frame!);
    coneGeometry.applyMatrix4(transformationMatrix);
    return coneGeometry;
  }
}

export function bytesToConeData(bytes: Uint8Array): ConeData {
  return ConeData.decode(bytes);
}

export function coneDataToBytes(data: ConeData): Uint8Array {
  return ConeData.encode(data).finish();
}
