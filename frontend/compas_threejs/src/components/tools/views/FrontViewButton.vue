<template>
    <button class="toolbar-button" title="Front View (2)" @click="handleClick">
        <span class="button-icon front-icon">
            <Square :size="16" :stroke-width="2" aria-hidden="true" />
        </span>
    </button>
</template>

<script setup lang="ts">
import { Square } from "lucide-vue-next";
import { setCameraViewPreset } from "@/viewer/toolbar_actions";

function handleClick() {
    setCameraViewPreset("front");
}
</script>
