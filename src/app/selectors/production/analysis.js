import { createSelector } from 'reselect';

const GetAnalysis = (state) => state.analysis

export default createSelector(
  GetAnalysis,
  (analysis) => {
    return {
      analysis,
    };
  },
);
