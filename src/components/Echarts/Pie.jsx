import React from 'react';

import ReactEcharts from 'echarts-for-react';

import getOption from 'utils/chart_pie';
import { PIE_COLORS } from 'utils/constant';

import './pie.scss';

function Pie(props) {
  const { pieData, todayBoxOffice, upd } = props;
  const option = getOption(pieData, PIE_COLORS, todayBoxOffice);
  return (
    <div className="chart-data-warapper">
      <ReactEcharts
        className="chart-boxofice-data"
        style={{ height: '170px' }}
        option={option}
      />
      <span>{`北京时间${upd}更新`}</span>
    </div>
  );
}

Pie.propTypes = {
  pieData: React.PropTypes.array.isRequired,
  todayBoxOffice: React.PropTypes.string.isRequired,
  upd: React.PropTypes.string.isRequired,
};

export default Pie;
