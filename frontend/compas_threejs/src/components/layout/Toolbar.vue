<template>
    <div class="toolbar theme">
        <h1 class="text-lg font-bold">COMPAS ThreeJs</h1>
        <TransformGroup />
        <ViewGroup />
        <DisplayGroup />
    </div>
</template>

<script setup lang="ts">
import TransformGroup from "@/components/tools/transforms/TransformGroup.vue";
import ViewGroup from "@/components/tools/views/ViewGroup.vue";
import DisplayGroup from "@/components/tools/display/DisplayGroup.vue";
</script>

<style scoped>
.toolbar {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 12px;
    z-index: 1001;
    border-radius: 10px;
    padding: 12px;
    margin: 0px;
    height: auto;
    width: 100%;
}

:deep(.toolbar-group) {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: max-content;
    gap: 6px;
    padding-right: 6px;
}

:deep(.button-icon) {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    line-height: 1;
    transform-origin: center;
}

:deep(.button-icon.front-icon) {
    transform: scale(0.75);
}

:deep(.display-tools-wrapper) {
    display: contents;
}
</style>
