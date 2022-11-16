import { Fragment } from '../Fragment.mjs';

/**
 * Strict Mode is not implemented in mini-react, so we provide a stand-in for it
 * that just renders its children without imposing any restrictions.
 */

const StrictMode = Fragment;

export { StrictMode };
