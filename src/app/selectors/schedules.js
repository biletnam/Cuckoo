import { createSelector } from 'reselect';

const GetMovieSchedules = state => state.schedules;

export default createSelector(
  GetMovieSchedules,
  (schedules) => {
    return {
      schedules,
    };
  },
);
