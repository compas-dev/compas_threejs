<template>
    <TooltipProvider :delay-duration="600">
        <Tooltip>
            <TooltipTrigger>
                <Button variant="secondary" size="icon" class="toolbar-button" @click="handleClick">
                    <span class="button-icon">
                        <Rabbit :size="16" :stroke-width="2" aria-hidden="true" />
                    </span>
                </Button>
            </TooltipTrigger>
            <TooltipContent class="z-1000" side="bottom">
                <p>Right view <Kbd>6</Kbd></p>
            </TooltipContent>
        </Tooltip>
    </TooltipProvider>
</template>

<script setup lang="ts">
import { Rabbit } from "lucide-vue-next";
import { setCameraViewPreset } from "@/viewer/toolbar_actions";
import { Button } from "@/components/ui/button";
import { Kbd } from "@/components/ui/kbd";
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip";

function handleClick() {
    setCameraViewPreset("right");
}
</script>
