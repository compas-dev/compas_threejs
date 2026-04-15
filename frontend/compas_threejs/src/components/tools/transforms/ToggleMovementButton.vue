<template>
    <button
        class="toolbar-button"
        :class="{ active }"
        title="Play/Pause Movements (Space)"
        @click="handleClick"
    >
        <span
            class="button-icon"
            :class="active ? 'play-icon' : 'pause-icon'"
        >
            {{ active ? "▶" : "⏸" }}
        </span>
    </button>
</template>

<script setup lang="ts">
import { toggleObjectMotionPaused } from "@/viewer/toolbar_actions";

defineProps<{
    active: boolean;
}>();

const emit = defineEmits<{
    (e: "toggled", paused: boolean): void;
}>();

function handleClick() {
    const paused = toggleObjectMotionPaused();
    emit("toggled", paused);
}
</script>
