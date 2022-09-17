import axios from 'axios';

const apiUrl = 'https://api.themoviedb.org/3';
const apiKey = 'api_key=a3453eb7bb98bd3d358994d3d1f85040';

//Get Popular Movies
export const getPopularMovies = async () => {
  const res = await axios.get(`${apiUrl}/movie/popular?${apiKey}`);
  return res.data.results;
};

//Get Upcoming Movies
export const getUpcomingMovies = async () => {
  const res = await axios.get(`${apiUrl}/movie/upcoming?${apiKey}`);
  return res.data.results;
};

//Get Popular TV
export const getPopularTV = async () => {
  const res = await axios.get(`${apiUrl}/tv/popular?${apiKey}`);
  return res.data.results;
};
