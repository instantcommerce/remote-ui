'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * Check if two objects have a different shape
 */
function shallowDiffers(first, second) {
  for (const key in first) {
    if (key !== '__source' && !(key in second)) return true;
  }

  for (const key in second) {
    if (key !== '__source' && first[key] !== second[key]) return true;
  }

  return false;
}

exports.shallowDiffers = shallowDiffers;
