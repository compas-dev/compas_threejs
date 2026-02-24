<template>
    <div class="info-module">
        <h1>{{ objectInfoState.title }}</h1>
        <div v-for="(value, key) in objectInfoState.data" :key="key">
            <p>
                <strong>{{ key }}:</strong> {{ value }}
            </p>
        </div>
    </div>
</template>

<script setup>
import { objectInfoState } from "../../store/store";

const geoInformation = objectInfoState.data
    ? Object.fromEntries(
          Object.entries(objectInfoState.data).filter(
              ([key]) => key !== "dispatch",
          ),
      )
    : {};
</script>

<style scoped>
/* 'scoped' means these styles only apply to this module */
.info-module {
    position: absolute;
    z-index: 1000; /* Ensure it appears above other content */
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-family: sans-serif;
    bottom: 0;
    right: 0%;
    text-align: right;
    background-color: rgba(200, 200, 200, 0.5);
    margin: 20px;
    /*transform: translateX(-50%);*/
}
h1,
p {
    color: black;
}
</style>
