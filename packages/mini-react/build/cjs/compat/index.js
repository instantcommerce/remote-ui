'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@remote-ui/core');
var createElement = require('../create-element.js');
var createRef = require('../create-ref.js');
var isValidElement = require('../is-valid-element.js');
var Fragment = require('../Fragment.js');
var createContext = require('../create-context.js');
var render = require('./render.js');
var createComponent = require('./create-component.js');
var Children = require('./Children.js');
var forwardRef = require('./forward-ref.js');
var memo = require('./memo.js');
var PureComponent = require('./PureComponent.js');
var StrictMode = require('./StrictMode.js');
var version = require('./version.js');
var uncommon = require('./uncommon.js');
var react = require('./react.js');
var subscription = require('./hooks/subscription.js');
var diff = require('../diff/diff.js');
var hooks = require('../hooks/hooks.js');

// This is an entrypoint that can be used to replace imports for both react.
var React = react.React;

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
exports.createElement = createElement.createElement;
exports.createRef = createRef.createRef;
exports.isValidElement = isValidElement.isValidElement;
exports.Fragment = Fragment.Fragment;
exports.createContext = createContext.createContext;
exports.render = render.render;
exports.createRemoteReactComponent = createComponent.createRemoteReactComponent;
exports.Children = Children.Children;
exports.forwardRef = forwardRef.forwardRef;
exports.memo = memo.memo;
exports.PureComponent = PureComponent.PureComponent;
exports.StrictMode = StrictMode.StrictMode;
exports.version = version.version;
exports.cloneElement = uncommon.cloneElement;
exports.createFactory = uncommon.createFactory;
exports.unmountComponentAtNode = uncommon.unmountComponentAtNode;
exports.unstable_batchedUpdates = uncommon.unstable_batchedUpdates;
exports.useRemoteSubscription = subscription.useRemoteSubscription;
exports.Component = diff.Component;
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
exports["default"] = React;
