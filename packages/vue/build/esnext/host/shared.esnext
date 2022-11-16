import { shallowRef, ref, onMounted, watch, onUnmounted } from 'vue';

function useAttached(receiver, attachable) {
  const attachableRef = shallowRef(attachable);
  const receiverRef = shallowRef(receiver);
  const attached = shallowRef({ ...attachable
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

  const stopListeningRef = ref(null);

  const updateListener = () => {
    var _stopListeningRef$val;

    (_stopListeningRef$val = stopListeningRef.value) === null || _stopListeningRef$val === void 0 ? void 0 : _stopListeningRef$val.call(stopListeningRef);
    stopListeningRef.value = receiverRef.value.attached.subscribe(attachableRef.value, updateAttached);
  };

  onMounted(() => {
    updateListener();
    updateAttached();
  });
  watch([receiverRef, attachableRef], () => {
    updateListener();
    updateAttached();
  });
  onUnmounted(() => {
    var _stopListeningRef$val2;

    (_stopListeningRef$val2 = stopListeningRef.value) === null || _stopListeningRef$val2 === void 0 ? void 0 : _stopListeningRef$val2.call(stopListeningRef);
  });
  return attached;
}

export { useAttached };
