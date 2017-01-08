import { combineReducers } from 'redux';
import filmBoxoffice from './boxoffice/filmBoxoffice';
import cinemaBoxoffice from './boxoffice/cinemaBoxoffice';
import cinemaLineBoxoffice from './boxoffice/cinemaLineBoxoffice';
import schedules from './schedules';
import news from './news';
import analysis from './production/analysis';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  film: filmBoxoffice,
  cinema: cinemaBoxoffice,
  cinemaLine: cinemaLineBoxoffice,
  news,
  schedules,
  analysis,
  routing: routerReducer,
});

export default rootReducer;
