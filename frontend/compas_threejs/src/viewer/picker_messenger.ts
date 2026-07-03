import { sendDataMessage } from "@/communications/websocket";
import { objectInfoManager } from "@/communications/objectInfo";
import { objectActionsState } from "@/store/store";

/**
 * Handles communication with the backend and UI updates
 */
export class PickerMessenger {
    /**
     * Send a message to the backend indicating an object was picked
     */
    sendObjectPickedMessage(guid: string): void {
        const message = {
            dispatch: "object_picked",
            guid: guid,
        };
        sendDataMessage(message);
    }

    /**
     * Clear the object info panel and reset object actions
     */
    resetObjectInfo(): void {
        objectInfoManager({} as any);
        objectActionsState.splice(0);
    }
}
