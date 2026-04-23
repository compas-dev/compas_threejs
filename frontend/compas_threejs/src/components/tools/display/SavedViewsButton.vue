<template>
    <TooltipProvider :delay-duration="600">
        <Tooltip>
            <TooltipTrigger>
                <Button variant="secondary" size="icon" @click="$emit('toggle')">
                    <ClipboardList />
                </Button>
            </TooltipTrigger>
            <TooltipContent class="z-1000" side="bottom">
                <p>Saved View </p>
            </TooltipContent>
        </Tooltip>
    </TooltipProvider>
</template>

<script setup lang="ts">
import { ClipboardList } from "lucide-vue-next";
import { Button } from "@/components/ui/button";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
    TooltipProvider,
} from "@/components/ui/tooltip";

defineEmits<{
    (e: "toggle"): void;
}>();
</script>
