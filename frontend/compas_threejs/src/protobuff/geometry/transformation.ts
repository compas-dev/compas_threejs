import type { FrameData } from "../generated/compas_pb/data/geometry";
import { TransformationData } from "../generated/compas_pb/data/geometry";
import * as THREE from "three";

export class Transformation {
  public readonly data: TransformationData;

  constructor(input: { bytes: Uint8Array } | { data: TransformationData }) {
    let transformationData: TransformationData;
    if ("bytes" in input) {
      transformationData = bytesToTransformationData(input.bytes);
    } else {
      transformationData = input.data;
    }

    this.data = transformationData;
  }

  get bytes(): Uint8Array {
    return transformationDataToBytes(this.data);
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

export function bytesToTransformationData(
  bytes: Uint8Array,
): TransformationData {
  return TransformationData.decode(bytes);
}

export function transformationDataToBytes(
  data: TransformationData,
): Uint8Array {
  return TransformationData.encode(data).finish();
}

export function buildTransformationFromFrame(frame: FrameData): THREE.Matrix4 {
  const position = new THREE.Vector3(
    frame.point!.x,
    frame.point!.y,
    frame.point!.z,
  );
  const xaxis = new THREE.Vector3(
    frame.xaxis!.x,
    frame.xaxis!.y,
    frame.xaxis!.z,
  );
  const yaxis = new THREE.Vector3(
    frame.yaxis!.x,
    frame.yaxis!.y,
    frame.yaxis!.z,
  );
  const zaxis = new THREE.Vector3().crossVectors(xaxis, yaxis);

  const matrix = new THREE.Matrix4();
  matrix.makeBasis(xaxis, yaxis, zaxis);
  matrix.setPosition(position);
  return matrix;
}
