<template>
    <button class="toolbar-button" title="Save Current View (S)" @click="handleClick">
        <span class="button-icon">
            <Save :size="16" :stroke-width="2" aria-hidden="true" />
        </span>
    </button>
</template>

<script setup lang="ts">
import { Save } from "lucide-vue-next";
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
