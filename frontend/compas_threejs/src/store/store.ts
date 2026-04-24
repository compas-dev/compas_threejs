import { reactive } from "vue";

export const objectInfoState = reactive({
    title: "Object Infos",
    isVisible: false,
    data: null,
});

export const objectActionsState = reactive([]);

export const sideBarInfoState = reactive({
    title: "Sidebar Infos",
    isVisible: false,
    data: null,
});

export const pickerEnabled = reactive({ value: true });

export const pickerMode = reactive({ value: "translate" });

export const blockPicker = reactive({ value: false });
