import type { Ref, ComponentChild, FunctionComponent } from '../types';
export interface ForwardFunction<P = {}, T = any> {
    (props: P, ref: Ref<T>): ComponentChild;
    displayName?: string;
}
export declare const REACT_FORWARD_SYMBOL: number | symbol;
/**
 * Pass ref down to a child. This is mainly used in libraries with HOCs that
 * wrap components. Using `forwardRef` there is an easy way to get a reference
 * of the wrapped component instead of one of the wrapper itself.
 */
export declare function forwardRef<T, P = {}>(fn: ForwardFunction<P, T>): FunctionComponent<P>;
//# sourceMappingURL=forward-ref.d.ts.map