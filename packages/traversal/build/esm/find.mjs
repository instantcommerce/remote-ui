import { eachComponent, objectContains } from './internal.mjs';

function find(element, type, props) {
  let match = null;
  eachComponent(element, component => {
    if (component.type === type && (props == null || objectContains(component.props, props))) {
      match = component;
      return false;
    }

    return true;
  });
  return match;
}
function findAll(element, type, props) {
  const components = [];
  eachComponent(element, component => {
    if (component.type === type && (props == null || objectContains(component.props, props))) components.push(component);
  });
  return components;
}

export { find, findAll };
