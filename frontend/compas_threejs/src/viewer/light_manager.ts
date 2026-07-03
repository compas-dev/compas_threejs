import { scene } from "./scene_manager";
import * as THREE from "three";
import { RectAreaLightHelper } from "three/examples/jsm/helpers/RectAreaLightHelper.js";
import { Sky } from "three/examples/jsm/objects/Sky.js";
import { ligthtToThree } from "../conversions/lights";

interface LightEntry {
    light: THREE.Light | Sky;
    helper?: THREE.Object3D;
    backendGuid: string; // GUID from backend
    lightType: string;
}

interface SkyLightEntry {
    sky: Sky;
    sun: THREE.DirectionalLight;
    ambient: THREE.AmbientLight;
    helper?: THREE.Object3D;
    backendGuid: string; // GUID from backend
}

export const SCENE_LIGHTS: Map<string, LightEntry> = new Map();
export const SCENE_SKY_LIGHTS: Map<string, SkyLightEntry> = new Map();

/**
 * Convert raw light data to THREE.Light object
 * Internal helper for conversion
 */
function convertLightData(data: Record<string, unknown>): THREE.Light | Sky | null {
    return ligthtToThree(data as any);
}

/**
 * Determine light type from data
 */
function getLightType(data: Record<string, unknown>): string {
    return (data.type as { value: string }).value;
}

/**
 * Determine light type from THREE.Light object
 */
function getLightTypeFromObject(light: THREE.Light | Sky): string {
    if (light instanceof Sky) return "sky";
    if (light instanceof THREE.PointLight) return "point_light";
    if (light instanceof THREE.SpotLight) return "spot_light";
    if (light instanceof THREE.RectAreaLight) return "rect_light";
    if (light instanceof THREE.DirectionalLight) return "sunlight";
    if (light instanceof THREE.AmbientLight) return "ambient_light";
    return "unknown";
}

/**
 * Get backend guid from light object by searching entries
 */
function getBackendGuidFromLight(light: THREE.Light | Sky): string | undefined {
    const entry = Array.from(SCENE_LIGHTS.values()).find((e) => e.light === light);
    return entry?.backendGuid;
}

/**
 * Main entry point for light management
 * Accepts a THREE.Light object and manages it in the scene
 */
export function lightManager(
    light: THREE.Light | Sky,
    backendGuid: string,
    lightType: string,
    options?: { helper?: boolean }
): void {
    if (!backendGuid) {
        console.warn("Light management requires a backendGuid");
        return;
    }

    if (lightType === "sky") {
        manageSkyLight(light as Sky, backendGuid);
    } else {
        const existingEntry = SCENE_LIGHTS.get(backendGuid);
        if (existingEntry) {
            updateLight(backendGuid, light);
        } else {
            addLight(light, backendGuid, options?.helper);
        }
    }
}

/**
 * Convert light data and manage it (internal API)
 * Used when data conversion is needed
 */
export function lightManagerFromData(data: Record<string, unknown>): void {
    const backendGuid = (data.guid as { value: string })?.value;
    const lightType = getLightType(data);
    const showHelper = (data.helper as { value: boolean })?.value ?? false;

    if (!backendGuid) {
        console.warn("Light data missing backendGuid");
        return;
    }

    const newLight = convertLightData(data);
    if (!newLight) {
        console.warn(`Failed to convert light of type: ${lightType}`);
        return;
    }

    lightManager(newLight, backendGuid, lightType, { helper: showHelper });
}

/**
 * Add a new light to the scene
 */
export function addLight(
    newLight: THREE.Light | Sky,
    backendGuid: string,
    showHelper?: boolean
): void {
    scene.add(newLight);

    // Add spotlight target to scene if it exists
    if (newLight instanceof THREE.SpotLight && newLight.target) {
        scene.add(newLight.target);
    }

    const lightType = getLightTypeFromObject(newLight);

    const entry: LightEntry = {
        light: newLight,
        backendGuid,
        lightType,
    };

    // Add entry to map first so helper can reference it
    SCENE_LIGHTS.set(backendGuid, entry);

    if (showHelper) {
        addLightHelper(newLight, backendGuid);
        // Helper was added and stored in entry by addLightHelper
    }
}

