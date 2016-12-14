import React from 'react';

function TopList(props) {
  const { sortData } = props;
  return (
    <ul className="data-text">
      {
        sortData.map((item, i) =>
          <li key={i}>
            <i />
            <p>{item.mTitle}</p>
            <p>
              <span className={`box-office-percent-${i} box-office-percent`}>{`${item.revRate}%`}</span>
              <span>{item.rev}</span>
            </p>
          </li>
        )
      }
      <li>
        <i />
        <p>其他影片</p>
      </li>
    </ul>
  );
}

TopList.propTypes = {
  sortData: React.PropTypes.array.isRequired,
};

export default TopList;
