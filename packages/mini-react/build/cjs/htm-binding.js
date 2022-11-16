'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var htm = require('htm');
var createElement = require('./create-element.js');
var core = require('@remote-ui/core');
var cloneElement = require('./clone-element.js');
var createRef = require('./create-ref.js');
var isValidElement = require('./is-valid-element.js');
var Fragment = require('./Fragment.js');
var diff = require('./diff/diff.js');
var render = require('./render.js');
var createContext = require('./create-context.js');
var hooks = require('./hooks/hooks.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var htm__default = /*#__PURE__*/_interopDefaultLegacy(htm);

const ui = htm__default["default"].bind(createElement.createElement);

exports.createElement = createElement.createElement;
exports.h = createElement.createElement;
Object.defineProperty(exports, 'createRemoteRoot', {
	enumerable: true,
	get: function () { return core.createRemoteRoot; }
});
Object.defineProperty(exports, 'release', {
	enumerable: true,
	get: function () { return core.release; }
});
Object.defineProperty(exports, 'retain', {
	enumerable: true,
	get: function () { return core.retain; }
});
exports.cloneElement = cloneElement.cloneElement;
exports.createRef = createRef.createRef;
exports.isValidElement = isValidElement.isValidElement;
exports.Fragment = Fragment.Fragment;
exports.Component = diff.Component;
exports.render = render.render;
exports.createContext = createContext.createContext;
exports.useCallback = hooks.useCallback;
exports.useContext = hooks.useContext;
exports.useDebugValue = hooks.useDebugValue;
exports.useEffect = hooks.useEffect;
exports.useImperativeHandle = hooks.useImperativeHandle;
exports.useLayoutEffect = hooks.useLayoutEffect;
exports.useMemo = hooks.useMemo;
exports.useReducer = hooks.useReducer;
exports.useRef = hooks.useRef;
exports.useState = hooks.useState;
exports.ui = ui;
