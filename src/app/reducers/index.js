import { combineReducers } from 'redux';
import filmBoxoffice from './filmBoxoffice';
import cinemaBoxoffice from './cinemaBoxoffice';
import cinemaLineBoxoffice from './cinemaLineBoxoffice';
import schedules from './schedules';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  film: filmBoxoffice,
  cinema: cinemaBoxoffice,
  cinemaLine: cinemaLineBoxoffice,
  schedules,
  routing: routerReducer,
});

export default rootReducer;
