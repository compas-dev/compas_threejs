<template>
    <div id="openbar" class="fixed-openbar theme" :class="{ 'is-hidden': !isVisible }">
        <!-- Dynamically render components from the store -->
        <div v-for="item in sidebarComponents" :key="item.id" class="dynamic-item">
            <!-- Add a label if it exists -->
            <label
                v-if="item.label"
                class="dynamic-label"
                :class="{ dark: theme.value === 'dark' }"
                >{{ item.label }}</label
            >

            <!-- Render a Button -->
            <Button
                variant="secondary"
                v-if="item.component === 'Button'"
                @click="handleAction(item.action)"
            >
                {{ item.props.text }}
            </Button>

            <!-- Render a Slider -->
            <div v-else-if="item.component === 'Slider'" class="slider-container">
                <Slider
                    :min="item.props.min"
                    :max="item.props.max"
                    :step="item.props.step"
                    :default-value="item.props.defaultValue"
                    v-model="item.props.defaultValue"
                    @update:model-value="(value) => handleAction(item.action, value[0])"
                    class="w-[80%]"
                >
                </Slider>
                <span v-if="item.props.defaultValue" class="slider-value">
                    {{ item.props.defaultValue[0] }}
                </span>
            </div>

            <!-- Render a NumberField -->
            <div v-else-if="item.component === 'NumberField'" class="number-field-container">
                <NumberField
                    :min="item.props.min"
                    :max="item.props.max"
                    :step="item.props.step"
                    :default-value="item.props.value"
                    v-model="item.props.value"
                    @update:model-value="(value) => handleAction(item.action, value)"
                    class="w-full"
                >
                    <NumberFieldContent>
                        <NumberFieldDecrement />
                        <NumberFieldInput />
                        <NumberFieldIncrement />
                    </NumberFieldContent>
                </NumberField>
            </div>

            <!-- You could add more v-if blocks here for other components like Sliders -->
        </div>
        <Button variant="secondary" size="icon" class="mb-4" @click="toggleSideBar()">
            <ArrowBigLeftDash />
        </Button>
    </div>
    <Button
        variant="secondary"
        size="icon"
        class="mb-5"
        @click="toggleSideBar()"
        :class="{ 'is-hidden': !isVisible }"
    >
        <ArrowBigRightDash />
    </Button>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useEventListener } from "@vueuse/core";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { sidebarComponents, handleAction } from "@/communications/sidebarStore";
import { ArrowBigLeftDash, ArrowBigRightDash } from "lucide-vue-next";
import {
    NumberField,
    NumberFieldContent,
    NumberFieldDecrement,
    NumberFieldIncrement,
    NumberFieldInput,
} from "@/components/ui/number-field";
import { theme } from "@/store/store";
import { useHover } from "@/composables/useHover";
import { watchEffect } from "vue";
import { blockPicker, pickerEnabled } from "../../store/store";

const isVisible = ref(true);

function toggleSideBar() {
    isVisible.value = !isVisible.value;
}

document.addEventListener("keydown", (event) => {
    if (event.key === "Q" || event.key === "q") {
        toggleSideBar();
    }
});

const { isHovered } = useHover("openbar");
const isOpenbarVisible = computed(() => isVisible.value);

watchEffect(() => {
    blockPicker.value = isHovered.value && isOpenbarVisible.value;
});
</script>

<style scoped>
div#openbar {
    position: relative;
    z-index: 1000; /* Ensure it appears above other content */
    width: 100%;
    margin: 0px;
    height: auto;
    border-radius: 10px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 15px; /* Adjust spacing */
    align-items: left;
    height: 100%;
    pointer-events: auto;
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1); /* Smooth sliding effect */
    will-change: transform;

    /*overflow: ;*/
    overflow-y: auto;
}

div#openbar.is-hidden {
    /* Slide left by its width + margin to fully hide it */
    /* Adjust -110% depending on your margin/padding needs */
    transform: translateX(-150%);
    pointer-events: none;
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
    color: var(--foreground);
    padding: 0;
}

.slider-value {
    color: var(--foreground);
}

Button.mb-4 {
    position: relative;
    margin: 0px;
    margin-top: auto;
}
Button.mb-5 {
    margin: 0px;
    position: fixed;
    bottom: 40px;
    left: 40px;
    z-index: 1; /* Ensure it appears above the sidebar */
    opacity: 0; /* Slightly transparent for better aesthetics */
    display: flex;
    visibility: hidden;
    transition: visibility 1s;
}

Button.mb-5.is-hidden {
    opacity: 1;
    visibility: visible;
}
</style>
