import * as THREE from "three";

/**
 * Manages window resize events and updates camera/renderer accordingly.
 */
export class ResizeManager {
    constructor(
        private camera: THREE.PerspectiveCamera,
        private renderer: THREE.WebGLRenderer
    ) {
        this.setupResizeListener();
    }

    private setupResizeListener(): void {
        window.addEventListener("resize", () => {
            this.handleWindowResize();
        });
    }

    private handleWindowResize(): void {
        const width = window.innerWidth;
        const height = window.innerHeight;

        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(width, height);
    }
}
