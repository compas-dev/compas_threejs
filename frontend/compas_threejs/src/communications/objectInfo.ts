import { objectActionsState } from "../store/store";
import { sendData } from "@/communications/communication";
import { objectBarData } from "../store/store";

export function showObjectInfo() {
    objectBarData.isVisible = true;
}

export function hideObjectInfo() {
    objectBarData.isVisible = false;
}

export function updateObjectInfo(newInfo: {
    title: string;
    description: string;
    status: string;
}) {
    objectBarData.title = newInfo.title;
}

export function objectInfoManager(data: { [key: string]: any } | null) {
    delete data["dispatch"];
    if (data != null) {
        objectBarData.data = data;
    }
}

export function objectActionManager(data: Record<string, any>) {
    console.log("Received object action:", data);
    const action = {
        guid: data.guid.value,
        label: data.label.value,
        type: data.type.value,
        objectGuid: data.object_guid.value,
        text: data.text.value,
    };
    objectActionsState.push(action);
}

export function handleObjectAction(action: { [key: string]: any }, value: any) {
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
