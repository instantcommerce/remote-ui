'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var core = require('@remote-ui/core');
var RemoteText = require('./RemoteText.js');
var shared = require('./shared.js');

const RemoteComponent = vue.defineComponent({
  name: 'RemoteComponent',
  props: {
    component: {
      type: Object,
      required: true
    },
    receiver: {
      type: Object,
      required: true
    },
    controller: {
      type: Object,
      required: true
    }
  },

  setup({
    receiver,
    component,
    controller
  }) {
    const attached = shared.useAttached(receiver, component);
    const propsRef = vue.computed(() => {
      var _attached$value;

      return (_attached$value = attached.value) === null || _attached$value === void 0 ? void 0 : _attached$value.props;
    });
    vue.watch(propsRef, (newProps, oldProps) => {
      core.release(oldProps);
      core.retain(newProps);
    });
    return () => {
      if (attached.value == null) return null;
      const Implementation = controller.get(component.type);
      const {
        children,
        props
      } = attached.value;
      return vue.h(Implementation, props, () => children.map(child => {
        if ('children' in child) {
          return vue.h(RemoteComponent, {
            key: child.id,
            receiver,
            component: child,
            controller
          });
        } else {
          return vue.h(RemoteText.RemoteText, {
            key: child.id,
            text: child,
            receiver
          });
        }
      }));
    };
  }

});

exports.RemoteComponent = RemoteComponent;
