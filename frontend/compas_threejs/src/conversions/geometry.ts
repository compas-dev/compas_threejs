import {
    Arc,
    Bezier,
    Box,
    Capsule,
    Circle,
    Cone,
    Cylinder,
    Ellipse,
    Frame,
    Hyperbola,
    Line,
    Parabola,
    Plane,
    Point,
    Pointcloud,
    Polygon,
    Polyline,
    Projection,
    Quaternion,
    Reflection,
    Rotation,
    Scale,
    Shear,
    Sphere,
    Torus,
    Transformation,
    Translation,
    Vector,
} from "@gramaziokohler/compas-pb-ts";

import * as THREE from "three";

/**
 * Build a THREE.Matrix4 transformation from a COMPAS Frame.
 *
 * The function reads the frame origin (`frame.point`) and local axes
 * (`frame.xaxis`, `frame.yaxis`), computes a right-handed `z` axis using
 * the cross product, and constructs a matrix with that orthonormal basis
 * and the position.
 *
 * @param frame - COMPAS Frame containing point and axis vectors
 * @returns A THREE.Matrix4 that maps coordinates from the frame's local
 *          space into world coordinates
 */
function buildTransformationFromFrame(frame: Frame): THREE.Matrix4 {
    const position = new THREE.Vector3(frame.point!.x, frame.point!.y, frame.point!.z);
    const xaxis = new THREE.Vector3(frame.xaxis!.x, frame.xaxis!.y, frame.xaxis!.z);
    const yaxis = new THREE.Vector3(frame.yaxis!.x, frame.yaxis!.y, frame.yaxis!.z);
    const zaxis = new THREE.Vector3().crossVectors(xaxis, yaxis);

    const matrix = new THREE.Matrix4();
    matrix.makeBasis(xaxis, yaxis, zaxis);
    matrix.setPosition(position);
    return matrix;
}

/**
 * Convert a COMPAS Arc to a THREE.js object.
 *
 * NOTE: This function is currently unimplemented and will throw. The intended
 * implementation should sample the arc (or use THREE.ArcCurve) and return a
 * visible representation (e.g. a THREE.Line or a thin THREE.Mesh).
 *
 * @param arc - COMPAS Arc protobuf object
 * @returns A THREE object representing the arc (Line or Mesh)
 */
export function arcToThreeJS(_arc: Arc) {
    throw new Error("Method not implemented.");
}

/**
 * Convert a COMPAS Bezier curve to a THREE.js representation.
 *
 * NOTE: This function is currently unimplemented and will throw. The intended
 * implementation should convert control points into a THREE.Curve (e.g.
 * THREE.CubicBezierCurve3 or a custom curve) and return a THREE.Line or
 * tubular mesh approximating the curve.
 *
 * @param bezier - COMPAS Bezier protobuf object
 * @returns A THREE object representing the Bezier curve
 */
export function bezierToThreeJS(_bezier: Bezier) {
    throw new Error("Method not implemented.");
}

/**
 * Convert a COMPAS Box to a THREE.Mesh.
 *
 * The box size is read from `box.xsize`, `box.ysize`, `box.zsize` and the
 * box is positioned and oriented according to `box.frame` using
 * buildTransformationFromFrame.
 *
 * @param box - COMPAS Box protobuf object
 * @returns A THREE.Mesh containing a BoxGeometry transformed into world space
 */
export function boxToThreeJS(box: Box) {
    // geometry of the box
    const box_geometry = new THREE.BoxGeometry(box.xsize, box.ysize, box.zsize);
    // create transformation matrix from the frame
    const matrix = buildTransformationFromFrame(box.frame!);
    const boxMesh = new THREE.Mesh(box_geometry);
    // apply the matrix to the geometry
    boxMesh.applyMatrix4(matrix);
    return boxMesh;
}

