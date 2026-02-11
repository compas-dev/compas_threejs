import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";

// Initialize Scene
export const scene = new THREE.Scene();
scene.background = new THREE.Color(0x222222);

// Initialize Camera
export const camera = new THREE.PerspectiveCamera(
  60,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
);
camera.position.set(5, 5, 5);
console.log(camera);

// Initialize Renderer
export const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
document.body.appendChild(renderer.domElement);

// Environment & Lighting;
// const pmremGenerator = new THREE.PMREMGenerator(renderer);
// scene.environment = pmremGenerator.fromScene(new RoomEnvironment()).texture;

export const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

// scene.add(new THREE.AmbientLight(0xffffff, 0.5));
// const dirLight = new THREE.DirectionalLight(0xffffff, 1.0);
// dirLight.position.set(10, 10, 10);
// scene.add(dirLight);

// The Loop
export function startAnimation() {
  function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
  }
  animate();
}

// Resize Handling
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
