'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var core = require('@remote-ui/core');
var RemoteComponent = require('./RemoteComponent.js');
var RemoteText = require('./RemoteText.js');
var shared = require('./shared.js');

const RemoteRenderer = vue.defineComponent({
  name: 'RemoteRenderer',
  props: {
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
    controller
  }) {
    const attached = shared.useAttached(receiver, receiver.attached.root);
    return () => {
      return attached.value.children.map(child => {
        switch (child.kind) {
          case core.KIND_COMPONENT:
            {
              return vue.h(RemoteComponent.RemoteComponent, {
                key: child.id,
                component: child,
                receiver,
                controller
              });
            }

          case core.KIND_TEXT:
            {
              return vue.h(RemoteText.RemoteText, {
                key: child.id,
                text: child,
                receiver
              });
            }

          default:
            return null;
        }
      });
    };
  }

});

exports.RemoteRenderer = RemoteRenderer;
