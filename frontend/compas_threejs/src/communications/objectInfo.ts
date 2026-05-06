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

document.addEventListener("keydown", (event) => {
    if (event.key === "I" || event.key === "i") {
        if (objectBarData.isVisible) {
            hideObjectInfo();
        } else {
            showObjectInfo();
        }
    }
});
