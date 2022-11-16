import type { PropertyApply } from './types';
interface Options {
    /**
     * Determines whether a given property is treated as an event listener prop.
     * Can be a regular expression, or a function that receives the prop and component
     * names, and returns a boolean. When not provided, any property starting with `on`
     * will be treated as an event listener.
     */
    test?: RegExp | ((prop: string, component: string) => boolean);
    /**
     * The options to use when attaching event listeners. Can either be a static set of
     * options that will be applied to all event listeners, or a function that returns
     * the options for a given component/ property combination.
     */
    eventListenerOptions?: EventListenerOptions | ((prop: string, component: string) => EventListenerOptions | undefined);
    /**
     * How to turn the prop name into the event name, which will be passed to
     * `addEventListener`.
     *
     * @param prop the name of the property being attached as an event listener
     * @param component The name of the (remote) component on which the prop was applied.
     */
    normalize?(prop: string, component: string): string;
}
export declare function createEventListenerApplyProperty({ test, normalize, eventListenerOptions, }?: Options): PropertyApply;
export declare const withEventListeners: PropertyApply;
export {};
//# sourceMappingURL=event-listener.d.ts.map