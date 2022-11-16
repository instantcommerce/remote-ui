'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

function createRemoteVueComponent(componentType, {
  emits: emitMap
} = {}) {
  const emits = emitMap ? Object.keys(emitMap) : undefined;
  const emitMethods = emits && emits.length > 0 ? emits.reduce((methods, eventName) => {
    const propName = emitMap[eventName];

    methods[`emitter_${propName}`] = function (...args) {
      this.$emit(eventName, ...args);
    };

    return methods;
  }, {}) : undefined;

  const props = instance => {
    return emits && emits.length > 0 ? { ...instance.$attrs,
      ...emits.reduce((emitProps, eventName) => {
        const propName = emitMap[eventName];
        emitProps[propName] = instance[`emitter_${propName}`];
        return emitProps;
      }, {})
    } : instance.$attrs;
  };

  return vue.defineComponent({
    name: componentType,
    emits,
    inheritAttrs: false,

    render() {
      var _this$$slots$default, _this$$slots;

      return vue.h(componentType, props(this), (_this$$slots$default = (_this$$slots = this.$slots).default) === null || _this$$slots$default === void 0 ? void 0 : _this$$slots$default.call(_this$$slots));
    },

    methods: emitMethods
  });
}

exports.createRemoteVueComponent = createRemoteVueComponent;
