import { reactive } from "vue";
import { sendData } from "@/communications/communication";
import { sideBarInfoState } from "../store/store";

// Define a type for the components we want to add.
// This can be expanded later (e.g., to include different component types).
interface ButtonComponent {
    id: number;
    component: "Button";
    label?: string;
    props: {
        variant: "outline" | "default" | "destructive" | "secondary" | "ghost" | "link";
        text: string;
    };
    action: string; // GUID for click action
}

interface SliderComponent {
    id: number;
    component: "Slider";
    label?: string;
    props: {
        min: number;
        max: number;
        step: number;
        defaultValue: number[];
    };
    action: string; // GUID for value change action
}

interface NumberFieldComponent {
    id: number;
    component: "NumberField";
    label?: string;
    props: {
        min: number;
        max: number;
        step: number;
        value: number[];
    };
    action: string; // GUID for value change action
}

// --- The main type is now a union of all supported components ---
export type DynamicComponent = ButtonComponent | SliderComponent | NumberFieldComponent;
export const sidebarComponents = reactive<DynamicComponent[]>([]);

export function uiManager(data: Record<string, unknown>) {
    const type = data.type.value;
    switch (type) {
        case "button":
            addButton(data);
            sideBarInfoState.isVisible = true;
            break;
        case "slider":
            addSlider(data);
            sideBarInfoState.isVisible = true;
            break;
        case "number_field":
            addNumberField(data);
            sideBarInfoState.isVisible = true;
            break;
        default:
            console.warn("Unknown component type:", type);
    }
}

// --- Function to add a Button ---
export function addButton(data: Record<string, unknown>) {
    const newButton: ButtonComponent = {
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
export function addSlider(data: Record<string, unknown>) {
    const newSlider: SliderComponent = {
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

export function addNumberField(data: Record<string, unknown>) {
    const newNumberField: NumberFieldComponent = {
        id: Date.now(),
        component: "NumberField",
        label: data.label?.value,
        props: {
            min: data.min.value,
            max: data.max.value,
            step: data.step.value,
            value: data.value.value,
        },
        action: data.guid.value,
    };
    sidebarComponents.push(newNumberField);
}

// --- Updated Action Handler ---
// It now accepts a payload, which will be the slider's value.
export function handleAction(actionGuid: string, value?: unknown) {
    const message = {
        dispatch: "ui_callback",
        action: actionGuid,
        value: null,
    };

    if (value !== undefined) {
        message.value = value;
    }

    sendData(message);
}
