import { getAllMovies } from '@/lib/allMovies'
const movies = await getAllMovies()

export const indexDinamicMovies = () => {
  const searchInput = document.querySelector('.input-search')
  const a = document.querySelector('.link-home')

  a.addEventListener('click', (e) => {
    e.preventDefault()
    window.history.pushState({}, '', '/')
    window.location.reload()
  })

  window.addEventListener('popstate', () => {
    window.location.reload()
  })

  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      const searchValue = searchInput.value.toLowerCase()

      if (searchValue.length > 0) {
        const filteredMovies = movies.filter((movie) =>
          movie.title.toLowerCase().includes(searchValue)
        )

        if (filteredMovies.length > 0) {
          window.location.href = `/${filteredMovies[0].title}`
          window.addEventListener('popstate', () => {
            searchInput.value = ''
          })
        }
      }
    }
  })
}
