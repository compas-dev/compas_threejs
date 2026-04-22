<template>
    <button class="toolbar-button" title="Perspective View (3)" @click="handleClick">
        <span class="button-icon">
            <Cuboid :size="16" :stroke-width="2" aria-hidden="true" />
        </span>
    </button>
</template>

<script setup lang="ts">
import { Cuboid } from "lucide-vue-next";
import { setCameraViewPreset } from "@/viewer/toolbar_actions";

function handleClick() {
    setCameraViewPreset("front_right");
}
</script>
