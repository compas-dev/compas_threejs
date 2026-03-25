import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { initializePicker, PickHelper } from "./picker";
import { pickerEnabled, trajectoryState } from "@/store/store";

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

// ==========================================
// --- DYNAMIC CAMERA ENGINE ---
// ==========================================
let trackingTarget: THREE.Object3D | null = null;
let followOffset: THREE.Vector3 | null = null;
let previousMode: string = 'free';

function animate() {
  requestAnimationFrame(animate);
  
  const currentMode = trajectoryState.cameraMode;

  if (currentMode !== 'free') {
    // 1. Find the TCP Triad (Red Cylinder) if we haven't already
    if (!trackingTarget) {
      scene.traverse((child) => {
        if (child instanceof THREE.Mesh && child.material && child.material.color) {
          if (child.material.color.r === 1 && child.material.color.g === 0 && child.material.color.b === 0) {
            trackingTarget = child;
          }
        }
      });
    }

    if (trackingTarget) {
      const targetPos = new THREE.Vector3();
      trackingTarget.getWorldPosition(targetPos);

      if (currentMode === 'look') {
        controls.target.lerp(targetPos, 0.08);
        followOffset = null;
      } 

      else if (currentMode === 'follow') {
        if (previousMode !== 'follow' || !followOffset) {
          followOffset = new THREE.Vector3().subVectors(camera.position, controls.target);
        }
        controls.target.lerp(targetPos, 0.08);
        const desiredCameraPos = new THREE.Vector3().addVectors(controls.target, followOffset);
        camera.position.lerp(desiredCameraPos, 0.08);
      }
    }
  } else {
    trackingTarget = null; 
    followOffset = null;
  }

  previousMode = currentMode;

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
