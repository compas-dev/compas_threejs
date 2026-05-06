<template>
    <div class="right-bar">
        <div
            class="theme object-info"
            :class="{ 'is-hidden': !objectBarData.isVisible }"
            id="info-panel"
        >
            <div id="data-container">
                <div class="metadata item">
                    <h1 class="text-lg font-bold section-title">METADATA</h1>
                    <div
                        v-for="(value, key) in objectBarData.data"
                        :key="key"
                        class="data-entry"
                    >
                        <p>
                            <strong> {{ key }}:</strong> {{ value.value }}
                        </p>
                    </div>
                </div>
            </div>

            <Button
                variant="secondary"
                size="icon"
                id="closeObjectBar"
                @click="toggleObjectBar()"
            >
                <ArrowBigRightDash />
            </Button>
        </div>
        <Button
            variant="secondary"
            size="icon"
            id="openObjectBar"
            :class="{ 'is-hidden': !objectBarData.isVisible }"
            @click="toggleObjectBar()"
        >
            <ArrowBigLeftDash />
        </Button>
    </div>
</template>

<script setup>
import { objectBarData } from "../../store/store";
import { Button } from "@/components/ui/button";
import { hideObjectInfo } from "@/communications/objectInfo";
import { ArrowBigLeftDash, ArrowBigRightDash } from "lucide-vue-next";

const geoInformation = objectBarData.data
    ? Object.fromEntries(
          Object.entries(objectBarData.data).filter(
              ([key]) => key !== "dispatch",
          ),
      )
    : {};

const toggleObjectBar = () => {
    objectBarData.isVisible = !objectBarData.isVisible;
};
</script>

<style scoped>
div.right-bar {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 20px; /* Padding around the content */

    /* WIDTH */
    width: 30vw;
    max-width: 300px;
    min-width: 250px;
}

/* 'scoped' means these styles only apply to this module */
div.object-info {
    z-index: 1000; /* Ensure it appears above other content */
    padding: 20px;
    max-width: 400px;
    border-radius: 10px;
    height: 100%;
    margin: 0px;
    right: 0%;
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    display: flex;
    flex-direction: column;
}

div.is-hidden {
    transform: translateX(+150%);
    /*display: none;*/
}

div#data-container {
    position: relative;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    gap: 30px;
}
div.item {
    display: flex;
    flex-direction: column; /* Stack label on top of the component */
    align-items: left;
}

h1.section-title {
    margin-bottom: 10px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    /*border: 1px solid rgba(255, 255, 255, 0.2);*/
    padding: 5px;
    padding-left: 10px;
    border-radius: 10px;
    box-shadow:
        1px 1px 3px 0px oklch(0.1 0 0/0.2) inset,
        -1px -1px 3px 0px oklch(1 0 0 /0.9) inset;
}

div.data-entry {
    margin-bottom: 8px;
    padding: 0 0 0 10px;
}

Button#closeObjectBar {
    position: relative;
    align-self: flex-end;
    margin-top: auto;
}

Button#openObjectBar {
    position: fixed;
    bottom: 40px;
    right: 40px;
    z-index: 1;
    display: flex;
    visibility: hidden;
    transition: visibility 1s;
}

Button#openObjectBar.is-hidden {
    opacity: 1;
    visibility: visible;
}
</style>
