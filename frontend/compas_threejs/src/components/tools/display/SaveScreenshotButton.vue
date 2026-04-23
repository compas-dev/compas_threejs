<template>
    <TooltipProvider :delay-duration="600">
        <Tooltip>
            <TooltipTrigger>
                <Button variant="secondary" size="icon" @click="handleClick">
                    <ImageDown />
                </Button>
            </TooltipTrigger>
            <TooltipContent class="z-1000" side="bottom">
                <p>Save as PNG <Kbd>F</Kbd></p>
            </TooltipContent>
        </Tooltip>
    </TooltipProvider>
</template>

<script setup lang="ts">
import { ImageDown } from "lucide-vue-next";
import { saveCurrentCanvasAsPng } from "@/viewer/toolbar_actions";
import { Button } from "@/components/ui/button";
import { Kbd } from "@/components/ui/kbd";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
    TooltipProvider,
} from "@/components/ui/tooltip";

function handleClick() {
    saveCurrentCanvasAsPng();
}
</script>
