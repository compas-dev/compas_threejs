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
                    <span class="button-icon">
                        <Box
                            :size="16"
                            :stroke-width="2"
                            aria-hidden="true"
                        />
                    </span>
                </Button>
            </TooltipTrigger>
            <TooltipContent class="z-1000" side="bottom">
                <p>Perspective view <Kbd>3</Kbd></p>
            </TooltipContent>
        </Tooltip>
    </TooltipProvider>
</template>

<script setup lang="ts">
import { Box } from "lucide-vue-next";
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
    setCameraViewPreset("front_right");
}
</script>
