import { MeshData } from "../generated/compas_pb/data/datastructures";
import { Point } from "../geometry/point";
import { MeshFaceList } from "./facelist";
import * as THREE from "three";
export class Mesh {
    data;
    _vertices;
    constructor(input) {
        let meshData;
        if ("bytes" in input) {
            meshData = bytesToMeshData(input.bytes);
        }
        else {
            meshData = input.data;
        }
        if (!meshData.vertices || !meshData.faces) {
            throw new Error("Invalid MeshData: Missing required properties (vertices or faces).");
        }
        this.data = meshData;
    }
    get bytes() {
        return meshDataToBytes(this.data);
    }
    get guid() {
        if (!this.data.guid) {
            return "";
        }
        return this.data.guid;
    }
    get name() {
        if (!this.data.name) {
            return "";
        }
        return this.data.name;
    }
    get vertices() {
        if (!this._vertices) {
            this._vertices = [];
            for (const vertexData of this.data.vertices) {
                const point = new Point({ data: vertexData });
                this._vertices.push(point);
            }
        }
        return this._vertices;
    }
    get faces() {
        const faces = [];
        for (const faceData of this.data.faces) {
            const face = new MeshFaceList({ data: faceData });
            faces.push(face);
        }
        return faces;
    }
    buildGeometry() {
        const geometry = new THREE.BufferGeometry();
        // Convert vertices to a flat array of positions
        const vertices = new Float32Array(this.vertices.length * 3);
        this.vertices.forEach((vertex, index) => {
            vertices[index * 3] = vertex.x;
            vertices[index * 3 + 1] = vertex.y;
            vertices[index * 3 + 2] = vertex.z;
        });
        // Set up faces (indices)
        const indices = [];
        for (const face of this.faces) {
            const faceIndices = face.indices;
            for (let i = 1; i < faceIndices.length - 1; i++) {
                indices.push(faceIndices[0], faceIndices[i], faceIndices[i + 1]);
            }
        }
        geometry.setIndex(indices);
        geometry.setAttribute("position", new THREE.BufferAttribute(vertices, 3));
        // Compute normals for shading
        geometry.computeVertexNormals();
        // Create a basic material
        const material = new THREE.MeshStandardMaterial({
            color: 0x0077ff, // Default color
            flatShading: true,
            side: THREE.DoubleSide,
        });
        // Create and return the THREE.js Mesh
        return new THREE.Mesh(geometry, material);
    }
}
export function bytesToMeshData(bytes) {
    const meshData = MeshData.decode(bytes);
    return meshData;
}
export function meshDataToBytes(mesh) {
    return MeshData.encode(mesh).finish();
}
