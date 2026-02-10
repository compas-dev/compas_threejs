import { dispatchMessage } from "./messages";

export function initializeWebSocketConnection(): void {
  const connect = () => {
    // Important: Use the Python port here, NOT the Vite port
    const websocket = new WebSocket("ws://127.0.0.1:9001/ws");
    websocket.binaryType = "arraybuffer";

    websocket.onopen = () => {
      console.log("🚀 Connected to COMPAS Python Server on 9001");
      if (!sessionStorage.getItem("reloaded")) {
        sessionStorage.setItem("reloaded", "true");
        window.location.reload();
      }
    };

    websocket.onmessage = (event: MessageEvent) => {
      console.log("🔔 Message Event Triggered!"); // Is this printing?

      if (event.data instanceof ArrayBuffer) {
        console.log("📦 Binary Data Received:", event.data.byteLength, "bytes");
        const uint8 = new Uint8Array(event.data);
        dispatchMessage(uint8);
      } else {
        console.warn("❓ Received non-binary data:", event.data);
      }
    };

    websocket.onerror = (error: Event) => {
      console.error("WebSocket error:", error);
    };

    websocket.onclose = () => {
      console.log("WebSocket connection closed. Attempting to reconnect...");
      sessionStorage.removeItem("reloaded");
      setTimeout(connect, 1000); // Attempt to reconnect after 1 second
    };
  };

  connect();
}

export function handleWebSocketMessage(data: any): void {
  /**
   * Handles incoming WebSocket messages.
   * @param data - The data received from the WebSocket.
   */
  if (data instanceof ArrayBuffer) {
    const message = new Uint8Array(data);
    dispatchMessage(message);
  } else if (typeof data === "string") {
    console.log("Received string message:", data);
  } else {
    console.warn("Unexpected message format:", data);
  }
}

export function sendWebSocketMessage(message: string): void {
  /**
   * Sends a message through the WebSocket connection.
   * @param message - The message to send.
   */
  if (websocket && websocket.readyState === WebSocket.OPEN) {
    websocket.send(message);
  } else {
    console.error("WebSocket is not open. Unable to send message.");
  }
}
