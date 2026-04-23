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

:deep(.saved-views-panel) {
    min-width: 170px;
}

:deep(.saved-views-controls) {
    display: flex;
    align-items: center;
    gap: 2px;
}

:deep(.saved-views-select) {
    height: 36px;
    min-width: 120px;
    border: 1px solid var(--border);
    border-radius: 6px;
    background: var(--secondary);
    color: var(--secondary-foreground);
    font-size: 12px;
    padding: 0 8px;
}

:deep(.saved-views-select:focus) {
    outline: none;
    border-color: var(--border);
}

:deep(.saved-views-select--selected),
:deep(.saved-views-select--selected:focus) {
    border-color: var(--border);
    box-shadow:
        3px 3px 2px 1px rgba(0, 0, 0, 0.5) inset,
        -3px -3px 2px 2px rgba(255, 255, 255) inset;
}

:deep(.saved-views-select:hover) {
    background: var(--muted);
}

:deep(.saved-view-delete) {
    width: 30px;
    height: 30px;
    padding: 0;
    display: inline-flex;
    align-self: center;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--border);
    border-radius: 999px;
    background: transparent;
    color: var(--secondary-foreground);
    cursor: pointer;
}

:deep(.saved-view-delete svg) {
    width: 13px;
    height: 13px;
    stroke-width: 2.25;
}

:deep(.saved-view-delete:hover) {
    background: rgba(220, 38, 38, 0.12);
    border-color: rgba(220, 38, 38, 0.45);
}

:deep(.saved-view-delete:disabled) {
    opacity: 0.5;
    cursor: not-allowed;
}
</style>
