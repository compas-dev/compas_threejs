<template>
    <TooltipProvider :delay-duration="600">
        <Tooltip>
            <TooltipTrigger>
                <Button variant="secondary" size="icon" @click="handleClick">
                    <span class="button-icon save-view-icon">
                        <Camera
                            :size="15"
                            :stroke-width="2"
                            aria-hidden="true"
                        />
                        <span class="save-view-overlay" aria-hidden="true">
                            <Plus class="save-view-overlay-icon" />
                        </span>
                    </span>
                </Button>
            </TooltipTrigger>
            <TooltipContent class="z-1000" side="bottom">
                <p>Save Current View <Kbd>S</Kbd></p>
            </TooltipContent>
        </Tooltip>
    </TooltipProvider>
</template>

<script setup lang="ts">
import { Camera, Plus } from "lucide-vue-next";
import { captureCurrentView, type SavedView } from "@/viewer/toolbar_actions";
import { Button } from "@/components/ui/button";
import { Kbd } from "@/components/ui/kbd";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
    TooltipProvider,
} from "@/components/ui/tooltip";

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

<style scoped>
.save-view-icon {
    position: relative;
    width: 16px;
    height: 16px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
}

.save-view-overlay {
    position: absolute;
    right: -4px;
    bottom: -2px;
    width: 11px;
    height: 11px;
    border-radius: 999px;
    overflow: hidden;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: color-mix(in srgb, var(--secondary-foreground) 92%, white);
    color: var(--secondary);
    border: 1px solid color-mix(in srgb, var(--secondary) 65%, white);
}

.save-view-overlay-icon {
    display: inline-flex;
    width: 5px;
    height: 5px;
    min-width: 5px;
    min-height: 5px;
    stroke-width: 5;
    transform: translateY(-0.1px);
}
</style>
