'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var RemoteComponent = require('./RemoteComponent.js');
var RemoteText = require('./RemoteText.js');
var jsxRuntime = require('react/jsx-runtime');

function createController(components, {
  renderComponent: externalRenderComponent,
  renderText: externalRenderText,
  strictComponents = true
} = {}) {
  const registry = new Map(Object.entries(components));

  const defaultRenderComponent = ({
    parent,
    component,
    controller,
    receiver,
    key
  }) => {
    return /*#__PURE__*/jsxRuntime.jsx(RemoteComponent.RemoteComponent, {
      parent: parent,
      component: component,
      controller: controller,
      receiver: receiver
    }, key);
  };

  const renderComponent = externalRenderComponent ? componentProps => externalRenderComponent(componentProps, {
    renderDefault() {
      return defaultRenderComponent(componentProps);
    }

  }) : defaultRenderComponent;

  const defaultRenderText = ({
    key,
    receiver,
    text,
    parent
  }) => {
    return /*#__PURE__*/jsxRuntime.jsx(RemoteText.RemoteText, {
      receiver: receiver,
      text: text,
      parent: parent
    }, key);
  };

  const renderText = externalRenderText ? textProps => externalRenderText(textProps, {
    renderDefault() {
      return defaultRenderText(textProps);
    }

  }) : defaultRenderText;
  return {
    get(type) {
      const value = registry.get(type);

      if (value == null) {
        if (!strictComponents) {
          /** Wrap component to wrap function props in arrow functions */
          return function ComponentWrapper(props) {
            const safeProps = Object.keys(props).reduce((all, key) => {
              const current = props[key];
              all[key] = current instanceof Function ? () => current() : current;
              return all;
            }, {});
            const Component = type;
            return /*#__PURE__*/jsxRuntime.jsx(Component, { ...safeProps
            });
          };
        }

        throw new Error(`Unknown component: ${type}`);
      }

      return value;
    },

    renderer: {
      renderComponent,
      renderText
    }
  };
}

exports.createController = createController;
