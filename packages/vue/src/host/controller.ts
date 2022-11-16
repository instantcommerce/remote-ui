import type {Component} from 'vue';

export interface ComponentMapping {
  [key: string]: Component<any>;
}

export interface Controller {
  get(type: string): Component<any>;
}

export interface ControllerOptions {
  strictComponents?: boolean;
}

export function createController(
  components: ComponentMapping,
  {strictComponents = true}: Partial<ControllerOptions> = {},
): Controller {
  const registry = new Map(Object.entries(components));

  return {
    get(type) {
      const value = registry.get(type as any);
      if (value == null) {
        if (!strictComponents) {
          return type as any;
        }

        throw new Error(`Unknown component: ${type}`);
      }
      return value;
    },
  };
}
