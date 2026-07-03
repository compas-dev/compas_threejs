import { camera, controls, renderer, scene } from "./scene_manager";

type Vector3 = { x: number; y: number; z: number };

export type SavedView = {
    id: string;
    name: string;
    cameraPosition: Vector3;
    target: Vector3;
    zoom: number;
    fov: number;
};

export type ScreenshotFormat = "png" | "jpg" | "webp";

type ScreenshotFormatConfig = {
    mimeType: string;
    extension: string;
    requiresQuality: boolean;
    defaultQuality?: number;
};

const SCREENSHOT_FORMAT_CONFIG: Record<ScreenshotFormat, ScreenshotFormatConfig> = {
    png: { mimeType: "image/png", extension: "png", requiresQuality: false },
    jpg: { mimeType: "image/jpeg", extension: "jpg", requiresQuality: true, defaultQuality: 0.92 },
    webp: { mimeType: "image/webp", extension: "webp", requiresQuality: false },
};

export type ScreenshotOptions = {
    width?: number;
    height?: number;
    format?: ScreenshotFormat;
    fileName?: string;
    quality?: number;
};

const MINIMUM_DIMENSION = 16;
const CANVAS_CONTEXT_ERROR = "Unable to create screenshot canvas context";

function extractVector3(source: { x: number; y: number; z: number }): Vector3 {
    return { x: source.x, y: source.y, z: source.z };
}

export function captureCurrentView(name: string): SavedView {
    return {
        id: `view-${Date.now()}`,
        name,
        cameraPosition: extractVector3(camera.position),
        target: extractVector3(controls.target),
        zoom: camera.zoom,
        fov: camera.fov,
    };
}

function applyVector3(
    target: { set: (x: number, y: number, z: number) => void },
    source: Vector3
): void {
    target.set(source.x, source.y, source.z);
}

export function applySavedView(view: SavedView): void {
    applyVector3(camera.position, view.cameraPosition);
    applyVector3(controls.target, view.target);
    camera.zoom = view.zoom;
    camera.fov = view.fov;
    camera.updateProjectionMatrix();
    controls.update();
}

function sanitizeDimension(value: number, fallback: number): number {
    if (!Number.isFinite(value) || value <= 0) {
        return fallback;
    }
    return Math.max(MINIMUM_DIMENSION, Math.round(value));
}

function getSourceDimensions(): { width: number; height: number } {
    const source = renderer.domElement;
    const sourceRect = source.getBoundingClientRect();
    const width = Math.round(sourceRect.width) || source.clientWidth || source.width;
    const height = Math.round(sourceRect.height) || source.clientHeight || source.height;
    return { width, height };
}

function prepareCanvasBackground(
    context: CanvasRenderingContext2D,
    width: number,
    height: number,
    format: ScreenshotFormat
): void {
    if (format === "jpg") {
        context.fillStyle = "#ffffff";
        context.fillRect(0, 0, width, height);
    } else {
        context.clearRect(0, 0, width, height);
    }
}

function calculateScaleFit(
    targetWidth: number,
    targetHeight: number,
    sourceWidth: number,
    sourceHeight: number
): {
    scale: number;
    drawWidth: number;
    drawHeight: number;
    offsetX: number;
    offsetY: number;
} {
    const scale = Math.max(targetWidth / sourceWidth, targetHeight / sourceHeight);
    const drawWidth = Math.round(sourceWidth * scale);
    const drawHeight = Math.round(sourceHeight * scale);
    const offsetX = Math.floor((targetWidth - drawWidth) / 2);
    const offsetY = Math.floor((targetHeight - drawHeight) / 2);
    return { scale, drawWidth, drawHeight, offsetX, offsetY };
}

function createExportCanvas(
    width: number,
    height: number,
    format: ScreenshotFormat
): HTMLCanvasElement {
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;

    const context = canvas.getContext("2d");
    if (!context) {
        throw new Error(CANVAS_CONTEXT_ERROR);
    }

    const { width: sourceWidth, height: sourceHeight } = getSourceDimensions();
    prepareCanvasBackground(context, width, height, format);

    const { offsetX, offsetY, drawWidth, drawHeight } = calculateScaleFit(
        width,
        height,
        sourceWidth,
        sourceHeight
    );
    context.drawImage(renderer.domElement, offsetX, offsetY, drawWidth, drawHeight);

    return canvas;
}

function triggerDownload(href: string, fileName: string): void {
    const link = document.createElement("a");
    link.download = fileName;
    link.href = href;
    link.click();
}

function buildDefaultFileName(extension: string): string {
    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    return `compas-view-${timestamp}.${extension}`;
}

function getRendererDimensions(): { width: number; height: number } {
    const { domElement } = renderer;
    return {
        width: domElement.width || domElement.clientWidth,
        height: domElement.height || domElement.clientHeight,
    };
}

export function saveCurrentCanvasImage(options: ScreenshotOptions = {}): void {
    controls.update();
    renderer.render(scene, camera);

    const format = options.format ?? "png";
    const { width: fallbackWidth, height: fallbackHeight } = getRendererDimensions();
    const width = sanitizeDimension(options.width ?? fallbackWidth, fallbackWidth);
    const height = sanitizeDimension(options.height ?? fallbackHeight, fallbackHeight);
    const exportCanvas = createExportCanvas(width, height, format);

    const formatConfig = SCREENSHOT_FORMAT_CONFIG[format];
    const quality = formatConfig.requiresQuality
        ? (options.quality ?? formatConfig.defaultQuality)
        : undefined;
    const fileName = options.fileName ?? buildDefaultFileName(formatConfig.extension);
    const dataUrl = exportCanvas.toDataURL(formatConfig.mimeType, quality);

    triggerDownload(dataUrl, fileName);
}
