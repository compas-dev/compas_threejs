<template>
    <TooltipProvider :delay-duration="600">
        <Tooltip>
            <TooltipTrigger>
                <Button
                    variant="secondary"
                    size="icon"
                    :class="{ active }"
                    @click="handleClick"
                >
                    <Play v-if="active" class="button-icon" :size="16" />
                    <Pause v-else class="button-icon" :size="16" />
                </Button>
            </TooltipTrigger>
            <TooltipContent class="z-1000" side="bottom">
                <p>Play/Pause motion <Kbd>spacebar</Kbd></p>
            </TooltipContent>
        </Tooltip>
    </TooltipProvider>
</template>

<script setup lang="ts">
import { Pause, Play } from "lucide-vue-next";
import { toggleObjectMotionPaused } from "@/viewer/toolbar_actions";
import { Button } from "@/components/ui/button";
import { Kbd } from "@/components/ui/kbd";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
    TooltipProvider,
} from "@/components/ui/tooltip";

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
