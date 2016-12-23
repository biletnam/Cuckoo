import React from 'react';

import ReactEcharts from 'echarts-for-react';
import { Table } from 'cuckoo-ui';

import TopList from './TopList';
import TableType from './TableType';
import BoxofficeType from './BoxofficeType';

import CinemaLineSelector from 'app/selectors/cinemaLineBoxoffice';

import connect from 'utils/connect';
import fecha from 'utils/fecha';

import getOption from 'utils/boxoffice_chart_pie';
import { BOXOFFICE_PIE_COLORS, TABLE_TITLE } from 'utils/constant';

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
    if (!cinemaLineBoxoffice) {
      return null;
    }
    const {
      movieCountShow,
      avgPriceShow,
      showtimeSumShow,
      dataSource,
      revSumShow,
      sortData,
      pieData
    } = cinemaLineBoxoffice;
    const option = getOption(pieData, BOXOFFICE_PIE_COLORS, revSumShow);
    const date = fecha.format(new Date(), 'YYYY[年]MM[月]DD[日]');
    const columns = TABLE_TITLE.cinemaLine
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
              dataSource={dataSource}
              columns={columns}
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

export default connect(CinemaLineBoxoffice, CinemaLineSelector);
