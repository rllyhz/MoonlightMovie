import axios from 'axios';

const baseUrl = 'https://api.themoviedb.org/3/';
const apiKey = 'b3201e20a048f23eb585e0df35d61409';

const api = axios.create({
  baseURL: baseUrl,
  timeout: 3000,
  responseType: 'json'
});

export const getTopRatedMovies = () => api.get(`/movie/top_rated?api_key=${apiKey}`);
export const getPopularMovies = () => api.get(`/movie/popular?api_key=${apiKey}`);
export const getNowPlayingMovies = () => api.get(`/movie/now_playing?api_key=${apiKey}`);
export const getUpComingMovies = () => api.get(`/movie/upcoming?api_key=${apiKey}`);