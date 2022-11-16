/**
 * Setup a rerender function that will drain the queue of pending renders
 */
export declare function setupRerender(): () => void | undefined;
/**
 * Run a test function, and flush all effects and rerenders after invoking it.
 *
 * Returns a Promise which resolves "immediately" if the callback is
 * synchronous or when the callback's result resolves if it is asynchronous.
 */
export declare function act(cb: () => void | Promise<void>): PromiseLike<void>;
/**
 * Teardown test environment and reset preact's internal state
 */
export declare function teardown(): void;
//# sourceMappingURL=act.d.ts.map