import React from 'react';

import Head from 'components/Head';

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
        { this.props.children }
      </div>
    );
  }
}

export default Schedules;