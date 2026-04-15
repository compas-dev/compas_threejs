<template>
    <div class="display-tools-wrapper">
        <div class="toolbar-group">
            <SaveViewButton
                :default-name="`View ${savedViews.length + 1}`"
                @saved="handleSavedView"
            />
            <SavedViewsButton @toggle="toggleSavedViews" />
            <ToggleBackgroundButton :active="isDarkMode" />
            <SaveScreenshotButton />
        </div>

        <div v-if="showSavedViewsList" class="saved-views-panel">
            <div class="saved-views-controls">
                <select
                    v-model="selectedSavedViewId"
                    class="saved-views-select"
                    @change="applySelectedSavedView"
                >
                    <option disabled value="">Select view</option>
                    <option
                        v-for="view in savedViews"
                        :key="view.id"
                        :value="view.id"
                    >
                        {{ view.name }}
                    </option>
                </select>
                <button
                    class="saved-view-delete"
                    title="Delete selected view"
                    :disabled="!selectedSavedViewId"
                    @click="deleteSelectedSavedView"
                >
                    ×
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import {
    applySavedView,
    captureCurrentView,
    saveCurrentCanvasAsPng,
    toggleBackgroundMode,
    type SavedView,
} from "@/viewer/toolbar_actions";
import { useKeyboardShortcuts } from "@/components/tools/useKeyboardShortcuts";
import {
    SaveViewButton,
    SavedViewsButton,
    ToggleBackgroundButton,
    SaveScreenshotButton,
} from "./index";

defineProps<{
    isDarkMode: boolean;
}>();

const SAVED_VIEWS_STORAGE_KEY = "compas_threejs_saved_views";

const savedViews = ref<SavedView[]>([]);
const selectedSavedViewId = ref<string>("");
const showSavedViewsList = ref(false);

function persistSavedViews() {
    localStorage.setItem(SAVED_VIEWS_STORAGE_KEY, JSON.stringify(savedViews.value));
}

function loadSavedViewsFromStorage() {
    const raw = localStorage.getItem(SAVED_VIEWS_STORAGE_KEY);
    if (!raw) {
        return;
    }

    try {
        const parsed = JSON.parse(raw) as SavedView[];
        if (Array.isArray(parsed)) {
            savedViews.value = parsed;
        }
    } catch {
        savedViews.value = [];
    }
}

function handleSavedView(view: SavedView) {
    savedViews.value = [...savedViews.value, view];
    selectedSavedViewId.value = view.id;
    showSavedViewsList.value = true;
    persistSavedViews();
}

function requestSaveCurrentView() {
    const defaultName = `View ${savedViews.value.length + 1}`;
    const requestedName = window.prompt("Name for saved view", defaultName);
    if (requestedName === null) {
        return;
    }

    const name = requestedName.trim() || defaultName;
    const view = captureCurrentView(name);
    handleSavedView(view);
}

function toggleSavedViews() {
    showSavedViewsList.value = !showSavedViewsList.value;
}

function applySelectedSavedView() {
    const selected = savedViews.value.find((view) => view.id === selectedSavedViewId.value);
    if (!selected) {
        return;
    }

    applySavedView(selected);
}

function deleteSelectedSavedView() {
    if (!selectedSavedViewId.value) {
        return;
    }

    const nextViews = savedViews.value.filter((view) => view.id !== selectedSavedViewId.value);
    savedViews.value = nextViews;
    selectedSavedViewId.value = nextViews[0]?.id ?? "";
    persistSavedViews();
}

onMounted(() => {
    loadSavedViewsFromStorage();
});

useKeyboardShortcuts({
    s: () => {
        requestSaveCurrentView();
    },
    d: () => {
        toggleBackgroundMode();
    },
    f: () => {
        saveCurrentCanvasAsPng();
    },
});
</script>
