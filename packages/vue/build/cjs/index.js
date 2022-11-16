'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var rpc = require('@remote-ui/rpc');
var core = require('@remote-ui/core');
var renderer = require('./renderer.js');
var components = require('./components.js');



Object.defineProperty(exports, 'release', {
  enumerable: true,
  get: function () { return rpc.release; }
});
Object.defineProperty(exports, 'retain', {
  enumerable: true,
  get: function () { return rpc.retain; }
});
Object.defineProperty(exports, 'createRemoteReceiver', {
  enumerable: true,
  get: function () { return core.createRemoteReceiver; }
});
Object.defineProperty(exports, 'createRemoteRoot', {
  enumerable: true,
  get: function () { return core.createRemoteRoot; }
});
exports.createRenderer = renderer.createRenderer;
exports.createRemoteVueComponent = components.createRemoteVueComponent;
