import * as GEOMETRY from "../geometry/index.js";
import * as DATASTRUCTURES from "../datastructures/index.js";
import * as MESSAGES from "../messages/index.js";

export type Constructor<T = any> = new (...args: any[]) => T;

export const TYPE_MAP = new Map<string, Constructor>([
  ["ArcData", GEOMETRY.Arc],
  ["BezierData", GEOMETRY.Bezier],
  ["BoxData", GEOMETRY.Box],
  ["CapsuleData", GEOMETRY.Capsule],
  ["CircleData", GEOMETRY.Circle],
  ["ConeData", GEOMETRY.Cone],
  ["CylinderData", GEOMETRY.Cylinder],
  ["EllipseData", GEOMETRY.Ellipse],
  ["FrameData", GEOMETRY.Frame],
  ["HyperbolaData", GEOMETRY.Hyperbola],
  ["LineData", GEOMETRY.Line],
  ["ParabolaData", GEOMETRY.Parabola],
  ["PlaneData", GEOMETRY.Plane],
  ["PointData", GEOMETRY.Point],
  ["PointcloudData", GEOMETRY.Pointcloud],
  ["PolygonData", GEOMETRY.Polygon],
  ["PolylineData", GEOMETRY.Polyline],
  ["ProjectionData", GEOMETRY.Projection],
  ["QuaternionData", GEOMETRY.Quaternion],
  ["ReflectionData", GEOMETRY.Reflection],
  ["RotationData", GEOMETRY.Rotation],
  ["ScaleData", GEOMETRY.Scale],
  ["ShearData", GEOMETRY.Shear],
  ["SphereData", GEOMETRY.Sphere],
  ["TorusData", GEOMETRY.Torus],
  ["TransformationData", GEOMETRY.Transformation],
  ["TranslationData", GEOMETRY.Translation],
  ["VectorData", GEOMETRY.Vector],
  ["MeshData", DATASTRUCTURES.Mesh],
  ["PolyhedronData", DATASTRUCTURES.Polyhedron],
  ["DictData", MESSAGES.Dictionary],
]);
