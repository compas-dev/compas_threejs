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
    Mesh,
    Parabola,
    Plane,
    Point,
    Pointcloud,
    Polygon,
    Polyhedron,
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

import * as GEOCONV from "./geometry";
import * as DATASTRUCTCONV from "./datastructures";

export function convertToThreeJSGeometry(object: any) {
    switch (true) {
        case object instanceof Arc:
            return GEOCONV.arcToThreeJS(object);
        case object instanceof Bezier:
            return GEOCONV.bezierToThreeJS(object);
        case object instanceof Box:
            return GEOCONV.boxToThreeJS(object);
        case object instanceof Capsule:
            return GEOCONV.capsuleToThreeJS(object, 32, 32);
        case object instanceof Circle:
            return GEOCONV.circleToThreeJS(object, 64);
        case object instanceof Cone:
            return GEOCONV.coneToThreeJS(object, 64);
        case object instanceof Cylinder:
            return GEOCONV.cylinderToThreeJS(object, 64);
        case object instanceof Ellipse:
            return GEOCONV.ellipseToThreeJS(object, 64);
        case object instanceof Frame:
            return GEOCONV.frameToThreeJS(object);
        case object instanceof Hyperbola:
            return GEOCONV.hyperbolaToThreeJS(object);
        case object instanceof Line:
            return GEOCONV.lineToThreeJS(object);
        case object instanceof Parabola:
            return GEOCONV.parabolaToThreeJS(object);
        case object instanceof Plane:
            return GEOCONV.planeToThreeJS(object);
        case object instanceof Point:
            return GEOCONV.pointToThreeJS(object);
        case object instanceof Pointcloud:
            return GEOCONV.pointcloudToThreeJS(object);
        case object instanceof Polygon:
            return GEOCONV.polygonToThreeJS(object);
        case object instanceof Polyline:
            return GEOCONV.polylineToThreeJS(object);
        case object instanceof Projection:
            return GEOCONV.projectionToThreeJS(object);
        case object instanceof Quaternion:
            return GEOCONV.quaternionToThreeJS(object);
        case object instanceof Reflection:
            return GEOCONV.reflectionToThreeJS(object);
        case object instanceof Rotation:
            return GEOCONV.rotationToThreeJS(object);
        case object instanceof Scale:
            return GEOCONV.scaleToThreeJS(object);
        case object instanceof Shear:
            return GEOCONV.shearToThreeJS(object);
        case object instanceof Sphere:
            return GEOCONV.sphereToThreeJS(object);
        case object instanceof Torus:
            return GEOCONV.torusToThreeJS(object);
        case object instanceof Transformation:
            return GEOCONV.transformationToThreeJS(object);
        case object instanceof Translation:
            return GEOCONV.translationToThreeJS(object);
        case object instanceof Vector:
            return GEOCONV.vectorToThreeJS(object);
        case object instanceof Mesh:
            return DATASTRUCTCONV.meshToThreeJS(object);
        case object instanceof Polyhedron:
            return DATASTRUCTCONV.polyhedronToThreeJS(object);
    }
}
