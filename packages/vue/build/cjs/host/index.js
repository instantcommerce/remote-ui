'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@remote-ui/core');
var RemoteRenderer = require('./RemoteRenderer.js');
var controller = require('./controller.js');



Object.defineProperty(exports, 'createRemoteReceiver', {
  enumerable: true,
  get: function () { return core.createRemoteReceiver; }
});
exports.RemoteRenderer = RemoteRenderer.RemoteRenderer;
exports.createController = controller.createController;
