import { themeState, type BackgroundMode } from "@/store/store";

type BackgroundModeListener = (mode: BackgroundMode) => void;

const backgroundModeListeners = new Set<BackgroundModeListener>();

function syncBackgroundModeState() {
  if (themeState.backgroundOverrideMode !== "none") {
    themeState.backgroundMode = themeState.backgroundOverrideMode;
    return;
  }

  themeState.backgroundMode =
    themeState.defaultBackgroundColor === themeState.darkBackgroundColor
      ? "dark"
      : "light";
}

function notifyBackgroundModeChanged() {
  syncBackgroundModeState();
  const mode = themeState.backgroundMode;
  backgroundModeListeners.forEach((listener) => listener(mode));
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
  themeState.defaultBackgroundColor = color;
  notifyBackgroundModeChanged();
}

export function getEffectiveBackgroundColor(): number {
  if (themeState.backgroundOverrideMode === "dark") {
    return themeState.darkBackgroundColor;
  }

  if (themeState.backgroundOverrideMode === "light") {
    return themeState.defaultBackgroundColor;
  }

  return themeState.defaultBackgroundColor;
}
