import { objectInfoState } from "../store/store";
import { objectActionsState } from "../store/store";

export function showObjectInfo() {
    objectInfoState.isVisible = true;
}

export function hideObjectInfo() {
    objectInfoState.isVisible = false;
}

export function updateObjectInfo(newInfo: {
    title: string;
    description: string;
    status: string;
}) {
    objectInfoState.title = newInfo.title;
}

export function objectInfoManager(data: { [key: string]: any } | null) {
    delete data["dispatch"];
    if (data != null) {
        objectInfoState.data = data;
    }
}

export function objectActionManager(data: { [key: string]: any }) {
    console.log("Received object action:", data);
    const action = {
        text: data.text.value,
        guid: data.guid.value,
        lable: data.label.value,
        type: data.type.value,
    };
    objectActionsState.push(action);
}

document.addEventListener("keydown", (event) => {
    if (event.key === "I" || event.key === "i") {
        if (objectInfoState.isVisible) {
            hideObjectInfo();
        } else {
            showObjectInfo();
        }
    }
});
