import { EllipseData } from "../generated/compas_pb/data/geometry";
import { Frame } from "./frame";
import { buildTransformationFromFrame } from "./transformation";
import * as THREE from "three";

export class Ellipse {
  public readonly data: EllipseData;
  private _frame?: Frame;

  constructor(input: { bytes: Uint8Array } | { data: EllipseData }) {
    let ellipseData: EllipseData;
    if ("bytes" in input) {
      ellipseData = bytesToEllipseData(input.bytes);
    } else {
      ellipseData = input.data;
    }

    if (!ellipseData.major || !ellipseData.minor || !ellipseData.frame) {
      throw new Error(
        "Invalid EllipseData: Missing required properties (major, minor, or frame).",
      );
    }
    this.data = ellipseData;
  }

  get bytes(): Uint8Array {
    return ellipseDataToBytes(this.data);
  }

  get guid(): string {
    return this.data.guid;
  }

  get name(): string {
    return this.data.name;
  }

  get major(): number {
    return this.data.major;
  }

  get minor(): number {
    return this.data.minor;
  }

  get frame(): Frame {
    if (!this._frame) {
      this._frame = new Frame({ data: this.data.frame! });
    }
    return this._frame;
  }

  buildGeometry(segments: number = 64) {
    throw Error("Method not implemented.");
  }
}

export function bytesToEllipseData(bytes: Uint8Array): EllipseData {
  return EllipseData.decode(bytes);
}

export function ellipseDataToBytes(data: EllipseData): Uint8Array {
  return EllipseData.encode(data).finish();
}
