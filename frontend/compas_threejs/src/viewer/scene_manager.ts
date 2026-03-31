import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { initializePicker, PickHelper } from "./picker";
import { pickerEnabled } from "@/store/store";
import { SCENE_GEOMETRIES } from "./geometry_manager";
import { GEOMETRY_MATERIALS } from "./material_manager";

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

// Create an axes helper with a size of 5 units
const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);

// Initialize the picker
const picker = new PickHelper();
initializePicker(picker);

// The Loop
function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}
animate();

// Resize Handling
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

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
    default:
      console.warn("Unknown scene type:", data.type.value);
  }
}

function updateSceneBackgroundColor(data: { [key: string]: any }) {
  let color = data.color.value;
  color = color.replace("#", "0x");
  color = parseInt(color);
  scene.background = new THREE.Color(color);
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
