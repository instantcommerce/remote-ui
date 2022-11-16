import type { ComponentType, ReactNode } from 'react';
import type { Controller, RemoteComponentProps, RemoteTextProps, RenderComponentOptions, RenderTextOptions } from './types';
export interface ComponentMapping {
    [key: string]: ComponentType<any>;
}
export interface ControllerOptions {
    renderComponent(props: RemoteComponentProps, options: RenderComponentOptions): ReactNode;
    renderText(props: RemoteTextProps, options: RenderTextOptions): ReactNode;
    strictComponents?: boolean;
}
export declare function createController(components: ComponentMapping, { renderComponent: externalRenderComponent, renderText: externalRenderText, strictComponents, }?: Partial<ControllerOptions>): Controller;
//# sourceMappingURL=controller.d.ts.map