<template>
    <button
        class="toolbar-button"
        :class="{ active }"
        title="Rotate (E)"
        @click="handleClick"
    >
        <span class="button-icon">
            <Rotate3d :size="16" :stroke-width="2" aria-hidden="true" />
        </span>
    </button>
</template>

<script setup lang="ts">
import { Rotate3d } from "lucide-vue-next";
import { setTransformMode } from "@/viewer/toolbar_actions";

defineProps<{
    active: boolean;
}>();

const emit = defineEmits<{
    (e: "activated"): void;
}>();

function handleClick() {
    setTransformMode("rotate");
    emit("activated");
}
</script>
