'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function createController(components, {
  strictComponents = true
} = {}) {
  const registry = new Map(Object.entries(components));
  return {
    get(type) {
      const value = registry.get(type);

      if (value == null) {
        if (!strictComponents) {
          return type;
        }

        throw new Error(`Unknown component: ${type}`);
      }

      return value;
    }

  };
}

exports.createController = createController;
