import type { Ref as ReactRef, ContextInternal as ReactContext } from '../types';
import type { Inputs, Ref, PropRef, Reducer, StateUpdater, EffectCallback } from './types';
/**
 * Returns a stateful value, and a function to update it.
 * @param initialState The initial value (or a function that returns the initial value)
 */
export declare function useState<S>(initialState: S | (() => S)): [S, StateUpdater<S>];
/**
 * An alternative to `useState`.
 *
 * `useReducer` is usually preferable to `useState` when you have complex state logic that involves
 * multiple sub-values. It also lets you optimize performance for components that trigger deep
 * updates because you can pass `dispatch` down instead of callbacks.
 * @param reducer Given the current state and an action, returns the new state
 * @param initialState The initial value to store as state
 */
export declare function useReducer<S, A>(reducer: Reducer<S, A>, initialState: S): [S, (action: A) => void];
/**
 * An alternative to `useState`.
 *
 * `useReducer` is usually preferable to `useState` when you have complex state logic that involves
 * multiple sub-values. It also lets you optimize performance for components that trigger deep
 * updates because you can pass `dispatch` down instead of callbacks.
 * @param reducer Given the current state and an action, returns the new state
 * @param initialArg The initial argument to pass to the `init` function
 * @param init A function that, given the `initialArg`, returns the initial value to store as state
 */
export declare function useReducer<S, A, I>(reducer: Reducer<S, A>, initialArg: I, init: (arg: I) => S): [S, (action: A) => void];
/**
 * Accepts a function that contains imperative, possibly effectful code.
 * The effects run after browser paint, without blocking it.
 *
 * @param effect Imperative function that can return a cleanup function
 * @param inputs If present, effect will only activate if the values in the list change (using ===).
 */
export declare function useEffect(effect: EffectCallback, inputs?: Inputs): void;
/**
 * Accepts a function that contains imperative, possibly effectful code.
 * Use this to read layout from the DOM and synchronously re-render.
 * Updates scheduled inside `useLayoutEffect` will be flushed synchronously, after all DOM mutations but before the browser has a chance to paint.
 * Prefer the standard `useEffect` hook when possible to avoid blocking visual updates.
 *
 * @param effect Imperative function that can return a cleanup function
 * @param inputs If present, effect will only activate if the values in the list change (using ===).
 */
export declare function useLayoutEffect(effect: EffectCallback, inputs?: Inputs): void;
/**
 * `useRef` returns a mutable ref object whose `.current` property is initialized to the passed argument
 * (`initialValue`). The returned object will persist for the full lifetime of the component.
 *
 * Note that `useRef()` is useful for more than the `ref` attribute. It’s handy for keeping any mutable
 * value around similar to how you’d use instance fields in classes.
 */
export declare function useRef<T>(initialValue?: T | null): Ref<T>;
/**
 * `useRef` without an initial value is the special case handling `ref` props.
 * If you want a non prop-based, mutable ref, you can explicitly give it an initial value of undefined/null/etc.
 * You should explicitly set the type parameter for the expected ref value to either a DOM Element like `HTMLInputElement` or a `Component`
 */
export declare function useRef<T = unknown>(): PropRef<T>;
/**
 * @param ref The ref that will be mutated
 * @param create The function that will be executed to get the value that will be attached to
 * ref.current
 * @param inputs If present, effect will only activate if the values in the list change (using ===).
 */
export declare function useImperativeHandle<T, R extends T>(ref: ReactRef<T>, create: () => R, inputs?: Inputs): void;
/**
 * Pass a factory function and an array of inputs.
 * useMemo will only recompute the memoized value when one of the inputs has changed.
 * This optimization helps to avoid expensive calculations on every render.
 * If no array is provided, a new value will be computed whenever a new function instance is passed as the first argument.
 */
export declare function useMemo<T>(factory: () => T, inputs: Inputs | undefined): T;
export declare function useCallback<T extends Function>(callback: T, inputs: Inputs): T;
/**
 * Returns the current context value, as given by the nearest context provider for the given context.
 * When the provider updates, this Hook will trigger a rerender with the latest context value.
 *
 * @param context The context you want to use
 */
export declare function useContext<T>(context: ReactContext<T>): T;
/**
 * Customize the displayed value in the devtools panel.
 *
 * @param value Custom hook name or object that is passed to formatter
 * @param formatter Formatter to modify value before sending it to the devtools
 */
export declare function useDebugValue<T>(value: T, formatter?: (value: T) => any): void;
//# sourceMappingURL=hooks.d.ts.map