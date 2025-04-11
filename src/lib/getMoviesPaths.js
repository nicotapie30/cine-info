import { getAllMovies } from '@/lib/allMovies.js'

const movies = await getAllMovies()

export const getMoviesPaths = async () => {
  return movies.flatMap((movie) => [{ params: { dinamicMovie: movie.title } }])
}
