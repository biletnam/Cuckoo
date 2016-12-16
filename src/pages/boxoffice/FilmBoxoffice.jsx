import React from 'react';

import ReactEcharts from 'echarts-for-react';

import Table from 'components/Table/index';
import TopList from './TopList';
import TableType from './TableType';
import BoxofficeType from './BoxofficeType';

import HomeSelector from 'app/selectors/boxoffice';

import connect from 'utils/connect';
import fecha from 'utils/fecha';
import getOption from 'utils/chart_pie';
import { PIE_COLORS } from 'utils/constant';

import './style/boxoffice.scss';

class FilmBoxoffice extends React.Component {
  constructor(props) {
    super(...props);
  }

  componentWillMount() {
    const today = fecha.format(new Date(), 'YYYYMMDD');
    this.props.actions.GetMovieRevenues(today);
  }

  render() {
    const { filmBoxoffice } = this.props;
    if (!filmBoxoffice) {
      return null;
    }
    const {
      aveTicketPrice,
      data,
      newMovieCnt,
      pieData,
      sortData,
      todayBoxOffice,
      sumSCntS,
      upd,
    } = filmBoxoffice;
    const option = getOption(pieData, PIE_COLORS, todayBoxOffice);
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
              <span>{`北京时间${upd}更新`}</span>
            </div>
            <TopList
              sortData={sortData}
              type='film'
            />
          </div>
          <div className="box-office-list">
            <TableType
              sumSCntS={sumSCntS}
              newMovieCnt={newMovieCnt}
              aveTicketPrice={aveTicketPrice}
              type='cinemaLine'
            />
            <Table
              data={data}
              type="film"
            />
          </div>
          <div className="box-office-footer">
            <p>{`注意：实时票房包含今日未开映场次已售出的票房，数据每30分钟更新一次，上次更新时间${upd}`}</p>
          </div>
        </div>
      </div>
    );
  }
}

// FilmBoxoffice.propTypes = {
//   boxoffice: React.PropTypes.any.isRequired,
// };

export default connect(FilmBoxoffice, HomeSelector);
