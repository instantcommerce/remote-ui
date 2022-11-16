function fromIframe(target, {
  terminate: shouldTerminate = true,
  targetOrigin = '*'
} = {}) {
  if (typeof window === 'undefined') {
    throw new Error(`You can only run fromIframe() in a browser context, but no window was found.`);
  } // We need to store the listener, because we wrap it to do some origin checking. Ideally,
  // we’d instead store an `AbortController`, and use its signal to cancel the listeners,
  // but that isn’t widely supported.


  const listenerMap = new WeakMap();
  const iframeReadyPromise = new Promise(resolve => {
    window.addEventListener('message', event => {
      if (event.source !== target.contentWindow) return;

      if (event.data === 'remote-ui::ready') {
        resolve();
      }
    });
  });
  return {
    async postMessage(message, transfer) {
      await iframeReadyPromise;
      target.contentWindow.postMessage(message, targetOrigin, transfer);
    },

    addEventListener(event, listener) {
      const wrappedListener = event => {
        if (event.source !== target.contentWindow) return;
        listener(event);
      };

      listenerMap.set(listener, wrappedListener);
      self.addEventListener(event, wrappedListener);
    },

    removeEventListener(event, listener) {
      const wrappedListener = listenerMap.get(listener);
      if (wrappedListener == null) return;
      listenerMap.delete(listener);
      self.removeEventListener(event, wrappedListener);
    },

    terminate() {
      if (shouldTerminate) target.remove();
    }

  };
}

export { fromIframe };
