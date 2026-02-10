import { ProjectionData } from "../generated/compas_pb/data/geometry";
import * as THREE from "three";

export class Projection {
  public readonly data: ProjectionData;

  constructor(input: { bytes: Uint8Array } | { data: ProjectionData }) {
    let projectionData: ProjectionData;
    if ("bytes" in input) {
      projectionData = bytesToProjectionData(input.bytes);
    } else {
      projectionData = input.data;
    }

    if (!projectionData.matrix) {
      throw new Error(
        "Invalid ProjectionData: Missing required properties (direction).",
      );
    }
    this.data = projectionData;
  }

  get bytes(): Uint8Array {
    return projectionDataToBytes(this.data);
  }

  get guid(): string {
    return this.data.guid;
  }

  get name(): string {
    return this.data.name;
  }

  get matrix(): number[] {
    return this.data.matrix!;
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

export function bytesToProjectionData(bytes: Uint8Array): ProjectionData {
  return ProjectionData.decode(bytes);
}

export function projectionDataToBytes(data: ProjectionData): Uint8Array {
  return ProjectionData.encode(data).finish();
}
