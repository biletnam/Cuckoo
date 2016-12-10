import React from 'react';

import connect from 'utils/connect';
import { FooterType } from 'utils/constant';

import RoomSelector from 'app/selectors/home';

import Head from 'components/Head/index';
import Footer from 'components/Footer/index';

import Type from './Type';
import Boxoffice from './Boxoffice';

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
    const { upd, data } = boxoffice;
    if (!upd) {
      return null
    }
    return (
      <div className="home">
        <Head title="cuckoo" />
        <Type />
        <Boxoffice
          upd={upd}
          data={data}
        />
        <Footer type={FooterType[0]} />
      </div>
    );
  }
}

export default connect(Home, RoomSelector);
