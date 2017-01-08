import React from 'react';

import AnalysisDetails from './AnalysisDetails';
import AnalysisType from '../components/AnalysisType';

import AnalysisSelector from 'app/selectors/production/analysis';

import ReactEcharts from 'echarts-for-react';

import getOption from 'utils/analysis_chart_line';
import connect from 'utils/connect';

class Analysis extends React.Component {
  constructor(props) {
    super(...props);
  }

  componentWillMount() {
    this.props.actions.GetAnalysisDetails();
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
        <AnalysisType />
        <div className="analysis-details">
          <p>该类型的累计票房</p>
          <p>累计票房(单位:亿)</p>
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

export default connect(Analysis, AnalysisSelector);
