import React from 'react';

import { FOOTER_TYPE } from 'utils/constant';

import Head from 'components/Head';
import Footer from 'components/Footer';

import Type from './Type';

import './index.scss';

class Home extends React.Component {
  constructor(props) {
    super(...props);
  }
  render() {
    return (
      <div className="home">
        <Head
          title="Cuckoo"
          back={false}
        />
        <div className="home-scroll">
          <Type />
          { this.props.children }
        </div>
        <Footer type={FOOTER_TYPE[0]} />
      </div>
    );
  }
}

export default Home;
