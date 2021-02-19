const API_KEY = '5990567cf4039e52fa9271e8be71e971';

const fetchCastById = movieId => {
  return fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`,);
};

const fetchTrending = () => {
  return fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`,);
};

const fetchReviewsById = async movieId => {
  return fetch(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`,);
};

const fetchPopular = () => {
  return fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,);
};

const fetchByQuery = query => {
  return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=true&query=${query}`,);
};

const fetchById = async movieId => {
  return fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`,);
};

const fetchAPI = {
  fetchPopular,
  fetchByQuery,
  fetchById,
  fetchCastById,
  fetchTrending,
  fetchReviewsById,
};

export default fetchAPI;