/**
 * Convert a COMPAS Capsule to a THREE.Mesh.
 *
 * The resulting mesh uses THREE.CapsuleGeometry and is transformed by the
 * capsule's frame. `capSegments` and `radialSegments` control resolution.
 *
 * @param capsule - COMPAS Capsule protobuf object
 * @param capSegments - number of segments for the spherical caps
 * @param radialSegments - number of radial segments around the capsule
 * @returns A THREE.Mesh representing the capsule
 */
export function capsuleToThreeJS(capsule: Capsule, capSegments: number, radialSegments: number) {
    const capsuleGeometry = new THREE.CapsuleGeometry(
        capsule.radius,
        capsule.height,
        capSegments,
        radialSegments
    );
    const capsuleMesh = new THREE.Mesh(capsuleGeometry);
    const transformationMatrix = buildTransformationFromFrame(capsule.frame!);
    capsuleMesh.applyMatrix4(transformationMatrix);
    return capsuleMesh;
}

/**
 * Convert a COMPAS Circle to a THREE.Mesh.
 *
 * The function creates a THREE.CircleGeometry with the provided radius and
 * radial segmentation, then transforms it by the circle's frame.
 *
 * @param circle - COMPAS Circle protobuf object
 * @param radialSegments - number of segments used to approximate the circle
 * @returns A THREE.Mesh representing the circle in world space
 */
export function circleToThreeJS(circle: Circle, radialSegments: number) {
    const circleGeometry = new THREE.CircleGeometry(circle.radius, radialSegments);
    const matrix = buildTransformationFromFrame(circle.frame!);

    const circleMesh = new THREE.Mesh(circleGeometry);
    circleMesh.applyMatrix4(matrix);
    return circleMesh;
}

/**
 * Convert a COMPAS Cone to a THREE.Mesh.
 *
 * The cone is created with THREE.ConeGeometry and transformed using the
 * cone's frame.
 *
 * @param cone - COMPAS Cone protobuf object
 * @param radialSegments - number of radial segments for the cone geometry
 * @returns A THREE.Mesh representing the cone
 */
export function coneToThreeJS(cone: Cone, radialSegments: number) {
    const coneGeometry = new THREE.ConeGeometry(cone.radius, cone.height, radialSegments);
    const coneMesh = new THREE.Mesh(coneGeometry);
    const transformationMatrix = buildTransformationFromFrame(cone.frame!);
    coneMesh.applyMatrix4(transformationMatrix);
    return coneMesh;
}

/**
 * Convert a COMPAS Cylinder to a THREE.Mesh.
 *
 * The cylinder is created with identical top/bottom radii from
 * `cylinder.radius` and transformed by the cylinder's frame.
 *
 * @param cylinder - COMPAS Cylinder protobuf object
 * @param radialSegments - number of radial segments used to approximate the
 *                         circular cross-section
 * @returns A THREE.Mesh representing the cylinder
 */
export function cylinderToThreeJS(cylinder: Cylinder, radialSegments: number) {
    const cylinder_geometry = new THREE.CylinderGeometry(
        cylinder.radius,
        cylinder.radius,
        cylinder.height,
        radialSegments
    );
    const cylinderMesh = new THREE.Mesh(cylinder_geometry);
    // transform geometry to the correct position
    const transform = buildTransformationFromFrame(cylinder.frame);
    cylinderMesh.applyMatrix4(transform);
    return cylinderMesh;
}

/**
 * Convert a COMPAS Ellipse to a THREE.js representation.
 *
 * NOTE: This function is currently unimplemented and will throw. The
 * implementation should construct an elliptical curve (sampled line or
 * thin mesh) using ellipse.radii and ellipse.frame.
 *
 * @param ellipse - COMPAS Ellipse protobuf object
 * @param radialSegments - segment count for sampling the ellipse
 * @returns A THREE object representing the ellipse
 */
export function ellipseToThreeJS(_ellipse: Ellipse, _radialSegments: number) {
    throw Error("Method not implemented.");
}

