import type { Component } from 'vue';
import type { RemoteComponentType, PropsForRemoteComponent } from '@remote-ui/core';
export declare type VuePropsFromRemoteComponentType<Type extends RemoteComponentType<string, any, any>> = PropsForRemoteComponent<Type>;
export declare type VueComponentTypeFromRemoteComponentType<Type extends RemoteComponentType<string, any, any>> = Component<VuePropsFromRemoteComponentType<Type>>;
//# sourceMappingURL=types.d.ts.map