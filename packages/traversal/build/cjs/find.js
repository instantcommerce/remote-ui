'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var internal = require('./internal.js');

function find(element, type, props) {
  let match = null;
  internal.eachComponent(element, component => {
    if (component.type === type && (props == null || internal.objectContains(component.props, props))) {
      match = component;
      return false;
    }

    return true;
  });
  return match;
}
function findAll(element, type, props) {
  const components = [];
  internal.eachComponent(element, component => {
    if (component.type === type && (props == null || internal.objectContains(component.props, props))) components.push(component);
  });
  return components;
}

exports.find = find;
exports.findAll = findAll;
