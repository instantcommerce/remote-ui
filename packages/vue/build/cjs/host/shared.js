'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

function useAttached(receiver, attachable) {
  const attachableRef = vue.shallowRef(attachable);
  const receiverRef = vue.shallowRef(receiver);
  const attached = vue.shallowRef({ ...attachable
  });

  const updateAttached = () => {
    const newAttached = receiverRef.value.attached.get(attachableRef.value);
    const {
      value: currentAttached
    } = attached;

    if ((newAttached === null || newAttached === void 0 ? void 0 : newAttached.id) !== (currentAttached === null || currentAttached === void 0 ? void 0 : currentAttached.id) || (newAttached === null || newAttached === void 0 ? void 0 : newAttached.version) !== (currentAttached === null || currentAttached === void 0 ? void 0 : currentAttached.version)) {
      attached.value = newAttached && { ...newAttached
      };
    }
  };

  const stopListeningRef = vue.ref(null);

  const updateListener = () => {
    var _stopListeningRef$val;

    (_stopListeningRef$val = stopListeningRef.value) === null || _stopListeningRef$val === void 0 ? void 0 : _stopListeningRef$val.call(stopListeningRef);
    stopListeningRef.value = receiverRef.value.attached.subscribe(attachableRef.value, updateAttached);
  };

  vue.onMounted(() => {
    updateListener();
    updateAttached();
  });
  vue.watch([receiverRef, attachableRef], () => {
    updateListener();
    updateAttached();
  });
  vue.onUnmounted(() => {
    var _stopListeningRef$val2;

    (_stopListeningRef$val2 = stopListeningRef.value) === null || _stopListeningRef$val2 === void 0 ? void 0 : _stopListeningRef$val2.call(stopListeningRef);
  });
  return attached;
}

exports.useAttached = useAttached;
