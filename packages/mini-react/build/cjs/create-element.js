'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var options = require('./options.js');

/**
 * Create a virtual node (used for JSX)
 */
function createElement(type, props, ...children) {
  const normalizedProps = {};
  let prop;
  let key;
  let ref;

  for (prop in props) {
    if (prop === 'key') {
      key = props[prop];
    } else if (prop === 'ref') {
      ref = props[prop];
    } else {
      normalizedProps[prop] = props[prop];
    }
  }

  if (children.length) {
    normalizedProps.children = children;
  }

  if (typeof type === 'function' && type.defaultProps != null) {
    for (prop in type.defaultProps) {
      if (normalizedProps[prop] === undefined) {
        normalizedProps[prop] = type.defaultProps[prop];
      }
    }
  }

  return createVNode(type, normalizedProps, key, ref, null);
}
/**
 * Create a VNode (used internally)
 */

function createVNode(type, props, key, ref, original) {
  var _options$vnode;

  // V8 seems to be better at detecting type shapes if the object is allocated from the same call site
  // Do not inline into createElement and coerceToVNode!
  const vnode = {
    type,
    props: props,
    key,
    ref,
    _children: null,
    _parent: null,
    _depth: 0,
    _remoteNode: null,
    // _nextRemoteNode must be initialized to undefined b/c it will eventually
    // be set to dom.nextSibling which can return `null` and it is important
    // to be able to distinguish between an uninitialized _nextRemoteNode and
    // a _nextRemoteNode that has been set to `null`
    _nextRemoteNode: undefined,
    _component: undefined,
    constructor: undefined,
    _original: original
  };
  if (original == null) vnode._original = vnode;
  (_options$vnode = options["default"].vnode) === null || _options$vnode === void 0 ? void 0 : _options$vnode.call(options["default"], vnode);
  return vnode;
}

exports.createElement = createElement;
exports.createVNode = createVNode;
