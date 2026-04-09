<template>
    <div class="toolbar" :class="{ 'is-dark': isDarkMode }">
        <!-- Group 1: Object Transformations -->
        <div class="toolbar-group">
            <button
                v-for="button in transformationButtons"
                :key="button.id"
                class="toolbar-button"
                :class="{ active: button.active }"
                :title="button.tooltip"
                @click="handleTransformation(button.id)"
            >
                <span
                    class="button-icon"
                    :class="{
                        'front-icon': button.id === 'view-front',
                        'pause-icon': button.id === 'toggle-movement' && button.icon === '⏸'
                    }"
                >
                    <component
                        v-if="button.iconComponent"
                        :is="button.iconComponent"
                        :size="16"
                        :stroke-width="2"
                        aria-hidden="true"
                    />
                    <span v-else>{{ button.icon }}</span>
                </span>
            </button>
        </div>

        <!-- Group 2: Views Switching -->
        <div class="toolbar-group">
            <button
                v-for="button in viewButtons"
                :key="button.id"
                class="toolbar-button"
                :title="button.tooltip"
                @click="handleViewSwitch(button.id)"
            >
                <span
                    class="button-icon"
                    :class="{
                        'front-icon': button.id === 'view-front',
                        'pause-icon': button.id === 'toggle-movement' && button.icon === '⏸'
                    }"
                >
                    <component
                        v-if="button.iconComponent"
                        :is="button.iconComponent"
                        :size="16"
                        :stroke-width="2"
                        aria-hidden="true"
                    />
                    <span v-else>{{ button.icon }}</span>
                </span>
            </button>
        </div>

        <!-- Group 3: Display & Save -->
        <div class="toolbar-group">
            <button
                v-for="button in displayButtons"
                :key="button.id"
                class="toolbar-button"
                :class="{ active: button.active }"
                :title="button.tooltip"
                @click="handleDisplayAction(button.id)"
            >
                <span
                    class="button-icon"
                    :class="{
                        'front-icon': button.id === 'view-front',
                        'pause-icon': button.id === 'toggle-movement' && button.icon === '⏸'
                    }"
                >
                    <component
                        v-if="button.iconComponent"
                        :is="button.iconComponent"
                        :size="16"
                        :stroke-width="2"
                        aria-hidden="true"
                    />
                    <span v-else>{{ button.icon }}</span>
                </span>
            </button>
        </div>

        <div v-if="showSavedViewsList" class="saved-views-panel">
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
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted, onBeforeUnmount, type Component } from "vue";
import {
    Move3d,
    Rotate3d,
    Scale3d,
    RectangleVertical,
    Square,
    RectangleHorizontal,
    Cuboid,
    Save,
    ClipboardList,
    Download,
} from "lucide-vue-next";
import {
    setCameraViewPreset,
    captureCurrentView,
    applySavedView,
    toggleBackgroundMode,
    saveCurrentCanvasAsPng,
    subscribeBackgroundMode,
    type SavedView,
} from "@/viewer/scene_manager";
import { toggleObjectMotionPaused } from "@/communications/messages";
import {
    setTransformMode,
} from "@/viewer/picker";

const SAVED_VIEWS_STORAGE_KEY = "compas_threejs_saved_views";
const savedViews = ref<SavedView[]>([]);
const selectedSavedViewId = ref<string>("");
const showSavedViewsList = ref(false);
const isDarkMode = ref(false);
let unsubscribeBackgroundMode: (() => void) | null = null;

type ToolbarButton = {
    id: string;
    icon?: string;
    iconComponent?: Component;
    tooltip: string;
    active?: boolean;
};

