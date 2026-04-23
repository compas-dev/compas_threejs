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
            <div class="grid gap-1">
                <p
                    v-if="views.length === 0"
                    class="px-3 py-2 text-xs text-muted-foreground"
                >
                    No saved views
                </p>

                <div
                    v-for="view in views"
                    :key="view.id"
                    class="grid grid-cols-[1fr_auto] items-center gap-1"
                >
                    <button
                        class="h-8 rounded-lg border border-input bg-secondary px-3 text-left text-xs text-secondary-foreground transition-colors hover:bg-muted"
                        :class="{
                            'saved-views-select--selected': selectedViewId === view.id,
                        }"
                        @click="handleSelect(view.id)"
                    >
                        {{ view.name }}
                    </button>

                    <button
                        class="saved-view-delete"
                        title="Delete saved view"
                        @click.stop="handleDelete(view.id)"
                    >
                        <X />
                    </button>
                </div>
            </div>
        </PopoverContent>
    </Popover>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { ClipboardList, X } from "lucide-vue-next";
import type { SavedView } from "@/viewer/toolbar_actions";
import { Button } from "@/components/ui/button";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";

defineProps<{
    views: SavedView[];
    selectedViewId: string;
}>();

const emit = defineEmits<{
    (e: "select", id: string): void;
    (e: "delete", id: string): void;
}>();

const isOpen = ref(false);

function handleSelect(id: string) {
    emit("select", id);
    isOpen.value = false;
}

function handleDelete(id: string) {
    emit("delete", id);
}
</script>
