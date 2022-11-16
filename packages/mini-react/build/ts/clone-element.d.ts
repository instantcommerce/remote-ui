import type { ComponentChildren, VNode } from './types';
/**
 * Clones the given VNode, optionally adding attributes/props and replacing its children.
 */
export declare function cloneElement<P>(vnode: VNode<P>, props: Partial<P>, ...children: ComponentChildren[]): VNode<P>;
//# sourceMappingURL=clone-element.d.ts.map