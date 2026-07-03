<template>
    <div class="toolbar theme" id="toolbar">
        <h1 class="text-lg font-bold" :class="{ dark: theme.value === 'dark' }">COMPAS ThreeJs</h1>
        <TransformGroup />
        <ViewGroup />
        <DisplayGroup />
    </div>
</template>

<script setup lang="ts">
import TransformGroup from "@/components/tools/transforms/TransformGroup.vue";
import ViewGroup from "@/components/tools/views/ViewGroup.vue";
import DisplayGroup from "@/components/tools/display/DisplayGroup.vue";
import { theme } from "@/store/store";
import { blockPicker, pickerEnabled } from "../../store/store";
import { useHover } from "@/composables/useHover";
import { watchEffect } from "vue";

const { isHovered } = useHover("toolbar");

watchEffect(() => {
    blockPicker.value = isHovered.value;
});
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
    pointer-events: auto;
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

:deep(Button) {
    &:hover {
        box-shadow: var(--toolbar-button-hover-shadow);
    }

    &.active {
        box-shadow: var(--toolbar-button-active-shadow);
    }
}
h1 {
    color: var(--foreground);
}
</style>
