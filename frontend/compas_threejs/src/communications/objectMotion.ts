import { sendData } from "@/communications/communication";
import { motionState } from "@/store/store";

function notifyBackendObjectMotionPause(paused: boolean): void {
  sendData({
    dispatch: "object_motion_control",
    paused,
  });
}

export function setObjectMotionPaused(paused: boolean): void {
  if (!motionState.objectMotionAvailable) {
    return;
  }

  if (motionState.objectMotionPaused === paused) {
    return;
  }

  motionState.objectMotionPaused = paused;
  notifyBackendObjectMotionPause(paused);
}

export function toggleObjectMotionPaused(): boolean {
  if (!motionState.objectMotionAvailable) {
    return motionState.objectMotionPaused;
  }

  setObjectMotionPaused(!motionState.objectMotionPaused);
  return motionState.objectMotionPaused;
}

export function isObjectMotionPaused(): boolean {
  return motionState.objectMotionPaused;
}

export function setObjectMotionAvailable(available: boolean): void {
  motionState.objectMotionAvailable = available;

  if (!available) {
    motionState.objectMotionPaused = false;
  }
}

export function isObjectMotionAvailable(): boolean {
  return motionState.objectMotionAvailable;
}

export function objectMotionManager(data: { [key: string]: any }): void {
  switch (data.type.value) {
    case "availability":
      setObjectMotionAvailable(Boolean(data.enabled.value));
      break;
    default:
      console.warn("Unknown object motion type:", data.type.value);
  }
}
