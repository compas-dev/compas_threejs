<template>
    <TooltipProvider :delay-duration="600">
        <Tooltip>
            <TooltipTrigger>
                <Button
                    variant="secondary"
                    size="icon"
                    class="toolbar-button"
                    :class="{
                        active: pickerMode.value == 'scale',
                        disabled: !pickerEnabled.value,
                    }"
                    @click="handleClick"
                    :disabled="!pickerEnabled.value"
                >
                    <span class="button-icon">
                        <Scale3d
                            :size="16"
                            :stroke-width="2"
                            aria-hidden="true"
                        />
                    </span>
                </Button>
            </TooltipTrigger>
            <TooltipContent class="z-1000" side="bottom">
                <p>Rotate mode <Kbd>R</Kbd></p>
            </TooltipContent>
        </Tooltip>
    </TooltipProvider>
</template>

<script setup lang="ts">
import { Scale3d } from "lucide-vue-next";
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

defineProps<{
    active: boolean;
}>();

const emit = defineEmits<{
    (e: "activated"): void;
}>();

function handleClick() {
    setTransformMode("scale");
    pickerMode.value = "scale";
}
</script>