/**
 * Remove a light from the scene
 */
export function removeLight(backendGuidOrObject: string | THREE.Light | Sky): void {
    let backendGuid: string;
    let entry: LightEntry | undefined;

    // Determine if parameter is a backend guid or a light object
    if (typeof backendGuidOrObject === "string") {
        backendGuid = backendGuidOrObject;
        entry = SCENE_LIGHTS.get(backendGuid);
    } else {
        // Find the entry by light object reference
        entry = Array.from(SCENE_LIGHTS.values()).find((e) => e.light === backendGuidOrObject);
        if (!entry) return;
        backendGuid = entry.backendGuid;
    }

    if (!entry) {
        console.warn(`Light with backendGuid ${backendGuid} not found`);
        return;
    }

    removeLightHelper(backendGuid);
    scene.remove(entry.light);

    if (entry.light instanceof THREE.SpotLight && entry.light.target) {
        scene.remove(entry.light.target);
    }

    SCENE_LIGHTS.delete(backendGuid);
}

/**
 * Update an existing light's properties
 */
export function updateLight(
    backendGuidOrOldLight: string | THREE.Light | Sky,
    newLight: THREE.Light | Sky
): void {
    let backendGuid: string;
    let entry: LightEntry | undefined;

    // Determine if first parameter is a backend guid or a light object
    if (typeof backendGuidOrOldLight === "string") {
        backendGuid = backendGuidOrOldLight;
        entry = SCENE_LIGHTS.get(backendGuid);
    } else {
        // Find the entry by old light object reference
        entry = Array.from(SCENE_LIGHTS.values()).find((e) => e.light === backendGuidOrOldLight);
        if (!entry) return;
        backendGuid = entry.backendGuid;
    }

    if (!entry) {
        console.warn(`Light with backendGuid ${backendGuid} not found`);
        return;
    }

    const oldLight = entry.light;
    const oldHelper = entry.helper;
    const newLightType = getLightTypeFromObject(newLight);

    // Remove old helper if exists
    if (oldHelper) {
        removeLightHelper(backendGuid);
    }

    // Replace old light with new one
    scene.remove(oldLight);
    scene.add(newLight);

    entry.light = newLight;
    entry.lightType = newLightType;
}

/**
 * Add a helper for a light
 */
export function addLightHelper(
    lightOrBackendGuid: THREE.Light | Sky | string,
    backendGuid?: string
): void {
    let light: THREE.Light | Sky;
    let guid: string;

    // Determine parameters based on input
    if (typeof lightOrBackendGuid === "string") {
        guid = lightOrBackendGuid;
        const entry = SCENE_LIGHTS.get(guid);
        if (!entry) return;
        light = entry.light;
    } else {
        light = lightOrBackendGuid;
        guid = backendGuid || "";
        if (!guid) {
            const entry = Array.from(SCENE_LIGHTS.values()).find((e) => e.light === light);
            if (!entry) return;
            guid = entry.backendGuid;
        }
    }

    let newHelper: THREE.Object3D | null = null;
    const lightType = getLightTypeFromObject(light);

    switch (lightType) {
        case "point_light":
            newHelper = new THREE.PointLightHelper(light as THREE.PointLight, 0.5);
            break;
        case "spot_light":
            newHelper = new THREE.SpotLightHelper(light as THREE.SpotLight);
            break;
        case "rect_light":
            newHelper = new RectAreaLightHelper(light as THREE.RectAreaLight);
            break;
        case "sunlight":
            newHelper = new THREE.DirectionalLightHelper(light as THREE.DirectionalLight);
            break;
    }

    if (!newHelper) {
        return;
    }

    scene.add(newHelper);

    const entry = SCENE_LIGHTS.get(guid);
    if (entry) {
        entry.helper = newHelper;
    }
}

