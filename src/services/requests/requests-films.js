import { BASE_URL } from '../consts/const-baseUrl'

const api_key = import.meta.env.PUBLIC_API_KEY

export const requestsFilms = async (endpoint, params = {}) => {
  const queryParams = new URLSearchParams({
    api_key,
    ...params
  }).toString()

  try {
    const response = await fetch(`${BASE_URL}/${endpoint}?${queryParams}`)

    // Error en la petición
    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`)
    }

    // Petición correcta
    const data = await response.json()
    return data
  } catch (error) {
    return error
  }
}
