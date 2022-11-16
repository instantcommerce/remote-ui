import { shallowDiffers } from './utilities.mjs';
import { Component } from '../diff/diff.mjs';

/* eslint-disable @shopify/react-initialize-state */

/**
 * Component class with a predefined `shouldComponentUpdate` implementation
 */

class PureComponent extends Component {
  constructor(...args) {
    super(...args);
    this.isPureReactComponent = true;
  }

  shouldComponentUpdate(props, state) {
    return shallowDiffers(this.props, props) || shallowDiffers(this.state, state);
  }

}
/* eslint-enable @shopify/react-initialize-state */

export { PureComponent };
