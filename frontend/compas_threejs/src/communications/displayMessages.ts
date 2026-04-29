import { toast } from "vue-sonner";

export function displayMessageManager(data: { [key: string]: any } | null) {
    switch (data.type.value) {
        case "message":
            displayMessage(data);
            break;
        case "error":
            displayError(data);
            break;
        case "warning":
            displayWarning(data);
            break;
        case "success":
            displaySuccess(data);
            break;
        default:
            break;
    }
}

export function displayMessage(data: { [key: string]: any } | null) {
    const message = data?.message?.value;
    const description = data?.description?.value;

    console.log(data);

    if (description) {
        toast(message, {
            description: description,
        });
    } else {
        toast(message);
    }
}

export function displayError(data: { [key: string]: any } | null) {
    const message = data?.message?.value;
    const description = data?.description?.value;

    if (description) {
        toast.error(message, {
            description: description,
        });
    } else {
        toast.error(message);
    }
}

export function displayWarning(data: { [key: string]: any } | null) {
    const message = data?.message?.value;
    const description = data?.description?.value;

    if (description) {
        toast.warning(message, {
            description: description,
        });
    } else {
        toast.warning(message);
    }
}

export function displaySuccess(data: { [key: string]: any } | null) {
    const message = data?.message?.value;
    const description = data?.description?.value;

    if (description) {
        toast.success(message, {
            description: description,
        });
    } else {
        toast.success(message);
    }
}
