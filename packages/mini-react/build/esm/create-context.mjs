import { Component, enqueueRender } from './diff/diff.mjs';

let i = 0;
function createContext(defaultValue) {
  const contextId = `__cC${i++}`;

  class Provider extends Component {
    constructor(...args) {
      super(...args);
      this.subs = [];
      this.contextValue = {
        [contextId]: this
      };
    }

    getChildContext() {
      return this.contextValue;
    }

    shouldComponentUpdate(newProps) {
      if (this.props.value !== newProps.value) {
        this.subs.forEach(enqueueRender);
      }

      return true;
    }

    sub(component) {
      const {
        subs
      } = this;
      subs.push(component);
      const oldComponentWillUnmount = component.componentWillUnmount;

      component.componentWillUnmount = () => {
        subs.splice(subs.indexOf(component), 1);
        oldComponentWillUnmount === null || oldComponentWillUnmount === void 0 ? void 0 : oldComponentWillUnmount.call(component);
      };
    }

    render({
      children
    }) {
      return children;
    }

  }

  function Consumer(props, contextValue) {
    // return props.children(
    // 	context[contextId] ? context[contextId].props.value : defaultValue
    // );
    return props.children(contextValue);
  }

  const context = {
    _id: contextId,
    _defaultValue: defaultValue,
    Provider,
    Consumer
  }; // This subscribes every consumer to the context

  Consumer.contextType = context;
  return context;
}

export { createContext };
