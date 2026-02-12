import { ref, onMounted } from "vue";
import Sidebar from "./components/layout/Sidebar.vue";
import { renderer } from "./viewer/scene_manager";
import { initializeWebSocketConnection } from "./communications/communication";
// 2. Declare the ref at the top level of the script, initialized to null.
const threeContainer = ref(null);
// 3. Use the onMounted hook to safely access the DOM element.
onMounted(() => {
    // By the time onMounted runs, Vue has rendered the template,
    // and threeContainer.value will now hold the <div> element.
    if (threeContainer.value) {
        // This check ensures we don't run this code if the element, for some reason, wasn't found.
        threeContainer.value.appendChild(renderer.domElement);
        // It's safer to start animations and connections after the DOM is ready.
        // startAnimation();
        initializeWebSocketConnection();
    }
});
const __VLS_ctx = {};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
const __VLS_0 = Sidebar;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({}));
const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ref: "threeContainer",
    ...{ class: "three-container" },
});
/** @type {__VLS_StyleScopedClasses['three-container']} */ ;
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
