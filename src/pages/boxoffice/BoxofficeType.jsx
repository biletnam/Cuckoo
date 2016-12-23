import React from 'react';

class BoxofficeType extends React.PureComponent {
  static contextTypes = {
    router: React.PropTypes.object,
  }
  constructor(props) {
    super(...props);
  }
  onTabChange(path) {
    this.context.router.replace({
      pathname: path,
    });
  }
  render() {
    const { date } = this.props;
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
            <span>{date}</span>
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
            onClick={this.onTabChange.bind(this, '/')}
          >影片排行</li>
          <li
            className="switchtype-cinema"
            onClick={this.onTabChange.bind(this, '/cinema')}
          >影院排行</li>
          <li
            className="switchtype-cinema-line"
            onClick={this.onTabChange.bind(this, '/cinemaline')}
          >院线排行</li>
        </ul>
      </div>
    );
  }
}


BoxofficeType.propTypes = {
  date: React.PropTypes.string.isRequired,
};

export default BoxofficeType;
