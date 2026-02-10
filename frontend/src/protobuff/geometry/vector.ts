import { VectorData } from "../generated/compas_pb/data/geometry";
import { Point } from "./point";
import * as THREE from "three";

export class Vector {
  public readonly data: VectorData;

  constructor(input: { bytes: Uint8Array } | { data: VectorData }) {
    let vectorData: VectorData;
    if ("bytes" in input) {
      vectorData = bytesToVectorData(input.bytes);
    } else {
      vectorData = input.data;
    }

    if (
      vectorData.x === undefined ||
      vectorData.y === undefined ||
      vectorData.z === undefined
    ) {
      throw new Error(
        "Invalid VectorData: Missing required properties (x, y, or z).",
      );
    }
    this.data = vectorData;
  }

  get bytes(): Uint8Array {
    return vectorDataToBytes(this.data);
  }

  get guid(): string {
    return this.data.guid;
  }

  get name(): string {
    return this.data.name;
  }

  get x(): number {
    return this.data.x!;
  }

  get y(): number {
    return this.data.y!;
  }

  get z(): number {
    return this.data.z!;
  }

  buildGeometry(origin?: Point): THREE.ArrowHelper {
    const direction: THREE.Vector3 = new THREE.Vector3(this.x, this.y, this.z);
    const length = direction.length();
    direction.normalize();
    let vectorOrigin: THREE.Vector3;
    if (origin) {
      vectorOrigin = new THREE.Vector3(origin.x, origin.y, origin.z);
    } else {
      vectorOrigin = new THREE.Vector3(0, 0, 0);
    }

    let arrowHelper = new THREE.ArrowHelper(
      direction,
      vectorOrigin,
      length,
      0xff0000,
    );
    arrowHelper.setDirection(direction);
    return arrowHelper;
  }
}

export function bytesToVectorData(bytes: Uint8Array): VectorData {
  return VectorData.decode(bytes);
}

export function vectorDataToBytes(vector: VectorData): Uint8Array {
  return VectorData.encode(vector).finish();
}
