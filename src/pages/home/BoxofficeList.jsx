import React from 'react';

import ReactEcharts from 'echarts-for-react';

import getOption from 'utils/chart_pie';
import { BOXOFFICE_TABLE_TITLE, PIE_COLORS } from 'utils/constant';

class BoxofficeList extends React.Component {
  constructor(props) {
    super(...props);
  }

  render() {
    const { upd, data, sumSCnt, aveSeat, sumRev, newMovieCnt } = this.props;
    const aveTicketPrice = (sumRev / sumSCnt / aveSeat / 100).toFixed(2);
    let todayBoxOffice = (sumRev / 1000000).toFixed(0)
    if (todayBoxOffice.length < 5) {
      todayBoxOffice = `${todayBoxOffice}万`;
    } else {
      todayBoxOffice = `${(todayBoxOffice / 10000).toFixed(2)}亿`;
    }
    const sortData = data.slice(0, 3);
    const pieData = [];
    let aa = 0;
    sortData.forEach((item) => {
      pieData.push(item.revRate);
      aa += item.revRate;
    });
    pieData.push(1 - aa);
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
                    <span className={`box-office-percent-${i} box-office-percent`}>{`${(item.revRate * 100).toFixed(2)}%`}</span>
                    <span>{(item.rev / 1000000).toFixed(2)}万</span>
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
              <p>{`${(sumSCnt / 10000).toFixed(2)}万`}</p>
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
                    <span>{(item.rev / 1000000).toFixed(2)}万</span>
                    <span>{`${(item.revRate * 100).toFixed(2)}%`}</span>
                  </div>
                  <div>
                    <span>{`${(item.sCntRate * 100).toFixed(2)}%`}</span>
                    <span>{`${(item.sCnt / 10000).toFixed(2)}万场`}</span>
                  </div>
                  <div>
                    <span>{(item.seat / 100000).toFixed(2)}%</span>
                  </div>
                  <div>
                    <span>{(item.sumRev / 10000000000).toFixed(2)}亿</span>
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
  upd: React.PropTypes.string.isRequired,
  data: React.PropTypes.array.isRequired,
  sumSCnt: React.PropTypes.number.isRequired,
  aveSeat: React.PropTypes.number.isRequired,
  sumRev: React.PropTypes.number.isRequired,
  newMovieCnt: React.PropTypes.number.isRequired,
};

export default BoxofficeList;
