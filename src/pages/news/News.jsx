import React from 'react';

import Head from 'components/Head';

import SwitchType from './SwitchType';

// import './index.scss';

class News extends React.Component {
  constructor(props) {
    super(...props);
  }
  render() {
    return (
      <div className="news">
        <Head
          title="Cuckoo"
          back={false}
        />
        <div className="news-frame">
          <SwitchType />
          { this.props.children }
        </div>
      </div>
    );
  }
}

export default News;
