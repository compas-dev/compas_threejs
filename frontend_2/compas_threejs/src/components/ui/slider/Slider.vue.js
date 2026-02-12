import { reactiveOmit } from "@vueuse/core";
import { SliderRange, SliderRoot, SliderThumb, SliderTrack, useForwardPropsEmits } from "reka-ui";
import { cn } from "@/lib/utils";
const props = defineProps();
const emits = defineEmits();
const delegatedProps = reactiveOmit(props, "class");
const forwarded = useForwardPropsEmits(delegatedProps, emits);
const __VLS_ctx = {
    ...{},
    ...{},
    ...{},
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
let __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.SliderRoot | typeof __VLS_components.SliderRoot} */
SliderRoot;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    dataSlot: "slider",
    ...{ class: (__VLS_ctx.cn('relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col', props.class)) },
    ...(__VLS_ctx.forwarded),
}));
const __VLS_2 = __VLS_1({
    dataSlot: "slider",
    ...{ class: (__VLS_ctx.cn('relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col', props.class)) },
    ...(__VLS_ctx.forwarded),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_5 = {};
{
    const { default: __VLS_6 } = __VLS_3.slots;
    const [{ modelValue }] = __VLS_vSlot(__VLS_6);
    let __VLS_7;
    /** @ts-ignore @type {typeof __VLS_components.SliderTrack | typeof __VLS_components.SliderTrack} */
    SliderTrack;
    // @ts-ignore
    const __VLS_8 = __VLS_asFunctionalComponent1(__VLS_7, new __VLS_7({
        dataSlot: "slider-track",
        ...{ class: "bg-muted relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5" },
    }));
    const __VLS_9 = __VLS_8({
        dataSlot: "slider-track",
        ...{ class: "bg-muted relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_8));
    /** @type {__VLS_StyleScopedClasses['bg-muted']} */ ;
    /** @type {__VLS_StyleScopedClasses['relative']} */ ;
    /** @type {__VLS_StyleScopedClasses['grow']} */ ;
    /** @type {__VLS_StyleScopedClasses['overflow-hidden']} */ ;
    /** @type {__VLS_StyleScopedClasses['rounded-full']} */ ;
    /** @type {__VLS_StyleScopedClasses['data-[orientation=horizontal]:h-1.5']} */ ;
    /** @type {__VLS_StyleScopedClasses['data-[orientation=horizontal]:w-full']} */ ;
    /** @type {__VLS_StyleScopedClasses['data-[orientation=vertical]:h-full']} */ ;
    /** @type {__VLS_StyleScopedClasses['data-[orientation=vertical]:w-1.5']} */ ;
    const { default: __VLS_12 } = __VLS_10.slots;
    let __VLS_13;
    /** @ts-ignore @type {typeof __VLS_components.SliderRange} */
    SliderRange;
    // @ts-ignore
    const __VLS_14 = __VLS_asFunctionalComponent1(__VLS_13, new __VLS_13({
        dataSlot: "slider-range",
        ...{ class: "bg-primary absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full" },
    }));
    const __VLS_15 = __VLS_14({
        dataSlot: "slider-range",
        ...{ class: "bg-primary absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_14));
    /** @type {__VLS_StyleScopedClasses['bg-primary']} */ ;
    /** @type {__VLS_StyleScopedClasses['absolute']} */ ;
    /** @type {__VLS_StyleScopedClasses['data-[orientation=horizontal]:h-full']} */ ;
    /** @type {__VLS_StyleScopedClasses['data-[orientation=vertical]:w-full']} */ ;
    // @ts-ignore
    [cn, forwarded,];
    var __VLS_10;
    for (const [_, key] of __VLS_vFor((modelValue))) {
        let __VLS_18;
        /** @ts-ignore @type {typeof __VLS_components.SliderThumb} */
        SliderThumb;
        // @ts-ignore
        const __VLS_19 = __VLS_asFunctionalComponent1(__VLS_18, new __VLS_18({
            key: (key),
            dataSlot: "slider-thumb",
            ...{ class: "bg-white border-primary ring-ring/50 block size-4 shrink-0 rounded-full border shadow-sm transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50" },
        }));
        const __VLS_20 = __VLS_19({
            key: (key),
            dataSlot: "slider-thumb",
            ...{ class: "bg-white border-primary ring-ring/50 block size-4 shrink-0 rounded-full border shadow-sm transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50" },
        }, ...__VLS_functionalComponentArgsRest(__VLS_19));
        /** @type {__VLS_StyleScopedClasses['bg-white']} */ ;
        /** @type {__VLS_StyleScopedClasses['border-primary']} */ ;
        /** @type {__VLS_StyleScopedClasses['ring-ring/50']} */ ;
        /** @type {__VLS_StyleScopedClasses['block']} */ ;
        /** @type {__VLS_StyleScopedClasses['size-4']} */ ;
        /** @type {__VLS_StyleScopedClasses['shrink-0']} */ ;
        /** @type {__VLS_StyleScopedClasses['rounded-full']} */ ;
        /** @type {__VLS_StyleScopedClasses['border']} */ ;
        /** @type {__VLS_StyleScopedClasses['shadow-sm']} */ ;
        /** @type {__VLS_StyleScopedClasses['transition-[color,box-shadow]']} */ ;
        /** @type {__VLS_StyleScopedClasses['hover:ring-4']} */ ;
        /** @type {__VLS_StyleScopedClasses['focus-visible:ring-4']} */ ;
        /** @type {__VLS_StyleScopedClasses['focus-visible:outline-hidden']} */ ;
        /** @type {__VLS_StyleScopedClasses['disabled:pointer-events-none']} */ ;
        /** @type {__VLS_StyleScopedClasses['disabled:opacity-50']} */ ;
        // @ts-ignore
        [];
    }
    // @ts-ignore
    [];
    __VLS_3.slots['' /* empty slot name completion */];
}
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({
    __typeEmits: {},
    __typeProps: {},
});
export default {};
