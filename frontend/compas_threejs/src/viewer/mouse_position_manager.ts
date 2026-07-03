/**
 * Manages mouse position conversion to normalized device coordinates
 */
export class MousePositionManager {
    private canvas: HTMLCanvasElement;
    private pickPosition: { x: number; y: number } = { x: 0, y: 0 };

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
    }

    /**
     * Get canvas-relative position from mouse event
     */
    private getCanvasRelativePosition(event: MouseEvent): { x: number; y: number } {
        const rect = this.canvas.getBoundingClientRect();
        return {
            x: (event.clientX - rect.left) * (this.canvas.width / rect.width),
            y: (event.clientY - rect.top) * (this.canvas.height / rect.height),
        };
    }

    /**
     * Convert mouse position to normalized device coordinates (-1 to 1)
     */
    getNormalizedPosition(event: MouseEvent): { x: number; y: number } {
        const pos = this.getCanvasRelativePosition(event);
        return {
            x: (pos.x / this.canvas.width) * 2 - 1,
            y: (pos.y / this.canvas.height) * -2 + 1, // note: Y is flipped
        };
    }

    public getPickPosition(): { x: number; y: number } {
        return this.pickPosition;
    }
}
