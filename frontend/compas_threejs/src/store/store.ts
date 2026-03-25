import { reactive } from "vue";

export const objectInfoState = reactive({
  title: "Object Infos",
  isVisible: false,
  data: null,
});

export const pickerEnabled = reactive({ value: true });

export const trajectoryState = reactive({
  id: "",
  isVisible: false,
  currentTime: [0.0],
  totalTime: 10.0,
  step: 0.01,
  data: null as any,
  isPlaying: false,
  isLooping: false,
  speedMultiplier: 1.0,
  cameraMode: 'free', // Options: 'free', 'look', 'follow'
});