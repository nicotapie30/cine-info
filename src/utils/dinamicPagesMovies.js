import { getAllMovies } from '@/lib/allMovies'
import { IMAGES_PATH } from '@/services/consts/const-imagesPath'

const movies = await getAllMovies()

export const dinamicPagesMovies = () => {
  const searchInput = document.querySelector('.input-search')
  const searchMovie = document.querySelector('.search-movie') // Resultados de búsqueda en index.astro
  const popularMovies = document.querySelector('.popular-movies') // Resultados de búsqueda en PosterPopularMovies.astro

  // Evento del input Search
  searchInput.addEventListener('input', (e) => {
    const target = e.target
    const searchValue = target.value.toLowerCase()
    popularMovies.classList.add('hidden')

    const filteredMovies = movies.filter((movie) => movie.title.toLowerCase().includes(searchValue))

    if (searchValue.length > 0) {
      searchMovie.innerHTML = filteredMovies
        .map((movie) => {
          return `
                        <div
                            transition:name="movie"
                            class="group contenedor relative h-[23rem] w-[18rem] overflow-hidden rounded-lg border border-transparent shadow-md transition-all duration-300 focus-within:border focus-within:border-zinc-400 hover:border hover:border-zinc-400"
                            tabindex="0"
                            >
                            <img
                                src=${IMAGES_PATH}${movie.poster_path}
                                alt="${movie.title}"
                                class="contenedor animate-fade-in animate-duration-300 group-hover:mask-fade-name absolute inset-0 h-full w-full rounded-lg transition-all duration-300 group-focus-within:scale-95 group-hover:scale-95"
                                loading="lazy"
                                fetchpriority="low"
                                decoding="async"
                            />
                            <div
                                class="pointer-events-none absolute bottom-2 left-1.5 opacity-0 transition-all group-focus-within:pointer-events-auto group-focus-within:opacity-100 group-hover:pointer-events-auto group-hover:opacity-100"
                            >
                                <span
                                transition:name="movie-name"
                                class="text-shadow mb-0.5 block text-xl font-bold text-pretty text-white">${movie.title}</span
                                >
                                <a
                                class="pointer-events-auto inline-block cursor-pointer rounded-lg border-2 border-transparent bg-gray-500/50 px-4 py-2 text-white transition-all duration-100 hover:scale-105 hover:border-white hover:bg-gray-600/50 focus:scale-105 focus:border-white focus:bg-gray-600/50"
                                href="/${movie.title}"
                                tabindex="0"
                                >
                                Ver más
                                </a>
                            </div>
                        </div>
                        `
        })
        .join('')
    } else {
      searchMovie.innerHTML = ''
      popularMovies.classList.remove('hidden')
    }
  })

  const a = document.querySelector('.link-home')

  // Evento del enlace "Ver más"
  a.addEventListener('click', (e) => {
    e.preventDefault()
    window.history.pushState({}, '', '/')
    window.location.reload()
  })

  window.addEventListener('popstate', () => {
    window.location.reload()
  })

  // Validaciones
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
