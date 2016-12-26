import 'babel-polyfill'

import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import { routerMiddleware, syncHistoryWithStore } from 'react-router-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import rootReducer from 'app/reducers/index';

import Home from './home/index';
import FilmBoxoffice from './boxoffice/FilmBoxoffice';
import CinemaBoxoffice from './boxoffice/CinemaBoxoffice';
import CinemaLineBoxoffice from './boxoffice/CinemaLineBoxoffice';
import Schedules from './schedules/Schedules';
import SchedulesDetail from './schedules/SchedulesDetail';
import News from './news/News';
// import DateFilter from './schedules/DateFilter';
import NotFound from './notfound/index';

const logger = createLogger({
  level: 'info',
  logger: console,
  collapsed: true,
});

const middleware = routerMiddleware(browserHistory);

// Add the reducer to your store on the `routing` key
const createStoreWithMiddleware = applyMiddleware(middleware, thunk, logger)(createStore);
const store = createStoreWithMiddleware(rootReducer);

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

const Root = () => (
  <Router history={history}>
    <Route path="/" component={Home}>
      <IndexRoute component={FilmBoxoffice} />
      <Route path="cinema" component={CinemaBoxoffice} />
      <Route path="cinemaline" component={CinemaLineBoxoffice} />
    </Route>
    <Route path="/schedules" component={Schedules}>
      <IndexRoute component={SchedulesDetail} />
    </Route>
    <Route path="/news" component={News} />
    <Route path="*" component={NotFound} />
  </Router>
);

const rootElement = document.getElementById('app');

render(
  <Provider store={store}>
    <Root />
  </Provider>,
  rootElement,
);
