import React from 'react';

import Head from 'components/Head';
import Footer from 'components/Footer';

import SwitchType from './SwitchType';

import { FOOTER_TYPE } from 'utils/constant';
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
        <Footer type={FOOTER_TYPE[2]} />
      </div>
    );
  }
}

export default News;
