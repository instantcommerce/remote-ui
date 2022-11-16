import type { PropType } from 'vue';
import type { RemoteReceiver, RemoteReceiverAttachableText } from '@remote-ui/core';
export declare const RemoteText: import("vue").DefineComponent<{
    text: {
        type: PropType<RemoteReceiverAttachableText>;
        required: true;
    };
    receiver: {
        type: PropType<RemoteReceiver>;
        required: true;
    };
}, () => string | null, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    text: RemoteReceiverAttachableText;
    receiver: RemoteReceiver;
} & {}>, {}>;
//# sourceMappingURL=RemoteText.d.ts.map