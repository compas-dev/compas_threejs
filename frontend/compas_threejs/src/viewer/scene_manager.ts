import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { initializePicker, PickHelper } from "./picker";
import { pickerEnabled, theme } from "@/store/store";
import { SCENE_GEOMETRIES } from "./geometry_manager";
import { GEOMETRY_MATERIALS } from "./material_manager";
import { showEdges } from "@/store/store";
import { goDarkMode, goLightMode, setUserBackgroundColor } from "./theme_manager";

// Change the default UP vector for all objects
THREE.Object3D.DEFAULT_UP.set(0, 0, 1);

// Initialize Scene
export const scene = new THREE.Scene();

// Initialize Camera
export const camera = new THREE.PerspectiveCamera(
    60,
    window.innerWidth / window.innerHeight,
    0.1,
    1000,
);
camera.position.set(8, -15, 15);
camera.zoom = 1;
camera.layers.enable(1);

export type ViewPreset =
    | "top"
    | "bottom"
    | "front"
    | "back"
    | "left"
    | "right"
    | "front_left"
    | "front_right"
    | "back_left"
    | "back_right";

export const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMappingExposure = 2.5;
renderer.physicallyCorrectLights = true;
renderer.outputColorSpace = THREE.SRGBColorSpace;
document.body.appendChild(renderer.domElement);

// Controls
export const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.mouseButtons = {
    LEFT: null,
    MIDDLE: null,
    RIGHT: THREE.MOUSE.ROTATE,
};

const viewPresets: Record<ViewPreset, THREE.Vector3> = {
    top: new THREE.Vector3(0, 0, 1),
    bottom: new THREE.Vector3(0, 0, -1),
    front: new THREE.Vector3(0, -1, 0),
    back: new THREE.Vector3(0, 1, 0),
    left: new THREE.Vector3(-1, 0, 0),
    right: new THREE.Vector3(1, 0, 0),
    front_left: new THREE.Vector3(-1, -1, 1),
    front_right: new THREE.Vector3(1, -1, 1),
    back_left: new THREE.Vector3(-1, 1, 1),
    back_right: new THREE.Vector3(1, 1, 1),
};

const NUMPAD_VIEW_MAP = new Map<string, ViewPreset>([
    ["Numpad5", "top"],
    ["Numpad0", "bottom"],
    ["Numpad2", "front"],
    ["Numpad8", "back"],
    ["Numpad4", "left"],
    ["Numpad6", "right"],
    ["Numpad1", "front_left"],
    ["Numpad3", "front_right"],
    ["Numpad7", "back_left"],
    ["Numpad9", "back_right"],
]);

// Create an axes helper with a size of 5 units
const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);

// Initialize the picker
const picker = new PickHelper();
initializePicker(picker);

// Ensure the initial scene background matches the current theme value.
if (theme.value === "dark") {
    goDarkMode();
} else {
    goLightMode();
}

// The Loop
function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}
animate();

window.addEventListener("keydown", (event) => {
    if (event.altKey || event.ctrlKey || event.metaKey) {
        return;
    }

    const preset = getViewPresetFromKey(event.code);
    if (!preset) {
        return;
    }

    applyViewPreset(preset);
    event.preventDefault();
});

// Resize Handling
window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

function applyViewPreset(preset: ViewPreset) {
    const target = controls.target.clone();
    const direction = viewPresets[preset].clone().normalize();
    const distance = camera.position.distanceTo(target);

    camera.position.copy(
        target.clone().add(direction.multiplyScalar(distance)),
    );
    controls.update();
}

export function setCameraViewPreset(preset: ViewPreset) {
    applyViewPreset(preset);
}

function getViewPresetFromKey(code: string): ViewPreset | null {
    return NUMPAD_VIEW_MAP.get(code) ?? null;
}

export function sceneManager(data: { [key: string]: any }) {
    switch (data.type.value) {
        case "background_color":
            updateSceneBackgroundColor(data);
            break;
        case "controls_damping":
            controls.enableDamping = data.damping.value;
            break;
        case "world_axis":
            axesHelper.visible = data.show.value;
            break;
        case "picker":
            pickerEnabled.value = data.enabled.value;
            break;
        case "camera_fov":
            camera.fov = data.fov.value;
            camera.updateProjectionMatrix();
            break;
        case "camera_zoom":
            camera.zoom = data.zoom.value;
            camera.updateProjectionMatrix();
            break;
        case "camera_position":
            camera.position.set(data.x.value, data.y.value, data.z.value);
            controls.update();
            break;
        case "camera_target":
            controls.target.set(data.x.value, data.y.value, data.z.value);
            controls.update();
            break;
        case "camera_view": {
            const preset = data.preset.value as ViewPreset;
            if (preset) {
                applyViewPreset(preset);
            }
            break;
        }
        case "show_edges":
            showEdges.value = data.show.value;
            break;
        default:
            console.warn("Unknown scene type:", data.type.value);
    }
}

function updateSceneBackgroundColor(data: { [key: string]: any }) {
    let color = data.color.value;
    color = color.replace("#", "0x");
    color = parseInt(color);
    setUserBackgroundColor(color);
}

export function removeObjectFromScene(data: { [key: string]: any }) {
    const obj_guid = data.guid.value;
    if (obj_guid in SCENE_GEOMETRIES) {
        const obj = SCENE_GEOMETRIES[obj_guid];
        scene.remove(obj);
        delete SCENE_GEOMETRIES[obj_guid];
    }

    if (obj_guid in GEOMETRY_MATERIALS) {
        delete GEOMETRY_MATERIALS[obj_guid];
    }
}
