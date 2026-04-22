import { camera, controls, renderer, scene } from "./scene_manager";

export type SavedView = {
  id: string;
  name: string;
  cameraPosition: { x: number; y: number; z: number };
  target: { x: number; y: number; z: number };
  zoom: number;
  fov: number;
};

export function captureCurrentView(name: string): SavedView {
  return {
    id: `view-${Date.now()}`,
    name,
    cameraPosition: {
      x: camera.position.x,
      y: camera.position.y,
      z: camera.position.z,
    },
    target: {
      x: controls.target.x,
      y: controls.target.y,
      z: controls.target.z,
    },
    zoom: camera.zoom,
    fov: camera.fov,
  };
}

export function applySavedView(view: SavedView) {
  camera.position.set(
    view.cameraPosition.x,
    view.cameraPosition.y,
    view.cameraPosition.z,
  );
  controls.target.set(view.target.x, view.target.y, view.target.z);
  camera.zoom = view.zoom;
  camera.fov = view.fov;
  camera.updateProjectionMatrix();
  controls.update();
}

export function saveCurrentCanvasAsPng(fileName?: string) {
  controls.update();
  renderer.render(scene, camera);

  const link = document.createElement("a");
  link.download =
    fileName ?? `compas-view-${new Date().toISOString().replace(/[:.]/g, "-")}.png`;
  link.href = renderer.domElement.toDataURL("image/png");
  link.click();
}
