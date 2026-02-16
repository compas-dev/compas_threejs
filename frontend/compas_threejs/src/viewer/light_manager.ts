import { scene } from "./scene_manager";
import * as THREE from "three";
import { RectAreaLightHelper } from "three/examples/jsm/helpers/RectAreaLightHelper.js";
import { Sky } from "three/examples/jsm/objects/Sky.js";

export const SCENE_LIGHTS: { [guid: string]: THREE.Material } = {};
export const SCENE_LIGTH_HELPERS: { [guid: string]: THREE.Material } = {};

export function lightManager(data: { [key: string]: any }) {
  if (data.type.value == "point_light") {
    buildPointLight(data);
  } else if (data.type.value == "spot_light") {
    buildSpotLight(data);
  } else if (data.type.value == "rect_light") {
    buildRectLight(data);
  } else if (data.type.value == "sunlight") {
    buildSunlight(data);
  } else if (data.type.value == "sky") {
    buildSky(data);
  } else if (data.type.value == "ambient_light") {
    buildAmbientLight(data);
  }
}

function buildPointLight(data: { [key: string]: any }) {
  let pointLight: THREE.PointLight, helper: THREE.PointLightHelper;

  // Get the light
  if (SCENE_LIGHTS[data.guid.value]) {
    pointLight = SCENE_LIGHTS[data.guid.value] as THREE.PointLight;
  } else {
    pointLight = new THREE.PointLight();
    scene.add(pointLight);
  }

  // Properties of the ligt
  let color = data.color.value;
  color = color.replace("#", "0x");
  color = parseInt(color);
  pointLight.color.set(color);
  pointLight.intensity = data.intensity.value;
  pointLight.distance = data.distance.value;
  pointLight.decay = data.decay.value;
  pointLight.position.set(data.x.value, data.y.value, data.z.value);
  pointLight.castShadow = true;
  pointLight.shadow.bias = -0.002;
  pointLight.shadow.normalBias = 0.02;

  // Set the helper
  if (SCENE_LIGTH_HELPERS[data.guid.value] && data.helper.value) {
    helper = SCENE_LIGTH_HELPERS[data.guid.value];
    helper.update();
  } else if (data.helper.value) {
    helper = new THREE.PointLightHelper(pointLight, 0.5);
    scene.add(helper);
  }

  // Save light and helper
  SCENE_LIGHTS[data.guid.value] = pointLight;
  if (helper) {
    SCENE_LIGTH_HELPERS[data.guid.value] = helper;
  }
}

function buildSpotLight(data: { [key: string]: any }) {
  let spotLight: THREE.SpotLight, helper: THREE.SpotLightHelper;

  // Get the light
  if (SCENE_LIGHTS[data.guid.value]) {
    spotLight = SCENE_LIGHTS[data.guid.value] as THREE.SpotLight;
    scene.remove(spotLight.target);
  } else {
    spotLight = new THREE.SpotLight();
    scene.add(spotLight);
  }

  // Properties of the lights
  let color = data.color.value;
  color = color.replace("#", "0x");
  color = parseInt(color);
  spotLight.color.set(color);
  spotLight.intensity = data.intensity.value;
  spotLight.distance = data.distance.value;
  spotLight.angle = data.angle.value;
  spotLight.penumbra = data.penumbra.value;
  spotLight.decay = data.decay.value;
  spotLight.position.set(data.x.value, data.y.value, data.z.value);
  const target = new THREE.Object3D();
  target.position.set(data.tx.value, data.ty.value, data.tz.value);
  scene.add(target);
  spotLight.target = target;
  scene.remove(target);
  spotLight.castShadow = true;
  spotLight.shadow.bias = -0.002;
  spotLight.shadow.normalBias = 0.02;

  // Set the helpers
  if (SCENE_LIGTH_HELPERS[data.guid.value] && data.helper.value) {
    helper = SCENE_LIGTH_HELPERS[data.guid.value];
    helper.update();
  } else if (data.helper.value) {
    helper = new THREE.SpotLightHelper(spotLight);
    scene.add(helper);
  }

  // Save the light and helper
  SCENE_LIGHTS[data.guid.value] = spotLight;
  if (helper) {
    SCENE_LIGTH_HELPERS[data.guid.value] = helper;
  }
}

function buildRectLight(data: { [key: string]: any }) {
  let rectLight: THREE.RectAreaLight, helper: RectAreaLightHelper;

  // Get the light
  if (SCENE_LIGHTS[data.guid.value]) {
    rectLight = SCENE_LIGHTS[data.guid.value] as THREE.RectAreaLight;
  } else {
    rectLight = new THREE.RectAreaLight();
    scene.add(rectLight);
  }

  // Set the properties
  let color = data.color.value;
  color = color.replace("#", "0x");
  color = parseInt(color);
  rectLight.color.set(color);
  rectLight.intensity = data.intensity.value;
  rectLight.width = data.width.value;
  rectLight.height = data.height.value;
  rectLight.position.set(data.x.value, data.y.value, data.z.value);
  rectLight.lookAt(data.tx.value, data.ty.value, data.tz.value);
  // rectLight.castShadow = true;
  // rectLight.shadow.bias = -0.002;
  // rectLight.shadow.normalBias = 0.02

  // Hleper
  if (SCENE_LIGTH_HELPERS[data.guid.value] && data.helper.value) {
    helper = SCENE_LIGTH_HELPERS[data.guid.value] as RectAreaLightHelper;
    // helper.update();
  } else if (data.helper.value) {
    helper = new RectAreaLightHelper(rectLight);
    scene.add(helper);
  }

  // Save
  SCENE_LIGHTS[data.guid.value] = rectLight;
  if (helper) {
    SCENE_LIGTH_HELPERS[data.guid.value] = helper;
  }
}

