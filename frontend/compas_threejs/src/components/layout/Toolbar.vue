<template>
    <div class="toolbar theme" :class="{ 'is-dark': isDarkMode, dark: isDarkMode }">
        <TransformGroup />
        <ViewGroup />
        <DisplayGroup :is-dark-mode="isDarkMode" />
    </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from "vue";
import { subscribeBackgroundMode } from "@/viewer/toolbar_actions";
import TransformGroup from "@/components/tools/transforms/TransformGroup.vue";
import ViewGroup from "@/components/tools/views/ViewGroup.vue";
import DisplayGroup from "@/components/tools/display/DisplayGroup.vue";

const isDarkMode = ref(false);
let unsubscribeBackgroundMode: (() => void) | null = null;

onMounted(() => {
    unsubscribeBackgroundMode = subscribeBackgroundMode((mode) => {
        isDarkMode.value = mode === "dark";
    });
});

onBeforeUnmount(() => {
    if (unsubscribeBackgroundMode) {
        unsubscribeBackgroundMode();
        unsubscribeBackgroundMode = null;
    }
});
</script>

<style scoped>
.toolbar {
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: row;
    gap: 12px;
    z-index: 1001;
    border-radius: 10px;
    padding: 12px;
}

:deep(.toolbar-group) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 6px;
    padding-right: 6px;
    border-right: 1px solid rgba(255, 255, 255, 0.2);
}

:deep(.toolbar-group:last-child) {
    border-right: none;
    padding-right: 0;
}

:deep(.saved-views-panel) {
    min-width: 170px;
}

:deep(.saved-views-controls) {
    display: flex;
    gap: 4px;
}

:deep(.saved-views-select) {
    height: 36px;
    min-width: 140px;
    border: 1px solid var(--border);
    border-radius: 6px;
    background: var(--secondary);
    color: var(--secondary-foreground);
    font-size: 12px;
    padding: 0 8px;
}

:deep(.saved-views-select:focus) {
    outline: none;
    border-color: rgba(59, 130, 246, 0.9);
}

:deep(.saved-views-select:hover) {
    background: var(--muted);
}

:deep(.saved-view-delete) {
    width: 36px;
    height: 36px;
    border: 1px solid var(--border);
    border-radius: 999px;
    background: transparent;
    color: var(--secondary-foreground);
    font-size: 13px;
    line-height: 1;
    cursor: pointer;
}

:deep(.saved-view-delete:hover) {
    background: rgba(220, 38, 38, 0.12);
    border-color: rgba(220, 38, 38, 0.45);
}

:deep(.saved-view-delete:disabled) {
    opacity: 0.5;
    cursor: not-allowed;
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

:deep(.button-icon.pause-icon) {
    transform: translateY(-1px) scale(1);
}

:deep(.button-icon.play-icon) {
    transform: scale(0.75);
}

.toolbar.is-dark :deep(.toolbar-group) {
    border-right-color: rgba(255, 255, 255, 0.1);
}

.toolbar.is-dark :deep(.toolbar-button) {
    background: oklch(0.269 0 0);
    border-color: oklch(1 0 0 / 15%);
    color: oklch(0.985 0 0);
}

.toolbar.is-dark :deep(.toolbar-button:hover) {
    background: oklch(0.33 0 0);
    border-color: oklch(1 0 0 / 28%);
}

.toolbar.is-dark :deep(.toolbar-button.active) {
    background: rgba(59, 130, 246, 0.9);
    color: white;
    border-color: rgba(59, 130, 246, 1);
}

.toolbar.is-dark :deep(.saved-views-select) {
    background: oklch(0.33 0 0);
    border-color: oklch(1 0 0 / 15%);
    color: oklch(0.985 0 0);
}

.toolbar.is-dark :deep(.saved-views-select:hover) {
    background: oklch(0.33 0 0);
}

.toolbar.is-dark :deep(.saved-view-delete) {
    border-color: oklch(1 0 0 / 15%);
    color: oklch(0.985 0 0);
}

:deep(.display-tools-wrapper) {
    display: contents;
}
</style>
