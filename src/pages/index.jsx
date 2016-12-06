import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import Home from './home/index';
import NotFound from './notfound/index';

render((
  <Router history={hashHistory}>
    <Route path="/" component={Home} />
    <Route path="*" component={NotFound} />
  </Router>
), document.getElementById('app'));
