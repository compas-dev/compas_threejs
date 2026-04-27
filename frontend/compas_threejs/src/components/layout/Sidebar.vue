<template>
    <div id="sidebar" :class="{ 'is-dark': isDarkMode, dark: isDarkMode }">
        <Toolbar />
        <Openbar v-if="sideBarInfoState.isVisible" />
    </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";
import Toolbar from "@/components/layout/Toolbar.vue";
import Openbar from "@/components/layout/Openbar.vue";
import { sideBarInfoState } from "@/store/store.ts";
import { subscribeBackgroundMode } from "@/viewer/theme_manager";

const isDarkMode = ref(false);
let unsubscribeBackgroundMode: (() => void) | null = null;

onMounted(() => {
    unsubscribeBackgroundMode = subscribeBackgroundMode((mode) => {
        isDarkMode.value = mode === "dark";

        // Popovers render in a portal outside Sidebar, so mirror dark mode globally.
        document.documentElement.classList.toggle("dark", isDarkMode.value);
        document.body.classList.toggle("dark", isDarkMode.value);
    });
});

onBeforeUnmount(() => {
    if (unsubscribeBackgroundMode) {
        unsubscribeBackgroundMode();
        unsubscribeBackgroundMode = null;
    }

    document.documentElement.classList.remove("dark");
    document.body.classList.remove("dark");
});
</script>

<style scoped>
div#sidebar {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 20px; /* Padding around the content */
    z-index: 1000; /* Ensure it stays above the Three.js canvas */
    row-gap: 30px; /* Space between Toolbar and Openbar */

    /* WIDTH */
    width: 30vw;
    max-width: 300px;
    min-width: 250px;
}

div#sidebar.is-dark :deep(.toolbar-group) {
    border-right-color: rgba(255, 255, 255, 0.1);
}

div#sidebar :deep(.toolbar) {
    color: var(--foreground);
}

div#sidebar.is-dark :deep(.toolbar Button) {
    background: oklch(0.269 0 0);
    border-color: oklch(1 0 0 / 15%);
    color: oklch(0.985 0 0);
}

div#sidebar.is-dark :deep(.toolbar Button:hover) {
    background: oklch(0.33 0 0);
    border-color: oklch(1 0 0 / 28%);
}

div#sidebar.is-dark :deep(.toolbar Button.active) {
    box-shadow:
        3px 3px 2px 1px rgba(0, 0, 0, 0.65) inset,
        -2px -2px 2px 1px rgba(255, 255, 255, 0.12) inset;
}

div#sidebar.is-dark :deep(.saved-views-select) {
    background: oklch(0.33 0 0);
    border-color: oklch(1 0 0 / 15%);
    color: oklch(0.985 0 0);
}

div#sidebar.is-dark :deep(.saved-views-select:hover) {
    background: oklch(0.33 0 0);
}

div#sidebar.is-dark :deep(.saved-view-delete) {
    border-color: oklch(1 0 0 / 15%);
    color: oklch(0.985 0 0);
}

div#sidebar.is-dark :deep(#openbar .dynamic-label) {
    color: rgba(255, 255, 255, 0.85);
}

div#sidebar.is-dark :deep(#openbar .slider-value) {
    color: rgba(255, 255, 255, 0.9);
}
</style>
