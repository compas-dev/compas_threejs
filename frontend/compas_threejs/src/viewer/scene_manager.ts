import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { initializePicker } from "./picker";
import { pickerEnabled, theme } from "@/store/store";
import { SCENE_GEOMETRIES } from "./geometry_manager";
import { GEOMETRY_MATERIALS } from "./material_manager";
import { showEdges } from "@/store/store";
import {
    goDarkMode,
    goLightMode,
    setUserBackgroundColor,
    initializeThemeManager,
} from "./theme_manager";
import { createScene, createCamera, createRenderer, createControls } from "./renderer_factory";
import { ViewPresetManager, ViewPreset } from "./view_preset_manager";
import { AnimationLoop } from "./animation_loop";
import { ResizeManager } from "./resize_manager";

// Type definition for update data structure
interface UpdateValue<T> {
    value: T;
}

interface SceneUpdateData {
    type?: UpdateValue<string>;
    damping?: UpdateValue<boolean>;
    show?: UpdateValue<boolean>;
    enabled?: UpdateValue<boolean>;
    fov?: UpdateValue<number>;
    zoom?: UpdateValue<number>;
    x?: UpdateValue<number>;
    y?: UpdateValue<number>;
    z?: UpdateValue<number>;
    preset?: UpdateValue<ViewPreset>;
    color?: UpdateValue<string>;
    guid?: UpdateValue<string>;
}

/**
 * SceneManager orchestrates all Three.js scene initialization and management.
 * It creates the scene, camera, renderer, and manages updates from external configuration.
 */
class SceneManager {
    public readonly scene: THREE.Scene;
    public readonly camera: THREE.PerspectiveCamera;
    public readonly renderer: THREE.WebGLRenderer;
    public readonly controls: OrbitControls;

    private viewPresetManager: ViewPresetManager;
    private animationLoop: AnimationLoop;
    private resizeManager: ResizeManager;
    private axesHelper: THREE.AxesHelper;

    constructor() {
        // Create core THREE.js components
        this.scene = createScene();
        this.camera = createCamera(window.innerWidth, window.innerHeight);
        this.renderer = createRenderer(window.innerWidth, window.innerHeight);
        this.controls = createControls(this.camera, this.renderer.domElement);

        // Attach renderer to DOM
        document.body.appendChild(this.renderer.domElement);

        // Initialize helper systems
        this.viewPresetManager = new ViewPresetManager(this.camera, this.controls);
        this.animationLoop = new AnimationLoop(
            this.renderer,
            this.scene,
            this.camera,
            this.controls
        );
        this.resizeManager = new ResizeManager(this.camera, this.renderer);

        // Setup axes helper
        this.axesHelper = new THREE.AxesHelper(5);
        this.scene.add(this.axesHelper);

        // Initialize picker
        initializePicker(this.camera, this.renderer.domElement, this.scene, this.controls);

        // Initialize theme manager
        initializeThemeManager(this.scene);

        // Apply initial theme
        this.applyInitialTheme();

        // Start the animation loop
        this.animationLoop.start();
    }

    private applyInitialTheme(): void {
        if (theme.value === "dark") {
            goDarkMode();
        } else {
            goLightMode();
        }
    }

    /**
     * Process configuration updates from external sources
     */
    public handleSceneUpdate(data: SceneUpdateData): void {
        const updateType = data.type?.value;

        switch (updateType) {
            case "background_color":
                this.updateBackgroundColor(data);
                break;
            case "controls_damping":
                this.controls.enableDamping = Boolean(data.damping?.value);
                break;
            case "world_axis":
                this.axesHelper.visible = Boolean(data.show?.value);
                break;
            case "picker":
                pickerEnabled.value = Boolean(data.enabled?.value);
                break;
            case "camera_fov":
                this.camera.fov = Number(data.fov?.value);
                this.camera.updateProjectionMatrix();
                break;
            case "camera_zoom":
                this.camera.zoom = Number(data.zoom?.value);
                this.camera.updateProjectionMatrix();
                break;
            case "camera_position":
                this.camera.position.set(
                    Number(data.x?.value),
                    Number(data.y?.value),
                    Number(data.z?.value)
                );
                this.controls.update();
                break;
            case "camera_target":
                this.controls.target.set(
                    Number(data.x?.value),
                    Number(data.y?.value),
                    Number(data.z?.value)
                );
                this.controls.update();
                break;
            case "camera_view":
                {
                    const preset = data.preset?.value as ViewPreset;
                    if (preset) {
                        this.viewPresetManager.applyPreset(preset);
                    }
                }
                break;
            case "show_edges":
                showEdges.value = Boolean(data.show?.value);
                break;
            default:
                console.warn("Unknown scene update type:", updateType);
        }
    }

    private updateBackgroundColor(data: SceneUpdateData): void {
        let color = String(data.color?.value);
        color = color.replace("#", "0x");
        const colorValue = parseInt(color);
        setUserBackgroundColor(colorValue);
    }

    /**
     * Remove an object from the scene by its GUID
     */
    public removeObject(guid: string): void {
        if (guid in SCENE_GEOMETRIES) {
            const obj = SCENE_GEOMETRIES[guid];
            this.scene.remove(obj);
            delete SCENE_GEOMETRIES[guid];
        }

        if (guid in GEOMETRY_MATERIALS) {
            delete GEOMETRY_MATERIALS[guid];
        }
    }

    /**
     * Set the camera view to a preset
     */
    public setCameraViewPreset(preset: ViewPreset): void {
        this.viewPresetManager.applyPreset(preset);
    }

    /**
     * Dispose of all resources
     */
    public dispose(): void {
        this.animationLoop.stop();
        this.renderer.dispose();
    }
}

// Create singleton instance
const sceneMgrInstance = new SceneManager();

// Export public API
export const scene = sceneMgrInstance.scene;
export const camera = sceneMgrInstance.camera;
export const renderer = sceneMgrInstance.renderer;
export const controls = sceneMgrInstance.controls;
export type { ViewPreset };

/**
 * Handler for scene configuration updates from external sources
 */
export function sceneManager(data: Record<string, unknown>): void {
    sceneMgrInstance.handleSceneUpdate(data as SceneUpdateData);
}

/**
 * Remove an object from the scene
 */
export function removeObjectFromScene(data: Record<string, unknown>): void {
    const updateData = data as SceneUpdateData;
    const guid = String(updateData.guid?.value || "");
    sceneMgrInstance.removeObject(guid);
}

/**
 * Set camera view to a preset
 */
export function setCameraViewPreset(preset: ViewPreset): void {
    sceneMgrInstance.setCameraViewPreset(preset);
}
