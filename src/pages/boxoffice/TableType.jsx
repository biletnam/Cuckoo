import React from 'react';

function TableType(props) {
  const { sumSCntS, newMovieCnt, aveTicketPrice } = props;
  return (
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
  );
}

TableType.propTypes = {
  sumSCntS: React.PropTypes.string.isRequired,
  newMovieCnt: React.PropTypes.number.isRequired,
  aveTicketPrice: React.PropTypes.string.isRequired,
};

export default TableType;
