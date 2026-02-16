import { CapsuleData } from "../generated/compas_pb/data/geometry";
import { Frame } from "./frame";
import { buildTransformationFromFrame } from "./transformation";
import * as THREE from "three";

export class Capsule {
  public readonly data: CapsuleData;
  private _frame?: Frame;

  constructor(input: { bytes: Uint8Array } | { data: CapsuleData }) {
    let capsuleData: CapsuleData;
    if ("bytes" in input) {
      capsuleData = bytesToCapsuleData(input.bytes);
    } else {
      capsuleData = input.data;
    }

    if (!capsuleData.radius || !capsuleData.height || !capsuleData.frame) {
      throw new Error(
        "Invalid CapsuleData: Missing required properties (radius, height, or frame).",
      );
    }
    this.data = capsuleData;
  }

  get bytes(): Uint8Array {
    return capsuleDataToBytes(this.data);
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

  buildGeometry(segments: number = 64): THREE.CapsuleGeometry {
    const capsuleGeometry = new THREE.CapsuleGeometry(
      this.data.radius,
      this.data.height,
      segments,
      segments,
    );
    const transformationMatrix = buildTransformationFromFrame(this.data.frame!);
    capsuleGeometry.applyMatrix4(transformationMatrix);
    return capsuleGeometry;
  }
}

export function bytesToCapsuleData(bytes: Uint8Array): CapsuleData {
  return CapsuleData.decode(bytes);
}

export function capsuleDataToBytes(data: CapsuleData): Uint8Array {
  return CapsuleData.encode(data).finish();
}
