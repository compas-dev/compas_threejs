<template>
    <button
        class="toolbar-button"
        :class="{ active }"
        title="Scale (R)"
        @click="handleClick"
    >
        <span class="button-icon">
            <Scale3d :size="16" :stroke-width="2" aria-hidden="true" />
        </span>
    </button>
</template>

<script setup lang="ts">
import { Scale3d } from "lucide-vue-next";
import { setTransformMode } from "@/viewer/toolbar_actions";

defineProps<{
    active: boolean;
}>();

const emit = defineEmits<{
    (e: "activated"): void;
}>();

function handleClick() {
    setTransformMode("scale");
    emit("activated");
}
</script>
