import htm from 'htm';
import { createElement } from './create-element.mjs';
export { createElement, createElement as h } from './create-element.mjs';
export { createRemoteRoot, release, retain } from '@remote-ui/core';
export { cloneElement } from './clone-element.mjs';
export { createRef } from './create-ref.mjs';
export { isValidElement } from './is-valid-element.mjs';
export { Fragment } from './Fragment.mjs';
export { Component } from './diff/diff.mjs';
export { render } from './render.mjs';
export { createContext } from './create-context.mjs';
export { useCallback, useContext, useDebugValue, useEffect, useImperativeHandle, useLayoutEffect, useMemo, useReducer, useRef, useState } from './hooks/hooks.mjs';

const ui = htm.bind(createElement);

export { ui };
