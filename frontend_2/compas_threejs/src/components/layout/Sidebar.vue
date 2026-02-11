<template>
    <div class="fixed-sidebar">
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
                v-if="item.component === 'Button'"
                :variant="item.props.variant"
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
                    v-model="item.props.currentValue"
                    @update:model-value="
                        (value) => handleAction(item.action, value)
                    "
                    class="w-[80%]"
                >
                </Slider>
                <span
                    v-if="item.props.currentValue || item.props.defaultValue"
                    class="slider-value"
                >
                    {{
                        (item.props.currentValue || item.props.defaultValue)[0]
                    }}
                </span>
            </div>

            <!-- You could add more v-if blocks here for other components like Sliders -->
        </div>
    </div>
</template>

<script setup lang="ts">
import { watchEffect, toRaw } from "vue"; // 1. Import watchEffect and toRaw
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { sidebarComponents, handleAction } from "@/communications/sidebarStore";
</script>

<style scoped>
div.fixed-sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 200px;
    height: 100%;
    background-color: rgba(0, 0, 0, 0);
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 15px; /* Adjust spacing */
    align-items: left;
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
    margin-bottom: -13px;
    padding: 0;
}
</style>
