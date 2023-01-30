import baseHtm from 'htm';
import { isRemoteComponent } from '@remote-ui/core';

function createHtm(root) {
  return baseHtm.bind((type, props, ...children) => {
    const normalizedChildren = [];

    for (const child of children) {
      if (child == null || child === false) continue;

      if (typeof child === 'object') {
        if (!isRemoteComponent(child)) {
          throw new Error(`Unexpected child: ${JSON.stringify(child)}`);
        }

        normalizedChildren.push(child);
      } else {
        normalizedChildren.push(String(child));
      }
    }

    return root.createComponent(type, props, normalizedChildren);
  });
}
function append(tree, parent) {
  if (Array.isArray(tree)) {
    parent.append(...tree);
  } else {
    parent.append(tree);
  }
}

export { append, createHtm };
