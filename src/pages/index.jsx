import React from 'react';
import ReactDOM from 'react-dom';

import Home from './home/index';

class App extends React.Component {
  render() {
    return <Home />;
  }
}

const app = document.createElement('div');
document.body.appendChild(app);
ReactDOM.render(<App />, app);
