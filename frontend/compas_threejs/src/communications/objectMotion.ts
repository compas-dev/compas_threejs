import { geometryManager, SCENE_GEOMETRIES } from "../viewer/geometry_manager";
import { motionState } from "@/store/store";

const queuedGeometryUpdates: any[] = [];

export function setObjectMotionPaused(paused: boolean): void {
  motionState.objectMotionPaused = paused;

  if (!paused) {
    processQueuedGeometryUpdates();
  }
}

export function toggleObjectMotionPaused(): boolean {
  setObjectMotionPaused(!motionState.objectMotionPaused);
  return motionState.objectMotionPaused;
}

export function isObjectMotionPaused(): boolean {
  return motionState.objectMotionPaused;
}

export function queueGeometryUpdateIfPaused(obj: any): boolean {
  if (!motionState.objectMotionPaused || !obj?.guid) {
    return false;
  }

  const existsInScene = obj.guid in SCENE_GEOMETRIES;
  if (!existsInScene) {
    return false;
  }

  queuedGeometryUpdates.push(obj);
  return true;
}

function processQueuedGeometryUpdates(): void {
  if (!queuedGeometryUpdates.length) {
    return;
  }

  const updates = queuedGeometryUpdates.splice(0, queuedGeometryUpdates.length);
  updates.forEach((obj) => geometryManager(obj));
}
