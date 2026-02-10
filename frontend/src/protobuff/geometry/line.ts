import { LineData } from "../generated/compas_pb/data/geometry";
import * as THREE from "three";
import { Point } from "./point";

export class Line {
  public readonly data: LineData;
  private _start?: Point;
  private _end?: Point;

  constructor(input: { bytes: Uint8Array } | { data: LineData }) {
    let lineData: LineData;
    if ("bytes" in input) {
      lineData = bytesToLineData(input.bytes);
    } else {
      lineData = input.data;
    }

    if (!lineData.start || !lineData.end) {
      throw new Error(
        "Invalid LineData: Missing required properties (start or end).",
      );
    }
    this.data = lineData;
  }

  get bytes(): Uint8Array {
    return lineDataToBytes(this.data);
  }
  get guid(): string {
    return this.data.guid;
  }

  get name(): string {
    return this.data.name;
  }

  get start(): Point {
    if (!this._start) {
      this._start = new Point({ data: this.data.start! });
    }
    return this._start;
  }

  get end(): Point {
    if (!this._end) {
      this._end = new Point({ data: this.data.end! });
    }
    return this._end;
  }

  buildGeometry(): THREE.Line {
    const start_point = new THREE.Vector3(
      this.data.start!.x,
      this.data.start!.y,
      this.data.start!.z,
    );
    const end_point = new THREE.Vector3(
      this.data.end!.x,
      this.data.end!.y,
      this.data.end!.z,
    );
    const geometry = new THREE.BufferGeometry().setFromPoints([
      start_point,
      end_point,
    ]);
    const material = new THREE.LineBasicMaterial({ color: 0x0000ff });
    return new THREE.Line(geometry, material);
  }
}

export function bytesToLineData(bytes: Uint8Array): LineData {
  return LineData.decode(bytes);
}

export function lineDataToBytes(line: LineData): Uint8Array {
  return LineData.encode(line).finish();
}
