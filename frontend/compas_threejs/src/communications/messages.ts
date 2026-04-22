import { unpackMessageToGeometry, unpackMessage } from "../protobuff/analyzers";
import { Dictionary } from "../protobuff/messages";
import { lightManager } from "../viewer/light_manager";
import { geometryManager } from "../viewer/geometry_manager";
import { materialManager } from "../viewer/material_manager";
import { sceneManager } from "../viewer/scene_manager";
import { uiManager } from "./sidebarStore";
import { textManager } from "../viewer/text_manager";
import { objectInfoManager } from "./objectInfo";
import { removeObjectFromScene } from "../viewer/scene_manager";
import { queueGeometryUpdateIfPaused } from "@/communications/objectMotion";

export function dispatchMessage(message: Uint8Array) {
    const messageUnpacked = unpackMessage(message);
    const obj = unpackMessageToGeometry(message);

    if (obj instanceof Dictionary) {
        analyzeDictionary(obj);
        return;
    } else {
        if (queueGeometryUpdateIfPaused(obj)) {
      return;
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
            return;
        case "remove_object":
            removeObjectFromScene(data);
            break;
        default:
            console.warn("Unknown dispatch value:", data.dispatch.value);
    }
}