/**
 * Create a THREE.AxesHelper positioned and oriented to match a COMPAS Frame.
 *
 * The helper draws unit-length axes colored X=red, Y=green, Z=blue and is
 * transformed to the frame using buildTransformationFromFrame.
 *
 * @param frame - COMPAS Frame to visualize
 * @returns THREE.AxesHelper placed at the frame's origin and orientation
 */
export function frameToThreeJS(frame: Frame): THREE.AxesHelper {
    const axesHelper = new THREE.AxesHelper(1);
    axesHelper.setColors(
        new THREE.Color(0xff0000),
        new THREE.Color(0x00ff00),
        new THREE.Color(0x0000ff)
    );
    const transformationMatrix = buildTransformationFromFrame(frame);
    axesHelper.applyMatrix4(transformationMatrix);

    return axesHelper;
}

/**
 * Convert a COMPAS Hyperbola to a THREE.Line representation.
 *
 * NOTE: This function is currently unimplemented and will throw. The
 * implementation should sample both branches of the hyperbola and return a
 * THREE.Line or group of lines representing the curve.
 *
 * @param hyperbola - COMPAS Hyperbola protobuf object
 * @returns A THREE.Line representing the hyperbola
 */
export function hyperbolaToThreeJS(_hyperbola: Hyperbola): THREE.Line {
    throw Error("Method not implemented.");
}

/**
 * Convert a COMPAS Line to a THREE.Line.
 *
 * The function builds a BufferGeometry from the start and end points and
 * returns a THREE.Line using a basic line material.
 *
 * @param line - COMPAS Line protobuf object with `start` and `end` points
 * @returns THREE.Line for rendering the line segment
 */
export function lineToThreeJS(line: Line): THREE.Mesh {
    const start_point = new THREE.Vector3(line.start!.x, line.start!.y, line.start!.z);
    const end_point = new THREE.Vector3(line.end!.x, line.end!.y, line.end!.z);
    const geometry = new THREE.BufferGeometry().setFromPoints([start_point, end_point]);
    const material = new THREE.LineBasicMaterial({ color: 0x0000ff });
    return new THREE.Line(geometry, material);
}

/**
 * Convert a COMPAS Parabola to a THREE.Line representation.
 *
 * NOTE: This function is currently unimplemented and will throw. The
 * implementation should sample the parabola curve and return a THREE.Line.
 *
 * @param parabola - COMPAS Parabola protobuf object
 * @returns A THREE.Line representing the parabola
 */
export function parabolaToThreeJS(_parabola: Parabola): THREE.Line {
    throw Error("Method not implemented.");
}

/**
 * Convert a COMPAS Plane to a THREE.PlaneHelper for visualization.
 *
 * The helper is created from the plane normal and translated to the plane
 * point. `size` controls the helper size.
 *
 * @param plane - COMPAS Plane protobuf object
 * @param size - size of the helper (default: 2)
 * @returns THREE.PlaneHelper visualizing the plane
 */
export function planeToThreeJS(plane: Plane, size: number = 2): THREE.PlaneHelper {
    const planeGeometry = new THREE.Plane(
        new THREE.Vector3(plane.normal.x, plane.normal.y, plane.normal.z),
        0
    );
    planeGeometry.translate(new THREE.Vector3(plane.point.x, plane.point.y, plane.point.z));
    const planeHelper = new THREE.PlaneHelper(planeGeometry, size, 0xff00ff);
    return planeHelper;
}

/**
 * Convert a COMPAS Point to a THREE.Points object.
 *
 * Produces a single vertex point rendered with THREE.PointsMaterial.
 *
 * @param point - COMPAS Point protobuf containing x,y,z
 * @returns THREE.Points containing a single point
 */
