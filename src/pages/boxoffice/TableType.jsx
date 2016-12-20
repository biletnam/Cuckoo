import React from 'react';

class TableType extends React.PureComponent {
  render() {
    const { sumSCntS, newMovieCnt, aveTicketPrice, type } = this.props;
    const film = type === 'film' ? '新上映影片' : '上映影片';
    return (
      <ul className="box-office-overview">
        <li>
          <p>{sumSCntS}</p>
          <p>总场次</p>
        </li>
        <li>
          <p>{`${newMovieCnt}部`}</p>
          <p>{film}</p>
        </li>
        <li>
          <p>{aveTicketPrice}</p>
          <p>平均票价</p>
        </li>
      </ul>
    );
  }
}

TableType.propTypes = {
  sumSCntS: React.PropTypes.string.isRequired,
  newMovieCnt: React.PropTypes.any.isRequired,
  aveTicketPrice: React.PropTypes.string.isRequired,
  type: React.PropTypes.string.isRequired,
};

export default TableType;
