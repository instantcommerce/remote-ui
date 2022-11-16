import type { RemoteComponentType } from '@remote-ui/core';
import type { VNode, ComponentType, ComponentChildren, CommonProps, Key, Ref } from './types';
/**
 * Create a virtual node (used for JSX)
 */
export declare function createElement<P>(type: string | RemoteComponentType<any, P, any> | ComponentType<P>, props?: (P & CommonProps) | null, ...children: ComponentChildren[]): VNode<P>;
/**
 * Create a VNode (used internally)
 */
export declare function createVNode(type: VNode<any>['type'] | null, props: Record<string, unknown> | string | number | null, key: Key | undefined, ref: Ref<unknown> | undefined, original: VNode<unknown>['_original'] | null): VNode<any>;
//# sourceMappingURL=create-element.d.ts.map