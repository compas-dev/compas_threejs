import { scene } from "../viewer/scene_builder";
import { unpackMessageToGeometry, unpackMessage } from "../protobuff/analyzers";
import type { AnyData } from "../protobuff/generated/compas_pb/data/message";
import { Dictionary } from "../protobuff/messages";
import * as THREE from "three";
import { lightManager } from "../viewer/light_manager";
import { geometryManager } from "../viewer/geometry_manager";
import { materialManager } from "../viewer/material_manager";
import { sceneManager } from "../viewer/scene_manager";
import { uiManager } from "./sidebarStore";
import { textManager } from "../viewer/text_manager";
import { objectInfoManager } from "./objectInfo";
import { removeObjectFromScene } from "../viewer/scene_manager";
import { SCENE_GEOMETRIES } from "../viewer/geometry_manager";

let objectMotionPaused = false;
const queuedGeometryByGuid = new Map<string, any>();

export function setObjectMotionPaused(paused: boolean): void {
  objectMotionPaused = paused;

  if (!paused) {
    flushQueuedGeometryUpdates();
  }
}

export function toggleObjectMotionPaused(): boolean {
  setObjectMotionPaused(!objectMotionPaused);
  return objectMotionPaused;
}

export function isObjectMotionPaused(): boolean {
  return objectMotionPaused;
}

function flushQueuedGeometryUpdates(): void {
  if (!queuedGeometryByGuid.size) {
    return;
  }

  const updates = Array.from(queuedGeometryByGuid.values());
  queuedGeometryByGuid.clear();

  updates.forEach((obj) => geometryManager(obj));
}

export function dispatchMessage(message: Uint8Array) {
  const messageUnpacked = unpackMessage(message);
  const obj = unpackMessageToGeometry(message);

  if (obj instanceof Dictionary) {
    analyzeDictionary(obj);
    return;
  } else {
    if (objectMotionPaused && obj?.guid) {
      const existsInScene = obj.guid in SCENE_GEOMETRIES;

      // While paused, keep object creation responsive but freeze updates to existing geometry.
      if (existsInScene) {
        queuedGeometryByGuid.set(obj.guid, obj);
        return;
      }
    }

    geometryManager(obj);
  }
}

function analyzeDictionary(dictionary: Dictionary) {
  const data = dictionary.data.items;
  switch (data.dispatch.value) {
    case "material":
      materialManager(data);
      break;
    case "light":
      lightManager(data);
      break;
    case "scene":
      sceneManager(data);
      break;
    case "ui":
      uiManager(data);
      break;
    case "text":
      textManager(data);
      break;
    case "object_infos":
      objectInfoManager(data);
      break;
      return
    case "remove_object":
      removeObjectFromScene(data);
      break;
    default:
      console.warn("Unknown dispatch value:", data.dispatch.value);
  }

  if (data.dispatch.value == "material") {
    materialManager(data);
  } else if (data.dispatch.value == "light") {
    lightManager(data);
  }
}
