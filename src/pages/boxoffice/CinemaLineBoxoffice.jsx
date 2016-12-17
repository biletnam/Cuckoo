import React from 'react';

import ReactEcharts from 'echarts-for-react';

import Table from 'components/Table/index';
import TopList from './TopList';
import TableType from './TableType';
import BoxofficeType from './BoxofficeType';

import HomeSelector from 'app/selectors/boxoffice';

import connect from 'utils/connect';
import fecha from 'utils/fecha';

import getOption from 'utils/boxoffice_chart_pie';
import { BOXOFFICE_PIE_COLORS } from 'utils/constant';

import './style/boxoffice.scss';

class CinemaLineBoxoffice extends React.Component {
  constructor(props) {
    super(...props);
  }

  componentWillMount() {
    const yesterday = fecha.format(new Date(), 'YYYYMMDD') - 1;
    this.props.actions.GetCinemaLineRevenues(yesterday);
  }

  render() {
    const { cinemaLineBoxoffice } = this.props;
    if (!cinemaLineBoxoffice.movieCountShow) {
      return null;
    }
    const {
      movieCountShow,
      avgPriceShow,
      showtimeSumShow,
      data,
      revSumShow,
      saledSeatSumShow,
      seatPerShowSumShow,
    } = cinemaLineBoxoffice;
    const sortData = data.slice(0, 3);
    const pieData = [];
    let pie = 0;
    sortData.forEach((item) => {
      const revRate = item.boxOfficeRateShow.split('%')[0];
      pieData.push(revRate);
      pie += parseFloat(revRate);
    });
    pieData.push(100 - pie);
    const option = getOption(pieData, BOXOFFICE_PIE_COLORS, revSumShow);
    const date = fecha.format(new Date(), 'YYYY[年]MM[月]DD[日]');
    return (
      <div>
        <BoxofficeType date={date} />
        <div className="box-office-data">
          <div className="box-office-chart">
            <div className="chart-data-warapper">
              <ReactEcharts
                className="chart-boxofice-data"
                style={{ height: '170px' }}
                option={option}
              />
            </div>
            <TopList
              sortData={sortData}
              type = 'cinemaLine'
            />
          </div>
          <div className="box-office-list">
            <TableType
              sumSCntS={showtimeSumShow}
              newMovieCnt={movieCountShow}
              aveTicketPrice={avgPriceShow}
              type='cinemaLine'
            />
            <Table
              data={data}
              revSumShow={revSumShow}
              saledSeatSumShow={saledSeatSumShow}
              seatPerShowSumShow={seatPerShowSumShow}
              avgPriceShow={avgPriceShow}
              type="cinemaLine"
            />
          </div>
        </div>
      </div>
    );
  }
}

// CinemaLineBoxoffice.propTypes = {
//   boxoffice: React.PropTypes.any.isRequired,
// };

export default connect(CinemaLineBoxoffice, HomeSelector);
