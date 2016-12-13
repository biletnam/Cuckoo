import React from 'react';

import ReactEcharts from 'echarts-for-react';

import getOption from 'utils/chart_pie';
import { BOXOFFICE_TABLE_TITLE, PIE_COLORS } from 'utils/constant';

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
    const option = getOption(pieData, PIE_COLORS, todayBoxOffice);
    return (
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
          <ul className="table-list">
            <li className="table-list-title">
              {
                BOXOFFICE_TABLE_TITLE.map((item, i) =>
                  <span key={i}>{item}</span>
                )
              }
            </li>
            {
              data.map((item, i) =>
                <li key={i}>
                  <div>
                    <i />
                    <span>{item.mTitle.length <= 5 ? item.mTitle : `${item.mTitle.slice(0, 5)}...`}</span>
                    <span>{`已上映${item.days}天`}</span>
                  </div>
                  <div>
                    <span>{item.rev}</span>
                    <span>{`${item.revRate}%`}</span>
                  </div>
                  <div>
                    <span>{item.sCntRate}</span>
                    <span>{item.sCnt}</span>
                  </div>
                  <div>
                    <span>{item.seat}</span>
                  </div>
                  <div>
                    <span>{item.sumRev}</span>
                  </div>
                </li>
              )
            }
          </ul>
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
