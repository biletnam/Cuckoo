import { createSelector } from 'reselect';

const getHome = state => state.home;

export default createSelector(
  getHome,
  (home) => {
    return {
      home,
    };
  },
);
