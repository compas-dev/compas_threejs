<template>
    <div id="sidebar">
        <Toolbar />
        <Openbar v-if="sideBarInfoState.isVisible" />
    </div>
</template>

<script setup lang="ts">
import Toolbar from "@/components/layout/Toolbar.vue";
import Openbar from "@/components/layout/Openbar.vue";
import { sideBarInfoState } from "@/store/store.ts";
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
    pointer-events: none;
}

:deep(.toolbar) {
    pointer-events: auto;
}

:deep(#openbar) {
    pointer-events: auto;
}
</style>
