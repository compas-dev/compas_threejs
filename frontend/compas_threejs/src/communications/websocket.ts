import { dispatchMessage } from "./messages";

let websocket: WebSocket | null = null;

export function initializeWebSocketConnection(): void {
    const connect = () => {
        websocket = new WebSocket("ws://127.0.0.1:9001/ws");
        websocket.binaryType = "arraybuffer";
        websocket.onopen = () => {
            if (!sessionStorage.getItem("reloaded")) {
                sessionStorage.setItem("reloaded", "true");
                window.location.reload();
            }
        };
        websocket.onmessage = (event: MessageEvent) => {
            if (event.data instanceof ArrayBuffer) {
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
            sessionStorage.removeItem("reloaded");
            setTimeout(connect, 1000); // Attempt to reconnect after 1 second
        };
    };
    connect();
}

export function sendWebSocketMessage(message: ArrayBuffer): boolean {
    /**
     * Sends a WebSocket message.
     * @param message - The message to send.
     * @returns true if message was sent, false otherwise.
     */
    if (websocket && websocket.readyState === WebSocket.OPEN) {
        websocket.send(message);
        return true;
    } else {
        console.error("WebSocket is not open. Unable to send message.");
        return false;
    }
}

export function sendDataMessage(data: Record<string, undefined>): boolean {
    /**
     * Sends data over the WebSocket connection as text (JSON).
     * Frontend-to-backend messages are sent as text to avoid being
     * broadcast back to all clients.
     * @param data - The data to send.
     * @returns true if message was sent, false otherwise.
     */
    if (websocket && websocket.readyState === WebSocket.OPEN) {
        try {
            console.log(data);
            const jsonString = JSON.stringify(data);
            websocket.send(jsonString);
            return true;
        } catch (error) {
            console.error("Failed to send data:", error);
            return false;
        }
    } else {
        console.error("WebSocket is not open. Unable to send message.");
        return false;
    }
}

export function stringToArrayBuffer(str: string): ArrayBuffer {
    /**
     * Converts a string to an ArrayBuffer.
     * @param str - The string to convert.
     * @returns The resulting ArrayBuffer.
     */
    const encoder = new TextEncoder();
    const uint8Array = encoder.encode(str);
    return uint8Array.buffer;
}

export function dictionaryToArrayBuffer(data: Record<string, undefined>): ArrayBuffer {
    /**
     * Converts a dictionary to an ArrayBuffer.
     * @param data - The dictionary to convert.
     * @returns The resulting ArrayBuffer.
     */
    const jsonString = JSON.stringify(data);
    return stringToArrayBuffer(jsonString);
}
