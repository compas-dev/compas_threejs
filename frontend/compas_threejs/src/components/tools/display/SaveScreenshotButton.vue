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
                            <div class="flex items-center gap-2">
                                <label for="screenshot-width" class="text-sm">Width</label>
                                <Tooltip v-if="widthError">
                                    <TooltipTrigger as-child>
                                        <span class="error-pill" aria-label="Width error">!</span>
                                    </TooltipTrigger>
                                    <TooltipContent class="z-[5000]" side="top">
                                        <p>{{ widthError }}</p>
                                    </TooltipContent>
                                </Tooltip>
                            </div>
                            <input
                                id="screenshot-width"
                                v-model.number="width"
                                type="number"
                                @input="markUserOverrides"
                                @blur="normalizeWidth"
                                class="col-span-2 h-8 rounded-lg border border-input bg-secondary px-3 py-1 text-sm text-secondary-foreground shadow-xs transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
                            />
                        </div>

                        <div class="grid grid-cols-3 items-center gap-4">
                            <div class="flex items-center gap-2">
                                <label for="screenshot-height" class="text-sm">Height</label>
                                <Tooltip v-if="heightError">
                                    <TooltipTrigger as-child>
                                        <span class="error-pill" aria-label="Height error">!</span>
                                    </TooltipTrigger>
                                    <TooltipContent class="z-[5000]" side="top">
                                        <p>{{ heightError }}</p>
                                    </TooltipContent>
                                </Tooltip>
                            </div>
                            <input
                                id="screenshot-height"
                                v-model.number="height"
                                type="number"
                                @input="markUserOverrides"
                                @blur="normalizeHeight"
                                class="col-span-2 h-8 rounded-lg border border-input bg-secondary px-3 py-1 text-sm text-secondary-foreground shadow-xs transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
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
import { computed, ref, watch } from "vue";
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
const hasUserOverrides = ref(false);

const MIN_DIMENSION = 64;
const MAX_DIMENSION = 8192;

const widthError = computed(() => {
    if (!Number.isFinite(width.value)) {
        return "Width must be a number.";
    }
    if (width.value < MIN_DIMENSION || width.value > MAX_DIMENSION) {
        return `Width must be between ${MIN_DIMENSION} and ${MAX_DIMENSION} px.`;
    }
    return "";
});

const heightError = computed(() => {
    if (!Number.isFinite(height.value)) {
        return "Height must be a number.";
    }
    if (height.value < MIN_DIMENSION || height.value > MAX_DIMENSION) {
        return `Height must be between ${MIN_DIMENSION} and ${MAX_DIMENSION} px.`;
    }
    return "";
});

function clampDimension(value: number, fallback: number) {
    if (!Number.isFinite(value)) {
        return fallback;
    }

    return Math.min(MAX_DIMENSION, Math.max(MIN_DIMENSION, Math.round(value)));
}

function markUserOverrides() {
    hasUserOverrides.value = true;
}

function normalizeWidth() {
    width.value = clampDimension(width.value, 1920);
}

function normalizeHeight() {
    height.value = clampDimension(height.value, 1080);
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
    normalizeWidth();
    normalizeHeight();
    if (widthError.value || heightError.value) {
        return;
    }
    saveCurrentCanvasImage({
        width: width.value,
        height: height.value,
        format: format.value,
    });

    isOpen.value = false;
}

watch(isOpen, (open) => {
    if (open && !hasUserOverrides.value) {
        hydrateDimensionsFromCanvas();
    }
});
</script>

<style scoped>
.error-pill {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
    border-radius: 9999px;
    font-size: 11px;
    font-weight: 700;
    line-height: 1;
    color: var(--destructive-foreground, #fff);
    background: color-mix(in srgb, var(--destructive) 80%, transparent);
    cursor: default;
    user-select: none;
}
</style>
