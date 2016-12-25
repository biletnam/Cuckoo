import { createSelector } from 'reselect';

const GetNewsList = (state) => {
	const { newsList: news, loading } = state.news
	if (loading) {
		return news
	}
};

export default createSelector(
  GetNewsList,
  (newsList) => {
    return {
      newsList,
    };
  },
);
