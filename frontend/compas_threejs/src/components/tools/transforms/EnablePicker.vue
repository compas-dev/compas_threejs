<template>
    <TooltipProvider :delay-duration="600">
        <Tooltip>
            <TooltipTrigger>
                <Button
                    variant="secondary"
                    size="icon"
                    @click="togglePicker"
                    :class="{ active: !pointerEnabled }"
                >
                    <span v-if="pointerEnabled">
                        <Pointer />
                    </span>
                    <span v-else>
                        <PointerOff />
                    </span>
                </Button>
            </TooltipTrigger>
            <TooltipContent class="z-1000" side="bottom">
                <p>Enable/Disable object selection</p>
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
import { ref } from "vue";

const pointerEnabled = ref(pickerEnabled.value);

function togglePicker() {
    pointerEnabled.value = !pointerEnabled.value;
    pickerEnabled.value = !pickerEnabled.value;
}
</script>
