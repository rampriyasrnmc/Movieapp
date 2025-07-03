const API_KEY = 'ab45b958862b406925452c8fa6649c83';
const BASE_URL = 'https://api.themoviedb.org/3';

const fetchMovies = async (endpoint) => {
  const response = await fetch(`${BASE_URL}${endpoint}&api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};

export const fetchNowPlaying = () => {
  return fetchMovies('/movie/now_playing?page=1');
};

export const fetchTopRated = () => {
  return fetchMovies('/movie/top_rated?page=1');
};

export const fetchSearchResults = (query) => {
  return fetchMovies(`/search/movie?query=${query}&page=1`);
};

export const fetchMovieDetails = (id) => {
  return fetchMovies(`/movie/${id}?`);
};
