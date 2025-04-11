import { requestsFilms } from '@/services/requests/requests-films'
import { popularMovies } from '@/lib/endpoints'

export async function getAllMovies(language = 'es-ES', params = {}) {
  const allMovies = []

  const firstPage = await requestsFilms(popularMovies, {
    language,
    page: 1,
    ...params
  })

  if (!firstPage || !firstPage.results) return []

  allMovies.push(...firstPage.results)

  /*
  for (let page = 2; page <= 3; page++) {
    const nextPage = await requestsFilms(popularMovies, {
      language,
      page
    })

    if (nextPage && nextPage.results) {
      allMovies.push(...nextPage.results)
    }
  }
*/
  return allMovies
}
