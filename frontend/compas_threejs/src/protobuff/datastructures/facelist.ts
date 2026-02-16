import { FaceList } from "../generated/compas_pb/data/datastructures";

export class MeshFaceList {
  public readonly data: FaceList;

  constructor(input: { bytes: Uint8Array } | { data: FaceList }) {
    let faceListData: FaceList;
    if ("bytes" in input) {
      faceListData = bytesToFaceList(input.bytes);
    } else {
      faceListData = input.data;
    }

    if (!faceListData.indices) {
      throw new Error("Invalid FaceList: Missing required property 'faces'.");
    }
    this.data = faceListData;
  }

  get bytes(): Uint8Array {
    return faceListToBytes(this.data);
  }

  get indices(): number[] {
    return this.data.indices!;
  }
}

export function bytesToFaceList(bytes: Uint8Array): FaceList {
  return FaceList.decode(bytes);
}

export function faceListToBytes(faceList: FaceList): Uint8Array {
  return FaceList.encode(faceList).finish();
}
