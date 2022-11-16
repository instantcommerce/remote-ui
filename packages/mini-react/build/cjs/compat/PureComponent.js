'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var utilities = require('./utilities.js');
var diff = require('../diff/diff.js');

/* eslint-disable @shopify/react-initialize-state */

/**
 * Component class with a predefined `shouldComponentUpdate` implementation
 */

class PureComponent extends diff.Component {
  constructor(...args) {
    super(...args);
    this.isPureReactComponent = true;
  }

  shouldComponentUpdate(props, state) {
    return utilities.shallowDiffers(this.props, props) || utilities.shallowDiffers(this.state, state);
  }

}
/* eslint-enable @shopify/react-initialize-state */

exports.PureComponent = PureComponent;
