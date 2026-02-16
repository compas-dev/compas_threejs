import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

// Initialize Scene
export const scene = new THREE.Scene();

// Initialize Camera
export const camera = new THREE.PerspectiveCamera(
  60,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
);
camera.position.set(10, 10, 15);

export const renderer = new THREE.WebGLRenderer({ antialias: true });
// export const renderer = new THREE.WebGPURenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMappingExposure = 2.5;
// renderer.physicallyCorrectLights = true;
// renderer.outputColorSpace = THREE.SRGBColorSpace;
// renderer.setAnimationLoop(animate);
document.body.appendChild(renderer.domElement);

// Controls
export const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

// The Loop
// export function startAnimation() {
function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}
animate();
// }

// // Environment & Lighting;
// const pmremGenerator = new THREE.PMREMGenerator(renderer);
// scene.environment = pmremGenerator.fromScene(new DebugEnvironment()).texture;

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
