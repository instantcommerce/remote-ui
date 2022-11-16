export { createRemoteRoot, release, retain } from '@remote-ui/core';
export { createElement } from '../create-element.mjs';
export { createRef } from '../create-ref.mjs';
export { isValidElement } from '../is-valid-element.mjs';
export { Fragment } from '../Fragment.mjs';
export { createContext } from '../create-context.mjs';
export { render } from './render.mjs';
export { createRemoteReactComponent } from './create-component.mjs';
export { Children } from './Children.mjs';
export { forwardRef } from './forward-ref.mjs';
export { memo } from './memo.mjs';
export { PureComponent } from './PureComponent.mjs';
export { StrictMode } from './StrictMode.mjs';
export { version } from './version.mjs';
export { cloneElement, createFactory, unmountComponentAtNode, unstable_batchedUpdates } from './uncommon.mjs';
import { React as React$1 } from './react.mjs';
export { useRemoteSubscription } from './hooks/subscription.mjs';
export { Component } from '../diff/diff.mjs';
export { useCallback, useContext, useDebugValue, useEffect, useImperativeHandle, useLayoutEffect, useMemo, useReducer, useRef, useState } from '../hooks/hooks.mjs';

// This is an entrypoint that can be used to replace imports for both react.
var React = React$1;

export { React as default };
