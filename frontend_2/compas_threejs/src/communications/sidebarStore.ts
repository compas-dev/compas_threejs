import { reactive } from "vue";
import { sendData } from "@/communications/communication";
import type { Dictionary } from "../protobuff/messages";

// Define a type for the components we want to add.
// This can be expanded later (e.g., to include different component types).
interface ButtonComponent {
  id: number;
  component: "Button";
  label?: string;
  props: {
    variant:
      | "outline"
      | "default"
      | "destructive"
      | "secondary"
      | "ghost"
      | "link";
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

// --- The main type is now a union of all supported components ---
export type DynamicComponent = ButtonComponent | SliderComponent;
export const sidebarComponents = reactive<DynamicComponent[]>([]);

export function uiManager(data: { [key: string]: any }) {
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
export function addButton(data: { [key: string]: any }) {
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
export function addSlider(data: { [key: string]: any }) {
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

// --- Updated Action Handler ---
// It now accepts a payload, which will be the slider's value.
export function handleAction(actionGuid: string, value?: any) {
  const message: { action: string; value?: any } = {
    action: actionGuid,
  };

  if (value !== undefined) {
    message.value = value;
  }

  sendData(message);
}
