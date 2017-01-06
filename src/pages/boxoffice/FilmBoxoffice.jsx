import React from 'react';

import ReactEcharts from 'echarts-for-react';

import { Table, Loading } from 'cuckoo-ui';
import TopList from './components/TopList';
import TableType from './components/TableType';
import BoxofficeType from './components/BoxofficeType';

import FilmSelector from 'app/selectors/boxoffice/filmBoxoffice';

import connect from 'utils/connect';
import fecha from 'utils/fecha';
import getOption from 'utils/boxoffice_chart_pie';
import { BOXOFFICE_PIE_COLORS, TABLE_TITLE } from 'utils/constant';

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
      return <Loading />;
    }
    const {
      updateTime,
      sumShowCntShow,
      movieCountShow,
      avgPriceRmbShow,
      dataSource,
      sumRevRmbShow,
      topData,
      pieData,
    } = filmBoxoffice;
    const option = getOption(pieData, BOXOFFICE_PIE_COLORS, sumRevRmbShow);
    const date = fecha.format(new Date(), 'YYYY[年]MM[月]DD[日]');
    const columns = TABLE_TITLE.film
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
              <span>{`北京时间${updateTime}更新`}</span>
            </div>
            <TopList
              sortData={topData}
              type='film'
            />
          </div>
          <div className="box-office-list">
            <TableType
              showtimeSumShow={sumShowCntShow}
              movieCountShow={movieCountShow}
              avgPriceRmbShow={avgPriceRmbShow}
            />
            <Table
              dataSource={dataSource}
              columns={columns}
            />
          </div>
          <div className="box-office-footer">
            <p>{`注意：实时票房包含今日未开映场次已售出的票房，数据每30分钟更新一次，上次更新时间${updateTime}`}</p>
          </div>
        </div>
      </div>
    );
  }
}

// FilmBoxoffice.propTypes = {
//   boxoffice: React.PropTypes.any.isRequired,
// };

export default connect(FilmBoxoffice, FilmSelector);
