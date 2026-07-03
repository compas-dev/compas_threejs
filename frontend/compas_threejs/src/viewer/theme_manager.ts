import * as THREE from "three";
import { theme } from "@/store/store";

const DARK_LIGHTNESS_THRESHOLD = 0.5;

const lightBackgroundColor = 0xe6e6e6;
const darkBackgroundColor = 0x000000;
let userLightBackgroundColor: number | null = null;
let userDarkBackgroundColor: number | null = null;
let sceneInstance: THREE.Scene | null = null;

function getColorLightness(color: number): number {
    const r8 = (color >> 16) & 255;
    const g8 = (color >> 8) & 255;
    const b8 = color & 255;

    // Lightweight threshold approximation for UI mode switching.
    return (r8 + g8 + b8) / (3 * 255);
}

function isDarkBackgroundColor(color: number): boolean {
    return getColorLightness(color) < DARK_LIGHTNESS_THRESHOLD;
}

/**
 * Initialize the theme manager with a scene instance
 */
export function initializeThemeManager(scene: THREE.Scene): void {
    sceneInstance = scene;
}

interface ThemeUpdateData {
    mode?: { value: string };
}

export function themeManager(data: ThemeUpdateData): void {
    if (data.mode?.value === "dark") {
        goDarkMode();
    } else if (data.mode?.value === "light") {
        goLightMode();
    }
}

export function setUserBackgroundColor(color: number | null) {
    if (color === null) {
        userLightBackgroundColor = null;
        userDarkBackgroundColor = null;
        return;
    }

    if (isDarkBackgroundColor(color)) {
        userDarkBackgroundColor = color;
        goDarkMode();
    } else {
        userLightBackgroundColor = color;
        goLightMode();
    }
}

export function toggleTheme() {
    if (theme.value === "dark") {
        goLightMode();
    } else if (theme.value === "light") {
        goDarkMode();
    }
}

export function goDarkMode() {
    if (!sceneInstance) {
        console.warn("Theme manager not initialized. Call initializeThemeManager() first.");
        return;
    }

    if (userDarkBackgroundColor !== null) {
        sceneInstance.background = new THREE.Color(userDarkBackgroundColor);
    } else {
        sceneInstance.background = new THREE.Color(darkBackgroundColor);
    }

    theme.value = "dark";
}

export function goLightMode() {
    if (!sceneInstance) {
        console.warn("Theme manager not initialized. Call initializeThemeManager() first.");
        return;
    }

    if (userLightBackgroundColor !== null) {
        sceneInstance.background = new THREE.Color(userLightBackgroundColor);
    } else {
        sceneInstance.background = new THREE.Color(lightBackgroundColor);
    }
    theme.value = "light";
}
