import { themeState, type BackgroundMode } from "@/store/store";

type BackgroundModeListener = (mode: BackgroundMode) => void;

const backgroundModeListeners = new Set<BackgroundModeListener>();
const DARK_LIGHTNESS_THRESHOLD = 0.5;

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
  if (themeState.backgroundOverrideMode !== "none") {
    themeState.backgroundMode = themeState.backgroundOverrideMode;
    return;
  }

  // In neutral mode, light is the default.
  themeState.backgroundMode = "light";
}

function notifyBackgroundModeChanged() {
  syncBackgroundModeState();
  const mode = themeState.backgroundMode;
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
  themeState.backgroundOverrideMode = mode;
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
  return themeState.backgroundMode;
}

export function setDefaultBackgroundColor(color: number): void {
  if (isDarkBackgroundColor(color)) {
    themeState.darkBackgroundColor = color;
    themeState.backgroundOverrideMode = "dark";
  } else {
    themeState.lightBackgroundColor = color;
    themeState.backgroundOverrideMode = "light";
  }

  notifyBackgroundModeChanged();
}

export function getEffectiveBackgroundColor(): number {
  if (themeState.backgroundOverrideMode === "dark") {
    return themeState.darkBackgroundColor;
  }

  return themeState.lightBackgroundColor;
}
