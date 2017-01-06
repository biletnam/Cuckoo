import React from 'react';

import ReactEcharts from 'echarts-for-react';
import { Button } from 'cuckoo-ui';

import getOption from 'utils/analysis_chart_line';

class AnalysisDetails extends React.PureComponent {
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
      <div>
        <div className="analysis-type">
          <p>类型:动作，喜剧</p>
          <Button type='small'>筛选</Button>
        </div>
        <p className="analysis-trend">月趋势:2016-01 至 2016-12</p>
        <div className="analysis-title">
          <p>电影票房量级分布</p>
          <p>(各票房量级影片数)</p>
          <p>影片数量(单位:部)</p>
          <ReactEcharts
            className="chart-analysis-data"
            style={{ height: '170px' }}
            option={option}
          />
        </div>
      </div>
    );
  }
}

export default AnalysisDetails;
