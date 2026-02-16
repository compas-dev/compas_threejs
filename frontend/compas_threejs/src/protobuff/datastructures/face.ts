import { FaceData } from "../generated/compas_pb/data/datastructures";

export class PolyhedronFace {
  public readonly data: FaceData;

  constructor(input: { bytes: Uint8Array } | { data: FaceData }) {
    let faceData: FaceData;
    if ("bytes" in input) {
      faceData = bytesToFaceData(input.bytes);
    } else {
      faceData = input.data;
    }

    if (!faceData.vertexIndices) {
      throw new Error(
        "Invalid FaceData: Missing required property 'vertices'.",
      );
    }
    this.data = faceData;
  }

  get bytes(): Uint8Array {
    return faceDataToBytes(this.data);
  }

  get vertexIndices(): number[] {
    return this.data.vertexIndices!;
  }
}

export function bytesToFaceData(bytes: Uint8Array): FaceData {
  const faceData = FaceData.decode(bytes);
  return faceData;
}

export function faceDataToBytes(face: FaceData): Uint8Array {
  return FaceData.encode(face).finish();
}
