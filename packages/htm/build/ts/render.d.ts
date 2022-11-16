import type { RemoteRoot, RemoteComponent } from '@remote-ui/core';
export declare function createHtm(root: RemoteRoot<any, any>): (strings: TemplateStringsArray, ...values: any[]) => RemoteComponent<any, RemoteRoot<any, any>> | RemoteComponent<any, RemoteRoot<any, any>>[];
export declare function append(tree: ReturnType<ReturnType<typeof createHtm>>, parent: RemoteRoot<any, any> | RemoteComponent<any, any>): void;
//# sourceMappingURL=render.d.ts.map