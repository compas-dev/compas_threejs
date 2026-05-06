import { scene } from "../viewer/scene_builder";
import { unpackMessageToGeometry, unpackMessage } from "../protobuff/analyzers";
import type { AnyData } from "../protobuff/generated/compas_pb/data/message";
import { Dictionary } from "../protobuff/messages";
import * as THREE from "three";
import { lightManager } from "../viewer/light_manager";
import { geometryManager } from "../viewer/geometry_manager";
import { materialManager } from "../viewer/material_manager";
import { sceneManager } from "../viewer/scene_manager";
import { themeManager } from "../viewer/theme_manager";
import { uiManager } from "./sidebarStore";
import { textManager } from "../viewer/text_manager";
import { objectInfoManager } from "./objectInfo";
import { removeObjectFromScene } from "../viewer/scene_manager";

const SCENE_GEOMETRIES: { [guid: string]: THREE.Object3D } = {};

export function dispatchMessage(message: Uint8Array) {
    const messageUnpacked = unpackMessage(message);
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
        case "theme":
            themeManager(data);
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
            return;
        case "remove_object":
            removeObjectFromScene(data);
            break;
        default:
            console.warn("Unknown dispatch value:", data.dispatch.value);
    }
}
