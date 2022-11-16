'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var hooks = require('../../hooks/hooks.js');

function useRemoteSubscription(subscribable) {
  const [state, setState] = hooks.useState(() => ({
    subscribable,
    value: subscribable.current
  }));
  let valueToReturn = state.value;

  if (state.subscribable !== subscribable) {
    valueToReturn = subscribable.current;
    setState({
      subscribable,
      value: valueToReturn
    });
  }

  hooks.useDebugValue(valueToReturn);
  hooks.useEffect(() => {
    const unsubscribe = subscribable.subscribe(checkForUpdates);
    checkForUpdates();
    return () => {
      unsubscribe();
    };

    function checkForUpdates() {
      const value = subscribable.current;
      setState(previousState => {
        if (previousState.subscribable !== subscribable || previousState.value === value) {
          return previousState;
        }

        return { ...previousState,
          value
        };
      });
    }
  }, [subscribable]);
  return valueToReturn;
}

exports.useRemoteSubscription = useRemoteSubscription;
