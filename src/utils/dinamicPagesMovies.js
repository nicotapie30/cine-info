import { getAllMovies } from '@/lib/allMovies'
import { IMAGES_PATH } from '@/services/consts/const-imagesPath'

const movies = await getAllMovies()

export const dinamicPagesMovies = () => {
  const searchInput = document.querySelector('.input-search')
  const searchMovie = document.querySelector('.search-movie') // Resultados de búsqueda en index.astro
  const popularMovies = document.querySelector('.popular-movies') // Resultados de búsqueda en PosterPopularMovies.astro
  const filteredDinamicMovies = document.querySelector('.filtered-dinamic-movies') // Resultados de búsqueda en FilteredDinamicsMovies.astro

  // Evento del input Search
  searchInput.addEventListener('input', (e) => {
    const target = e.target
    const searchValue = target.value.toLowerCase()

    if (searchValue.length === 0) {
      filteredDinamicMovies.innerHTML = ''
      filteredDinamicMovies.classList.add('opacity-0')
      searchMovie.innerHTML = ''
      if (popularMovies) popularMovies.classList.remove('hidden')
      return
    }

    // Datos dinámicos debajo del input
    const filteredMovies = movies.filter((movie) => movie.title.toLowerCase().includes(searchValue))

    filteredDinamicMovies.classList.remove('opacity-0')

    console.log(filteredMovies)
    filteredDinamicMovies.innerHTML = filteredMovies
      .map((movies) => {
        return `          <ul class="w-full h-auto">
                            <button
                            onclick="window.location.href='/${movies.title}'" 
                            aria-label="Película ${movies.title}">
                              <div
                                class="filtered-link-movies pointer-events-auto w-full h-full inline cursor-pointer rounded-lg bg-transparent text-base text-white transition-all duration-200"
                                > 
                                <li class="flex gap-2 h-full w-full border  border-transparent items-center hover:border hover:border-zinc-300 rounded-lg hover:bg-gray-700/60 hover:scale-105 transition-all duration-200">
                                  <div class="w-full h-full object-center">
                                    <img src=${IMAGES_PATH}${movies.poster_path} class="filtered-img-movies h-full w-auto rounded-lg" />           
                                  </div>
                                  <p class="w-full min-w-[70%]">${movies.title}</p>
                                </li>
                              </div>
                            </button>
                          </ul>`
      })
      .join('')

    // Datos filtrados al section del index
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
      filteredDinamicMovies.classList.add('opacity-0')
    }
  })

  // Ir al inicio
  const a = document.querySelector('.link-home')

  a.addEventListener('click', (e) => {
    e.preventDefault()
    window.history.pushState({}, '', '/')
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

  searchInput.addEventListener('keyup', (e) => {
    if (e.key === 'Delete') {
      e.preventDefault()
      if (searchValue.length === 0) {
        filteredDinamicMovies.classList.add('opacity-0')
      }
    }
  })
}
