import * as THREE from "three";
import { theme } from "@/store/store";
import { scene } from "../viewer/scene_manager";

const DARK_LIGHTNESS_THRESHOLD = 0.5;

const lightBackgroundColor = 0xe6e6e6;
const darkBackgroundColor = 0x000000;
let userLightBackgroundColor: number | null = null;
let userDarkBackgroundColor: number | null = null;

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

export function themeManager(data: Record<string, unknown>): void {
    if (data.mode.value === "dark") {
        goDarkMode();
    } else if (data.mode.value === "light") {
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
    if (userDarkBackgroundColor !== null) {
        scene.background = new THREE.Color(userDarkBackgroundColor);
    } else {
        scene.background = new THREE.Color(darkBackgroundColor);
    }

    theme.value = "dark";
}

export function goLightMode() {
    if (userLightBackgroundColor !== null) {
        scene.background = new THREE.Color(userLightBackgroundColor);
    } else {
        scene.background = new THREE.Color(lightBackgroundColor);
    }
    theme.value = "light";
}