function buildSunlight(data: { [key: string]: any }) {
  let sunlight: THREE.DirectionalLight, helper: THREE.DirectionalLightHelper;

  // Get the light
  if (SCENE_LIGHTS[data.guid.value]) {
    sunlight = SCENE_LIGHTS[data.guid.value] as THREE.DirectionalLight;
  } else {
    sunlight = new THREE.DirectionalLight();
    scene.add(sunlight);
  }

  // Set the properties
  let color = data.color.value;
  color = color.replace("#", "0x");
  color = parseInt(color);
  sunlight.color.set(color);
  sunlight.intensity = data.intensity.value;
  sunlight.position.set(data.x.value, data.y.value, data.z.value);
  sunlight.target.position.set(data.tx.value, data.ty.value, data.tz.value);
  sunlight.castShadow = true;

  // Helper
  if (SCENE_LIGTH_HELPERS[data.guid.value] && data.helper.value) {
    helper = SCENE_LIGTH_HELPERS[
      data.guid.value
    ] as THREE.DirectionalLightHelper;
    helper.update();
  } else if (data.helper.value) {
    const helper = new THREE.DirectionalLightHelper(sunlight);
    scene.add(helper);
  }

  // Save
  SCENE_LIGHTS[data.guid.value] = sunlight;
  if (helper) {
    SCENE_LIGTH_HELPERS[data.guid.value] = helper;
  }
}

function buildSky(data: { [key: string]: any }) {
  let sky: Sky, sun: THREE.DirectionalLight, ambient: THREE.AmbientLight;

  if (SCENE_LIGHTS[data.guid.value]) {
    sky = SCENE_LIGHTS[data.guid.value] as Sky;
    sun = SCENE_LIGHTS[data.guid.value + "_sun"];
    ambient = SCENE_LIGHTS[data.guid.value + "_ambient"];
  } else {
    sky = new Sky();
    sun = new THREE.DirectionalLight(0xffffff, 1.0);
    // sun.castShadow = true;
    // sun.shadow.bias = -0.002;
    // sun.shadow.normalBias = 0.02;
    ambient = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(sky);
    scene.add(sun);
    scene.add(ambient);
  }

  // Properties
  sky.scale.setScalar(1000);
  sky.material.uniforms["turbidity"].value = data.turbidity.value;
  sky.material.uniforms["rayleigh"].value = data.rayleigh.value;
  sky.material.uniforms["mieCoefficient"].value = data.mie_coefficient.value;
  sky.material.uniforms["mieDirectionalG"].value = data.mie_directional_g.value;

  let sunPosition = new THREE.Vector3();
  const phi = THREE.MathUtils.degToRad(90 - data.elevation.value);
  const theta = THREE.MathUtils.degToRad(data.azimuth.value);
  sunPosition.setFromSphericalCoords(1, phi, theta);
  sky.material.uniforms["sunPosition"].value = sunPosition;

  sun.position.copy(sky.material.uniforms.sunPosition.value);
  sun.color.copy(getSunColor(data.elevation.value));

  ambient.color.copy(getSunColor(data.elevation.value)).multiplyScalar(0.6);

  // Save
  SCENE_LIGHTS[data.guid.value] = sky;
  SCENE_LIGHTS[data.guid.value + "_sun"] = sun;
  SCENE_LIGHTS[data.guid.value + "_ambient"] = ambient;
}

function getSunColor(elevation: number): THREE.Color {
  if (elevation > 10) return new THREE.Color(0xffffff); // White sun when high
  if (elevation > 0) {
    // Transition from yellow to white
    const t = elevation / 10.0;
    return new THREE.Color(0xffffcc).lerp(new THREE.Color(0xffffff), t);
  }
  if (elevation > -5) {
    // Transition from orange to yellow
    const t = (elevation + 5) / 5.0;
    return new THREE.Color(0xffcc66).lerp(new THREE.Color(0xffffcc), t);
  }
  // Red sun below the horizon
  return new THREE.Color(0xffcc66);
}

function buildAmbientLight(data: { [key: string]: any }) {
  let ambientLight: THREE.AmbientLight;

  // Get the light
  if (SCENE_LIGHTS[data.guid.value]) {
    ambientLight = SCENE_LIGHTS[data.guid.value] as THREE.AmbientLight;
  } else {
    ambientLight = new THREE.AmbientLight();
    scene.add(ambientLight);
  }

  // Porperties
  let color = data.color.value;
  color = color.replace("#", "0x");
  color = parseInt(color);
  ambientLight.color.set(color);
  ambientLight.intensity = data.intensity.value;

  // Save
  SCENE_LIGHTS[data.guid.value] = ambientLight;
}
