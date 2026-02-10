import { CylinderData } from "../generated/compas_pb/data/geometry";
import { Frame } from "./frame";
import { buildTransformationFromFrame } from "./transformation";
import * as THREE from "three";

export class Cylinder {
  public readonly data: CylinderData;
  private _frame?: Frame;

  constructor(input: { bytes: Uint8Array } | { data: CylinderData }) {
    let cylinderData: CylinderData;
    if ("bytes" in input) {
      cylinderData = bytesToCylinderData(input.bytes);
    } else {
      cylinderData = input.data;
    }

    if (!cylinderData.radius || !cylinderData.height || !cylinderData.frame) {
      throw new Error(
        "Invalid CylinderData: Missing required properties (radius, height, or frame).",
      );
    }
    this.data = cylinderData;
  }

  get bytes(): Uint8Array {
    return cylinderDataToBytes(this.data);
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

  buildGeometry(segments: number = 64): THREE.CylinderGeometry {
    // geometry of the cylinder
    const cylinder_geometry = new THREE.CylinderGeometry(
      this.data.radius,
      this.data.radius,
      this.data.height,
      segments,
    );

    // transform geometry to the correct position
    const transform = buildTransformationFromFrame(this.frame);
    cylinder_geometry.applyMatrix4(transform);

    return cylinder_geometry;
  }
}

export function bytesToCylinderData(bytes: Uint8Array): CylinderData {
  return CylinderData.decode(bytes);
}

export function cylinderDataToBytes(data: CylinderData): Uint8Array {
  return CylinderData.encode(data).finish();
}
