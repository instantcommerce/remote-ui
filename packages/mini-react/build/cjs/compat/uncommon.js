'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var render$1 = require('../render.js');
var createElement = require('../create-element.js');
var cloneElement$1 = require('../clone-element.js');
var render = require('./render.js');

/**
 * Legacy version of createElement.
 */

function createFactory(type) {
  return createElement.createElement.bind(null, type);
}
/**
 * Check if the passed element is a valid (p)react node.
 * @param {*} element The element to check
 * @returns {boolean}
 */

function isValidElement(element) {
  return Boolean(element) && element.$$typeof === render.REACT_ELEMENT_TYPE;
}
/**
 * Wrap `cloneElement` to abort if the passed element is not a valid element and apply
 * all vnode normalizations.
 */


const cloneElement = (element, ...args) => {
  if (!isValidElement(element)) return element;
  return cloneElement$1.cloneElement(element, ...args);
};
/**
 * Remove a component tree from the DOM, including state and event handlers.
 * @param {import('./internal').PreactElement} container
 * @returns {boolean}
 */

function unmountComponentAtNode(container) {
  if (container._vnode) {
    render$1.render(null, container);
    return true;
  }

  return false;
}
/**
 * Deprecated way to control batched rendering inside the reconciler, but we
 * already schedule in batches inside our rendering code
 */

function unstable_batchedUpdates(callback, arg) {
  callback(arg);
}

exports.cloneElement = cloneElement;
exports.createFactory = createFactory;
exports.unmountComponentAtNode = unmountComponentAtNode;
exports.unstable_batchedUpdates = unstable_batchedUpdates;
