const api_key = import.meta.env.PUBLIC_API_KEY

export const movieTrailer = async (videoId) => {
  try {
    const movieVideos = await fetch(
      `https://api.themoviedb.org/3/movie/${videoId}/videos?api_key=${api_key}`
    )

    if (!movieVideos.ok) {
      throw new Error('Error fetching movie trailer')
    }

    const movieTrailerData = await movieVideos.json()
    const movieTrailerKey = movieTrailerData.results[0].key

    return movieTrailerKey
  } catch (e) {
    return null
  }
}
