<template>
    <div
        class="fixed-sidebar"
        :class="{ 'is-hidden': !isVisible, 'is-dark': isDarkMode, dark: isDarkMode }"
    >
        <!-- Dynamically render components from the store -->
        <div
            v-for="item in sidebarComponents"
            :key="item.id"
            class="dynamic-item"
        >
            <!-- Add a label if it exists -->
            <label v-if="item.label" class="dynamic-label">{{
                item.label
            }}</label>

            <!-- Render a Button -->
            <Button
                variant="secondary"
                v-if="item.component === 'Button'"
                @click="handleAction(item.action)"
            >
                {{ item.props.text }}
            </Button>

            <!-- Render a Slider -->
            <div
                v-else-if="item.component === 'Slider'"
                class="slider-container"
            >
                <Slider
                    :min="item.props.min"
                    :max="item.props.max"
                    :step="item.props.step"
                    :default-value="item.props.defaultValue"
                    v-model="item.props.defaultValue"
                    @update:model-value="
                        (value) => handleAction(item.action, value)
                    "
                    class="w-[80%]"
                >
                </Slider>
                <span v-if="item.props.defaultValue" class="slider-value">
                    {{ item.props.defaultValue[0] }}
                </span>
            </div>

            <!-- You could add more v-if blocks here for other components like Sliders -->
        </div>
        <Button
            variant="secondary"
            size="icon"
            class="mb-4"
            @click="toggleSideBar()"
        >
            {{ isVisible ? "<<" : ">>" }}
        </Button>
    </div>

    <div :class="{ dark: isDarkMode }">
        <Button
            variant="secondary"
            size="icon"
            class="mb-5"
            @click="toggleSideBar()"
            :class="{ 'is-hidden': !isVisible }"
        >
            >>
        </Button>
    </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, ref } from "vue";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { sidebarComponents, handleAction } from "@/communications/sidebarStore";
import { subscribeBackgroundMode } from "@/viewer/toolbar_actions";

const isVisible = ref(true);
const isDarkMode = ref(false);
const unsubscribeBackgroundMode = subscribeBackgroundMode((mode) => {
    isDarkMode.value = mode === "dark";
});

function toggleSideBar() {
    isVisible.value = !isVisible.value;
}

document.addEventListener("keydown", (event) => {
    if (event.key === "Q" || event.key === "q") {
        toggleSideBar();
    }
});

onBeforeUnmount(() => {
    unsubscribeBackgroundMode();
});
</script>

<style scoped>
div.fixed-sidebar {
    position: fixed;
    z-index: 1000; /* Ensure it appears above other content */
    top: 0;
    left: 0;
    width: 18vw;
    margin: 20px;
    height: 96vh;
    border-radius: 10px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 15px; /* Adjust spacing */
    align-items: left;

    background: linear-gradient(
        135deg,
        rgba(255, 255, 255, 0.15) 0%,
        rgba(255, 255, 255, 0.2) 100%
    );

    backdrop-filter: blur(25px) saturate(180%);
    -webkit-backdrop-filter: blur(25px) saturate(180%);

    border: 1px solid rgba(255, 255, 255, 0.2);
    border-top: 1px solid rgba(255, 255, 255, 0.4);
    border-left: 1px solid rgba(255, 255, 255, 0.3);

    box-shadow:
        0 8px 32px 0 rgba(0, 0, 0, 0.3),
        inset 0 0 15px rgba(255, 255, 255, 0.7);

    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1); /* Smooth sliding effect */
    will-change: transform;
}

div.fixed-sidebar.is-dark {
    background: linear-gradient(
        135deg,
        rgba(17, 24, 39, 0.15) 0%,
        rgba(17, 24, 39, 0.2) 100%
    );
    border-color: rgba(255, 255, 255, 0.15);
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    border-left: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow:
        0 8px 32px 0 rgba(0, 0, 0, 0.5),
        inset 0 0 15px rgba(255, 255, 255, 0.1);
}

div.fixed-sidebar.is-hidden {
    /* Slide left by its width + margin to fully hide it */
    /* Adjust -110% depending on your margin/padding needs */
    transform: translateX(-150%);
}

.slider-container {
    display: flex;
    align-items: center;
    gap: 10px; /* Adds space between the slider and the value */
}

.dynamic-item {
    width: 100%;
    display: flex;
    flex-direction: column; /* Stack label on top of the component */
    align-items: left;
    gap: 8px; /* Space between label and component */
}

.dynamic-label {
    font-weight: 500;
    font-size: 15px;
    color: #333;
    padding: 0;
}

div.fixed-sidebar.is-dark .dynamic-label {
    color: rgba(255, 255, 255, 0.85);
}
Button.mb-4 {
    position: absolute;
    bottom: 5px;
}

Button.mb-5 {
    position: fixed;
    bottom: 20px;
    left: 20px;
    z-index: 1001; /* Ensure it appears above the sidebar */
    opacity: 0; /* Slightly transparent for better aesthetics */
}

Button.mb-5.is-hidden {
    opacity: 1; /* Fully visible when the sidebar is hidden */
}
</style>
