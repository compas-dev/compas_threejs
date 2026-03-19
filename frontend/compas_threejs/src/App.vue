<template>
    <Sidebar />
    <ObjectInfo v-if="objectInfoState.isVisible" />
    <div ref="threeContainer" class="three-container"></div>

    <TrajectoryTimeline />
</template>

<script setup lang="ts">
// 1. Make sure to import `ref` and `onMounted` from 'vue'
import { ref, onMounted } from "vue";
import Sidebar from "./components/layout/Sidebar.vue";
import TrajectoryTimeline from './components/layout/TrajectoryTimeline.vue'; 
import ObjectInfo from "./components/layout/ObjectInfo.vue";
import { renderer } from "./viewer/scene_manager";
import { initializeWebSocketConnection } from "./communications/communication";
import { Button } from "@/components/ui/button"; // Make sure this path is correct
import { objectInfoState } from "./store/store.ts";

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
