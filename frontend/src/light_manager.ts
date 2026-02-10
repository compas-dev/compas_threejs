import { scene } from "./scene_manager";
import * as THREE from "three";
import { RectAreaLightHelper } from "three/addons/helpers/RectAreaLightHelper.js";

export const SCENE_LIGHTS: { [guid: string]: THREE.Material } = {};
export const SCENE_LIGTH_HELPERS: { [guid: string]: THREE.Material } = {};

export function lightManager(data: { [key: string]: any }) {
  console.log(data.guid.value);
  if (SCENE_LIGHTS[data.guid.value]) {
    const light = SCENE_LIGHTS[data.guid.value];
    console.log("Removing light:", light);
    scene.remove(light);
    delete SCENE_LIGHTS[data.guid.value];
  }

  if (SCENE_LIGTH_HELPERS[data.guid.value]) {
    const helper = SCENE_LIGTH_HELPERS[data.guid.value];
    console.log("Removing helper:", helper);
    scene.remove(helper);
    delete SCENE_LIGTH_HELPERS[data.guid.value];
  }

  if (data.type.value == "point_light") {
    buildPointLight(data);
  } else if (data.type.value == "spot_light") {
    buildSpotLight(data);
  } else if (data.type.value == "rect_light") {
    buildRectLight(data);
  } else if (data.type.value == "sunlight") {
    buildSunlight(data);
  } else if (data.type.value == "skylight") {
    buildSkylight(data);
  } else if (data.type.value == "ambient_light") {
    buildAmbientLight(data);
  }
}

function buildPointLight(data: { [key: string]: any }) {
  let color = data.color.value;
  color = color.replace("#", "0x");
  color = parseInt(color);
  let intensity = data.intensity.value;
  let distance = data.distance.value;
  let decay = data.decay.value;

  const pointLight = new THREE.PointLight(color, intensity, distance, decay);
  pointLight.position.set(data.x.value, data.y.value, data.z.value);
  console.log(pointLight);
  scene.add(pointLight);

  if (data.helper.value) {
    const pointLightHelper = new THREE.PointLightHelper(pointLight, 0.5);
    scene.add(pointLightHelper);
    SCENE_LIGTH_HELPERS[data.guid.value] = pointLightHelper;
  }

  SCENE_LIGHTS[data.guid.value] = pointLight;
}

function buildSpotLight(data: { [key: string]: any }) {
  let color = data.color.value;
  color = color.replace("#", "0x");
  color = parseInt(color);
  let intensity = data.intensity.value;
  let distance = data.distance.value;
  let angle = data.angle.value;
  let penumbra = data.penumbra.value;
  let decay = data.decay.value;

  const spotLight = new THREE.SpotLight(
    color,
    intensity,
    distance,
    angle,
    penumbra,
    decay,
  );

  const position = new THREE.Vector3(data.x.value, data.y.value, data.z.value);
  const direction = new THREE.Vector3(
    data.dx.value,
    data.dy.value,
    data.dz.value,
  );

  spotLight.position.copy(position);

  const targetPosition = new THREE.Vector3().addVectors(position, direction);
  spotLight.target.position.copy(targetPosition);

  scene.add(spotLight);
  scene.add(spotLight.target);

  if (data.helper.value) {
    const spotLightHelper = new THREE.SpotLightHelper(spotLight);
    scene.add(spotLightHelper);
    SCENE_LIGTH_HELPERS[data.guid.value] = spotLightHelper;
  }

  SCENE_LIGHTS[data.guid.value] = spotLight;
}

function buildRectLight(data: { [key: string]: any }) {
  let color = data.color.value;
  color = color.replace("#", "0x");
  color = parseInt(color);
  let intensity = data.intensity.value;
  let width = data.width.value;
  let height = data.height.value;

  const rectLight = new THREE.RectAreaLight(color, intensity, width, height);

  rectLight.position.set(data.x.value, data.y.value, data.z.value);
  rectLight.lookAt(data.tx.value, data.ty.value, data.tz.value);

  scene.add(rectLight);

  if (data.helper.value) {
    const rectLightHelper = new RectAreaLightHelper(rectLight);
    scene.add(rectLightHelper);
    SCENE_LIGTH_HELPERS[data.guid.value] = rectLightHelper;
  }

  SCENE_LIGHTS[data.guid.value] = rectLight;
}

function buildSunlight(data: { [key: string]: any }) {
  let color = data.color.value;
  color = color.replace("#", "0x");
  color = parseInt(color);
  let intensity = data.intensity.value;

  const sunlight = new THREE.DirectionalLight(color, intensity);
  sunlight.position.set(data.x.value, data.y.value, data.z.value);
  sunlight.target.position.set(data.tx.value, data.ty.value, data.tz.value);
  scene.add(sunlight);

  if (data.helper.value) {
    const sunlightHelper = new THREE.DirectionalLightHelper(sunlight);
    scene.add(sunlightHelper);
    SCENE_LIGTH_HELPERS[data.guid.value] = sunlightHelper;
  }

  SCENE_LIGHTS[data.guid.value] = sunlight;
}

function buildSkylight(data: { [key: string]: any }) {
  let skyColor = data.sky_color.value;
  skyColor = skyColor.replace("#", "0x");
  skyColor = parseInt(skyColor);
  let groundColor = data.ground_color.value;
  groundColor = groundColor.replace("#", "0x");
  groundColor = parseInt(groundColor);
  let intensity = data.intensity.value;

  const skylight = new THREE.HemisphereLight(skyColor, groundColor, intensity);

  scene.add(skylight);

  if (data.helper.value) {
    const skylightHelper = new THREE.HemisphereLightHelper(skylight);
    scene.add(skylightHelper);
    SCENE_LIGTH_HELPERS[data.guid.value] = skylightHelper;
  }

  SCENE_LIGHTS[data.guid.value] = skylight;
}

function buildAmbientLight(data: { [key: string]: any }) {
  let color = data.color.value;
  color = color.replace("#", "0x");
  color = parseInt(color);
  let intensity = data.intensity.value;

  const ambientLight = new THREE.AmbientLight(color, intensity);

  scene.add(ambientLight);

  SCENE_LIGHTS[data.guid.value] = ambientLight;
}
