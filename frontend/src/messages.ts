import { scene } from "./scene_builder";
import { unpackMessageToGeometry, unpackMessage } from "./protobuff/analyzers";
import type { AnyData } from "./protobuff/generated/compas_pb/data/message";
import { Dictionary } from "./protobuff/messages";
import * as THREE from "three";
import { lightManager } from "./light_manager";
import { geometryManager } from "./geometry_manager";
import { materialManager } from "./material_manager";
import { sceneManager } from "./scene_manager";

const SCENE_GEOMETRIES: { [guid: string]: THREE.Object3D } = {};

export function dispatchMessage(message: Uint8Array) {
  const messageUnpacked = unpackMessage(message);
  console.log("Message unpacked:", messageUnpacked);
  const obj = unpackMessageToGeometry(message);

  if (obj instanceof Dictionary) {
    analyzeDictionary(obj);
    return;
  } else {
    geometryManager(obj);
  }
}

function analyzeDictionary(dictionary: Dictionary) {
  const data = dictionary.data.items;
  console.log("Analyzing Dictionary:", data);

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
    default:
      console.warn("Unknown dispatch value:", data.dispatch.value);
  }

  if (data.dispatch.value == "material") {
    materialManager(data);
  } else if (data.dispatch.value == "light") {
    lightManager(data);
  }
}
