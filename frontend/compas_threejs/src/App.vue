<template>
    <div class="app-container">
        <!-- <Toolbar />
        <Openbar v-if="sideBarInfoState.isVisible" /> -->
        <Sidebar />
        <div ref="threeContainer" class="three-container"></div>
        <Transition name="theme-indicator">
            <div
                v-if="showThemeIndicator"
                :key="themeIndicatorKey"
                class="theme-indicator"
                :class="{ 'is-dark': themeIndicatorMode === 'dark' }"
                aria-hidden="true"
            >
                <Moon v-if="themeIndicatorMode === 'dark'" class="theme-indicator-icon" />
                <SunMedium v-else class="theme-indicator-icon" />
            </div>
        </Transition>
        <ObjectInfo />
    </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";
import { Moon, SunMedium } from "lucide-vue-next";
import ObjectInfo from "./components/layout/ObjectInfo.vue";
import { renderer } from "./viewer/scene_manager";
import { initializeWebSocketConnection } from "./communications/communication";
import { sideBarInfoState, type BackgroundMode } from "./store/store.ts";
import Sidebar from "@/components/layout/Sidebar.vue";
import { subscribeBackgroundMode } from "./viewer/theme_manager";

const threeContainer = ref<HTMLDivElement | null>(null);
const showThemeIndicator = ref(false);
const themeIndicatorMode = ref<BackgroundMode>("light");
const themeIndicatorKey = ref(0);

let themeIndicatorTimer: ReturnType<typeof window.setTimeout> | null = null;
let unsubscribeBackgroundMode: (() => void) | null = null;

function triggerThemeIndicator(mode: BackgroundMode) {
    themeIndicatorMode.value = mode;
    themeIndicatorKey.value += 1;
    showThemeIndicator.value = true;

    if (themeIndicatorTimer) {
        window.clearTimeout(themeIndicatorTimer);
    }

    themeIndicatorTimer = window.setTimeout(() => {
        showThemeIndicator.value = false;
        themeIndicatorTimer = null;
    }, 900);
}

onMounted(() => {
    let isInitialMode = true;

    unsubscribeBackgroundMode = subscribeBackgroundMode((mode) => {
        if (isInitialMode) {
            themeIndicatorMode.value = mode;
            isInitialMode = false;
            return;
        }

        triggerThemeIndicator(mode);
    });

    if (threeContainer.value) {
        threeContainer.value.appendChild(renderer.domElement);
        initializeWebSocketConnection();
    }
});

onBeforeUnmount(() => {
    if (themeIndicatorTimer) {
        window.clearTimeout(themeIndicatorTimer);
        themeIndicatorTimer = null;
    }

    if (unsubscribeBackgroundMode) {
        unsubscribeBackgroundMode();
        unsubscribeBackgroundMode = null;
    }
});
</script>

<style scoped>
div.app-container {
    padding: 0px;
    margin: 0px;
    display: inline-flex;
    height: 100vh; /* Full viewport height */
    width: 100%; /* Full viewport width */ /* Ensure it doesn't exceed viewport width */
    overflow: hidden;
    position: relative;
}

div.three-container {
    flex: 1; /* Take up remaining space */
    position: fixed; /* Ensure it can contain absolutely positioned children if needed */
    overflow: hidden; /* Hide any overflow from the Three.js canvas */
}

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

.theme-indicator.is-dark {
    background: oklch(0.269 0 0);
    border-color: oklch(1 0 0 / 15%);
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
