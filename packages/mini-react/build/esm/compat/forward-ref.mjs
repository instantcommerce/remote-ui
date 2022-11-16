import options from '../options.mjs';

var _Symbol$for;
const oldDiffHook = options._diff;

options._diff = vnode => {
  var _vnode$type;

  if ((_vnode$type = vnode.type) !== null && _vnode$type !== void 0 && _vnode$type._forwarded && vnode.ref) {
    vnode.props.ref = vnode.ref;
    vnode.ref = undefined;
  }

  oldDiffHook === null || oldDiffHook === void 0 ? void 0 : oldDiffHook(vnode);
};

const REACT_FORWARD_SYMBOL = typeof Symbol !== 'undefined' && ((_Symbol$for = Symbol.for) === null || _Symbol$for === void 0 ? void 0 : _Symbol$for.call(Symbol, 'react.forward_ref')) || 0xf47;
/**
 * Pass ref down to a child. This is mainly used in libraries with HOCs that
 * wrap components. Using `forwardRef` there is an easy way to get a reference
 * of the wrapped component instead of one of the wrapper itself.
 */

function forwardRef(fn) {
  var _fn$displayName;

  // We always have ref in props.ref, except for
  // mobx-react. It will call this function directly
  // and always pass ref as the second argument.
  function Forwarded({
    ref: propsRef,
    ...props
  }, ref) {
    const resolvedRef = propsRef !== null && propsRef !== void 0 ? propsRef : ref;
    return fn(props, !resolvedRef || typeof resolvedRef === 'object' && !('current' in resolvedRef) ? null : resolvedRef);
  } // mobx-react checks for this being present


  Forwarded.$$typeof = REACT_FORWARD_SYMBOL; // mobx-react heavily relies on implementation details.
  // It expects an object here with a `render` property,
  // and prototype.render will fail. Without this
  // mobx-react throws.

  Forwarded.render = Forwarded;
  Forwarded.prototype.isReactComponent = true;
  Forwarded._forwarded = true;
  Forwarded.displayName = `ForwardRef(${(_fn$displayName = fn.displayName) !== null && _fn$displayName !== void 0 ? _fn$displayName : fn.name})`;
  return Forwarded;
}

export { REACT_FORWARD_SYMBOL, forwardRef };
