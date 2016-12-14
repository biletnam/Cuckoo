import React from 'react';

import Table from 'components/Table/index';
import Pie from 'components/Echarts/Pie';
import TopList from './TopList';
import TableType from './TableType';
import BoxofficeType from './BoxofficeType';

import HomeSelector from 'app/selectors/boxoffice';

import connect from 'utils/connect';
import fecha from 'utils/fecha';

import './style/film.scss';

class FilmBoxoffice extends React.Component {
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
    return (
      <div>
        <BoxofficeType />
        <div className="box-office-data">
          <div className="box-office-chart">
            <Pie
              pieData={pieData}
              todayBoxOffice={todayBoxOffice}
              upd={upd}
            />
            <TopList sortData={sortData} />
          </div>
          <div className="box-office-list">
            <TableType
              sumSCntS={sumSCntS}
              newMovieCnt={newMovieCnt}
              aveTicketPrice={aveTicketPrice}
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
