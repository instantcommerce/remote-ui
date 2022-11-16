'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var shared = require('./shared.js');

const RemoteText = vue.defineComponent({
  name: 'RemoteText',
  props: {
    text: {
      type: Object,
      required: true
    },
    receiver: {
      type: Object,
      required: true
    }
  },

  setup({
    text,
    receiver
  }) {
    const attached = shared.useAttached(receiver, text);
    return () => attached.value ? attached.value.text : null;
  }

});

exports.RemoteText = RemoteText;
