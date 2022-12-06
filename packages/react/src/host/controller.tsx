import type {ComponentType, ReactNode} from 'react';

import type {
  Controller,
  RemoteComponentProps,
  RemoteTextProps,
  RenderComponentOptions,
  Renderer,
  RenderTextOptions,
} from './types';
import {RemoteComponent} from './RemoteComponent';
import {RemoteText} from './RemoteText';

export interface ComponentMapping {
  [key: string]: ComponentType<any>;
}

export interface ControllerOptions {
  renderComponent(
    props: RemoteComponentProps,
    options: RenderComponentOptions,
  ): ReactNode;
  renderText(props: RemoteTextProps, options: RenderTextOptions): ReactNode;
  strictComponents?: boolean;
}

export function createController(
  components: ComponentMapping,
  {
    renderComponent: externalRenderComponent,
    renderText: externalRenderText,
    strictComponents = true,
  }: Partial<ControllerOptions> = {},
): Controller {
  const registry = new Map(Object.entries(components));

  const defaultRenderComponent: Renderer['renderComponent'] = ({
    parent,
    component,
    controller,
    receiver,
    key,
  }) => {
    return (
      <RemoteComponent
        parent={parent}
        component={component}
        controller={controller}
        receiver={receiver}
        key={key}
      />
    );
  };

  const renderComponent: Renderer['renderComponent'] = externalRenderComponent
    ? (componentProps) =>
        externalRenderComponent(componentProps, {
          renderDefault() {
            return defaultRenderComponent(componentProps);
          },
        })
    : defaultRenderComponent;

  const defaultRenderText: Renderer['renderText'] = ({
    key,
    receiver,
    text,
    parent,
  }) => {
    return (
      <RemoteText key={key} receiver={receiver} text={text} parent={parent} />
    );
  };

  const renderText: Renderer['renderText'] = externalRenderText
    ? (textProps) =>
        externalRenderText(textProps, {
          renderDefault() {
            return defaultRenderText(textProps);
          },
        })
    : defaultRenderText;

  return {
    get(type) {
      const value = registry.get(type as any);
      if (value == null) {
        if (!strictComponents) {
          /** Wrap component to wrap function props in arrow functions */
          return function ComponentWrapper(props) {
            const safeProps = Object.keys(props).reduce((all, key) => {
              const current = props[key];
              all[key] =
                current instanceof Function ? () => current() : current;
              return all;
            }, {} as typeof props);
            const Component = type as any;

            return <Component {...safeProps} />;
          };
        }

        throw new Error(`Unknown component: ${type}`);
      }
      return value;
    },
    renderer: {
      renderComponent,
      renderText,
    },
  };
}
