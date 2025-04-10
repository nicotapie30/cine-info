import { getAllMovies } from '@/lib/allMovies.js'

const movies = await getAllMovies()

export const getMoviesPaths = async () => {
  return movies.map((movie) => ({
    params: { name: movie.title }
  }))
}
