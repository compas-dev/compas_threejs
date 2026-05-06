<template>
    <Transition name="theme-indicator">
        <div
            v-if="showThemeIndicator"
            class="theme-indicator"
            aria-hidden="true"
        >
            <Moon v-if="themeIndicatorMode === 'dark'" class="theme-indicator-icon" />
            <SunMedium v-else class="theme-indicator-icon" />
        </div>
    </Transition>
</template>

<script setup lang="ts">
import { ref, watch, onBeforeUnmount, onMounted } from "vue";
import { Moon, SunMedium } from "lucide-vue-next";
import { theme } from "@/store/store";
import type { BackgroundMode } from "@/store/store";

// Use the centralized reactive `theme` so components don't manage DOM class toggles.
const showThemeIndicator = ref(false);
const themeIndicatorMode = ref<BackgroundMode>(theme.value);

let themeIndicatorTimer: ReturnType<typeof window.setTimeout> | null = null;
let isInitialMode = true;

function triggerThemeIndicator(mode: BackgroundMode) {
    themeIndicatorMode.value = mode;
    showThemeIndicator.value = true;

    if (themeIndicatorTimer) {
        window.clearTimeout(themeIndicatorTimer);
    }

    themeIndicatorTimer = window.setTimeout(() => {
        showThemeIndicator.value = false;
        themeIndicatorTimer = null;
    }, 900);
}

const stopWatch = watch(
    () => theme.value,
    (mode) => {
        if (isInitialMode) {
            themeIndicatorMode.value = mode;
            isInitialMode = false;
            return;
        }

        if (mode === themeIndicatorMode.value) {
            return;
        }

        triggerThemeIndicator(mode);
    },
    { immediate: true }
);

onBeforeUnmount(() => {
    if (themeIndicatorTimer) {
        window.clearTimeout(themeIndicatorTimer);
        themeIndicatorTimer = null;
    }

    stopWatch();
});

onMounted(() => {
    /* nothing else to do here; watch handles initial value */
});
</script>

<style scoped>
.theme-indicator {
    position: fixed;
    top: 18px;
    right: 18px;
    z-index: 1105;
    pointer-events: none;
    width: 44px;
    height: 44px;
    border-radius: 9999px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: color-mix(in oklab, var(--background) 78%, transparent);
    border: 1px solid color-mix(in oklab, var(--foreground) 14%, transparent);
    box-shadow: 0 10px 28px rgba(0, 0, 0, 0.18);
    backdrop-filter: blur(10px);
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1),
        opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.dark .theme-indicator {
    background: oklch(0.269 0 0);
    border-color: color-mix(in oklab, var(--foreground) 14%, transparent);
    box-shadow: 0 8px 24px rgba(0,0,0,0.5), inset 0 0 10px rgba(255,255,255,0.06);
}

.theme-indicator-icon {
    width: 20px;
    height: 20px;
    color: var(--foreground);
}

.theme-indicator-enter-active,
.theme-indicator-leave-active {
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1),
        opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.theme-indicator-enter-from,
.theme-indicator-leave-to {
    opacity: 0;
    transform: translateX(150%);
}

.theme-indicator-enter-to,
.theme-indicator-leave-from {
    opacity: 1;
    transform: translateX(0);
}
</style>
