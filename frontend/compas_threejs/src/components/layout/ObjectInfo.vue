<template>
    <div class="info-module">
        <Button variant="outline" @click="hideObjectInfo()"> X </Button>
        <div class="metadata">
        <h1>METADATA</h1>
        <div v-for="(value, key) in objectInfoState.data" :key="key" class="single_data">
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
import { hideObjectInfo } from  "@/communications/objectInfo"


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
div.info-module {
    position: flex;
    z-index: 1000; /* Ensure it appears above other content */
    padding: 20px;
    width: 33vw;
    border-radius: 10px;
    bottom: 0;
    right: 0%;
    background-color: white;
    max-width: 400px;
}

div.metadata {
    margin-top: 30px;
}

div.single_data {
    margin-bottom: 10px;
}

p {
    font-size: 1.1em;
    color: rgb(50, 50, 50);
}

h1 {
    margin-top: 0;
    font-size: 1.3em;
    color: rgb(50, 50, 50);
    font-weight: bold;
    border-bottom: solid;
    margin-bottom: 20px;
}


</style>