export function pointToThreeJS(point: Point): THREE.Points {
    const geometry = new THREE.BufferGeometry();
    const vertices = new Float32Array([point.x, point.y, point.z]);
    geometry.setAttribute("position", new THREE.BufferAttribute(vertices, 3));
    const material = new THREE.PointsMaterial({ size: 0.2, color: 0x0000ff });
    return new THREE.Points(geometry, material);
}

/**
 * Convert a COMPAS Pointcloud to a THREE.Points object.
 *
 * The point positions are copied into a BufferAttribute and rendered using a
 * PointsMaterial.
 *
 * @param pointcloud - COMPAS Pointcloud protobuf with an array of points
 * @returns THREE.Points containing the pointcloud
 */
export function pointcloudToThreeJS(pointcloud: Pointcloud): THREE.Points {
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(pointcloud.points.length * 3);
    for (let i = 0; i < pointcloud.points.length; i++) {
        positions[i * 3] = pointcloud.points[i].x;
        positions[i * 3 + 1] = pointcloud.points[i].y;
        positions[i * 3 + 2] = pointcloud.points[i].z;
    }
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const material = new THREE.PointsMaterial({ size: 0.2, color: 0xff00ff });
    const points = new THREE.Points(geometry, material);
    return points;
}

/**
 * Convert a COMPAS Polygon to a THREE.Mesh.
 *
 * NOTE: This function is currently unimplemented and will throw. The intended
 * implementation should triangulate the polygon (possibly using a fan
 * triangulation or a proper earcut library) and return a mesh with a
 * BufferGeometry.
 *
 * @param polygon - COMPAS Polygon protobuf object
 * @returns THREE.Mesh representing the filled polygon
 */
export function polygonToThreeJS(_polygon: Polygon): THREE.Mesh {
    throw new Error("Not implemented");
}

/**
 * Convert a COMPAS Polyline to a THREE.Line.
 *
 * Copies the polyline point coordinates into a BufferGeometry and returns a
 * THREE.Line with a simple black line material.
 *
 * @param polyline - COMPAS Polyline protobuf containing an ordered list of points
 * @returns THREE.Line representing the polyline
 */
export function polylineToThreeJS(polyline: Polyline): THREE.Line {
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(polyline.points.length * 3);
    for (let i = 0; i < polyline.points.length; i++) {
        positions[i * 3] = polyline.points[i].x;
        positions[i * 3 + 1] = polyline.points[i].y;
        positions[i * 3 + 2] = polyline.points[i].z;
    }
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const material = new THREE.LineBasicMaterial({ color: 0x000000 });
    const line = new THREE.Line(geometry, material);
    return line;
}

/**
 * Convert a COMPAS Projection matrix (flattened 4x4) to a THREE.Matrix4.
 *
 * The function reads the matrix elements in row-major order from
 * `projection.matrix` and sets them on a new THREE.Matrix4 instance. The
 * ordering matches THREE.Matrix4.set which expects column-major ordering,
 * so the values are re-arranged accordingly.
 *
 * @param projection - COMPAS Projection with a flat 16-element matrix array
 * @returns THREE.Matrix4 with the projection matrix
 */
export function projectionToThreeJS(projection: Projection): THREE.Matrix4 {
    const elements = projection.matrix;
    const matrix = new THREE.Matrix4();
    // prettier-ignore
    matrix.set(
      elements[0],
      elements[4],
      elements[8],
      elements[12],
      elements[1],
      elements[5],
      elements[9],
      elements[13],
      elements[2],
      elements[6],
      elements[10],
      elements[14],
      elements[3],
      elements[7],
      elements[11],
      elements[15],
    );

    return matrix;
}

/**
 * Convert a COMPAS Quaternion to a THREE.Quaternion.
 *
 * NOTE: This function is currently unimplemented and will throw. The
 * implementation should map quaternion components (x,y,z,w) to a
 * THREE.Quaternion and return it.
 *
 * @param quaternion - COMPAS Quaternion protobuf object
 * @returns THREE.Quaternion corresponding to the COMPAS quaternion
 */
