import { reactive } from "vue";

export type BackgroundMode = "light" | "dark";

export const objectInfoState = reactive({
    title: "Object Infos",
    isVisible: false,
    data: null,
});

export const sideBarInfoState = reactive({
    title: "Sidebar Infos",
    isVisible: false,
    data: null,
});

export const pickerEnabled = reactive({ value: true });

export const pickerMode = reactive({ value: "translate" });

export const themeState = reactive({
  lightBackgroundColor: 0xe6e6e6,
  darkBackgroundColor: 0x000000,
  defaultBackgroundColor: 0xe6e6e6,
  backgroundOverrideMode: "none" as "none" | BackgroundMode,
  backgroundMode: "light" as BackgroundMode,
});
