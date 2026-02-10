import { PolyhedronData } from "../generated/compas_pb/data/datastructures";
import { Point } from "../geometry/point";
import { PolyhedronFace } from "./face";
import * as THREE from "three";

export class Polyhedron {
  public readonly data: PolyhedronData;
  private _points?: Point[];
  private _faces?: PolyhedronFace[];

  constructor(input: { bytes: Uint8Array } | { data: PolyhedronData }) {
    let polyhedronData: PolyhedronData;
    if ("bytes" in input) {
      polyhedronData = bytesToPolyhedronData(input.bytes);
    } else {
      polyhedronData = input.data;
    }

    if (!polyhedronData.vertices || !polyhedronData.faces) {
      throw new Error(
        "Invalid PolyhedronData: Missing required properties (vertices or faces).",
      );
    }
    this.data = polyhedronData;
  }

  get bytes(): Uint8Array {
    return polyhedronDataToBytes(this.data);
  }

  get guid(): string {
    if (!this.data.guid) {
      return "";
    }
    return this.data.guid;
  }

  get name(): string {
    if (!this.data.name) {
      return "";
    }
    return this.data.name;
  }

  get vertices(): Point[] {
    if (!this._points) {
      this._points = [];
      for (const pointData of this.data.vertices!) {
        const point = new Point({ data: pointData });
        this._points.push(point);
      }
    }
    return this._points;
  }

  get faces(): PolyhedronFace[] {
    if (!this._faces) {
      this._faces = [];
      for (const faceData of this.data.faces!) {
        const face = new PolyhedronFace({ data: faceData });
        this._faces.push(face);
      }
    }
    return this._faces;
  }

  buildGeometry() {
    const geometry = new THREE.BufferGeometry();

    const vertices = new Float32Array(this.vertices.length * 3);
    for (let i = 0; i < this.vertices.length; i++) {
      const vertex = this.vertices[i];
      vertices[i * 3] = vertex.x;
      vertices[i * 3 + 1] = vertex.y;
      vertices[i * 3 + 2] = vertex.z;
    }

    const indices: number[] = [];
    for (const face of this.faces) {
      const vertexIndices = face.vertexIndices;
      for (let i = 1; i < vertexIndices.length - 1; i++) {
        indices.push(vertexIndices[0], vertexIndices[i], vertexIndices[i + 1]);
      }
    }

    geometry.setIndex(indices);
    geometry.setAttribute("position", new THREE.BufferAttribute(vertices, 3));

    geometry.computeVertexNormals();

    const material = new THREE.MeshStandardMaterial({
      color: 0x00cc44,
      side: THREE.DoubleSide,
    });

    const mesh = new THREE.Mesh(geometry, material);
    return mesh;
  }
}

export function bytesToPolyhedronData(bytes: Uint8Array): PolyhedronData {
  const polyhedronData = PolyhedronData.decode(bytes);
  return polyhedronData;
}

export function polyhedronDataToBytes(polyhedron: PolyhedronData): Uint8Array {
  return PolyhedronData.encode(polyhedron).finish();
}
