<template>
    <TooltipProvider :delay-duration="600">
        <Tooltip>
            <TooltipTrigger>
                <Button
                    variant="secondary"
                    size="icon"
                    @click="togglePicker"
                    :class="{ active: !pickerEnabled.value }"
                >
                    <span v-if="pickerEnabled.value">
                        <Pointer />
                    </span>
                    <span v-else>
                        <PointerOff />
                    </span>
                </Button>
            </TooltipTrigger>
            <TooltipContent class="z-1000" side="bottom">
                <p>Enable/Disable object selection <Kbd>P</Kbd></p>
            </TooltipContent>
        </Tooltip>
    </TooltipProvider>
</template>

<script setup lang="ts">
import { Pointer, PointerOff } from "lucide-vue-next";
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

function togglePicker() {
    pickerEnabled.value = !pickerEnabled.value;
}
</script>
