import { Component } from '../Component';
/**
 * Component class with a predefined `shouldComponentUpdate` implementation
 */
export declare class PureComponent<P = {}, S = {}> extends Component<P, S> {
    isPureReactComponent: boolean;
    shouldComponentUpdate(props: P, state: S): boolean;
}
//# sourceMappingURL=PureComponent.d.ts.map