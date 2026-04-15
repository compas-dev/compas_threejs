import { onBeforeUnmount, onMounted } from "vue";

type ShortcutHandler = (event: KeyboardEvent) => void;

type ShortcutMap = Record<string, ShortcutHandler>;

function shouldIgnoreShortcut(event: KeyboardEvent) {
    return event.ctrlKey || event.metaKey || event.altKey;
}

export function useKeyboardShortcuts(shortcuts: ShortcutMap) {
    const handleKeyDown = (event: KeyboardEvent) => {
        if (shouldIgnoreShortcut(event)) {
            return;
        }

        const key = event.key.toLowerCase();
        const handler = shortcuts[key];
        if (!handler) {
            return;
        }

        event.preventDefault();
        handler(event);
    };

    onMounted(() => {
        document.addEventListener("keydown", handleKeyDown);
    });

    onBeforeUnmount(() => {
        document.removeEventListener("keydown", handleKeyDown);
    });
}
