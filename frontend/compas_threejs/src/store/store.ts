import { reactive } from "vue";

export const objectInfoState = reactive({
  title: "Object Infos",
  isVisible: false,
  data: null,
});

export const pickerEnabled = reactive({ value: true });
