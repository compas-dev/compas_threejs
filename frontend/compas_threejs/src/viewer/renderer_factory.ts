import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

// Change the default UP vector for all objects
THREE.Object3D.DEFAULT_UP.set(0, 0, 1);

/**
 * Factory for creating and configuring Three.js scene, camera, renderer, and controls.
 */
export function createScene(): THREE.Scene {
    const scene = new THREE.Scene();
    return scene;
}

export function createCamera(width: number, height: number): THREE.PerspectiveCamera {
    const camera = new THREE.PerspectiveCamera(
        60,
        width / height,
        0.1,
        1000
    );
    camera.position.set(8, -15, 15);
    camera.zoom = 1;
    camera.layers.enable(1);

    return camera;
}

export function createRenderer(width: number, height: number): THREE.WebGLRenderer {
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMappingExposure = 2.5;
    renderer.physicallyCorrectLights = true;
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    return renderer;
}

export function createControls(
    camera: THREE.PerspectiveCamera,
    rendererElement: HTMLCanvasElement
): OrbitControls {
    const controls = new OrbitControls(camera, rendererElement);
    controls.enableDamping = true;
    controls.mouseButtons = {
        LEFT: null,
        MIDDLE: null,
        RIGHT: THREE.MOUSE.ROTATE,
    };

    return controls;
}
