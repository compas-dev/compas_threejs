<template>
    <TooltipProvider :delay-duration="600">
        <Tooltip>
            <TooltipTrigger>
                <Button
                    variant="secondary"
                    size="icon"
                    :class="{
                        active: pickerMode.value == 'translate',
                        disabled: !pickerEnabled.value,
                    }"
                    @click="handleClick"
                    :disabled="!pickerEnabled.value"
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
import { setTransformMode } from "@/viewer/picker";
import { Button } from "@/components/ui/button";
import { Kbd } from "@/components/ui/kbd";
// You don't need `ref` here because you are using the store's ref directly
import { pickerEnabled } from "@/store/store.ts";
import { pickerMode } from "@/store/store.ts";

import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
    TooltipProvider,
} from "@/components/ui/tooltip";

function handleClick() {
    setTransformMode("translate");
    pickerMode.value = "translate";
}
</script>
