<template>
    <TooltipProvider :delay-duration="600">
        <Tooltip>
            <TooltipTrigger>
                <Button
                    variant="secondary"
                    size="icon"
                    :class="{
                        active: pickerMode.value == 'rotate',
                        disabled: !pickerEnabled.value,
                    }"
                    @click="handleClick"
                    :disabled="!pickerEnabled.value"
                >
                    <Rotate3d :size="16" :stroke-width="2" aria-hidden="true" />
                </Button>
            </TooltipTrigger>
            <TooltipContent class="z-1000" side="bottom">
                <p>Rotate mode <Kbd>E</Kbd></p>
            </TooltipContent>
        </Tooltip>
    </TooltipProvider>
</template>

<script setup lang="ts">
import { Rotate3d } from "lucide-vue-next";
import { setTransformMode } from "@/viewer/toolbar_actions";
import { Button } from "@/components/ui/button";
import { Kbd } from "@/components/ui/kbd";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
    TooltipProvider,
} from "@/components/ui/tooltip";
import { pickerEnabled } from "@/store/store.ts";
import { pickerMode } from "@/store/store.ts";

function handleClick() {
    setTransformMode("rotate");
    pickerMode.value = "rotate";
}
</script>
