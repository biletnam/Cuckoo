import React from 'react';

import connect from 'utils/connect';
import { FooterType } from 'utils/constant';

import RoomSelector from 'app/selectors/home';

import Head from 'components/Head/index';
import Footer from 'components/Footer/index';

import Type from './Type'

import './index.scss'

class Home extends React.Component {
  constructor(props) {
    super(...props);
  }
  componentWillMount() {
    this.props.actions.GetMovieRevenues();
  }
  render() {
    return (
      <div className="home">
        <Head title="cuckoo" />
        <Type />
        <Footer type={FooterType[0]} />
      </div>
    );
  }
}

export default connect(Home, RoomSelector);
