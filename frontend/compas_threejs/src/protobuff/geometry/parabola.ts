import { ParabolaData } from "../generated/compas_pb/data/geometry";
import { Frame } from "./frame";
import { buildTransformationFromFrame } from "./transformation";
import * as THREE from "three";

export class Parabola {
  public readonly data: ParabolaData;
  private _frame?: Frame;

  constructor(input: { bytes: Uint8Array } | { data: ParabolaData }) {
    let parabolaData: ParabolaData;
    if ("bytes" in input) {
      parabolaData = bytesToParabolaData(input.bytes);
    } else {
      parabolaData = input.data;
    }

    if (!parabolaData.focal || !parabolaData.frame) {
      throw new Error(
        "Invalid ParabolaData: Missing required properties (focal_length or frame).",
      );
    }
    this.data = parabolaData;
  }

  get bytes(): Uint8Array {
    return parabolaDataToBytes(this.data);
  }

  get guid(): string {
    return this.data.guid;
  }

  get name(): string {
    return this.data.name;
  }

  get focal(): number {
    return this.data.focal;
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

export function bytesToParabolaData(bytes: Uint8Array): ParabolaData {
  return ParabolaData.decode(bytes);
}

export function parabolaDataToBytes(data: ParabolaData): Uint8Array {
  return ParabolaData.encode(data).finish();
}
