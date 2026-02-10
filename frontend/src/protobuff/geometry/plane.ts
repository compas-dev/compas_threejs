import { PlaneData } from "../generated/compas_pb/data/geometry";
import { Point } from "./point";
import { Vector } from "./vector";
import { buildTransformationFromFrame } from "./transformation";
import * as THREE from "three";

export class Plane {
  public readonly data: PlaneData;
  private _point?: Point;
  private _normal?: Vector;

  constructor(input: { bytes: Uint8Array } | { data: PlaneData }) {
    let planeData: PlaneData;
    if ("bytes" in input) {
      planeData = bytesToPlaneData(input.bytes);
    } else {
      planeData = input.data;
    }

    if (!planeData.point || !planeData.normal) {
      throw new Error(
        "Invalid PlaneData: Missing required properties (point or normal).",
      );
    }

    this.data = planeData;
  }

  get bytes(): Uint8Array {
    return planeDataToBytes(this.data);
  }

  get guid(): string {
    return this.data.guid;
  }

  get name(): string {
    return this.data.name;
  }

  get point(): Point {
    if (!this._point) {
      this._point = new Point({ data: this.data.point! });
    }
    return this._point;
  }

  get normal(): Vector {
    if (!this._normal) {
      this._normal = new Vector({ data: this.data.normal! });
    }
    return this._normal;
  }

  buildGeometry(size: number = 2): THREE.PlaneHelper {
    const plane = new THREE.Plane(
      new THREE.Vector3(this.normal.x, this.normal.y, this.normal.z),
      0,
    );
    plane.translate(
      new THREE.Vector3(this.point.x, this.point.y, this.point.z),
    );
    const planeGeometry = new THREE.PlaneHelper(plane, size, 0xff00ff);
    return planeGeometry;
  }
}

export function bytesToPlaneData(bytes: Uint8Array): PlaneData {
  return PlaneData.decode(bytes);
}

export function planeDataToBytes(plane: PlaneData): Uint8Array {
  return PlaneData.encode(plane).finish();
}
