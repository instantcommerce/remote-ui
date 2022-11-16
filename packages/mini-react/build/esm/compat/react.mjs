import { createElement } from '../create-element.mjs';
import { createRef } from '../create-ref.mjs';
import { isValidElement } from '../is-valid-element.mjs';
import { Fragment } from '../Fragment.mjs';
import { createContext } from '../create-context.mjs';
import { render } from './render.mjs';
import { Children } from './Children.mjs';
import { forwardRef } from './forward-ref.mjs';
import { memo } from './memo.mjs';
import { PureComponent } from './PureComponent.mjs';
import { StrictMode } from './StrictMode.mjs';
import { cloneElement, createFactory, unmountComponentAtNode, unstable_batchedUpdates } from './uncommon.mjs';
import { version } from './version.mjs';
import { Component } from '../diff/diff.mjs';
import { useState, useReducer, useMemo, useCallback, useContext, useEffect, useLayoutEffect, useRef, useImperativeHandle, useDebugValue } from '../hooks/hooks.mjs';

const React = {
  version,
  cloneElement,
  createElement,
  createRef,
  createContext,
  isValidElement,
  StrictMode,
  Fragment,
  Component,
  Children,
  forwardRef,
  memo,
  PureComponent,
  createFactory,
  unmountComponentAtNode,
  unstable_batchedUpdates,
  render,
  useState,
  useReducer,
  useMemo,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useImperativeHandle,
  useDebugValue
};

export { React };
