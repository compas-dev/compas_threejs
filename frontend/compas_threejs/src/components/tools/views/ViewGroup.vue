<template>
    <div class="toolbar-group">
        <TopViewButton />
        <FrontViewButton />
        <RightViewButton />
        <PerspectiveViewButton />
    </div>
</template>

<script setup lang="ts">
import { setCameraViewPreset } from "@/viewer/toolbar_actions";
import { useKeyboardShortcuts } from "@/components/tools/useKeyboardShortcuts";
import { TopViewButton, FrontViewButton, RightViewButton, PerspectiveViewButton } from "./index";

useKeyboardShortcuts({
    "2": () => {
        setCameraViewPreset("front");
    },
    "3": () => {
        setCameraViewPreset("front_right");
    },
    "5": () => {
        setCameraViewPreset("top");
    },
    "6": () => {
        setCameraViewPreset("right");
    },
});
</script>
