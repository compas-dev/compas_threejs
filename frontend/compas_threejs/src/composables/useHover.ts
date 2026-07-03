import { ref, onMounted, onUnmounted } from "vue";

export function useHover(elementId: string) {
    const isHovered = ref(false);

    function updateHoverState(_event: MouseEvent) {
        const targetElement = document.getElementById(elementId);
        const onElement = targetElement && targetElement.matches(":hover");
        isHovered.value = onElement;
    }

    onMounted(() => {
        window.addEventListener("mousemove", updateHoverState);
    });

    onUnmounted(() => {
        window.removeEventListener("mousemove", updateHoverState);
    });

    return {
        isHovered,
    };
}
