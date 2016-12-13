import React from 'react';

import fecha from 'utils/fecha';

class BoxofficeType extends React.Component {
  render() {
    const { toggleType } = this.props;
    const today = fecha.format(new Date(), 'YYYY[年]MM[月]DD[日]');
    return (
      <div className="box-office">
        <div className="box-office-title">
          <span>实时票房|</span>
          <span>全国</span>
          <i />
        </div>
        <div className="box-office-date">
          <div>
            <i />
            <span>前一日</span>
          </div>
          <div>
            <span>{today}</span>
            <i />
          </div>
          <div>
            <span>后一日</span>
            <i />
          </div>
        </div>
        <ul className="box-office-switchtype">
          <li
            className="switchtype-movie"
            onClick={toggleType.bind(this, 'film')}>影片排行</li>
          <li
            className="switchtype-cinema"
            onClick={toggleType.bind(this, 'cinema')}>影院排行</li>
          <li
            className="switchtype-cinema-line"
            onClick={toggleType.bind(this, 'cinemaLine')}>院线排行</li>
        </ul>
      </div>
    );
  }
}


BoxofficeType.propTypes = {
  toggleType: React.PropTypes.func.isRequired,
};

export default BoxofficeType;

