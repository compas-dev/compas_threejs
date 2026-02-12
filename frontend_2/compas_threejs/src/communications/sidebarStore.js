import { reactive } from "vue";
import { sendData } from "@/communications/communication";
export const sidebarComponents = reactive([]);
export function uiManager(data) {
    const type = data.type.value;
    switch (type) {
        case "button":
            addButton(data);
            break;
        case "slider":
            addSlider(data);
            break;
        default:
            console.warn("Unknown component type:", type);
    }
}
// --- Function to add a Button ---
export function addButton(data) {
    const newButton = {
        id: Date.now(),
        component: "Button",
        label: data.label?.value,
        props: {
            text: data.text.value,
            variant: data.variant.value,
        },
        action: data.guid.value,
    };
    sidebarComponents.push(newButton);
}
// --- Function to add a Slider ---
export function addSlider(data) {
    const newSlider = {
        id: Date.now(),
        component: "Slider",
        label: data.label?.value,
        props: {
            min: data.min.value,
            max: data.max.value,
            step: data.step.value,
            defaultValue: [data.default_value.value],
        },
        action: data.guid.value,
    };
    sidebarComponents.push(newSlider);
}
// --- Updated Action Handler ---
// It now accepts a payload, which will be the slider's value.
export function handleAction(actionGuid, value) {
    const message = {
        action: actionGuid,
    };
    if (value !== undefined) {
        message.value = value;
    }
    sendData(message);
}
