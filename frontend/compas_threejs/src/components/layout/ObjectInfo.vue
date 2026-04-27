<template>
    <div class="info-module theme" id="info-panel">
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
    </div>
</template>

<script setup>
import { objectInfoState } from "../../store/store";
import { Button } from "@/components/ui/button";
import { hideObjectInfo } from "@/communications/objectInfo";

const geoInformation = objectInfoState.data
    ? Object.fromEntries(
          Object.entries(objectInfoState.data).filter(
              ([key]) => key !== "dispatch",
          ),
      )
    : {};
</script>

<style scoped>
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
    color: var(--foreground);
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
    color: var(--foreground);
}

h1 {
    margin-top: 0;
    font-size: 1.4em;
    color: var(--foreground);
    font-weight: bold;
    margin-bottom: 20px;
}
</style>
