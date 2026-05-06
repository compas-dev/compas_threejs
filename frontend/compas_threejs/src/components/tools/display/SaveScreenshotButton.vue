<template>
    <TooltipProvider :delay-duration="600">
        <Popover v-model:open="isOpen" :modal="true">
            <PopoverTrigger as-child>
                <Button variant="secondary" size="icon">
                    <Tooltip>
                        <TooltipTrigger as-child>
                            <span class="inline-flex h-full w-full items-center justify-center">
                                <ImageDown />
                            </span>
                        </TooltipTrigger>
                        <TooltipContent class="z-1000" side="bottom">
                            <p>Save screenshot <Kbd>F</Kbd></p>
                        </TooltipContent>
                    </Tooltip>
                </Button>
            </PopoverTrigger>

            <PopoverContent
                class="theme z-[4000] w-84 rounded-xl p-5 text-secondary-foreground"
                side="bottom"
                align="start"
            >
                <div class="grid gap-5">
                    <div class="space-y-2">
                        <h4 class="font-medium leading-none">
                            Export Screenshot
                        </h4>
                        <p class="text-sm text-muted-foreground">
                            Set width, height, and image format.
                        </p>
                    </div>

                    <div class="grid gap-3">
                        <div class="grid grid-cols-3 items-center gap-4">
                            <label for="screenshot-width" class="text-sm">Width</label>
                            <input
                                id="screenshot-width"
                                v-model.number="width"
                                type="number"
                                min="64"
                                max="8192"
                                class="themed-number col-span-2 h-8 rounded-lg border border-input bg-secondary px-3 py-1 text-sm text-secondary-foreground shadow-xs transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
                            />
                        </div>

                        <div class="grid grid-cols-3 items-center gap-4">
                            <label for="screenshot-height" class="text-sm">Height</label>
                            <input
                                id="screenshot-height"
                                v-model.number="height"
                                type="number"
                                min="64"
                                max="8192"
                                class="themed-number col-span-2 h-8 rounded-lg border border-input bg-secondary px-3 py-1 text-sm text-secondary-foreground shadow-xs transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
                            />
                        </div>

                        <div class="grid grid-cols-3 items-center gap-4">
                            <label for="screenshot-format" class="text-sm">Format</label>
                            <select
                                id="screenshot-format"
                                v-model="format"
                                class="col-span-2 h-8 rounded-lg border border-input bg-secondary px-3 py-1 text-sm text-secondary-foreground shadow-xs transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
                            >
                                <option value="png">PNG</option>
                                <option value="jpg">JPG</option>
                                <option value="webp">WEBP</option>
                            </select>
                        </div>
                    </div>

                    <div class="flex justify-end gap-2">
                        <Button variant="secondary" size="sm" @click="isOpen = false">Cancel</Button>
                        <Button variant="secondary" size="sm" @click="handleSave">Save</Button>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    </TooltipProvider>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { ImageDown } from "lucide-vue-next";
import {
    saveCurrentCanvasImage,
    type ScreenshotFormat,
} from "@/viewer/toolbar_actions";
import { renderer } from "@/viewer/scene_manager";
import { Button } from "@/components/ui/button";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Kbd } from "@/components/ui/kbd";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

const isOpen = ref(false);
const width = ref(1920);
const height = ref(1080);
const format = ref<ScreenshotFormat>("png");

function clampDimension(value: number, fallback: number) {
    if (!Number.isFinite(value)) {
        return fallback;
    }

    return Math.min(8192, Math.max(64, Math.round(value)));
}

function hydrateDimensionsFromCanvas() {
    const canvas = renderer.domElement;
    if (!canvas) {
        return;
    }

    const rect = canvas.getBoundingClientRect();
    const canvasWidth = Math.round(rect.width) || canvas.clientWidth || canvas.width;
    const canvasHeight = Math.round(rect.height) || canvas.clientHeight || canvas.height;

    width.value = clampDimension(canvasWidth, width.value);
    height.value = clampDimension(canvasHeight, height.value);
}

function handleSave() {
    saveCurrentCanvasImage({
        width: clampDimension(width.value, 1920),
        height: clampDimension(height.value, 1080),
        format: format.value,
    });

    isOpen.value = false;
}

watch(isOpen, (open) => {
    if (open) {
        hydrateDimensionsFromCanvas();
    }
});
</script>

<style scoped>
.themed-number {
    color: var(--foreground);
    caret-color: var(--foreground);
    accent-color: var(--foreground);
    color-scheme: light;
}

.dark .themed-number {
    color-scheme: dark;
}

.themed-number::-webkit-inner-spin-button,
.themed-number::-webkit-outer-spin-button {
    color: inherit;
}
</style>
