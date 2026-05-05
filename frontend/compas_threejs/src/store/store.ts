import { reactive } from "vue";

export type BackgroundMode = "light" | "dark";

export const objectBarData = reactive({
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

export const showEdges = reactive({ value: false });

export const themeState = reactive({
  lightBackgroundColor: 0xe6e6e6,
  darkBackgroundColor: 0x000000,
  backgroundOverrideMode: "none" as "none" | BackgroundMode,
  backgroundMode: "light" as BackgroundMode,
});
