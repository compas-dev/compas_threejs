import { reactive } from "vue";

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

export const theme = reactive({
    value: "light",
});
