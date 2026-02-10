import { SphereData } from "../generated/compas_pb/data/geometry";
import { Frame } from "./frame";
import { buildTransformationFromFrame } from "./transformation";
import * as THREE from "three";

export class Sphere {
  public readonly data: SphereData;
  private _frame?: Frame;

  constructor(input: { bytes: Uint8Array } | { data: SphereData }) {
    let sphereData: SphereData;
    if ("bytes" in input) {
      sphereData = bytesToSphereData(input.bytes);
    } else {
      sphereData = input.data;
    }

    if (!sphereData.radius || !sphereData.frame) {
      throw new Error(
        "Invalid SphereData: Missing required properties (radius or frame).",
      );
    }
    this.data = sphereData;
  }

  get bytes(): Uint8Array {
    return sphereDataToBytes(this.data);
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

  buildGeometry(segments: number = 64): THREE.SphereGeometry {
    const sphereGeometry = new THREE.SphereGeometry(
      this.radius,
      segments,
      segments,
    );
    const transformationMatrix = buildTransformationFromFrame(this.data.frame!);
    sphereGeometry.applyMatrix4(transformationMatrix);
    return sphereGeometry;
  }
}

export function bytesToSphereData(bytes: Uint8Array): SphereData {
  return SphereData.decode(bytes);
}

export function sphereDataToBytes(data: SphereData): Uint8Array {
  return SphereData.encode(data).finish();
}
