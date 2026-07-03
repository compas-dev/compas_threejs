import { objectActionsState } from "../store/store";
import { sendData } from "@/communications/communication";
import { objectBarData } from "../store/store";

export function showObjectInfo() {
    objectBarData.isVisible = true;
}

export function hideObjectInfo() {
    objectBarData.isVisible = false;
}

export function updateObjectInfo(newInfo: { title: string; description: string; status: string }) {
    objectBarData.title = newInfo.title;
}

export function objectInfoManager(data: Record<string, unknown> | null) {
    if (data != null) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { dispatch, ...rest } = data;
        objectBarData.data = rest;
    }
}

export function objectActionManager(data: Record<string, unknown>) {
    const action = {
        guid: data.guid.value,
        label: data.label.value,
        type: data.type.value,
        objectGuid: data.object_guid.value,
        text: data.text.value,
    };
    objectActionsState.push(action);
}

export function handleObjectAction(action: Record<string, unknown>, value?: unknown) {
    const message = {
        dispatch: "object_action_callback",
        action_guid: action.guid,
        value: null,
        object_guid: action.objectGuid,
    };

    if (value !== undefined) {
        message.value = value;
    }

    sendData(message);
}

document.addEventListener("keydown", (event) => {
    if (event.key === "I" || event.key === "i") {
        if (objectBarData.isVisible) {
            hideObjectInfo();
        } else {
            showObjectInfo();
        }
    }
});
