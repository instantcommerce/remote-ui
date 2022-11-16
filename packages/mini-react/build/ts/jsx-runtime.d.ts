import type { RemoteComponentType } from '@remote-ui/core';
import { Fragment } from './Fragment';
import type { VNode, Key, ComponentType, ComponentChildren } from './types';
declare function createVNode<P>(type: string | RemoteComponentType<any, P, any> | ComponentType<P>, props: P & {
    children?: ComponentChildren;
}, key?: Key, __source?: string, __self?: string): VNode<P>;
export { createVNode as jsx, createVNode as jsxs, createVNode as jsxDEV, Fragment, };
//# sourceMappingURL=jsx-runtime.d.ts.map