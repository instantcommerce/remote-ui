'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var render$1 = require('../render.js');
var options = require('../options.js');

var _Symbol$for;
const REACT_ELEMENT_TYPE = typeof Symbol !== 'undefined' && ((_Symbol$for = Symbol.for) === null || _Symbol$for === void 0 ? void 0 : _Symbol$for.call(Symbol, 'react.element')) || 0xeac7;
const oldVNodeHook = options["default"].vnode;

options["default"].vnode = vnode => {
  vnode.$$typeof = REACT_ELEMENT_TYPE;
  oldVNodeHook === null || oldVNodeHook === void 0 ? void 0 : oldVNodeHook(vnode);
};
/**
 * Proxy render() since React returns a Component reference.
 */


function render(child, remoteNode, callback) {
  var _component;

  // React destroys any existing DOM nodes, but only on the first render
  if (remoteNode._vnode == null) {
    for (const child of remoteNode.children) {
      remoteNode.removeChild(child);
    }
  }

  render$1.render(child, remoteNode);
  callback === null || callback === void 0 ? void 0 : callback();
  return (_component = child === null || child === void 0 ? void 0 : child._component) !== null && _component !== void 0 ? _component : null;
}

exports.REACT_ELEMENT_TYPE = REACT_ELEMENT_TYPE;
exports.render = render;
