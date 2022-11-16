import type { Component } from 'vue';
export interface ComponentMapping {
    [key: string]: Component<any>;
}
export interface Controller {
    get(type: string): Component<any>;
}
export interface ControllerOptions {
    strictComponents?: boolean;
}
export declare function createController(components: ComponentMapping, { strictComponents }?: Partial<ControllerOptions>): Controller;
//# sourceMappingURL=controller.d.ts.map