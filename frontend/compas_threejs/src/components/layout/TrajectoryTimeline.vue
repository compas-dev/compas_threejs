<template>
  <div 
    v-if="trajectoryState.isVisible"
    class="fixed bottom-0 left-0 w-full px-8 py-4 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-t z-50 flex items-center gap-6 shadow-lg"
    @wheel.prevent="handleWheel"
  >
    <div class="flex items-center gap-3">

      <button 
        @click="cycleCameraMode"
        class="p-2 rounded hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors flex items-center justify-center w-10 h-10"
        :class="{ 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20': trajectoryState.cameraMode !== 'free', 'text-zinc-500': trajectoryState.cameraMode === 'free' }"
        :title="`Camera: ${trajectoryState.cameraMode.toUpperCase()}`"
      >
        <svg v-if="trajectoryState.cameraMode === 'free'" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/>
          <circle cx="12" cy="13" r="3"/>
        </svg>
        
        <svg v-if="trajectoryState.cameraMode === 'look'" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
          <circle cx="12" cy="12" r="3"/>
        </svg>
        
        <svg v-if="trajectoryState.cameraMode === 'follow'" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polygon points="3 11 22 2 13 21 11 13 3 11"/><
        </svg>
      </button>
      
      <button 
        @click="trajectoryState.isLooping = !trajectoryState.isLooping"
        class="p-2 rounded hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
        :class="{ 'text-blue-600 dark:text-blue-400': trajectoryState.isLooping, 'text-zinc-500': !trajectoryState.isLooping }"
        title="Toggle Loop"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m17 2 4 4-4 4"/><path d="M3 11v-1a4 4 0 0 1 4-4h14"/><path d="m7 22-4-4 4-4"/><path d="M21 13v1a4 4 0 0 1-4 4H3"/></svg>
      </button>

      <button 
        @click="trajectoryState.isPlaying = !trajectoryState.isPlaying"
        class="flex items-center justify-center w-10 h-10 bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 rounded-full hover:scale-105 transition-transform"
      >
        <svg v-if="trajectoryState.isPlaying" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
      </button>

      <button 
        @click="cycleSpeed"
        class="w-12 text-sm font-semibold text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors"
        title="Playback Speed"
      >
        {{ trajectoryState.speedMultiplier }}x
      </button>

    </div>

    <div class="text-sm font-mono text-zinc-500 w-12 text-right">
      {{ trajectoryState.currentTime[0].toFixed(2) }}
    </div>

    <Slider 
      class="flex-1 cursor-pointer"
      v-model="trajectoryState.currentTime" 
      :max="trajectoryState.totalTime" 
      :step="trajectoryState.step" 
      @update:model-value="pauseOnDrag"
    />

    <div class="text-sm font-mono text-zinc-500 w-12">
      {{ trajectoryState.totalTime.toFixed(2) }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { watch, onUnmounted } from 'vue';
import { Slider } from '@/components/ui/slider';
import { trajectoryState } from '../../store/store'; 
import { handleAction } from "@/communications/sidebarStore";

// --- UI Interaction Helpers ---
const handleWheel = (event: WheelEvent) => {
  const stepDirection = Math.sign(event.deltaY);
  let newTime = trajectoryState.currentTime[0] + (stepDirection * trajectoryState.step * 10); 
  newTime = Math.max(0.0, Math.min(newTime, trajectoryState.totalTime));
  trajectoryState.currentTime = [newTime];
};

const pauseOnDrag = () => {
  // If the user manually grabs the slider, auto-pause the playback!
  trajectoryState.isPlaying = false;
};

const cycleSpeed = () => {
  const speeds = [0.5, 1.0, 1.5, 2.0];
  const currentIndex = speeds.indexOf(trajectoryState.speedMultiplier);
  const nextIndex = (currentIndex + 1) % speeds.length;
  trajectoryState.speedMultiplier = speeds[nextIndex];
};

const cycleCameraMode = () => {
  const modes = ['free', 'look', 'follow'];
  const currentIndex = modes.indexOf(trajectoryState.cameraMode);
  trajectoryState.cameraMode = modes[(currentIndex + 1) % modes.length];
};

// --- THE ANIMATION ENGINE ---
let animationFrameId: number | null = null;
let lastTimestamp: number = 0;

const playLoop = (timestamp: number) => {
  if (!trajectoryState.isPlaying) return;

  if (!lastTimestamp) lastTimestamp = timestamp;
  const deltaTimeSec = (timestamp - lastTimestamp) / 1000.0;
  lastTimestamp = timestamp;

  let newTime = trajectoryState.currentTime[0] + (deltaTimeSec * trajectoryState.speedMultiplier);

  if (newTime >= trajectoryState.totalTime) {
    if (trajectoryState.isLooping) {
      newTime = 0.0; // Loop back to the beginning
    } else {
      newTime = trajectoryState.totalTime;
      trajectoryState.isPlaying = false; // Auto-pause at the end
    }
  }

  trajectoryState.currentTime = [newTime];
  if (trajectoryState.isPlaying) {
    animationFrameId = requestAnimationFrame(playLoop);
  }
};

// Watch for Play/Pause toggles ---
watch(() => trajectoryState.isPlaying, (isPlaying) => {
  if (isPlaying) {
    if (trajectoryState.currentTime[0] >= trajectoryState.totalTime) {
      trajectoryState.currentTime = [0.0];
    }
    lastTimestamp = performance.now(); // Reset the clock
    animationFrameId = requestAnimationFrame(playLoop);
  } else {
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = null;
    }
  }
});

// Prevent memory leaks if the component is closed ---
onUnmounted(() => {
  if (animationFrameId) cancelAnimationFrame(animationFrameId);
});

// ==========================================
// --- SMART NETWORK THROTTLE ---
// ==========================================
let throttleTimeout: ReturnType<typeof setTimeout> | null = null;
let lastNetworkSend = 0;

// The maximum rate Python can handle (increase to 200 or 250 if it still lags)
const NETWORK_FRAMERATE_MS = 130; 

watch(() => trajectoryState.currentTime[0], (newTime) => {
  if (!trajectoryState.id) return; 
  
  const now = Date.now();
  const timeSinceLastSend = now - lastNetworkSend;
  
  // 1. If enough time has passed, send to Python immediately
  if (timeSinceLastSend >= NETWORK_FRAMERATE_MS) {
    lastNetworkSend = now;
    handleAction(trajectoryState.id, [newTime]);
  } 
  // 2. If we are moving too fast, queue up the final frame!
  else {
    if (throttleTimeout) clearTimeout(throttleTimeout);
    
    // Schedule the final frame to send exactly when the throttle window opens
    throttleTimeout = setTimeout(() => {
      lastNetworkSend = Date.now();
      handleAction(trajectoryState.id, [newTime]);
    }, NETWORK_FRAMERATE_MS - timeSinceLastSend);
  }
});
</script>