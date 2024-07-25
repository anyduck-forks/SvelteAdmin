import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        field: UrlField;
        value: URL | string | null | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type UrlFieldProps = typeof __propDef.props;
export type UrlFieldEvents = typeof __propDef.events;
export type UrlFieldSlots = typeof __propDef.slots;
export default class UrlField extends SvelteComponent<UrlFieldProps, UrlFieldEvents, UrlFieldSlots> {
}
export {};