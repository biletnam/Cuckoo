import { combineReducers } from 'redux';
import filmBoxoffice from './filmBoxoffice';
import cinemaBoxoffice from './cinemaBoxoffice';
import cinemaLineBoxoffice from './cinemaLineBoxoffice';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  filmBoxoffice,
  cinemaBoxoffice,
  cinemaLineBoxoffice,
  routing: routerReducer,
});

export default rootReducer;
