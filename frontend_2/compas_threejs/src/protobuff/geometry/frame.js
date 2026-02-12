import { FrameData } from "../generated/compas_pb/data/geometry";
import { Point } from "./point";
import { Vector } from "./vector";
import { buildTransformationFromFrame } from "./transformation";
import * as THREE from "three";
export class Frame {
    data;
    _point;
    _xaxis;
    _yaxis;
    constructor(input) {
        let frameData;
        if ("bytes" in input) {
            frameData = bytesToFrameData(input.bytes);
        }
        else {
            frameData = input.data;
        }
        if (!frameData.point || !frameData.xaxis || !frameData.yaxis) {
            throw new Error("Invalid FrameData: Missing required properties (point, xaxis, or yaxis).");
        }
        this.data = frameData;
    }
    get bytes() {
        return frameDataToBytes(this.data);
    }
    get guid() {
        return this.data.guid;
    }
    get name() {
        return this.data.name;
    }
    get point() {
        if (!this._point) {
            this._point = new Point({ data: this.data.point });
        }
        return this._point;
    }
    get xaxis() {
        if (!this._xaxis) {
            this._xaxis = new Vector({ data: this.data.xaxis });
        }
        return this._xaxis;
    }
    get yaxis() {
        if (!this._yaxis) {
            this._yaxis = new Vector({ data: this.data.yaxis });
        }
        return this._yaxis;
    }
    buildGeometry() {
        const axesHelper = new THREE.AxesHelper(1);
        axesHelper.setColors(new THREE.Color(0xff0000), new THREE.Color(0x00ff00), new THREE.Color(0x0000ff));
        const transformationMatrix = buildTransformationFromFrame(this.data);
        axesHelper.applyMatrix4(transformationMatrix);
        return axesHelper;
    }
}
export function bytesToFrameData(bytes) {
    return FrameData.decode(bytes);
}
export function frameDataToBytes(frame) {
    return FrameData.encode(frame).finish();
}
