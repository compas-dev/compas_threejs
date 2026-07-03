import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

/**
 * Manages the animation loop and rendering.
 */
export class AnimationLoop {
    private animationFrameId: number | null = null;

    constructor(
        private renderer: THREE.WebGLRenderer,
        private scene: THREE.Scene,
        private camera: THREE.PerspectiveCamera,
        private controls: OrbitControls
    ) {}

    start(): void {
        if (this.animationFrameId !== null) {
            return; // Already running
        }
        this.animate();
    }

    stop(): void {
        if (this.animationFrameId !== null) {
            cancelAnimationFrame(this.animationFrameId);
            this.animationFrameId = null;
        }
    }

    private animate = (): void => {
        this.animationFrameId = requestAnimationFrame(this.animate);
        this.controls.update();
        this.renderer.render(this.scene, this.camera);
    };
}
