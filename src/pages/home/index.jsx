import React from 'react';

import connect from 'utils/connect';
import { FOOTER_TYPE, BOXOFFICE_TYPE } from 'utils/constant';
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
    this.state = {
      date: '',
    };
  }
  componentWillMount() {
    const today = fecha.format(new Date(), 'YYYYMMDD');
    this.setState = {
      date: today,
    };
    this.props.actions.GetMovieRevenues(today);
  }
  toggleType(type) {
    const { GetMovieRevenues, GetCinemaRevenues, GetCinemaLineRevenues } = this.props.actions;
    const { date } = this.state
    switch (BOXOFFICE_TYPE[type]) {
      case 0:
        GetMovieRevenues(date);
        break;
      case 1:
        GetCinemaRevenues(date);
        break;
      case 2:
        GetCinemaLineRevenues(date);
        break;
    }
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
          <BoxofficeType toggleType={this.toggleType.bind(this)} />
          <BoxofficeList boxoffice={boxoffice} />
        </div>
        <Footer type={FOOTER_TYPE[0]} />
      </div>
    );
  }
}

export default connect(Home, RoomSelector);
