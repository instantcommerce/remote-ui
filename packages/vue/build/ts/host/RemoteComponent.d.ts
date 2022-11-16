import type { DefineComponent, PropType } from 'vue';
import type { RemoteReceiver, RemoteReceiverAttachableComponent } from '@remote-ui/core';
import type { Controller } from './controller';
interface Props {
    receiver: RemoteReceiver;
    component: RemoteReceiverAttachableComponent;
    controller: Controller;
}
export declare const RemoteComponent: DefineComponent<{
    component: {
        type: PropType<Props['component']>;
        required: true;
    };
    receiver: {
        type: PropType<Props['receiver']>;
        required: true;
    };
    controller: {
        type: PropType<Props['controller']>;
        required: true;
    };
}>;
export {};
//# sourceMappingURL=RemoteComponent.d.ts.map