import { cloneElement as miniCloneElement } from '../clone-element';
import type { VNode, ComponentChildren, RemoteParentNode } from '../types';
/**
 * Legacy version of createElement.
 */
export declare function createFactory<P>(type: VNode<P>['type']): (props?: P | undefined, ...children: ComponentChildren[]) => VNode<P>;
/**
 * Wrap `cloneElement` to abort if the passed element is not a valid element and apply
 * all vnode normalizations.
 */
export declare const cloneElement: typeof miniCloneElement;
/**
 * Remove a component tree from the DOM, including state and event handlers.
 * @param {import('./internal').PreactElement} container
 * @returns {boolean}
 */
export declare function unmountComponentAtNode(container: RemoteParentNode): boolean;
/**
 * Deprecated way to control batched rendering inside the reconciler, but we
 * already schedule in batches inside our rendering code
 */
export declare function unstable_batchedUpdates<T>(callback: (arg?: T) => void, arg?: T): void;
//# sourceMappingURL=uncommon.d.ts.map