/**
 * Remove a light's helper
 */
export function removeLightHelper(backendGuidOrObject: string | THREE.Light | Sky): void {
    let backendGuid: string;
    let entry: LightEntry | undefined;

    // Determine if parameter is a backend guid or a light object
    if (typeof backendGuidOrObject === "string") {
        backendGuid = backendGuidOrObject;
        entry = SCENE_LIGHTS.get(backendGuid);
    } else {
        // Find the entry by light object reference
        entry = Array.from(SCENE_LIGHTS.values()).find((e) => e.light === backendGuidOrObject);
        if (!entry) return;
        backendGuid = entry.backendGuid;
    }

    if (!entry || !entry.helper) {
        return;
    }

    const oldHelper = entry.helper;
    scene.remove(oldHelper);
    entry.helper = undefined;
}

/**
 * Manage sky lights (special case with multiple lights)
 */
function manageSkyLight(newSky: Sky, skyBackendGuid: string): void {
    const existingEntry = SCENE_SKY_LIGHTS.get(skyBackendGuid);

    if (existingEntry) {
        updateSkyLight(skyBackendGuid, newSky);
    } else {
        addSkyLight(skyBackendGuid, newSky);
    }
}

/**
 * Add a new sky light (includes sky, sun, and ambient light)
 */
function addSkyLight(skyBackendGuid: string, newSky: Sky): void {
    const newSun = new THREE.DirectionalLight(0xffffff, 1.0);
    const newAmbient = new THREE.AmbientLight(0xffffff, 0.6);

    scene.add(newSky);
    scene.add(newSun);
    scene.add(newAmbient);

    const entry: SkyLightEntry = {
        sky: newSky,
        sun: newSun,
        ambient: newAmbient,
        backendGuid: skyBackendGuid,
    };

    SCENE_SKY_LIGHTS.set(skyBackendGuid, entry);
}

/**
 * Update an existing sky light
 */
function updateSkyLight(skyBackendGuidToUpdate: string, newSky: Sky): void {
    const entry = SCENE_SKY_LIGHTS.get(skyBackendGuidToUpdate);

    if (!entry) {
        console.warn(`Sky light with skyBackendGuid ${skyBackendGuidToUpdate} not found`);
        return;
    }

    const oldSky = entry.sky;
    scene.remove(oldSky);
    scene.add(newSky);

    entry.sky = newSky;
}

/**
 * Remove a sky light (removes sky, sun, and ambient light)
 */
export function removeSkyLight(skyBackendGuid: string): void {
    const entry = SCENE_SKY_LIGHTS.get(skyBackendGuid);

    if (!entry) {
        console.warn(`Sky light with skyBackendGuid ${skyBackendGuid} not found`);
        return;
    }

    scene.remove(entry.sky);
    scene.remove(entry.sun);
    scene.remove(entry.ambient);

    SCENE_SKY_LIGHTS.delete(skyBackendGuid);
}

/**
 * Get all lights in the scene
 */
export function getAllLights(): LightEntry[] {
    return Array.from(SCENE_LIGHTS.values());
}

/**
 * Get a specific light by backendGuid
 */
export function getLight(backendGuid: string): LightEntry | undefined {
    return SCENE_LIGHTS.get(backendGuid);
}

/**
 * Clear all lights from the scene
 */
export function clearAllLights(): void {
    SCENE_LIGHTS.forEach((entry) => {
        scene.remove(entry.light);
        if (entry.helper) {
            scene.remove(entry.helper);
        }
    });

    SCENE_SKY_LIGHTS.forEach((entry) => {
        scene.remove(entry.sky);
        scene.remove(entry.sun);
        scene.remove(entry.ambient);
    });

    SCENE_LIGHTS.clear();
    SCENE_SKY_LIGHTS.clear();
}
