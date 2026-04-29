<template>
    <div class="info-module" id="info-panel">
        <Button variant="ghost" @click="hideObjectInfo()"> X </Button>
        <div class="metadata">
            <h1>METADATA</h1>
            <div
                v-for="(value, key) in objectInfoState.data"
                :key="key"
                class="single_data"
            >
                <p>
                    <strong>{{ key }}:</strong> {{ value.value }}
                </p>
            </div>
        </div>
        <div class="metadata">
            <h1>FUNCTIONS</h1>
            <div
                v-for="action in objectActionsState"
                :key="action"
                class="single_data"
            >
                <Button
                    v-if="action.type === 'button'"
                    variant="outline"
                    @click="handleObjectAction(action)"
                    class="w-full"
                >
                    {{ action.text }}
                </Button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { objectInfoState } from "../../store/store";
import { objectActionsState } from "../../store/store";
import { blockPicker, pickerEnabled } from "../../store/store";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { hideObjectInfo } from "@/communications/objectInfo";
import { handleObjectAction } from "@/communications/objectInfo";
import { handleAction } from "@/communications/sidebarStore";
import { onMounted, onUnmounted } from "vue";

const geoInformation = objectInfoState.data
    ? Object.fromEntries(
          Object.entries(objectInfoState.data).filter(
              ([key]) => key !== "dispatch",
          ),
      )
    : {};

function pickerEnabler() {
    const infoPanel = document.getElementById("info-panel");
    const onPanel = infoPanel && infoPanel.matches(":hover");
    if (onPanel) {
        blockPicker.value = true;
    } else {
        blockPicker.value = false;
    }
}

onMounted(() => {
    window.addEventListener("mousemove", pickerEnabler);
});

onUnmounted(() => {
    window.removeEventListener("mousemove", pickerEnabler);
});
</script>

<style scoped>
/* 'scoped' means these styles only apply to this module */
div.info-module {
    position: fixed;
    z-index: 1000; /* Ensure it appears above other content */
    padding: 20px;
    width: 33vw;
    max-width: 400px;
    border-radius: 10px;
    height: 96vh;
    margin-top: 2vh;
    margin-right: 1vw;
    right: 0%;

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
}

div.info-module.active {
    transform: translateX(-100px);
    transition: all 0.3s ease-in-out;
}

div.metadata {
    margin-top: 30px;
}

div.single_data {
    margin-bottom: 10px;
}

p {
    font-size: 1.1em;
    color: black;
}

h1 {
    margin-top: 0;
    font-size: 1.4em;
    color: black;
    font-weight: bold;
    margin-bottom: 20px;
}
</style>
