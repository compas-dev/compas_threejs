import { unpackMessageToGeometry, unpackMessage } from "../protobuff/analyzers";
import { Dictionary } from "../protobuff/messages";
import { lightManager } from "../viewer/light_manager";
import { geometryManager } from "../viewer/geometry_manager";
import { materialManager } from "../viewer/material_manager";
import { sceneManager } from "../viewer/scene_manager";
import { uiManager } from "./sidebarStore";
const SCENE_GEOMETRIES = {};
export function dispatchMessage(message) {
    const messageUnpacked = unpackMessage(message);
    console.log("Message unpacked:", messageUnpacked);
    const obj = unpackMessageToGeometry(message);
    if (obj instanceof Dictionary) {
        analyzeDictionary(obj);
        return;
    }
    else {
        geometryManager(obj);
    }
}
function analyzeDictionary(dictionary) {
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
        case "ui":
            uiManager(data);
            break;
        default:
            console.warn("Unknown dispatch value:", data.dispatch.value);
    }
    if (data.dispatch.value == "material") {
        materialManager(data);
    }
    else if (data.dispatch.value == "light") {
        lightManager(data);
    }
}
