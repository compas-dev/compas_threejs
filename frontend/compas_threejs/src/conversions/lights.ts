import * as THREE from "three";
import { Sky } from "three/examples/jsm/objects/Sky.js";

interface LightData extends Record<string, unknown> {
    type: { value: string };
    guid?: { value: string };
    helper?: { value: boolean };
    color: { value: string };
    intensity: { value: number };
    x: { value: number };
    y: { value: number };
    z: { value: number };
}

export function ligthtToThree(data: LightData): THREE.Light | null {
    const lightType = data.type.value;

    switch (lightType) {
        case "point_light":
            return buildPointLight(data);
        case "spot_light":
            return buildSpotLight(data);
        case "rect_light":
            return buildRectLight(data);
        case "sunlight":
            return buildSunlight(data);
        case "sky":
            return buildSky(data);
        case "ambient_light":
            return buildAmbientLight(data);
        default:
            console.warn(`Unknown light type: ${lightType}`);
            return null;
    }
}

function parseColor(colorString: string): number {
    const hex = colorString.replace("#", "0x");
    return parseInt(hex);
}

function buildPointLight(
    data: LightData & { distance: { value: number }; decay: { value: number } }
): THREE.PointLight {
    const light = new THREE.PointLight();

    light.color.setHex(parseColor(data.color.value));
    light.intensity = data.intensity.value;
    light.distance = data.distance.value;
    light.decay = data.decay.value;
    light.position.set(data.x.value, data.y.value, data.z.value);
    light.castShadow = true;
    light.shadow.bias = -0.002;
    light.shadow.normalBias = 0.02;

    return light;
}

function buildSpotLight(
    data: LightData & {
        distance: { value: number };
        angle: { value: number };
        penumbra: { value: number };
        decay: { value: number };
        tx: { value: number };
        ty: { value: number };
        tz: { value: number };
    }
): THREE.SpotLight {
    const light = new THREE.SpotLight();

    light.color.setHex(parseColor(data.color.value));
    light.intensity = data.intensity.value;
    light.distance = data.distance.value;
    light.angle = data.angle.value;
    light.penumbra = data.penumbra.value;
    light.decay = data.decay.value;
    light.position.set(data.x.value, data.y.value, data.z.value);
    light.castShadow = true;
    light.shadow.bias = -0.002;
    light.shadow.normalBias = 0.02;

    const target = new THREE.Object3D();
    target.position.set(data.tx.value, data.ty.value, data.tz.value);
    light.target = target;
    // Note: target will be added to scene by light_manager

    return light;
}

function buildRectLight(
    data: LightData & {
        width: { value: number };
        height: { value: number };
        tx: { value: number };
        ty: { value: number };
        tz: { value: number };
    }
): THREE.RectAreaLight {
    const light = new THREE.RectAreaLight();

    light.color.setHex(parseColor(data.color.value));
    light.intensity = data.intensity.value;
    light.width = data.width.value;
    light.height = data.height.value;
    light.position.set(data.x.value, data.y.value, data.z.value);
    light.lookAt(data.tx.value, data.ty.value, data.tz.value);

    return light;
}

function buildSunlight(
    data: LightData & { tx: { value: number }; ty: { value: number }; tz: { value: number } }
): THREE.DirectionalLight {
    const light = new THREE.DirectionalLight();

    light.color.setHex(parseColor(data.color.value));
    light.intensity = data.intensity.value;
    light.position.set(data.x.value, data.y.value, data.z.value);
    light.target.position.set(data.tx.value, data.ty.value, data.tz.value);
    light.castShadow = true;

    return light;
}

function buildSky(
    data: LightData & {
        turbidity: { value: number };
        rayleigh: { value: number };
        mie_coefficient: { value: number };
        mie_directional_g: { value: number };
        elevation: { value: number };
        azimuth: { value: number };
    }
): Sky {
    const sky = new Sky();
    const sun = new THREE.DirectionalLight(0xffffff, 1.0);
    const ambient = new THREE.AmbientLight(0xffffff, 0.6);

    sky.scale.setScalar(1000);
    sky.material.uniforms["up"].value = new THREE.Vector3(0, 0, 1);
    sky.material.uniforms["turbidity"].value = data.turbidity.value;
    sky.material.uniforms["rayleigh"].value = data.rayleigh.value;
    sky.material.uniforms["mieCoefficient"].value = data.mie_coefficient.value;
    sky.material.uniforms["mieDirectionalG"].value = data.mie_directional_g.value;

    const sunPosition = new THREE.Vector3();
    const phi = THREE.MathUtils.degToRad(90 - data.elevation.value);
    const theta = THREE.MathUtils.degToRad(data.azimuth.value);
    sunPosition.setFromSphericalCoords(1, phi, theta);
    sky.material.uniforms["sunPosition"].value = sunPosition;

    sun.position.copy(sky.material.uniforms.sunPosition.value);
    sun.color.copy(getSunColor(data.elevation.value));

    ambient.color.copy(getSunColor(data.elevation.value)).multiplyScalar(0.6);

    return sky;
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

function buildAmbientLight(data: LightData): THREE.AmbientLight {
    const light = new THREE.AmbientLight();

    light.color.setHex(parseColor(data.color.value));
    light.intensity = data.intensity.value;

    return light;
}
