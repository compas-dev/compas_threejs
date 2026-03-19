import { reactive } from "vue";
import { sendData } from "@/communications/communication";
import type { Dictionary } from "../protobuff/messages";
import { trajectoryState } from "../store/store";

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
    case "timeline":
      setupTimeline(data);
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

// --- Function to add a Timeline ---
export function setupTimeline(data: { [key: string]: any }) {
  trajectoryState.id = data.guid.value;
  trajectoryState.totalTime = data.total_time.value;
  trajectoryState.step = data.step.value;
  
  if (data.value && data.value.value !== undefined) {
    trajectoryState.currentTime = [data.value.value];
  }
  trajectoryState.isVisible = true;
  console.log("⏱️ Timeline intercepted! Total time:", trajectoryState.totalTime);
}
// --- Updated Action Handler ---
// It now accepts a payload, which will be the slider's value.
export function handleAction(actionGuid: string, value?: any) {
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
