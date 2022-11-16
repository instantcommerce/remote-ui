'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@remote-ui/core');

function diffProps(remoteNode, newProps, oldProps) {
  if (remoteNode.kind !== core.KIND_COMPONENT) return;
  const update = {};
  let needsUpdate = false;
  let prop;

  for (prop in oldProps) {
    if (prop !== 'children' && prop !== 'key' && !(prop in newProps)) {
      needsUpdate = true;
      update[prop] = undefined;
    }
  }

  for (prop in newProps) {
    if (prop !== 'children' && prop !== 'key' && oldProps[prop] !== newProps[prop]) {
      needsUpdate = true;
      update[prop] = newProps[prop];
    }
  }

  if (needsUpdate) remoteNode.updateProps(update);
}

exports.diffProps = diffProps;
