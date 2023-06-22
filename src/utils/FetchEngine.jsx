import axios from 'axios';

export const fetchGetImgs = async (
  operation,
  query = '',
  movieID = 0,
  page = 1
) => {
  let params;
  let paramString;
  switch (operation) {
    case 'trendingIO':
      paramString = '/trending/movie/day';
      params = { language: 'en-US' };
      break;
    case 'searchIO':
      paramString = '/search/movie';
      params = {
        query: query,
        include_adult: 'false',
        language: 'en-US',
        page: page,
      };
      break;
    case 'detailsIO':
      paramString = `/movie/${movieID}`;
      params = { language: 'en-US' };
      break;
    case 'castIO':
      paramString = `/movie/${movieID}/credits`;
      params = { language: 'en-US' };
      break;
    case 'reviewsIO':
      paramString = `/movie/${movieID}/reviews`;
      params = { language: 'en-US', page: page };
      break;
    default:
      break;
  }
  const url = `https://api.themoviedb.org/3${paramString}`;
  const options = {
    method: 'GET',
    params: params,
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwY2VmNjY1MmU1NDcxYTEwMWQ5YTI2MWViNTI1YjVkZSIsInN1YiI6IjY0OTEzNDBjYzNjODkxMDEwY2E2NzM0YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.10kFmhlhDD5DpnNqL0Rvvzn-vv7sk9BM4XvZxV0zxYg',
    },
  };
  const response = await axios.get(url, options);
  return response.data;
};
