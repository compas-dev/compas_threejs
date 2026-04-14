import {
  setCameraViewPreset,
  captureCurrentView,
  applySavedView,
  saveCurrentCanvasAsPng,
} from "./scene_manager";
import {
  toggleBackgroundMode,
  subscribeBackgroundMode,
} from "./theme_manager";
import { setTransformMode } from "./picker";
import { toggleObjectMotionPaused } from "@/communications/objectMotion";
import type { BackgroundMode } from "@/store/store";

export {
  // Group 1: transformations and motion
  setTransformMode,
  toggleObjectMotionPaused,

  // Group 2: camera views
  setCameraViewPreset,

  // Group 3: view management, theme, and export
  captureCurrentView,
  applySavedView,
  saveCurrentCanvasAsPng,
  toggleBackgroundMode,
  subscribeBackgroundMode,
};

export type { BackgroundMode };
export type { SavedView } from "./scene_manager";
