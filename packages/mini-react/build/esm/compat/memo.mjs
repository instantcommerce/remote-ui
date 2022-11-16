import { createElement } from '../create-element.mjs';
import { shallowDiffers } from './utilities.mjs';
import { Component } from '../diff/diff.mjs';

/**
 * Memoize a component, so that it only updates when the props actually have
 * changed. This was previously known as `React.pure`.
 */

function memo(TargetComponent, comparer) {
  var _TargetComponent$disp;

  class Memoed extends Component {
    constructor(...args) {
      super(...args);
      this.isReactComponent = true;
    }

    shouldComponentUpdate(nextProps) {
      const {
        props
      } = this;
      const {
        ref
      } = props;
      const updateRef = ref === nextProps.ref;

      if (!updateRef && ref) {
        if (ref.call) {
          ref(null);
        } else {
          ref.current = null;
        }
      }

      if (!comparer) {
        return shallowDiffers(props, nextProps);
      }

      return !comparer(props, nextProps) || !updateRef;
    }

    render(props) {
      return createElement(TargetComponent, props);
    }

  }

  Memoed.displayName = `Memo(${(_TargetComponent$disp = TargetComponent.displayName) !== null && _TargetComponent$disp !== void 0 ? _TargetComponent$disp : TargetComponent.name})`;
  Memoed._forwarded = true;
  return Memoed;
}

export { memo };