function persistSavedViews() {
    localStorage.setItem(
        SAVED_VIEWS_STORAGE_KEY,
        JSON.stringify(savedViews.value)
    );
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

function applySelectedSavedView() {
    const selected = savedViews.value.find(
        (view) => view.id === selectedSavedViewId.value
    );

    if (!selected) {
        return;
    }

    applySavedView(selected);
}

// Group 1: Object Transformations
const transformationButtons = reactive<ToolbarButton[]>([
    {
        id: "move",
        iconComponent: Move3d,
        tooltip: "Move (W)",
        active: false,
    },
    {
        id: "rotate",
        iconComponent: Rotate3d,
        tooltip: "Rotate (E)",
        active: false,
    },
    {
        id: "scale",
        iconComponent: Scale3d,
        tooltip: "Scale (S)",
        active: false,
    },
    {
        id: "toggle-movement",
        icon: "⏸",
        tooltip: "Play/Pause Movements (Space)",
        active: false,
    },
]);

// Group 2: Views Switching
const viewButtons = reactive<ToolbarButton[]>([
    {
        id: "view-top",
        iconComponent: RectangleVertical,
        tooltip: "Top View (5)",
    },
    {
        id: "view-front",
        iconComponent: Square,
        tooltip: "Front View (2)",
    },
    {
        id: "view-right",
        iconComponent: RectangleHorizontal,
        tooltip: "Right View (6)",
    },
    {
        id: "view-perspective",
        iconComponent: Cuboid,
        tooltip: "Perspective View (3)",
    },
]);

// Group 3: Display & Save
const displayButtons = reactive<ToolbarButton[]>([
    {
        id: "save-view",
        iconComponent: Save,
        tooltip: "Save Current View",
    },
    {
        id: "saved-views",
        iconComponent: ClipboardList,
        tooltip: "Saved Views",
    },
    {
        id: "toggle-background",
        icon: "◐",
        tooltip: "Toggle Dark/Light Background",
        active: false,
    },
    {
        id: "save-screenshot",
        iconComponent: Download,
        tooltip: "Save as PNG",
    },
]);

const handleTransformation = (id: string) => {
    // Update active transform tool only for W/E/S.
    if (id !== "toggle-movement") {
        transformationButtons.forEach((btn) => {
            if (btn.id !== "toggle-movement") {
                btn.active = btn.id === id;
            }
        });
    }

    // Handle specific transformation
    switch (id) {
        case "move":
            setTransformMode("translate");
            break;
        case "rotate":
            setTransformMode("rotate");
            break;
        case "scale":
            setTransformMode("scale");
            break;
        case "toggle-movement":
            const btn = transformationButtons.find((b) => b.id === id);
            if (btn) {
                const paused = toggleObjectMotionPaused();
                btn.active = paused;
                btn.icon = paused ? "▶" : "⏸";
            }
            break;
    }
};

const handleViewSwitch = (id: string) => {
    switch (id) {
        case "view-top":
            setCameraViewPreset("top");
            break;
        case "view-front":
            setCameraViewPreset("front");
            break;
        case "view-right":
            setCameraViewPreset("right");
            break;
        case "view-perspective":
            setCameraViewPreset("front_right");
            break;
    }
};

const handleDisplayAction = (id: string) => {
    switch (id) {
        case "save-view": {
            const defaultName = `View ${savedViews.value.length + 1}`;
            const requestedName = window.prompt("Name for saved view", defaultName);
            if (requestedName === null) {
                break;
            }

            const name = requestedName.trim() || defaultName;
            const view = captureCurrentView(name);
            savedViews.value = [...savedViews.value, view];
            selectedSavedViewId.value = view.id;
            showSavedViewsList.value = true;
            persistSavedViews();
            break;
        }
        case "saved-views": {
            showSavedViewsList.value = !showSavedViewsList.value;
            break;
        }
        case "toggle-background":
            const btn = displayButtons.find((b) => b.id === "toggle-background");
            if (btn) {
                const mode = toggleBackgroundMode();
                btn.active = mode === "dark";
            }
            break;
        case "save-screenshot":
            saveCurrentCanvasAsPng();
            break;
    }
};

// Keyboard shortcuts
onMounted(() => {
    loadSavedViewsFromStorage();
    unsubscribeBackgroundMode = subscribeBackgroundMode((mode) => {
        isDarkMode.value = mode === "dark";
        const backgroundButton = displayButtons.find(
            (button) => button.id === "toggle-background"
        );
        if (backgroundButton) {
            backgroundButton.active = mode === "dark";
        }
    });

    const handleKeyDown = (event: KeyboardEvent) => {
        const key = event.key.toLowerCase();

        // Only trigger if no modifier keys are pressed (to avoid conflicts with browser shortcuts)
        if (event.ctrlKey || event.metaKey || event.altKey) {
            return;
        }

        switch (key) {
            case "w":
                event.preventDefault();
                handleTransformation("move");
                break;
            case "e":
                event.preventDefault();
                handleTransformation("rotate");
                break;
            case "s":
                event.preventDefault();
                handleTransformation("scale");
                break;
            case " ": // Space bar for play/pause
                event.preventDefault();
                handleTransformation("toggle-movement");
                break;
            case "2":
                event.preventDefault();
                handleViewSwitch("view-front");
                break;
            case "3":
                event.preventDefault();
                handleViewSwitch("view-perspective");
                break;
            case "5":
                event.preventDefault();
                handleViewSwitch("view-top");
                break;
            case "6":
                event.preventDefault();
                handleViewSwitch("view-right");
                break;
        }
    };

    document.addEventListener("keydown", handleKeyDown);

    // Cleanup
    return () => {
        document.removeEventListener("keydown", handleKeyDown);
    };
});

onBeforeUnmount(() => {
    if (unsubscribeBackgroundMode) {
        unsubscribeBackgroundMode();
        unsubscribeBackgroundMode = null;
    }
});
</script>

<style scoped>
.toolbar {
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: row;
    gap: 12px;
    z-index: 1001;
    background: linear-gradient(
        135deg,
        rgba(255, 255, 255, 0.15) 0%,
        rgba(255, 255, 255, 0.2) 100%
    );
    backdrop-filter: blur(25px) saturate(180%);
    -webkit-backdrop-filter: blur(25px) saturate(180%);
    border-radius: 10px;
    padding: 12px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-top: 1px solid rgba(255, 255, 255, 0.4);
    border-left: 1px solid rgba(255, 255, 255, 0.3);
    box-shadow:
        0 8px 32px 0 rgba(0, 0, 0, 0.3),
        inset 0 0 15px rgba(255, 255, 255, 0.7);
}

.toolbar-group {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 6px;
    padding-right: 6px;
    border-right: 1px solid rgba(255, 255, 255, 0.2);
}

.toolbar-group:last-child {
    border-right: none;
    padding-right: 0;
}

.saved-views-panel {
    min-width: 170px;
}

.saved-views-select {
    height: 36px;
    width: 100%;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.85);
    color: rgba(0, 0, 0, 0.8);
    padding: 0 8px;
    font-size: 13px;
    font-weight: 600;
    outline: none;
}

