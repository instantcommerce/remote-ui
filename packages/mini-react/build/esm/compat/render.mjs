import { render as render$1 } from '../render.mjs';
import options from '../options.mjs';

var _Symbol$for;
const REACT_ELEMENT_TYPE = typeof Symbol !== 'undefined' && ((_Symbol$for = Symbol.for) === null || _Symbol$for === void 0 ? void 0 : _Symbol$for.call(Symbol, 'react.element')) || 0xeac7;
const oldVNodeHook = options.vnode;

options.vnode = vnode => {
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

  render$1(child, remoteNode);
  callback === null || callback === void 0 ? void 0 : callback();
  return (_component = child === null || child === void 0 ? void 0 : child._component) !== null && _component !== void 0 ? _component : null;
}

export { REACT_ELEMENT_TYPE, render };
