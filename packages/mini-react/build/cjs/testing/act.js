'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var options = require('../options.js');

/**
 * Setup a rerender function that will drain the queue of pending renders
 */
function setupRerender() {
  options["default"].__test__previousDebounce = options["default"].debounceRendering;

  options["default"].debounceRendering = cb => {
    options["default"].__test__drainQueue = cb;
    return cb;
  };

  return () => {
    var _test__drainQueue, _ref;

    return (_test__drainQueue = (_ref = options["default"]).__test__drainQueue) === null || _test__drainQueue === void 0 ? void 0 : _test__drainQueue.call(_ref);
  };
}

const isThenable = value => value != null && typeof value.then === 'function';
/** Depth of nested calls to `act`. */


let actDepth = 0;
/**
 * Run a test function, and flush all effects and rerenders after invoking it.
 *
 * Returns a Promise which resolves "immediately" if the callback is
 * synchronous or when the callback's result resolves if it is asynchronous.
 */

function act(cb) {
  if (++actDepth > 1) {
    // If calls to `act` are nested, a flush happens only when the
    // outermost call returns. In the inner call, we just execute the
    // callback and return since the infrastructure for flushing has already
    // been set up.
    //
    // If an exception occurs, the outermost `act` will handle cleanup.
    const result = cb();

    if (isThenable(result)) {
      return result.then(() => {
        --actDepth;
      });
    }

    --actDepth;
    return Promise.resolve();
  }

  const previousRequestAnimationFrame = options["default"].requestAnimationFrame;
  const rerender = setupRerender();
  let flush;
  let toFlush;
  let error;
  let result; // Override requestAnimationFrame so we can flush pending hooks.

  options["default"].requestAnimationFrame = fc => {
    flush = fc;
    return 0;
  };

  const finish = () => {
    try {
      rerender();

      while (flush) {
        toFlush = flush;
        flush = undefined;
        toFlush(Date.now());
        rerender();
      }

      teardown();
    } catch (currentError) {
      if (!error) {
        error = currentError;
      }
    }

    options["default"].requestAnimationFrame = previousRequestAnimationFrame;
    --actDepth;
  };

  try {
    result = cb();
  } catch (currentError) {
    error = currentError;
  }

  if (isThenable(result)) {
    return result.then(finish, error => {
      finish();
      throw error;
    });
  } // nb. If the callback is synchronous, effects must be flushed before
  // `act` returns, so that the caller does not have to await the result,
  // even though React recommends this.


  finish();

  if (error) {
    throw error;
  }

  return Promise.resolve();
}
/**
 * Teardown test environment and reset preact's internal state
 */

function teardown() {
  const castOptions = options["default"];

  if (castOptions.__test__drainQueue) {
    // Flush any pending updates leftover by test
    castOptions.__test__drainQueue();

    delete castOptions.__test__drainQueue;
  }

  if (typeof castOptions.__test__previousDebounce === 'undefined') {
    castOptions.debounceRendering = undefined;
  } else {
    castOptions.debounceRendering = castOptions.__test__previousDebounce;
    delete castOptions.__test__previousDebounce;
  }
}

exports.act = act;
exports.setupRerender = setupRerender;
exports.teardown = teardown;
