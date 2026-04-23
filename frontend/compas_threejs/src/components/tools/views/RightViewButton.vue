<template>
    <button class="toolbar-button" title="Right View (6)" @click="handleClick">
        <span class="button-icon">
            <RectangleHorizontal :size="16" :stroke-width="2" aria-hidden="true" />
        </span>
    </button>
</template>

<script setup lang="ts">
import { RectangleHorizontal } from "lucide-vue-next";
import { setCameraViewPreset } from "@/viewer/toolbar_actions";

function handleClick() {
    setCameraViewPreset("right");
}
</script>
