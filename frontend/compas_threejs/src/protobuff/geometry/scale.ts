import { ScaleData } from "../generated/compas_pb/data/geometry";
import { Frame } from "./frame";
import { buildTransformationFromFrame } from "./transformation";
import * as THREE from "three";

export class Scale {
  public readonly data: ScaleData;

  constructor(input: { bytes: Uint8Array } | { data: ScaleData }) {
    let scaleData: ScaleData;
    if ("bytes" in input) {
      scaleData = bytesToScaleData(input.bytes);
    } else {
      scaleData = input.data;
    }

    if (!scaleData.matrix) {
      throw new Error(
        "Invalid ScaleData: Missing required properties (factor or frame).",
      );
    }
    this.data = scaleData;
  }

  get bytes(): Uint8Array {
    return scaleDataToBytes(this.data);
  }

  get guid(): string {
    return this.data.guid;
  }

  get name(): string {
    return this.data.name;
  }

  get matrix(): number[] {
    return this.data.matrix;
  }

  buildThreeMatrix(): THREE.Matrix4 {
    const elements = this.data.matrix;
    const matrix = new THREE.Matrix4();
    // prettier-ignore
    matrix.set(
      elements[0], elements[4], elements[8], elements[12],
      elements[1], elements[5], elements[9], elements[13],
      elements[2], elements[6], elements[10], elements[14],
      elements[3], elements[7], elements[11], elements[15],
    );

    return matrix;
  }
}

export function bytesToScaleData(bytes: Uint8Array): ScaleData {
  return ScaleData.decode(bytes);
}

export function scaleDataToBytes(data: ScaleData): Uint8Array {
  return ScaleData.encode(data).finish();
}
