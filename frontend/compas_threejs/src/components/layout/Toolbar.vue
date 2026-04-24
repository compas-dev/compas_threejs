<template>
    <div class="toolbar theme">
        <h1 class="text-lg font-bold">COMPAS ThreeJs</h1>
        <TransformGroup />
        <ViewGroup />
    </div>
</template>

<script setup lang="ts">
import TransformGroup from "@/components/tools/transforms/TransformGroup.vue";
import ViewGroup from "@/components/tools/views/ViewGroup.vue";
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
    border-right: 1px solid rgba(255, 255, 255, 0.2);
}

:deep(.toolbar-group:last-child) {
    border-right: none;
    padding-right: 0;
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

:deep(Button) {
    &.active {
        box-shadow:
            3px 3px 2px 1px rgba(0, 0, 0, 0.5) inset,
            -3px -3px 2px 2px rgba(255, 255, 255) inset;
    }

    &.disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
}
</style>
