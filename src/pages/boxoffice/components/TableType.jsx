import React from 'react';

class TableType extends React.PureComponent {
  render() {
    const { showtimeSumShow, movieCountShow, avgPriceRmbShow } = this.props;
    return (
      <ul className="box-office-overview">
        <li>
          <p>{showtimeSumShow}</p>
          <p>总场次</p>
        </li>
        <li>
          <p>{movieCountShow}</p>
          <p>上映影片</p>
        </li>
        <li>
          <p>{avgPriceRmbShow}</p>
          <p>平均票价</p>
        </li>
      </ul>
    );
  }
}

TableType.propTypes = {
  showtimeSumShow: React.PropTypes.string.isRequired,
  movieCountShow: React.PropTypes.string.isRequired,
  avgPriceRmbShow: React.PropTypes.string.isRequired,
};

export default TableType;
