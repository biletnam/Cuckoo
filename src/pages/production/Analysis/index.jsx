import React from 'react';

import AnalysisDetails from './AnalysisDetails';
import AnalysisType from '../components/AnalysisType';

import ReactEcharts from 'echarts-for-react';

import getOption from 'utils/analysis_chart_line';

class Analysis extends React.Component {
  constructor(props) {
    super(...props);
  }
  
  render() {
    const legendData = ['动作', '喜剧'];
    const xData = ['1月','2月','3月','4月','5月','6月'];
    const firstData = [2.0, 4.9, 7.0, 23.2, 25.6, 76.7];
    const secondData = [2.6, 5.9, 9.0, 26.4, 28.7, 70.7];
    const option = getOption(legendData, xData, firstData, secondData);
    return (
      <div className="analysis">
        <AnalysisDetails />
        <div className="analysis-details">
          <AnalysisType />
          <ReactEcharts
            className="chart-analysis-line"
            style={{ height: '170px' }}
            option={option}
          />
      </div>
      </div>
    );
  }
}

export default Analysis;
