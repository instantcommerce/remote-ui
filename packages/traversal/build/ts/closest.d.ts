import { PropsForRemoteComponent, RemoteComponentType, RemoteText } from '@remote-ui/core';
import type { RemoteComponent } from './types';
export declare function closest<Type extends RemoteComponentType<string, any, any>>(element: RemoteComponent<string, any> | RemoteText<any>, type: Type, props?: Partial<PropsForRemoteComponent<Type>>): RemoteComponent<string, any> | null;
//# sourceMappingURL=closest.d.ts.map