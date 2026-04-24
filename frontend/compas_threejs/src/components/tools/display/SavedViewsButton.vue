<template>
    <TooltipProvider :delay-duration="600">
        <Popover v-model:open="isOpen" :modal="true">
            <PopoverTrigger as-child>
                <Button variant="secondary" size="icon">
                    <Tooltip>
                        <TooltipTrigger as-child>
                            <span class="inline-flex h-full w-full items-center justify-center">
                                <ClipboardList />
                            </span>
                        </TooltipTrigger>
                        <TooltipContent class="z-1000" side="bottom">
                            <p>Saved views</p>
                        </TooltipContent>
                    </Tooltip>
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

                    <Tooltip>
                        <TooltipTrigger as-child>
                            <Button
                                variant="destructive"
                                size="icon-sm"
                                class="h-full w-8 rounded-none border-l border-input"
                                :disabled="!selectedId"
                                @click.stop="handleDelete"
                            >
                                <Trash2 class="h-3 w-3" />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent class="z-[4100]" side="bottom">
                            <p>Delete saved view</p>
                        </TooltipContent>
                    </Tooltip>
                </div>
            </PopoverContent>
        </Popover>
    </TooltipProvider>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { ClipboardList, Trash2 } from "lucide-vue-next";
import type { SavedView } from "@/viewer/toolbar_actions";
import { Button } from "@/components/ui/button";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

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
    () => [props.selectedViewId, props.views] as const,
    ([id, views]) => {
        if (views.length === 0) {
            selectedId.value = "";
            return;
        }

        const hasSelected = views.some((view) => view.id === id);
        selectedId.value = hasSelected ? id : views[0].id;
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
