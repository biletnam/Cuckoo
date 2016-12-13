import React from 'react';

import Table from 'components/Table/index';
import Pie from 'components/Echarts/Pie';

class BoxofficeList extends React.Component {
  constructor(props) {
    super(...props);
  }

  render() {
    const {
      aveTicketPrice,
      data,
      newMovieCnt,
      pieData,
      sortData,
      todayBoxOffice,
      sumSCntS,
      upd,
    } = this.props.boxoffice;
    return (
      <div className="box-office-data">
        <div className="box-office-chart">
          <Pie
            pieData={pieData}
            todayBoxOffice={todayBoxOffice}
            upd={upd}
          />
          <ul className="data-text">
            {
              sortData.map((item, i) =>
                <li key={i}>
                  <i />
                  <p>{item.mTitle}</p>
                  <p>
                    <span className={`box-office-percent-${i} box-office-percent`}>{`${item.revRate}%`}</span>
                    <span>{item.rev}</span>
                  </p>
                </li>
              )
            }
            <li>
              <i />
              <p>其他影片</p>
            </li>
          </ul>
        </div>
        <div className="box-office-list">
          <ul className="box-office-overview">
            <li>
              <p>{sumSCntS}</p>
              <p>总场次</p>
            </li>
            <li>
              <p>{`${newMovieCnt}部`}</p>
              <p>新上映影片</p>
            </li>
            <li>
              <p>{aveTicketPrice}</p>
              <p>平均票价</p>
            </li>
          </ul>
          <Table data={data} />
        </div>
        <div className="box-office-footer">
          <p>{`注意：实时票房包含今日未开映场次已售出的票房，数据每30分钟更新一次，上次更新时间${upd}`}</p>
        </div>
      </div>
    );
  }
}

BoxofficeList.propTypes = {
  boxoffice: React.PropTypes.object.isRequired,
};

export default BoxofficeList;
