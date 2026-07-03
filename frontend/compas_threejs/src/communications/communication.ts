import { dispatchMessage } from "./messages";

let websocket: WebSocket | null = null;

export function initializeWebSocketConnection(): void {
    const connect = () => {
        // Important: Use the Python port here, NOT the Vite port
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

export function handleWebSocketMessage(data: any): void {
    /**
     * Handles incoming WebSocket messages.
     * @param data - The data received from the WebSocket.
     */
    if (data instanceof ArrayBuffer) {
        const message = new Uint8Array(data);
        dispatchMessage(message);
    } else if (typeof data === "string") {
    } else {
    }
}

export function sendWebSocketMessage(message: ArrayBuffer): void {
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

/**
 * Converts a JavaScript object to a JSON string and sends it over the WebSocket.
 * This is the primary function you should use to send data to the Python backend.
 *
 * @param data - A JavaScript object that can be serialized into JSON.
 */
export function sendData(data: Record<string, any>): void {
    try {
        // Convert the JavaScript object to a JSON string and send as text
        const jsonString = JSON.stringify(data);
        if (websocket && websocket.readyState === WebSocket.OPEN) {
            websocket.send(jsonString);
        } else {
            console.error("WebSocket is not open. Unable to send message.");
        }
    } catch (error) {
        console.error("Error sending data:", error);
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

export function dictionaryToArrayBuffer(
    data: Record<string, any>,
): ArrayBuffer {
    /**
     * Converts a dictionary (JavaScript object) to an ArrayBuffer by first serializing it to a JSON string.
     * This allows it to be easily parsed back into a dictionary in Python.
     *
     * @param data - The dictionary to convert.
     * @returns The resulting ArrayBuffer.
     */
    const jsonString = JSON.stringify(data);
    return stringToArrayBuffer(jsonString);
}
