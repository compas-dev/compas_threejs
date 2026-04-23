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

:deep(.toolbar-button) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border: 1px solid var(--border);
    border-radius: 6px;
    background: var(--secondary);
    cursor: pointer;
    transition: all 0.2s ease;
    font-size: 14px;
    font-weight: 600;
    color: var(--secondary-foreground);

    &:hover {
        background: var(--muted);
        border-color: var(--input);
        transform: translateY(-1px);
    }

    &:active {
        transform: translateY(0);
    }

    &.active {
        background: rgba(59, 130, 246, 0.9);
        color: white;
        border-color: rgba(59, 130, 246, 1);
    }
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
