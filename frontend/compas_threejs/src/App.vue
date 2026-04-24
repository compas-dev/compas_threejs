<template>
    <div class="app-container">
        <!-- <Toolbar />
        <Openbar v-if="sideBarInfoState.isVisible" /> -->
        <Sidebar />
        <div ref="threeContainer" class="three-container"></div>
        <ObjectInfo v-if="objectInfoState.isVisible" />
    </div>
</template>

<script setup lang="ts">
// 1. Make sure to import `ref` and `onMounted` from 'vue'
import { ref, onMounted } from "vue";
import Toolbar from "./components/layout/Toolbar.vue";
import Openbar from "./components/layout/Openbar.vue";
import ObjectInfo from "./components/layout/ObjectInfo.vue";
import { renderer } from "./viewer/scene_manager";
import { initializeWebSocketConnection } from "./communications/communication";
import { Button } from "@/components/ui/button"; // Make sure this path is correct
import { objectInfoState } from "./store/store.ts";
import { sideBarInfoState } from "./store/store.ts";
import Sidebar from "@/components/layout/Sidebar.vue";

// 2. Declare the ref at the top level of the script, initialized to null.
const threeContainer = ref<HTMLDivElement | null>(null);

// 3. Use the onMounted hook to safely access the DOM element.
onMounted(() => {
    // By the time onMounted runs, Vue has rendered the template,
    // and threeContainer.value will now hold the <div> element.
    if (threeContainer.value) {
        // This check ensures we don't run this code if the element, for some reason, wasn't found.
        threeContainer.value.appendChild(renderer.domElement);

        // It's safer to start animations and connections after the DOM is ready.
        // startAnimation();
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
}

div.three-container {
    flex: 1; /* Take up remaining space */
    position: fixed; /* Ensure it can contain absolutely positioned children if needed */
    overflow: hidden; /* Hide any overflow from the Three.js canvas */
}
</style>
