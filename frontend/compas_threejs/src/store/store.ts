import { reactive } from "vue";

export const objectInfoState = reactive({
  title: "Object Infos",
  isVisible: true,
  data: null,
});

export const pickerEnabled = reactive({ value: true });
