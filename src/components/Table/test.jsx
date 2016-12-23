import React from 'react';

import './table.scss';

class Test extends React.Component {

  render() {
    const { columns, dataSource } = this.props;
    console.log(dataSource)
    return (
      <ul className="table-list">
        <li className="table-list-title">
          {
            columns.map(item =>
              <span key={item.key}>{item.title}</span>
            )
          }
        </li>
        {
          dataSource.map((item, i) => 
            <li key={`${item.key}-${i}`}>
              {
                lineValue.map((line, j) =>
                  <div key={`${item.key}-${i}-${j}`}>
                    {
                      i === 0 &&
                      <i />
                    }
                    <span>{typeof item[line] !== 'object' ? item[line] : item[line][0]}</span>
                    <span>{typeof item[line] === 'object' && item[line][1]}</span>
                  </div>
                )
              }
            </li>
          )
        }
      </ul>
    );
  }
}

// Table.propTypes = {
  // data: React.PropTypes.array.isRequired,
  // type: React.PropTypes.string.isRequired,
// };

export default Test;

const lineValue = [
  'firstLine',
  'secondLine',
  'thirdLine',
  'fourthLine',
  'fifthLine',
]
