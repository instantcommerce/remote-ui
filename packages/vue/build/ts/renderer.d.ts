import type { RemoteRoot, RemoteComponent } from '@remote-ui/core';
declare type Component = RemoteComponent<string, any>;
interface Options {
    defineComponents?: boolean | {
        [key: string]: string | boolean;
    } | ((allowedComponent: string) => string | boolean);
}
export declare function createRenderer<Root extends RemoteRoot>(root: Root, { defineComponents }?: Options): {
    createApp: (rootComponent: import("@vue/runtime-core").Component<any, any, any, import("@vue/runtime-core").ComputedOptions, import("@vue/runtime-core").MethodOptions>, rootProps?: {
        [x: string]: unknown;
    } | null | undefined) => import("@vue/runtime-core").App<Component | Root>;
    render: import("@vue/runtime-core").RootRenderFunction<Component | Root>;
};
export {};
//# sourceMappingURL=renderer.d.ts.map