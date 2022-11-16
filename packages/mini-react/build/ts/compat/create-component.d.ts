import type { RemoteComponentType } from '@remote-ui/core';
import type { ReactComponentTypeFromRemoteComponentType } from '../types';
export declare function createRemoteReactComponent<Type extends string, Props = {}, AllowedChildren extends RemoteComponentType<string, any> | boolean = true>(componentType: Type | RemoteComponentType<Type, Props, AllowedChildren>): RemoteComponentType<Type, Props, AllowedChildren> & ReactComponentTypeFromRemoteComponentType<RemoteComponentType<Type, Props, AllowedChildren>>;
//# sourceMappingURL=create-component.d.ts.map