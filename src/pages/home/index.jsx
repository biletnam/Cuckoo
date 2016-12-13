import React from 'react';

import connect from 'utils/connect';
import { FOOTER_TYPE } from 'utils/constant';
import fecha from 'utils/fecha';

import RoomSelector from 'app/selectors/home';

import Head from 'components/Head';
import Footer from 'components/Footer';

import Type from './Type';
import BoxofficeType from './BoxofficeType';
import BoxofficeList from './BoxofficeList';

import './index.scss';

class Home extends React.Component {
  constructor(props) {
    super(...props);
  }
  componentWillMount() {
    const today = fecha.format(new Date(), 'YYYYMMDD');
    this.props.actions.GetMovieRevenues(today);
  }
  render() {
    const { boxoffice } = this.props;
    if (!boxoffice) {
      return null;
    }
    return (
      <div className="home">
        <Head title="Cuckoo" />
        <div className="home-scroll">
          <Type />
          <BoxofficeType />
          <BoxofficeList
            boxoffice={boxoffice}
          />
        </div>
        <Footer type={FOOTER_TYPE[0]} />
      </div>
    );
  }
}

export default connect(Home, RoomSelector);
