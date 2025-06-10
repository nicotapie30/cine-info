import { getAllMovies } from '@/lib/allMovies.js'
import { generateCleanTitle } from '@/utils/generateCleanTitle'

export const getMoviesPaths = async () => {
  const movies = await getAllMovies()
  return movies
    .flatMap((movie) => {
      const cleanTitle = generateCleanTitle(movie.title)
      if (!cleanTitle) return null
      return { params: { dinamicMovie: cleanTitle } }
    })
    .filter(Boolean)
}
