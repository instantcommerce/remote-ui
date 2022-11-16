import type { ComponentChildren, ComponentChild } from '../types';
export declare const Children: {
    map: typeof mapOverChildren;
    forEach: (children: ComponentChildren, func: (child: ComponentChild) => void) => void;
    count(children: ComponentChildren): number;
    only(children: ComponentChildren): ComponentChild;
    toArray: typeof toChildArray;
};
declare function mapOverChildren<T>(children: ComponentChildren, func: (child: ComponentChild) => T): ComponentChild[] | null;
/**
 * Flatten and loop through the children of a virtual node
 */
declare function toChildArray(children: ComponentChildren, out?: ComponentChild[]): ComponentChild[];
export {};
//# sourceMappingURL=Children.d.ts.map