import { PropertyApply } from './types';
declare type ResolveCustomElement = (component: string) => string | undefined;
interface Options {
    bind?: Node;
    customElement: Map<string, string> | {
        [key: string]: string;
    } | ResolveCustomElement;
    applyProperty?: PropertyApply;
}
export declare class DomReceiver {
    readonly receive: import("@remote-ui/core").RemoteChannel;
    private nodes;
    private bound;
    private children;
    private applyProperty;
    private resolveCustomElement;
    constructor({ bind, customElement, applyProperty, }: Options);
    bind(node: Node): void;
    unbind(): void;
    private apply;
    private release;
    private deserialize;
}
export {};
//# sourceMappingURL=receiver.d.ts.map