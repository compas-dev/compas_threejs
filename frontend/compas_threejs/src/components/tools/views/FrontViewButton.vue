<template>
    <TooltipProvider :delay-duration="600">
        <Tooltip>
            <TooltipTrigger>
                <Button variant="secondary" size="icon" @click="handleClick">
                    <Square />
                </Button>
            </TooltipTrigger>
            <TooltipContent class="z-1000" side="bottom">
                <p>Front view <Kbd>2</Kbd></p>
            </TooltipContent>
        </Tooltip>
    </TooltipProvider>
</template>

<script setup lang="ts">
import { Square } from "lucide-vue-next";
import { setCameraViewPreset } from "@/viewer/toolbar_actions";
import { Button } from "@/components/ui/button";
import { Kbd } from "@/components/ui/kbd";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
    TooltipProvider,
} from "@/components/ui/tooltip";

function handleClick() {
    setCameraViewPreset("front");
}
</script>
