'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var createElement = require('../create-element.js');
var createRef = require('../create-ref.js');
var isValidElement = require('../is-valid-element.js');
var Fragment = require('../Fragment.js');
var createContext = require('../create-context.js');
var render = require('./render.js');
var Children = require('./Children.js');
var forwardRef = require('./forward-ref.js');
var memo = require('./memo.js');
var PureComponent = require('./PureComponent.js');
var StrictMode = require('./StrictMode.js');
var uncommon = require('./uncommon.js');
var version = require('./version.js');
var diff = require('../diff/diff.js');
var hooks = require('../hooks/hooks.js');

const React = {
  version: version.version,
  cloneElement: uncommon.cloneElement,
  createElement: createElement.createElement,
  createRef: createRef.createRef,
  createContext: createContext.createContext,
  isValidElement: isValidElement.isValidElement,
  StrictMode: StrictMode.StrictMode,
  Fragment: Fragment.Fragment,
  Component: diff.Component,
  Children: Children.Children,
  forwardRef: forwardRef.forwardRef,
  memo: memo.memo,
  PureComponent: PureComponent.PureComponent,
  createFactory: uncommon.createFactory,
  unmountComponentAtNode: uncommon.unmountComponentAtNode,
  unstable_batchedUpdates: uncommon.unstable_batchedUpdates,
  render: render.render,
  useState: hooks.useState,
  useReducer: hooks.useReducer,
  useMemo: hooks.useMemo,
  useCallback: hooks.useCallback,
  useContext: hooks.useContext,
  useEffect: hooks.useEffect,
  useLayoutEffect: hooks.useLayoutEffect,
  useRef: hooks.useRef,
  useImperativeHandle: hooks.useImperativeHandle,
  useDebugValue: hooks.useDebugValue
};

exports.React = React;
