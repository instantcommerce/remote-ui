'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@remote-ui/core');
var internal = require('./internal.js');

function closest(element, type, props) {
  // let match: RemoteComponent<Type, any> | null = null;
  let current = element;

  while (current) {
    if ('kind' in current && current.kind === core.KIND_COMPONENT && current.type === type && (props == null || internal.objectContains(current.props, props))) {
      return current;
    }

    current = current.parent;
  }

  return null;
}

exports.closest = closest;
