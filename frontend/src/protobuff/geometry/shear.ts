import { ShearData } from "../generated/compas_pb/data/geometry";

import * as THREE from "three";

export class Shear {
  public readonly data: ShearData;

  constructor(input: { bytes: Uint8Array } | { data: ShearData }) {
    let shearData: ShearData;
    if ("bytes" in input) {
      shearData = bytesToShearData(input.bytes);
    } else {
      shearData = input.data;
    }

    if (!shearData.matrix) {
      throw new Error(
        "Invalid ShearData: Missing required properties (matrix).",
      );
    }
    this.data = shearData;
  }

  get bytes(): Uint8Array {
    return shearDataToBytes(this.data);
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

export function bytesToShearData(bytes: Uint8Array): ShearData {
  return ShearData.decode(bytes);
}

export function shearDataToBytes(data: ShearData): Uint8Array {
  return ShearData.encode(data).finish();
}
