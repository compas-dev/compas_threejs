import { unpackMessage, getObjectFromMessage } from "@gramaziokohler/compas-pb-ts";
import { Dictionary } from "@gramaziokohler/compas-pb-ts";
import { lightManager } from "../viewer/light_manager";
import { geometryManager } from "../viewer/geometry_manager";
import { materialManager } from "../viewer/material_manager";
import { sceneManager } from "../viewer/scene_manager";
import { themeManager } from "../viewer/theme_manager";
import { uiManager } from "./sidebarStore";
import { textManager } from "../viewer/text_manager";
import { objectInfoManager } from "./objectInfo";
import { objectActionManager } from "./objectInfo";
import { removeObjectFromScene } from "../viewer/scene_manager";

export function dispatchMessage(message: Uint8Array) {
    const object = decodeWebsocketMessage(message);
    if (object instanceof Dictionary) {
        analyzeDictionary(object);
        return;
    } else {
        // It is a geometry type
        geometryManager(object);
    }
}

export function decodeWebsocketMessage(message: Uint8Array) {
    const object = getObjectFromMessage(message);
    return object;
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
        case "object_action":
            objectActionManager(data);
            break;
            return;
        case "remove_object":
            removeObjectFromScene(data);
            break;
        default:
            console.warn("Unknown dispatch value:", data.dispatch.value);
    }
}
