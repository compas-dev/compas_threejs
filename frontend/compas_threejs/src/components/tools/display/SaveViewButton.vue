<template>
    <button class="toolbar-button" title="Save Current View (S)" @click="handleClick">
        <span class="button-icon save-view-icon">
            <Camera :size="15" :stroke-width="2" aria-hidden="true" class="save-view-base" />
            <span class="save-view-overlay" aria-hidden="true">
                <Plus :size="8" :stroke-width="3" class="save-view-overlay-icon" />
            </span>
        </span>
    </button>
</template>

<script setup lang="ts">
import { Camera, Plus } from "lucide-vue-next";
import { captureCurrentView, type SavedView } from "@/viewer/toolbar_actions";

const props = defineProps<{
    defaultName: string;
}>();

const emit = defineEmits<{
    (e: "saved", view: SavedView): void;
}>();

function handleClick() {
    const requestedName = window.prompt("Name for saved view", props.defaultName);
    if (requestedName === null) {
        return;
    }

    const name = requestedName.trim() || props.defaultName;
    const view = captureCurrentView(name);
    emit("saved", view);
}
</script>

<style scoped>
.save-view-icon {
    position: relative;
}

.save-view-base {
    display: inline-flex;
}

.save-view-overlay {
    position: absolute;
    right: -5px;
    bottom: -3px;
    width: 10px;
    height: 10px;
    border-radius: 999px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.95);
    color: black;
    box-shadow: 0 0 0 1.5px var(--secondary);
}

.save-view-overlay-icon {
    display: inline-flex;
}
</style>
