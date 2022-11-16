import type { FunctionComponent, ComponentProps } from '../types';
/**
 * Memoize a component, so that it only updates when the props actually have
 * changed. This was previously known as `React.pure`.
 */
export declare function memo<C extends FunctionComponent<any>>(TargetComponent: C, comparer?: (prev: ComponentProps<C>, next: ComponentProps<C>) => boolean): C;
//# sourceMappingURL=memo.d.ts.map