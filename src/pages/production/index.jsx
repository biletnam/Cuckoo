import React from 'react';

import { FOOTER_TYPE } from 'utils/constant';

import Head from 'components/Head';
import Footer from 'components/Footer';

import Type from './components/Type';

import './index.scss';

class Production extends React.Component {
  constructor(props) {
    super(...props);
  }
  render() {
    return (
      <div className="production">
        <Head
          title="Cuckoo"
          back={false}
        />
        <div>
          <Type />
          { this.props.children }
        </div>
        <Footer type={FOOTER_TYPE[1]} />
      </div>
    );
  }
}

export default Production;
