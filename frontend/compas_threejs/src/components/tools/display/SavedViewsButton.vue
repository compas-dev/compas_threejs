<template>
    <Popover v-model:open="isOpen" :modal="true">
        <PopoverTrigger as-child>
            <Button variant="secondary" size="icon" title="Saved Views">
                <ClipboardList />
            </Button>
        </PopoverTrigger>

        <PopoverContent
            class="theme z-[4000] w-72 rounded-xl p-2 text-secondary-foreground"
            side="bottom"
            align="start"
        >
            <div class="flex h-8 items-stretch overflow-hidden rounded-lg border border-input bg-secondary">
                <select
                    v-model="selectedId"
                    class="h-full flex-1 border-0 bg-transparent px-3 py-1 text-sm text-secondary-foreground outline-none"
                    @change="handleSelect"
                >
                    <option v-if="views.length === 0" disabled value="">
                        No saved views
                    </option>
                    <option
                        v-for="view in views"
                        :key="view.id"
                        :value="view.id"
                    >
                        {{ view.name }}
                    </option>
                </select>

                <button
                    class="inline-flex h-full w-8 items-center justify-center border-l border-input text-secondary-foreground transition-colors hover:bg-muted disabled:cursor-not-allowed disabled:opacity-50"
                    title="Delete saved view"
                    :disabled="!selectedId"
                    @click.stop="handleDelete"
                >
                    <X class="h-3 w-3" />
                </button>
            </div>
        </PopoverContent>
    </Popover>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { ClipboardList, X } from "lucide-vue-next";
import type { SavedView } from "@/viewer/toolbar_actions";
import { Button } from "@/components/ui/button";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";

const props = defineProps<{
    views: SavedView[];
    selectedViewId: string;
}>();

const emit = defineEmits<{
    (e: "select", id: string): void;
    (e: "delete", id: string): void;
}>();

const isOpen = ref(false);
const selectedId = ref("");

watch(
    () => props.selectedViewId,
    (id) => {
        selectedId.value = id;
    },
    { immediate: true },
);

function handleSelect() {
    if (!selectedId.value) {
        return;
    }

    emit("select", selectedId.value);
}

function handleDelete() {
    if (!selectedId.value) {
        return;
    }

    emit("delete", selectedId.value);
}
</script>
