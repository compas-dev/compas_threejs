<template>
    <button class="toolbar-button" title="Top View (5)" @click="handleClick">
        <span class="button-icon">
            <RectangleVertical :size="16" :stroke-width="2" aria-hidden="true" />
        </span>
    </button>
</template>

<script setup lang="ts">
import { RectangleVertical } from "lucide-vue-next";
import { setCameraViewPreset } from "@/viewer/toolbar_actions";

function handleClick() {
    setCameraViewPreset("top");
}
</script>
