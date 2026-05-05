import { theme, type BackgroundMode } from "@/store/store";

type BackgroundModeListener = (mode: BackgroundMode) => void;

const backgroundModeListeners = new Set<BackgroundModeListener>();
const DARK_LIGHTNESS_THRESHOLD = 0.5;

let lightBackgroundColor = 0xe6e6e6;
let darkBackgroundColor = 0x000000;
let backgroundOverrideMode: "none" | BackgroundMode = "none";

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

function syncBackgroundModeState() {
  if (backgroundOverrideMode !== "none") {
    theme.value = backgroundOverrideMode;
    return;
  }

  if (theme.value !== "dark" && theme.value !== "light") {
    theme.value = "light";
  }
}

function notifyBackgroundModeChanged() {
  syncBackgroundModeState();
  const mode = theme.value;
  backgroundModeListeners.forEach((listener) => listener(mode));

  if (typeof document !== "undefined" && document.documentElement) {
    document.documentElement.classList.toggle("dark", mode === "dark");
  }
}

export function subscribeBackgroundMode(listener: BackgroundModeListener) {
  backgroundModeListeners.add(listener);
  listener(getBackgroundMode());

  return () => {
    backgroundModeListeners.delete(listener);
  };
}

export function setBackgroundMode(mode: BackgroundMode): BackgroundMode {
  backgroundOverrideMode = mode;
  theme.value = mode;
  notifyBackgroundModeChanged();
  return getBackgroundMode();
}

export function toggleBackgroundMode(): BackgroundMode {
  return getBackgroundMode() === "dark"
    ? setBackgroundMode("light")
    : setBackgroundMode("dark");
}

export function getBackgroundMode(): BackgroundMode {
  syncBackgroundModeState();
  return theme.value;
}

export function setDefaultBackgroundColor(color: number): void {
  if (isDarkBackgroundColor(color)) {
    darkBackgroundColor = color;
    backgroundOverrideMode = "dark";
    theme.value = "dark";
  } else {
    lightBackgroundColor = color;
    backgroundOverrideMode = "light";
    theme.value = "light";
  }

  notifyBackgroundModeChanged();
}

export function getEffectiveBackgroundColor(): number {
  if (backgroundOverrideMode === "dark") {
    return darkBackgroundColor;
  }
  if (backgroundOverrideMode === "light") {
    return lightBackgroundColor;
  }

  return theme.value === "dark" ? darkBackgroundColor : lightBackgroundColor;
}

export function handleThemeMessage(data: { [key: string]: any }): boolean {
  if (data.type?.value === "background_mode") {
    // mode.value expected to be 'dark' or 'light'
    setBackgroundMode(data.mode.value);
    return true;
  }

  return false;
}
