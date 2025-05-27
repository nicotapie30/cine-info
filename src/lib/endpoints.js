// Endpoints disponibles para la API de TMDB
const endpoints = {
  popularMovies: 'movie/popular',
  topRatedMovies: 'movie/top_rated',
  upComingMovies: 'movie/upcoming',
  nowPlayingMovies: 'movie/now_playing',
  movieDetails: 'movie',
  trendingMovies: 'trending/movie/day',
  credits: (movie_id) => `movie/${movie_id}/credits`,
  genresMovies: 'genre/movie/list',
  similarMovies: (movie_id) => `movie/${movie_id}/similar`
}

export const {
  popularMovies,
  topRatedMovies,
  upComingMovies,
  nowPlayingMovies,
  movieDetails,
  trendingMovies,
  recomendationsMovies,
  credits,
  genresMovies,
  similarMovies
} = endpoints