export function quaternionToThreeJS(_quaternion: Quaternion): THREE.Quaternion {
    throw new Error("Not implemented");
}

/**
 * Convert a COMPAS Reflection matrix to a THREE.Matrix4.
 *
 * Reads the 16-element flattened matrix from the reflection object and sets
 * it on a THREE.Matrix4. The ordering is adjusted to match THREE's expected
 * column-major layout.
 *
 * @param reflection - COMPAS Reflection with a flat 16-element matrix
 * @returns THREE.Matrix4 representing the reflection transform
 */
export function reflectionToThreeJS(reflection: Reflection): THREE.Matrix4 {
    const elements = reflection.matrix;
    const matrix = new THREE.Matrix4();
    // prettier-ignore
    matrix.set(
      elements[0],
      elements[4],
      elements[8],
      elements[12],
      elements[1],
      elements[5],
      elements[9],
      elements[13],
      elements[2],
      elements[6],
      elements[10],
      elements[14],
      elements[3],
      elements[7],
      elements[11],
      elements[15],
    );

    return matrix;
}

/**
 * Convert a COMPAS Rotation into a THREE.Matrix4.
 *
 * NOTE: This function is currently unimplemented and will throw. The
 * implementation should extract the rotation matrix or quaternion from the
 * Rotation object and return a THREE.Matrix4.
 *
 * @param rotation - COMPAS Rotation protobuf object
 * @returns THREE.Matrix4 representing the rotation
 */
export function rotationToThreeJS(_rotation: Rotation): THREE.Matrix4 {
    throw new Error("Not implemented");
}

/**
 * Convert a COMPAS Scale matrix to a THREE.Matrix4.
 *
 * Reads the flattened 16-element matrix and sets it on a THREE.Matrix4,
 * accounting for THREE's column-major memory layout.
 *
 * @param scale - COMPAS Scale with a 16-element matrix array
 * @returns THREE.Matrix4 representing the scale transform
 */
export function scaleToThreeJS(scale: Scale): THREE.Matrix4 {
    const elements = scale.matrix;
    const matrix = new THREE.Matrix4();
    // prettier-ignore
    matrix.set(
      elements[0],
      elements[4],
      elements[8],
      elements[12],
      elements[1],
      elements[5],
      elements[9],
      elements[13],
      elements[2],
      elements[6],
      elements[10],
      elements[14],
      elements[3],
      elements[7],
      elements[11],
      elements[15],
    );

    return matrix;
}

/**
 * Convert a COMPAS Shear matrix to a THREE.Matrix4.
 *
 * Reads the flattened 16-element matrix and sets it on a THREE.Matrix4.
 *
 * @param shear - COMPAS Shear with a 16-element matrix array
 * @returns THREE.Matrix4 representing the shear transform
 */
export function shearToThreeJS(shear: Shear): THREE.Matrix4 {
    const elements = shear.matrix;
    const matrix = new THREE.Matrix4();
    // prettier-ignore
    matrix.set(
      elements[0],
      elements[4],
      elements[8],
      elements[12],
      elements[1],
      elements[5],
      elements[9],
      elements[13],
      elements[2],
      elements[6],
      elements[10],
      elements[14],
      elements[3],
      elements[7],
      elements[11],
      elements[15],
    );

    return matrix;
}

/**
 * Convert a COMPAS Sphere to a THREE.Mesh.
 *
 * Creates a THREE.SphereGeometry using the sphere radius and applies the
 * sphere frame transformation.
 *
 * @param sphere - COMPAS Sphere protobuf object
 * @param widthSegments - horizontal segment count for the sphere geometry
 * @param heightSegments - vertical segment count for the sphere geometry
 * @returns THREE.Mesh representing the sphere
 */
