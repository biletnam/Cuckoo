import React from 'react';

import Table from 'components/Table/index';
import BoxofficeType from './BoxofficeType';

import HomeSelector from 'app/selectors/boxoffice';

import connect from 'utils/connect';
import fecha from 'utils/fecha';

import './style/index.scss';

class CinemaBoxoffice extends React.Component {
  constructor(props) {
    super(...props);
    this.state = {
      date: '',
    };
  }
  componentWillMount() {
    const yesterday = fecha.format(new Date(), 'YYYYMMDD') - 1;
    this.setState = {
      date: yesterday,
    };
    this.props.actions.GetCinemaRevenues(yesterday);
  }
  render() {
    const { cinemaBoxoffice } = this.props;
    if (!cinemaBoxoffice.revSumShow) {
      return null;
    }
    const {
      revSumShow,
      saledSeatSumShow,
      seatPerShowSumShow,
      avgPriceShow,
      data,
    } = cinemaBoxoffice;
    return (
      <div>
        <BoxofficeType />
        <div className="box-office-data">
          <div className="box-office-list">
            <Table
              data={data}
              revSumShow={revSumShow}
              saledSeatSumShow={saledSeatSumShow}
              seatPerShowSumShow={seatPerShowSumShow}
              avgPriceShow={avgPriceShow}
              type="cinema"
            />
          </div>
        </div>
      </div>
    );
  }
}

CinemaBoxoffice.propTypes = {
  // CinemaBoxoffice: React.PropTypes.object.isRequired,
};

export default connect(CinemaBoxoffice, HomeSelector);
