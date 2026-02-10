import { startAnimation } from "./scene_manager";
import { initializeWebSocketConnection } from "./communication";
import { sendWebSocketMessage, stringToArrayBuffer } from "./communication";

// 1. Start the 3D Engine
startAnimation();

// 2. Open the communication line
// This will now be able to add things to the 'scene' because it's already initialized
initializeWebSocketConnection();

console.log("🚀 Viewer is ready and listening for Python updates...");

document.getElementById("sendMessageButton")?.addEventListener("click", () => {
  console.log("Button clicked! Sending message to Python...");
  const testMessage = "Hello from the button!";
  const bytes = stringToArrayBuffer(testMessage);
  sendWebSocketMessage(bytes);
});
