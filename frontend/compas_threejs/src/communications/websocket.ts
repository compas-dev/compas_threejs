import { infoState } from "../store/store";
import { updateObjectInfo, showObjectInfo, hideObjectInfo } from "./objectInfo";
import { trajectoryState } from "../store/store"; //

const WEBSOCKET_URL = "ws://localhost:8765"; // Default WebSocket server URL for Python backend

let socket: WebSocket;

export function connectWebSocket() {
  socket = new WebSocket(WEBSOCKET_URL);

  socket.onopen = () => {
    console.log("WebSocket connection established.");
  };

  socket.onmessage = (event) => {
    try {
      const data = JSON.parse(event.data);

      // Assuming the backend sends data in the format { title, description, status }
      if (data.title && data.description && data.status) {
        updateObjectInfo(data);
        showObjectInfo();
      } else if (data.action === 'hide') {
        hideObjectInfo();
      }
    } catch (error) {
      console.error("Error parsing message from WebSocket:", error);
    }
  };

  socket.onclose = () => {
    console.log("WebSocket connection closed. Attempting to reconnect...");
    // Simple reconnect logic
    setTimeout(connectWebSocket, 5000);
  };

  socket.onerror = (error) => {
    console.error("WebSocket error:", error);
    socket.close();
  };
}

export function sendMessage(message: any) {
  if (socket && socket.readyState === WebSocket.OPEN) {
    socket.send(JSON.stringify(message));
  } else {
    console.error("WebSocket is not connected.");
  }
}
