import React from 'react';

const BOXOFFICE_TEXT = {
  film: '影片',
  cinemaLine: '院线',
};

class TopList extends React.PureComponent {
  render() {
    console.log(this.props)
    const { sortData, type } = this.props;
    const other = BOXOFFICE_TEXT[type];
    return (
      <ul className="data-text">
        {
          sortData.map((item, i) =>
            <li key={i}>
              <i />
              <p>{type === 'film' ? item.movieTitle : item.cinemaLineName}</p>
              <p>
                <span className={`box-office-percent-${i} box-office-percent`}>{type === 'film' ? `${item.revRateShow}` : item.boxOfficeRateShow}</span>
                <span>{type === 'film' ? item.revRmbShow : item.revShow }</span>
              </p>
            </li>
          )
        }
        <li>
          <i />
          <p>{`其他${other}`}</p>
        </li>
      </ul>
    );
  }
}

TopList.propTypes = {
  sortData: React.PropTypes.array.isRequired,
  type: React.PropTypes.string.isRequired,
};

export default TopList;
