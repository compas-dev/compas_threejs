import { sendData } from "@/communications/communication";
import { motionState } from "@/store/store";

function notifyBackendObjectMotionPause(paused: boolean): void {
  sendData({
    dispatch: "object_motion_control",
    paused,
  });
}

export function setObjectMotionPaused(paused: boolean): void {
  if (motionState.objectMotionPaused === paused) {
    return;
  }

  motionState.objectMotionPaused = paused;
  notifyBackendObjectMotionPause(paused);
}

export function toggleObjectMotionPaused(): boolean {
  setObjectMotionPaused(!motionState.objectMotionPaused);
  return motionState.objectMotionPaused;
}

export function isObjectMotionPaused(): boolean {
  return motionState.objectMotionPaused;
}
