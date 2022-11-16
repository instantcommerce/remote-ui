import type { PropsForRemoteComponent, RemoteComponentType } from '@remote-ui/core';
import type { RemoteElement, RemoteComponent } from './types';
export declare function find<Type extends RemoteComponentType<string, any, any>>(element: RemoteElement, type: Type, props?: Partial<PropsForRemoteComponent<Type>>): null;
export declare function findAll<Type extends RemoteComponentType<string, any, any>>(element: RemoteElement, type: Type, props?: Partial<PropsForRemoteComponent<Type>>): RemoteComponent<Type, any>[];
//# sourceMappingURL=find.d.ts.map