import React from 'react';

import { Table } from 'cuckoo-ui';
import BoxofficeType from './components/BoxofficeType';

import CinemaSelector from 'app/selectors/cinemaBoxoffice';

import connect from 'utils/connect';
import fecha from 'utils/fecha';
import { TABLE_TITLE } from 'utils/constant';

import './style/index.scss';

class CinemaBoxoffice extends React.Component {
  constructor(props) {
    super(...props);
  }
  componentWillMount() {
    const yesterday = fecha.format(new Date(), 'YYYYMMDD') - 1;
    this.props.actions.GetCinemaRevenues(yesterday);
  }
  render() {
    const { cinemaBoxoffice } = this.props;
    if (!cinemaBoxoffice) {
      return null;
    }
    const date = fecha.format(new Date(), 'YYYY[年]MM[月]DD[日]');
    const columns = TABLE_TITLE.cinema
    return (
      <div>
        <BoxofficeType date={date} />
        <div className="box-office-data">
          <div className="box-office-list">
            <Table
              dataSource={cinemaBoxoffice}
              columns={columns}
            />
          </div>
        </div>
      </div>
    );
  }
}

CinemaBoxoffice.propTypes = {
  // CinemaBoxoffice: React.PropTypes.object.isRequired,
};

export default connect(CinemaBoxoffice, CinemaSelector);
