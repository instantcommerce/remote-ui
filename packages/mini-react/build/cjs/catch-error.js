'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * Find the closest error boundary to a thrown error and call it.
 */
function catchError(error, vnode) {
  let handled = false;
  let currentVNode = vnode;
  let currentError = error;

  while (true) {
    var _currentVNode;

    currentVNode = vnode._parent;
    const component = (_currentVNode = currentVNode) === null || _currentVNode === void 0 ? void 0 : _currentVNode._component;
    if (component == null) break;

    if (!component._processingException) {
      try {
        const ctor = component.constructor;

        if ((ctor === null || ctor === void 0 ? void 0 : ctor.getDerivedStateFromError) != null) {
          component.setState(ctor.getDerivedStateFromError(currentError));
          handled = component._dirty;
        }

        if (component.componentDidCatch != null) {
          component.componentDidCatch(currentError);
          handled = component._dirty;
        }

        if (handled) {
          component._pendingError = component;
          return;
        }
      } catch (error) {
        currentError = error;
      }
    }
  }

  throw error;
}

exports.catchError = catchError;
