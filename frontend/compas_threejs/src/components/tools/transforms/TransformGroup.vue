<template>
    <div class="toolbar-group">
        <EnablePicker
            :active="activeTransform === 'move'"
            @activated="setActiveTransform('move')"
        />

        <MoveButton :active="activeTransform === 'move'" @activated="setActiveTransform('move')" />
        <RotateButton
            :active="activeTransform === 'rotate'"
            @activated="setActiveTransform('rotate')"
        />
        <ScaleButton
            :active="activeTransform === 'scale'"
            @activated="setActiveTransform('scale')"
        />
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { setTransformMode } from "@/viewer/toolbar_actions";
import { useKeyboardShortcuts } from "@/components/tools/useKeyboardShortcuts";
import { EnablePicker, MoveButton, RotateButton, ScaleButton } from "./index";

type TransformTool = "move" | "rotate" | "scale";

const activeTransform = ref<TransformTool | null>(null);

function setActiveTransform(tool: TransformTool) {
    activeTransform.value = tool;
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
});
</script>
