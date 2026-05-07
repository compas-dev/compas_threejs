<template>
    <TooltipProvider :delay-duration="600">
        <Tooltip>
            <TooltipTrigger>
                <Button
                    variant="secondary"
                    size="icon"
                    class="toolbar-button"
                    @click="handleClick"
                >
                    <Plane />
                </Button>
            </TooltipTrigger>
            <TooltipContent class="z-1000" side="bottom">
                <p>Top view <Kbd>5</Kbd></p>
            </TooltipContent>
        </Tooltip>
    </TooltipProvider>
</template>

<script setup lang="ts">
import { Plane } from "lucide-vue-next";
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
    setCameraViewPreset("top");
}
</script>
