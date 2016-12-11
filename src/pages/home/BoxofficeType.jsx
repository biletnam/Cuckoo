import React from 'react';

class BoxofficeType extends React.Component {
  render() {
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
            <span>2016年12月05日</span>
            <i />
          </div>
          <div>
            <span>后一日</span>
            <i />
          </div>
        </div>
        <ul className="box-office-switchtype">
          <li className="switchtype-movie">影片排行</li>
          <li className="switchtype-cinema">影院排行</li>
          <li className="switchtype-cinema-line">院线排行</li>
        </ul>
      </div>
    );
  }
}


BoxofficeType.propTypes = {
};

export default BoxofficeType;

