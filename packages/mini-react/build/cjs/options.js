'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var catchError = require('./catch-error.js');

/**
 * The `option` object can potentially contain callback functions
 * that are called during various stages of our renderer. This is the
 * foundation on which the `hooks` and `compat` layers are based.
 */

const options = {
  _catchError: catchError.catchError
};
var options$1 = options;

exports["default"] = options$1;
