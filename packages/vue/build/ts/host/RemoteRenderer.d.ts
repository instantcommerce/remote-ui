import type { PropType } from 'vue';
import type { RemoteReceiver } from '@remote-ui/core';
import type { Controller } from './controller';
export declare const RemoteRenderer: import("vue").DefineComponent<{
    receiver: {
        type: PropType<RemoteReceiver>;
        required: true;
    };
    controller: {
        type: PropType<Controller>;
        required: true;
    };
}, () => (import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}> | null)[], unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    receiver: RemoteReceiver;
    controller: Controller;
} & {}>, {}>;
//# sourceMappingURL=RemoteRenderer.d.ts.map