import { PointData } from "../generated/compas_pb/data/geometry";
import * as THREE from "three";

export class Point {
  public readonly data: PointData;

  constructor(input: { bytes: Uint8Array } | { data: PointData }) {
    let pointData: PointData;
    if ("bytes" in input) {
      pointData = bytesToPointData(input.bytes);
    } else {
      pointData = input.data;
    }

    if (
      pointData.x === undefined ||
      pointData.y === undefined ||
      pointData.z === undefined
    ) {
      throw new Error(
        "Invalid PointData: Missing required properties (x, y, or z).",
      );
    }
    this.data = pointData;
  }

  get bytes(): Uint8Array {
    return pointDataToBytes(this.data);
  }

  get guid(): string {
    return this.data.guid;
  }

  get name(): string {
    return this.data.name;
  }

  get x(): number {
    return this.data.x;
  }

  get y(): number {
    return this.data.y;
  }

  get z(): number {
    return this.data.z;
  }

  buildGeometry(): THREE.Points {
    const geometry = new THREE.BufferGeometry();
    const vertices = new Float32Array([this.x, this.y, this.z]);
    geometry.setAttribute("position", new THREE.BufferAttribute(vertices, 3));
    const material = new THREE.PointsMaterial({ size: 0.2, color: 0x0000ff });
    return new THREE.Points(geometry, material);
  }
}

export function bytesToPointData(bytes: Uint8Array): PointData {
  return PointData.decode(bytes);
}

export function pointDataToBytes(point: PointData): Uint8Array {
  return PointData.encode(point).finish();
}
