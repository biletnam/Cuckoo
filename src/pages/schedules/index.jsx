import React from 'react';

import Head from 'components/Head';
import SwitchType from './SwitchType';

import { Table, Loading } from 'cuckoo-ui';
import ReactEcharts from 'echarts-for-react';

import SchedulesSelector from 'app/selectors/schedules';

import connect from 'utils/connect';
import fecha from 'utils/fecha';
import getOption from 'utils/schedules_chart_pie';
import { SCHEDULES_PIE_COLORS, TABLE_TITLE } from 'utils/constant';

import './index.scss';

class Schedules extends React.Component {
  constructor(props) {
    super(...props);
  }

  componentWillMount() {
    this.initSchedules()
  }

  componentWillReceiveProps(props) {
    if (typeof this.props.type === 'number' && typeof props.type === 'number') {
      this.initSchedules(props.type)
    }
  }

  async initSchedules(type = 0) {
    const { GetMovieSchedules, GetDate } = this.props.actions
    await GetDate();
    const { today } = this.props.date;
    const dateSort = fecha.addDate(today, type);
    GetMovieSchedules(dateSort);
  }

  render() {
    const { schedules, actions } = this.props;
    if (!schedules) {
      return <Loading />;
    }
    const { ChangeType } = actions
    const {
      date,
      sumSCntPercent,
      topData,
      pieData,
      dataSource,
      upd,
      name,
    } = schedules;
    const option = getOption(pieData, SCHEDULES_PIE_COLORS);
    const columns = TABLE_TITLE.schedules
    return (
      <div className="schedules">
        <Head
          title="Cuckoo"
          back
        />
        <div className="schedules-frame">
          <SwitchType ChangeType={ChangeType} />
          <div className="schedules-detail">
            <div className="schedules-overview">
              <p>
                <span>{name}</span>
                <span>{`|总排片：${(sumSCntPercent)}`}</span>
              </p>
              <p className="schedules-date">{date}</p>
            </div>
            <div className="schedules-chart">
              <ReactEcharts
                className="schedules-chart-pie"
                style={{ height: '170px' }}
                option={option}
              />
              <ul className="schedules-chart-list">
                {
                  topData.map((item, index) =>
                    <li key={index}>
                      <i />
                      <span>{item.Piename}</span>
                      <span>{`${(item.schedulesPercent).toFixed(2)}%`}</span>
                    </li>
                  )
                }
              </ul>
            </div>
            <Table
              dataSource={dataSource}
              columns={columns}
            />
            <div className="schedules-footer">
              <p>{`注意：实时排片包含今日未开映场次已售出的票房，数据每30分钟更新一次，上次更新时间${upd}`}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(Schedules, SchedulesSelector);
