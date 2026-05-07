<template>
    <div class="app-container" :class="{ dark: theme.value === 'dark' }">
        <!-- <Toolbar />
        <Openbar v-if="sideBarInfoState.isVisible" /> -->
        <Sidebar />
        <div ref="threeContainer" class="three-container"></div>
        <ThemeIndicator />
        <ObjectInfo />
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import ObjectInfo from "./components/layout/ObjectInfo.vue";
import { renderer } from "./viewer/scene_manager";
import { initializeWebSocketConnection } from "./communications/communication";
import Sidebar from "@/components/layout/Sidebar.vue";
import ThemeIndicator from "@/components/layout/ThemeIndicator.vue";
import { theme } from "@/store/store";

const threeContainer = ref<HTMLDivElement | null>(null);

onMounted(() => {
    if (threeContainer.value) {
        threeContainer.value.appendChild(renderer.domElement);
        initializeWebSocketConnection();
    }
});
</script>

<style scoped>
div.app-container {
    padding: 0px;
    margin: 0px;
    display: inline-flex;
    height: 100vh; /* Full viewport height */
    width: 100%; /* Full viewport width */ /* Ensure it doesn't exceed viewport width */
    overflow: hidden;
    position: relative;
}

div.three-container {
    flex: 1; /* Take up remaining space */
    position: fixed; /* Ensure it can contain absolutely positioned children if needed */
    overflow: hidden; /* Hide any overflow from the Three.js canvas */
}
</style>
