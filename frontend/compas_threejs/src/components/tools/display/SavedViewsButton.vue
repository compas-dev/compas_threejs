<template>
    <button class="toolbar-button" title="Saved Views" @click="$emit('toggle')">
        <span class="button-icon">
            <ClipboardList :size="16" :stroke-width="2" aria-hidden="true" />
        </span>
    </button>
</template>

<script setup lang="ts">
import { ClipboardList } from "lucide-vue-next";

defineEmits<{
    (e: "toggle"): void;
}>();
</script>
