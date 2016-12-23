import React from 'react';

import Head from 'components/Head';
import SwitchType from './SwitchType';

import './index.scss';

class Schedules extends React.Component {
  constructor(props) {
    super(...props);
  }
  render() {
    return (
      <div className="schedules">
        <Head
          title="Cuckoo"
          back
        />
        <div className="schedules-frame">
          <SwitchType />
          { this.props.children }
        </div>
      </div>
    );
  }
}

export default Schedules;
