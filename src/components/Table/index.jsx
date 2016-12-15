import React from 'react';

import { BOXOFFICE_TABLE_TITLE } from 'utils/constant';

import './table.scss';

function Table(props) {
  const { type, data } = props;
  const { revSumShow, saledSeatSumShow, seatPerShowSumShow, avgPriceShow } = props;
  const sliceIndex = type === 'film' ? 5 : 12;
  return (
    <ul className="table-list">
      <li className="table-list-title">
        {
          BOXOFFICE_TABLE_TITLE[type].map((item, i) =>
            <span key={i}>{item}</span>
          )
        }
      </li>
      {
        !!revSumShow &&
        <li className="table-list-title">
          <span>合计</span>
          <span>{revSumShow}</span>
          <span>{saledSeatSumShow}</span>
          <span>{seatPerShowSumShow}</span>
          <span>{avgPriceShow}</span>
        </li>
      }
      {
        data.map((item, i) =>
          <li key={i}>
            <div>
              <i />
              {
                item.cinemaLineName ? <span>{item.cinemaLineName}</span> :
                <span>{item.mTitle.length <= sliceIndex ? item.mTitle : `${item.mTitle.slice(0, sliceIndex)}...`}</span>
              }
              {
                type === 'film' && <span>{`已上映${item.days}天`}</span>
              }
            </div>
            <div>
              <span>{type !== 'film' ? `${(item.rev / 1000000).toFixed(1)}万` : item.rev}</span>
              {
                item.revRate && <span>{`${item.revRate}%`}</span>
              }
            </div>
            {
              item.sCntRate ?
                <div>
                  <span>{item.sCntRate}</span>
                  <span>{item.sCnt}</span>
                </div> :
                <div>
                  <span>{item.saledSeatShow}</span>
                </div>
            }
            <div>
              <span>{item.seat || item.seatPerShowShow}</span>
            </div>
            <div>
              <span>{item.sumRev || item.avgPriceShow}</span>
            </div>
          </li>
        )
      }
    </ul>
  );
}

Table.propTypes = {
  data: React.PropTypes.array.isRequired,
  type: React.PropTypes.string.isRequired,
};

export default Table;
