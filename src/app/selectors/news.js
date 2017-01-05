import { createSelector } from 'reselect';

const GetNewsList = (state) => {
	const { newsList: news, loading, proNewsType } = state.news
	if (loading) {
    news.type = proNewsType
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
