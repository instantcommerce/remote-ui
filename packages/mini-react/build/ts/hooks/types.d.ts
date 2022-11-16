import type { HookType, ComponentInternal } from '../types';
export declare type Inputs = ReadonlyArray<unknown>;
export declare type StateUpdater<S> = (value: S | ((prevState: S) => S)) => void;
export declare type Reducer<S, A> = (prevState: S, action: A) => S;
export declare type EffectCallback = () => void | (() => void);
export interface PropRef<T> {
    current?: T;
}
export interface Ref<T> {
    current: T;
}
/**
 * The type of arguments passed to a Hook function. While this type is not
 * strictly necessary, they are given a type name to make it easier to read
 * the following types and trace the flow of data.
 */
export declare type HookArgs = any;
/**
 * The return type of a Hook function. While this type is not
 * strictly necessary, they are given a type name to make it easier to read
 * the following types and trace the flow of data.
 */
export declare type HookReturnValue = any;
/** The public function a user invokes to use a Hook */
export declare type Hook = (...args: HookArgs[]) => HookReturnValue;
export interface ComponentHooks {
    /** The list of hooks a component uses */
    _list: HookState[];
    /** List of Effects to be invoked after the next frame is rendered */
    _pendingEffects: EffectHookState[];
}
export interface Component extends Omit<ComponentInternal<any, any>, '_renderCallbacks'> {
    __hooks?: ComponentHooks;
    _renderCallbacks: ((() => void) | EffectHookState)[];
}
export declare type HookState = EffectHookState | MemoHookState | ReducerHookState | ContextHookState;
export declare type Effect = () => void | Cleanup;
export declare type Cleanup = () => void;
export interface EffectHookState {
    _value?: Effect;
    _args?: ReadonlyArray<any>;
    _cleanup?: Cleanup;
}
export interface MemoHookState {
    _value?: any;
    _args?: ReadonlyArray<any>;
    _factory?: () => any;
}
export interface ReducerHookState {
    _value?: any;
    _component?: Component;
    _reducer?: Reducer<any, any>;
}
export interface ContextHookState {
    _value?: true;
}
export interface HookTypeMap {
    [HookType.useMemo]: MemoHookState;
    [HookType.useEffect]: EffectHookState;
    [HookType.useLayoutEffect]: EffectHookState;
    [HookType.useReducer]: ReducerHookState;
    [HookType.useContext]: ContextHookState;
}
//# sourceMappingURL=types.d.ts.map