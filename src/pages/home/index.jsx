import React from 'react';

import connect from 'utils/connect';
import { FOOTER_TYPE } from 'utils/constant';

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
    this.props.actions.GetMovieRevenues();
  }
  render() {
    const { boxoffice } = this.props;
    const { upd, data, sumRev, sumSCnt, aveSeat, newMovieCnt } = boxoffice;
    if (!upd) {
      return null;
    }
    return (
      <div className="home">
        <Head title="Cuckoo" />
        <div className="home-scroll">
          <Type />
          <BoxofficeType />
          <BoxofficeList
            upd={upd}
            data={data}
            sumSCnt={sumSCnt}
            aveSeat={aveSeat}
            sumRev={sumRev}
            newMovieCnt={newMovieCnt}
          />
        </div>
        <Footer type={FOOTER_TYPE[0]} />
      </div>
    );
  }
}

export default connect(Home, RoomSelector);
