'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * Check if a the argument is a valid VNode.
 */
const isValidElement = vnode => vnode != null && vnode.constructor === undefined;

exports.isValidElement = isValidElement;
