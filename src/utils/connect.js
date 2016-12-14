import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from 'app/actions/index';

function mapStateToProps(props, state) {
  if (!props) {
    return state;
  }
  if (typeof props === 'function') return props;
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

export default function (component, props) {
  return connect(mapStateToProps.bind(null, props), mapDispatchToProps)(component);
}