.saved-views-select:focus {
    border-color: rgba(59, 130, 246, 0.9);
}

.toolbar-button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border: 1px solid var(--border);
    border-radius: 6px;
    background: var(--secondary);
    cursor: pointer;
    transition: all 0.2s ease;
    font-size: 14px;
    font-weight: 600;
    color: var(--secondary-foreground);

    &:hover {
        background: var(--muted);
        border-color: var(--input);
        transform: translateY(-1px);
    }

    &:active {
        transform: translateY(0);
    }

    &.active {
        background: rgba(59, 130, 246, 0.9);
        color: white;
        border-color: rgba(59, 130, 246, 1);
    }
}

.button-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    line-height: 1;
    transform-origin: center;
}

.button-icon.front-icon {
    transform: scale(0.75);
}

.button-icon.pause-icon {
    transform: translateY(-2px) scale(1.5);
}

.toolbar.is-dark {
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

.toolbar.is-dark .toolbar-group {
    border-right-color: rgba(255, 255, 255, 0.1);
}

.toolbar.is-dark .toolbar-button {
    background: oklch(0.269 0 0);
    border-color: oklch(1 0 0 / 15%);
    color: oklch(0.985 0 0);
}

.toolbar.is-dark .toolbar-button:hover {
    background: oklch(0.33 0 0);
    border-color: oklch(1 0 0 / 28%);
}

.toolbar.is-dark .toolbar-button.active {
    background: rgba(59, 130, 246, 0.9);
    color: white;
    border-color: rgba(59, 130, 246, 1);
}

.toolbar.is-dark .saved-views-select {
    background: rgba(55, 65, 81, 0.9);
    border-color: rgba(255, 255, 255, 0.2);
    color: rgba(255, 255, 255, 0.85);
}
</style>
