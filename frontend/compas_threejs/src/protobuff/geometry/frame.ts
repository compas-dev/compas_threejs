import { FrameData } from "../generated/compas_pb/data/geometry";
import { Point } from "./point";
import { Vector } from "./vector";
import { buildTransformationFromFrame } from "./transformation";
import * as THREE from "three";

export class Frame {
  public readonly data: FrameData;
  private _point?: Point;
  private _xaxis?: Vector;
  private _yaxis?: Vector;

  constructor(input: { bytes: Uint8Array } | { data: FrameData }) {
    let frameData: FrameData;
    if ("bytes" in input) {
      frameData = bytesToFrameData(input.bytes);
    } else {
      frameData = input.data;
    }

    if (!frameData.point || !frameData.xaxis || !frameData.yaxis) {
      throw new Error(
        "Invalid FrameData: Missing required properties (point, xaxis, or yaxis).",
      );
    }
    this.data = frameData;
  }

  get bytes(): Uint8Array {
    return frameDataToBytes(this.data);
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

  get xaxis(): Vector {
    if (!this._xaxis) {
      this._xaxis = new Vector({ data: this.data.xaxis! });
    }
    return this._xaxis;
  }

  get yaxis(): Vector {
    if (!this._yaxis) {
      this._yaxis = new Vector({ data: this.data.yaxis! });
    }
    return this._yaxis;
  }

  buildGeometry(): THREE.AxesHelper {
    const axesHelper = new THREE.AxesHelper(1);
    axesHelper.setColors(
      new THREE.Color(0xff0000),
      new THREE.Color(0x00ff00),
      new THREE.Color(0x0000ff),
    );
    const transformationMatrix = buildTransformationFromFrame(this.data);
    axesHelper.applyMatrix4(transformationMatrix);

    return axesHelper;
  }
}

export function bytesToFrameData(bytes: Uint8Array): FrameData {
  return FrameData.decode(bytes);
}

export function frameDataToBytes(frame: FrameData): Uint8Array {
  return FrameData.encode(frame).finish();
}