export function sphereToThreeJS(
    sphere: Sphere,
    widthSegments: number = 64,
    heightSegments: number = 64
): THREE.Mesh {
    const sphereGeometry = new THREE.SphereGeometry(sphere.radius, widthSegments, heightSegments);
    const sphereMesh = new THREE.Mesh(sphereGeometry);
    const transformationMatrix = buildTransformationFromFrame(sphere.frame!);
    sphereMesh.applyMatrix4(transformationMatrix);
    return sphereMesh;
}

/**
 * Convert a COMPAS Torus to a THREE.Mesh.
 *
 * Uses THREE.TorusGeometry with the supplied pipe/axis radii and applies the
 * torus frame transform.
 *
 * @param torus - COMPAS Torus protobuf object
 * @param segmentsTubular - number of tubular segments (default: 64)
 * @param segmentsRadial - number of radial segments (default: 64)
 * @returns THREE.Mesh representing the torus
 */
export function torusToThreeJS(
    torus: Torus,
    segmentsTubular: number = 64,
    segmentsRadial: number = 64
): THREE.Mesh {
    const torusGeometry = new THREE.TorusGeometry(
        torus.radiusAxis,
        torus.radiusPipe,
        segmentsTubular,
        segmentsRadial
    );
    const torusMesh = new THREE.Mesh(torusGeometry);
    const transformationMatrix = buildTransformationFromFrame(torus.frame!);
    torusMesh.applyMatrix4(transformationMatrix);
    return torusMesh;
}

/**
 * Convert a COMPAS Transformation (flat 16-element matrix) to a THREE.Matrix4.
 *
 * The function reorders the input array to match THREE.Matrix4's column-major
 * ordering and returns the resulting matrix.
 *
 * @param transformation - COMPAS Transformation with a flat 16-element matrix
 * @returns THREE.Matrix4 representing the transformation
 */
export function transformationToThreeJS(transformation: Transformation): THREE.Matrix4 {
    const elements = transformation.matrix;
    const matrix = new THREE.Matrix4();
    // prettier-ignore
    matrix.set(
      elements[0],
      elements[4],
      elements[8],
      elements[12],
      elements[1],
      elements[5],
      elements[9],
      elements[13],
      elements[2],
      elements[6],
      elements[10],
      elements[14],
      elements[3],
      elements[7],
      elements[11],
      elements[15],
    );

    return matrix;
}

/**
 * Convert a COMPAS Translation object to a THREE.Vector3.
 *
 * NOTE: This function is currently unimplemented and will throw. The
 * implementation should read the translation vector components and return a
 * THREE.Vector3.
 *
 * @param translation - COMPAS Translation protobuf object
 * @returns THREE.Vector3 representing the translation
 */
export function translationToThreeJS(_translation: Translation): THREE.Vector3 {
    throw new Error("translationToThreeJS not implemented");
}

/**
 * Create a THREE.ArrowHelper visualizing a COMPAS Vector.
 *
 * The arrow helper uses the vector components as direction and length. An
 * optional origin Point can be provided; otherwise the arrow is placed at the
 * world origin.
 *
 * @param sphere - COMPAS Vector with x,y,z components
 * @param origin - optional COMPAS Point specifying the arrow origin
 * @returns THREE.ArrowHelper representing the vector
 */
export function vectorToThreeJS(sphere: Vector, origin?: Point): THREE.ArrowHelper {
    const direction: THREE.Vector3 = new THREE.Vector3(sphere.x, sphere.y, sphere.z);
    const length = direction.length();
    direction.normalize();
    let vectorOrigin: THREE.Vector3;
    if (origin) {
        vectorOrigin = new THREE.Vector3(origin.x, origin.y, origin.z);
    } else {
        vectorOrigin = new THREE.Vector3(0, 0, 0);
    }

    const arrowHelper = new THREE.ArrowHelper(direction, vectorOrigin, length, 0xff0000);
    arrowHelper.setDirection(direction);
    return arrowHelper;
}
