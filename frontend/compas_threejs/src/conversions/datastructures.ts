import { PolyhedronFace, MeshFaceList, Mesh, Polyhedron } from "@gramaziokohler/compas-pb-ts";
import * as THREE from "three";

/**
 * Convert a single PolyhedronFace protobuf into a THREE.Mesh.
 *
 * Note: This function is currently a placeholder and throws an Error.
 *
 * Implementation notes:
 * - A PolyhedronFace typically contains indices into a polyhedron's vertex list.
 * - The intended implementation should create a BufferGeometry using those vertices,
 *   triangulate the polygon (e.g., fan triangulation) and return a THREE.Mesh.
 *
 * @param face - PolyhedronFace from compas-pb-ts
 * @returns THREE.Mesh representing the face
 */
export function polyhedronFaceToThreeJS(face: PolyhedronFace): THREE.Mesh {
    throw new Error("polyhedronFaceToThreeJS not implemented");
}

/**
 * Convert a MeshFaceList (collection of faces) into a THREE.Mesh.
 *
 * Note: This is currently unimplemented and throws an Error.
 *
 * @param faceList - MeshFaceList to convert
 * @returns THREE.Mesh representing the face list
 */
export function MeshFaceListToThreeJS(faceList: MeshFaceList): THREE.Mesh {
    throw new Error("MeshFaceListToThreeJS not implemented");
}

/**
 * Convert a COMPAS Mesh object to a THREE.Mesh.
 *
 * The conversion:
 * - Creates a BufferGeometry and fills its "position" attribute from mesh.vertices.
 * - Triangulates polygonal faces using a simple fan triangulation (indices: 0,i,i+1).
 * - Sets the index buffer and computes vertex normals.
 * - Creates a MeshStandardMaterial with a default blue color and flat shading.
 *
 * Limitations:
 * - Assumes `mesh.vertices` items have numeric `x`, `y`, `z` properties.
 * - Faces are triangulated with a fan; non-planar or self-intersecting faces may render incorrectly.
 *
 * @param mesh - Mesh protobuf object to convert
 * @returns THREE.Mesh ready for rendering
 */
export function meshToThreeJS(mesh: Mesh): THREE.Mesh {
    const geometry = new THREE.BufferGeometry();
    

    // Convert vertices to a flat array of positions
    const vertices = new Float32Array(mesh.vertices.length * 3);
    mesh.vertices.forEach((vertex, index) => {
        vertices[index * 3] = vertex.x;
        vertices[index * 3 + 1] = vertex.y;
        vertices[index * 3 + 2] = vertex.z;
    });

    // Set up faces (indices)
    const indices: number[] = [];
    for (const face of mesh.faces) {
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

/**
 * Convert a COMPAS Polyhedron object to a THREE.Mesh.
 *
 * Similar to meshToThreeJS but reads faces from `face.vertexIndices` and uses a default green material.
 *
 * @param polyhedron - Polyhedron protobuf object to convert
 * @returns THREE.Mesh representing the polyhedron
 */
export function polyhedronToThreeJS(polyhedron: Polyhedron): THREE.Mesh {
    const geometry = new THREE.BufferGeometry();

    const vertices = new Float32Array(polyhedron.vertices.length * 3);
    for (let i = 0; i < polyhedron.vertices.length; i++) {
        const vertex = polyhedron.vertices[i];
        vertices[i * 3] = vertex.x;
        vertices[i * 3 + 1] = vertex.y;
        vertices[i * 3 + 2] = vertex.z;
    }

    const indices: number[] = [];
    for (const face of polyhedron.faces) {
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
