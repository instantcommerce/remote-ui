'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var runtimeCore = require('@vue/runtime-core');
var core = require('@remote-ui/core');
var components = require('./components.js');

function createRenderer(root, {
  defineComponents = false
} = {}) {
  const {
    createApp: baseCreateApp,
    render
  } = runtimeCore.createRenderer({
    createComment() {
      throw new Error('@remote-ui/vue does not support creating comments');
    },

    createElement(type) {
      return root.createComponent(type);
    },

    createText(text) {
      return root.createText(text);
    },

    insert(child, parent, anchor) {
      parent.insertBefore(child, anchor);
    },

    nextSibling(node) {
      var _children;

      const {
        parent
      } = node;
      if (parent == null) return null;
      const {
        children
      } = parent;
      return (_children = children[children.indexOf(node) + 1]) !== null && _children !== void 0 ? _children : null;
    },

    patchProp(element, key, _, next) {
      if (!core.isRemoteComponent(element)) {
        throw new Error('Attempted to patch props on a root node; this should never happen!');
      }

      element.updateProps({
        [key]: next
      });
    },

    remove(node) {
      var _node$parent;

      (_node$parent = node.parent) === null || _node$parent === void 0 ? void 0 : _node$parent.removeChild(node);
    },

    setElementText,

    setText(node, text) {
      if (core.isRemoteText(node)) {
        node.update(text);
      } else {
        setElementText(node, text);
      }
    },

    parentNode(node) {
      return node.parent;
    }

  });

  function createApp(...args) {
    const app = baseCreateApp(...args);
    const {
      components: components$1
    } = root.options;

    if (defineComponents && components$1) {
      for (const component of components$1) {
        let mappedComponent = false;

        if (defineComponents === true) {
          mappedComponent = component;
        } else if (typeof defineComponents === 'function') {
          const defineResult = defineComponents(component);
          mappedComponent = defineResult === true ? component : defineResult;
        } else {
          var _defineComponents$com;

          const defineResult = (_defineComponents$com = defineComponents[component]) !== null && _defineComponents$com !== void 0 ? _defineComponents$com : false;
          mappedComponent = defineResult === true ? component : defineResult;
        }

        if (mappedComponent) {
          app.component(mappedComponent, components.createRemoteVueComponent(component));
        }
      }
    }

    return app;
  }

  return {
    createApp,
    render
  };
}

function setElementText(element, text) {
  element.replaceChildren(text);
}

exports.createRenderer = createRenderer;
