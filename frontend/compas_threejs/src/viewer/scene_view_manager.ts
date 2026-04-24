import { camera, controls, renderer, scene } from "./scene_manager";

export type SavedView = {
  id: string;
  name: string;
  cameraPosition: { x: number; y: number; z: number };
  target: { x: number; y: number; z: number };
  zoom: number;
  fov: number;
};

export type ScreenshotFormat = "png" | "jpg" | "webp";

export type ScreenshotOptions = {
  width?: number;
  height?: number;
  format?: ScreenshotFormat;
  fileName?: string;
  quality?: number;
};

export function captureCurrentView(name: string): SavedView {
  return {
    id: `view-${Date.now()}`,
    name,
    cameraPosition: {
      x: camera.position.x,
      y: camera.position.y,
      z: camera.position.z,
    },
    target: {
      x: controls.target.x,
      y: controls.target.y,
      z: controls.target.z,
    },
    zoom: camera.zoom,
    fov: camera.fov,
  };
}

export function applySavedView(view: SavedView) {
  camera.position.set(
    view.cameraPosition.x,
    view.cameraPosition.y,
    view.cameraPosition.z,
  );
  controls.target.set(view.target.x, view.target.y, view.target.z);
  camera.zoom = view.zoom;
  camera.fov = view.fov;
  camera.updateProjectionMatrix();
  controls.update();
}

function sanitizeDimension(value: number, fallback: number) {
  if (!Number.isFinite(value) || value <= 0) {
    return fallback;
  }

  return Math.max(16, Math.round(value));
}

function createExportCanvas(width: number, height: number, format: ScreenshotFormat) {
  const exportCanvas = document.createElement("canvas");
  exportCanvas.width = width;
  exportCanvas.height = height;

  const context = exportCanvas.getContext("2d");
  if (!context) {
    throw new Error("Unable to create screenshot canvas context");
  }

  const source = renderer.domElement;
  const sourceRect = source.getBoundingClientRect();
  const sourceWidth =
    Math.round(sourceRect.width) || source.clientWidth || source.width;
  const sourceHeight =
    Math.round(sourceRect.height) || source.clientHeight || source.height;

  if (format === "jpg") {
    // JPEG has no alpha channel; this is only a safe base layer before drawing.
    context.fillStyle = "#ffffff";
    context.fillRect(0, 0, width, height);
  } else {
    context.clearRect(0, 0, width, height);
  }

  // Use "cover" behavior: fill target size without distortion, crop overflow.
  const scale = Math.max(width / sourceWidth, height / sourceHeight);
  const drawWidth = Math.round(sourceWidth * scale);
  const drawHeight = Math.round(sourceHeight * scale);
  const offsetX = Math.floor((width - drawWidth) / 2);
  const offsetY = Math.floor((height - drawHeight) / 2);

  context.drawImage(source, offsetX, offsetY, drawWidth, drawHeight);

  return exportCanvas;
}

function triggerDownload(href: string, fileName: string) {
  const link = document.createElement("a");
  link.download = fileName;
  link.href = href;
  link.click();
}

function buildDefaultFileName(extension: string) {
  return `compas-view-${new Date().toISOString().replace(/[:.]/g, "-")}.${extension}`;
}

export function saveCurrentCanvasImage(options: ScreenshotOptions = {}) {
  controls.update();
  renderer.render(scene, camera);

  const format = options.format ?? "png";
  const fallbackWidth = renderer.domElement.width || renderer.domElement.clientWidth;
  const fallbackHeight = renderer.domElement.height || renderer.domElement.clientHeight;
  const width = sanitizeDimension(options.width ?? fallbackWidth, fallbackWidth);
  const height = sanitizeDimension(options.height ?? fallbackHeight, fallbackHeight);
  const exportCanvas = createExportCanvas(width, height, format);

  const mimeType =
    format === "jpg"
      ? "image/jpeg"
      : format === "webp"
        ? "image/webp"
        : "image/png";
  const quality = format === "jpg" ? (options.quality ?? 0.92) : undefined;
  const extension =
    format === "jpg" ? "jpg" : format === "webp" ? "webp" : "png";
  const fileName = options.fileName ?? buildDefaultFileName(extension);
  const dataUrl = exportCanvas.toDataURL(mimeType, quality);

  triggerDownload(dataUrl, fileName);
}
