'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@remote-ui/core');
var createElement = require('./create-element.js');
var Fragment = require('./Fragment.js');
var options = require('./options.js');
var diff = require('./diff/diff.js');

// Unlike Preact, this library does not support hydration, or providing a
// `replaceNode` that preserves some part of the existing tree.

/**
 * Renders a virtual node into a remote-ui node.
 */
function render(vnode, remoteNode) {
  var _options$_root;

  (_options$_root = options["default"]._root) === null || _options$_root === void 0 ? void 0 : _options$_root.call(options["default"], vnode, remoteNode); // To be able to support calling `render()` multiple times on the same
  // remote node, we need to obtain a reference to the previous tree. We do
  // this by assigning a new `_children` property to remote nodes which points
  // to the last rendered tree. By default this property is not present, which
  // means that we are mounting a new tree for the first time.

  const oldVNode = remoteNode._vnode;
  const newVNode = createElement.createElement(Fragment.Fragment, null, vnode);
  remoteNode._vnode = newVNode; // List of effects that need to be called after diffing.

  const commitQueue = [];
  const unaccountedForChildren = oldVNode || !('children' in remoteNode) ? null : remoteNode.children;
  diff.diff(remoteNode, getRemoteRoot(remoteNode), newVNode, oldVNode, {}, unaccountedForChildren !== null && unaccountedForChildren !== void 0 && unaccountedForChildren.length ? [...unaccountedForChildren] : null, commitQueue, null); // Flush all queued effects

  diff.commitRoot(commitQueue, newVNode);
}

function getRemoteRoot(node) {
  return node.kind === core.KIND_ROOT ? node : node.root;
}

exports.render = render;
