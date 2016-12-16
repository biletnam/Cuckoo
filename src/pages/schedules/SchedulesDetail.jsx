import React from 'react';

import SchedulesSelector from 'app/selectors/schedules';

import connect from 'utils/connect';
import fecha from 'utils/fecha';

// import './style/film.scss';

class SchedulesDetail extends React.Component {
  constructor(props) {
    super(...props);
  }

  componentWillMount() {
    const today = fecha.format(new Date(), 'YYYYMMDD');
    this.props.actions.GetMovieSchedules(today);
  }

  render() {
    const { schedules } = this.props;
    if (!schedules.upd) {
      return null;
    }
    const {
      sumSCnt,
      upd,
      name,
      dt,
      data,
    } = schedules;
    return (
      <div className="schedules-detail">
        <p>1</p>
      </div>
    );
  }
}

SchedulesDetail.propTypes = {
  schedules: React.PropTypes.object.isRequired,
};

export default connect(SchedulesDetail, SchedulesSelector);
