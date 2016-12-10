import { createSelector } from 'reselect';

const getBoxoffice = state => state.boxoffice;

export default createSelector(
  getBoxoffice,
  (boxoffice) => {
    return {
      boxoffice,
    };
  },
);
