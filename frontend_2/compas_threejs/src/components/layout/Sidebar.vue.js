import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { sidebarComponents, handleAction } from "@/communications/sidebarStore";
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "fixed-sidebar" },
});
/** @type {__VLS_StyleScopedClasses['fixed-sidebar']} */ ;
for (const [item] of __VLS_vFor((__VLS_ctx.sidebarComponents))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        key: (item.id),
        ...{ class: "dynamic-item" },
    });
    /** @type {__VLS_StyleScopedClasses['dynamic-item']} */ ;
    if (item.label) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
            ...{ class: "dynamic-label" },
        });
        /** @type {__VLS_StyleScopedClasses['dynamic-label']} */ ;
        (item.label);
    }
    if (item.component === 'Button') {
        let __VLS_0;
        /** @ts-ignore @type {typeof __VLS_components.Button | typeof __VLS_components.Button} */
        Button;
        // @ts-ignore
        const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
            ...{ 'onClick': {} },
            variant: (item.props.variant),
        }));
        const __VLS_2 = __VLS_1({
            ...{ 'onClick': {} },
            variant: (item.props.variant),
        }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        let __VLS_5;
        const __VLS_6 = ({ click: {} },
            { onClick: (...[$event]) => {
                    if (!(item.component === 'Button'))
                        return;
                    __VLS_ctx.handleAction(item.action);
                    // @ts-ignore
                    [sidebarComponents, handleAction,];
                } });
        const { default: __VLS_7 } = __VLS_3.slots;
        (item.props.text);
        // @ts-ignore
        [];
        var __VLS_3;
        var __VLS_4;
    }
    else if (item.component === 'Slider') {
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "slider-container" },
        });
        /** @type {__VLS_StyleScopedClasses['slider-container']} */ ;
        let __VLS_8;
        /** @ts-ignore @type {typeof __VLS_components.Slider | typeof __VLS_components.Slider} */
        Slider;
        // @ts-ignore
        const __VLS_9 = __VLS_asFunctionalComponent1(__VLS_8, new __VLS_8({
            ...{ 'onUpdate:modelValue': {} },
            min: (item.props.min),
            max: (item.props.max),
            step: (item.props.step),
            defaultValue: (item.props.defaultValue),
            modelValue: (item.props.defaultValue),
            ...{ class: "w-[80%]" },
        }));
        const __VLS_10 = __VLS_9({
            ...{ 'onUpdate:modelValue': {} },
            min: (item.props.min),
            max: (item.props.max),
            step: (item.props.step),
            defaultValue: (item.props.defaultValue),
            modelValue: (item.props.defaultValue),
            ...{ class: "w-[80%]" },
        }, ...__VLS_functionalComponentArgsRest(__VLS_9));
        let __VLS_13;
        const __VLS_14 = ({ 'update:modelValue': {} },
            { 'onUpdate:modelValue': ((value) => __VLS_ctx.handleAction(item.action, value)) });
        /** @type {__VLS_StyleScopedClasses['w-[80%]']} */ ;
        var __VLS_11;
        var __VLS_12;
        if (item.props.defaultValue) {
            __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
                ...{ class: "slider-value" },
            });
            /** @type {__VLS_StyleScopedClasses['slider-value']} */ ;
            (item.props.defaultValue[0]);
        }
    }
    // @ts-ignore
    [handleAction,];
}
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
