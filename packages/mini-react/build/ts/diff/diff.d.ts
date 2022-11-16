import type { RemoteRoot } from '@remote-ui/core';
import type { VNode, Ref, RemoteChildNode, RemoteParentNode, ComponentInternal, ComponentChildren, Component as ComponentInstance, RenderableProps } from '../types';
export declare class Component<P = {}, S = {}> implements ComponentInstance<P, S> {
    props: P;
    context: any;
    readonly state: S;
    constructor(props: P, context: any);
    setState<K extends keyof S>(update: ((prevState: Readonly<S>, props: Readonly<P>) => Pick<S, K> | Partial<S> | null) | (Pick<S, K> | Partial<S> | null), callback?: () => void): void;
    forceUpdate(callback?: () => void): void;
    render({ children }: RenderableProps<P>): ComponentChildren;
}
export declare function enqueueRender(component: ComponentInternal<any, any>): void;
/**
 * Diff two virtual nodes and apply proper changes to a remote node
 */
export declare function diff(parentNode: RemoteParentNode, remoteRoot: RemoteRoot<any, any>, newVNode: VNode<any>, oldVNode: VNode<any> | undefined, globalContext: any, excessRemoteChildren: (RemoteChildNode | null | undefined)[] | null, commitQueue: ComponentInternal<any, any>[], oldRemoteNode?: RemoteChildNode | null): RemoteChildNode | null | undefined;
export declare function commitRoot(commitQueue: ComponentInternal<any, any>[], vnode: VNode<any>): void;
/**
 * Unmount a virtual node from the tree and apply changes to the remote tree
 */
export declare function unmount(vnode: VNode<any>, parentVNode: VNode<any>, skipRemove?: boolean): void;
export declare function applyRef<T>(ref: Ref<T>, value: T, vnode: VNode<any>): void;
//# sourceMappingURL=diff.d.ts.map