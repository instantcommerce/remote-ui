import { defineComponent } from 'vue';
import { useAttached } from './shared.mjs';

const RemoteText = defineComponent({
  name: 'RemoteText',
  props: {
    text: {
      type: Object,
      required: true
    },
    receiver: {
      type: Object,
      required: true
    }
  },

  setup({
    text,
    receiver
  }) {
    const attached = useAttached(receiver, text);
    return () => attached.value ? attached.value.text : null;
  }

});

export { RemoteText };
