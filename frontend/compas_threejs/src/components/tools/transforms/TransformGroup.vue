<template>
    <div class="toolbar-group">
        <MoveButton :active="activeTransform === 'move'" @activated="setActiveTransform('move')" />
        <RotateButton :active="activeTransform === 'rotate'" @activated="setActiveTransform('rotate')" />
        <ScaleButton :active="activeTransform === 'scale'" @activated="setActiveTransform('scale')" />
        <ToggleMovementButton :active="motionPaused" @toggled="setMotionPaused" />
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { setTransformMode, toggleObjectMotionPaused } from "@/viewer/toolbar_actions";
import { useKeyboardShortcuts } from "@/components/tools/useKeyboardShortcuts";
import { MoveButton, RotateButton, ScaleButton, ToggleMovementButton } from "./index";

type TransformTool = "move" | "rotate" | "scale";

const activeTransform = ref<TransformTool | null>(null);
const motionPaused = ref(false);

function setActiveTransform(tool: TransformTool) {
    activeTransform.value = tool;
}

function setMotionPaused(paused: boolean) {
    motionPaused.value = paused;
}

useKeyboardShortcuts({
    w: () => {
        setTransformMode("translate");
        setActiveTransform("move");
    },
    e: () => {
        setTransformMode("rotate");
        setActiveTransform("rotate");
    },
    r: () => {
        setTransformMode("scale");
        setActiveTransform("scale");
    },
    " ": () => {
        setMotionPaused(toggleObjectMotionPaused());
    },
});
</script>
