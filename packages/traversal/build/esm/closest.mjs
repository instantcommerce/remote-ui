import { KIND_COMPONENT } from '@remote-ui/core';
import { objectContains } from './internal.mjs';

function closest(element, type, props) {
  // let match: RemoteComponent<Type, any> | null = null;
  let current = element;

  while (current) {
    if ('kind' in current && current.kind === KIND_COMPONENT && current.type === type && (props == null || objectContains(current.props, props))) {
      return current;
    }

    current = current.parent;
  }

  return null;
}

export { closest };
