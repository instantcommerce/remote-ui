const Children = {
  map: mapOverChildren,
  forEach: mapOverChildren,

  count(children) {
    return children ? toChildArray(children).length : 0;
  },

  only(children) {
    const normalized = toChildArray(children);

    if (normalized.length !== 1) {
      throw new Error('Children.only');
    }

    return normalized[0];
  },

  toArray: toChildArray
};

function mapOverChildren(children, func) {
  if (children == null) return null;
  return toChildArray(toChildArray(children).map(func));
}
/**
 * Flatten and loop through the children of a virtual node
 */


function toChildArray(children, out = []) {
  if (children == null || typeof children === 'boolean') {
    return out;
  }

  if (Array.isArray(children)) {
    for (const grandChild of children) {
      toChildArray(grandChild, out);
    }
  } else {
    out.push(children);
  }

  return out;
}

export { Children };
