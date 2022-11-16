import { KIND_ROOT, KIND_COMPONENT } from '@remote-ui/core';

function eachComponent(element, callback) {
  each(element);

  function each(element) {
    if (element.kind !== KIND_ROOT) {
      const result = callback(element);
      if (result === false) return false;
    }

    for (const child of element.children) {
      if (child.kind !== KIND_COMPONENT) continue;
      const result = each(child);
      if (!result) return false;
    }

    return true;
  }
}
function objectContains(actual, expected) {
  return Object.keys(expected).every(key => actual[key] === expected[key]);
}

export { eachComponent, objectContains };
