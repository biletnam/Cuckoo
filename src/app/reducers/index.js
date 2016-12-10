import { combineReducers } from 'redux';
import boxoffice from './home';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  boxoffice,
  routing: routerReducer,
});

export default rootReducer;
