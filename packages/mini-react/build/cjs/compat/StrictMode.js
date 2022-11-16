'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Fragment = require('../Fragment.js');

/**
 * Strict Mode is not implemented in mini-react, so we provide a stand-in for it
 * that just renders its children without imposing any restrictions.
 */

const StrictMode = Fragment.Fragment;

exports.StrictMode = StrictMode;
