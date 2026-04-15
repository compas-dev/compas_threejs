<template>
    <button
        class="toolbar-button"
        :class="{ active }"
        title="Toggle Dark/Light Background (D)"
        @click="handleClick"
    >
        <span class="button-icon">◐</span>
    </button>
</template>

<script setup lang="ts">
import { toggleBackgroundMode } from "@/viewer/toolbar_actions";

defineProps<{
    active: boolean;
}>();

function handleClick() {
    toggleBackgroundMode();
}
</script>
