import type { RemoteComponentType } from '@remote-ui/core';
import type { VueComponentTypeFromRemoteComponentType } from './types';
declare type KeysWithFunctionValues<T> = {
    [K in keyof T]-?: NonNullable<T[K]> extends (...args: any[]) => any ? K : never;
}[keyof T];
interface Options<Props> {
    emits?: {
        [key: string]: KeysWithFunctionValues<Props>;
    };
}
export declare function createRemoteVueComponent<Type extends string, Props = Record<string, never>, AllowedChildren extends RemoteComponentType<string, any> | boolean = true>(componentType: Type | RemoteComponentType<Type, Props, AllowedChildren>, { emits: emitMap }?: Options<Props>): VueComponentTypeFromRemoteComponentType<RemoteComponentType<Type, Props, AllowedChildren>>;
export {};
//# sourceMappingURL=components.d.ts.map