<template>
    <button class="toolbar-button" title="Save as PNG" @click="handleClick">
        <span class="button-icon">
            <Download :size="16" :stroke-width="2" aria-hidden="true" />
        </span>
    </button>
</template>

<script setup lang="ts">
import { Download } from "lucide-vue-next";
import { saveCurrentCanvasAsPng } from "@/viewer/toolbar_actions";

function handleClick() {
    saveCurrentCanvasAsPng();
}
</script>
