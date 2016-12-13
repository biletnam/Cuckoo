import React from 'react';

import { BOXOFFICE_TABLE_TITLE } from 'utils/constant';

import './table.scss';

function Table(props) {
  const { data } = props;
  return (
    <ul className="table-list">
      <li className="table-list-title">
        {
          BOXOFFICE_TABLE_TITLE.map((item, i) =>
            <span key={i}>{item}</span>
          )
        }
      </li>
      {
        data.map((item, i) =>
          <li key={i}>
            <div>
              <i />
              <span>{item.mTitle.length <= 5 ? item.mTitle : `${item.mTitle.slice(0, 5)}...`}</span>
              <span>{`已上映${item.days}天`}</span>
            </div>
            <div>
              <span>{item.rev}</span>
              <span>{`${item.revRate}%`}</span>
            </div>
            <div>
              <span>{item.sCntRate}</span>
              <span>{item.sCnt}</span>
            </div>
            <div>
              <span>{item.seat}</span>
            </div>
            <div>
              <span>{item.sumRev}</span>
            </div>
          </li>
        )
      }
    </ul>
  );
}

Table.propTypes = {
  data: React.PropTypes.array.isRequired,
};

export default Table;
