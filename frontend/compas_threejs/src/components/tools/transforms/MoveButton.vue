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
                    <Move3d />
                </Button>
            </TooltipTrigger>
            <TooltipContent class="z-1000" side="bottom">
                <p>Move mode <Kbd>W</Kbd></p>
            </TooltipContent>
        </Tooltip>
    </TooltipProvider>
</template>

<script setup lang="ts">
import { Move3d } from "lucide-vue-next";
import { setTransformMode } from "@/viewer/toolbar_actions";
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
    (e: "activated"): void;
}>();

function handleClick() {
    setTransformMode("translate");
    emit("activated");
}
</script>
