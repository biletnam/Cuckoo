import React from 'react';

// import BoxofficeList from './BoxofficeList';

class Boxoffice extends React.Component {
  constructor(props) {
    super(...props);
  }
  render() {
    const { upd, data } = this.props;
    const sortData = data.slice(0, 3);
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
        <div className="box-office-data">
          <div>
            <span>{`北京时间${upd}更新`}</span>
          </div>
          <ul className="data-text">
            {
              sortData.map((item, i) =>
                <li key={i}>
                  <i />
                  <p>{item.mTitle}</p>
                  <p>
                    <span className={`box-office-percent-${i} box-office-percent`}>{`${(item.sCntRate * 100).toFixed(2)}%`}</span>
                    <span>{item.sCnt / 10}万</span>
                  </p>
                </li>
              )
            }
            <li>
              <i />
              <p>其他影片</p>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}


Boxoffice.propTypes = {
  upd: React.PropTypes.string.isRequired,
  data: React.PropTypes.array.isRequired,
};

export default Boxoffice;

