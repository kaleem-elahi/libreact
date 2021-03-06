import {Component} from 'react';
import {h} from '../util';

const wrapInStatefulComponent = (Comp) => {
  const Decorated = class Decorated extends Component<any, any> {
    render () {
      return h(Comp, this.props);
    }
  };

  return Decorated;
};

export default wrapInStatefulComponent;
