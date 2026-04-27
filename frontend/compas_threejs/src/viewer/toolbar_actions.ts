import { setCameraViewPreset } from "./scene_manager";
import { setTransformMode } from "./picker";
import { toggleBackgroundMode } from "./theme_manager";
import {
  saveCurrentCanvasImage,
  applySavedView,
  captureCurrentView,
} from "./scene_view_manager";
export {
  // Group 1: transformations
  setTransformMode,

  // Group 2: camera views
  setCameraViewPreset,

  // Group 3: view management and export
  captureCurrentView,
  applySavedView,
  saveCurrentCanvasImage,
  toggleBackgroundMode,
};

export type {
  SavedView,
  ScreenshotFormat,
  ScreenshotOptions,
} from "./scene_view_manager";
