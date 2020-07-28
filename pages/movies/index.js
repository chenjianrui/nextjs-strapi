import { Flex, Box } from 'reflexbox'
import { useRouter } from 'next/router'

const MoviePage = ({ movies, page, numberOfMovies }) => {
  const router = useRouter();
  console.log(page)
  console.log(movies)
  const last = Math.ceil(numberOfMovies / 3)
  return (
    <Box variant='container' pt={40}>
      <ul>
        {
          movies.map(({id, title}) => (
            <li key={id}>
              <h3>{title}</h3>
            </li>
          ))
        }
      </ul>
      <Flex mt={40} pl={20} justifyContent="space-between" maxWidth={300}>
        <button onClick={() => router.push(`/movies?page=${page - 1}`)} disabled={page <= 1}>Previous</button>
        <button onClick={() => router.push(`/movies?page=${page + 1}`)} disabled={page >= last}>Next</button>
      </Flex>
    </Box>
  )
}

export const getServerSideProps = async ({ query: {page = 1} }) => {
  const { API_URL } = process.env
  const start = +page === 1 ? 0 : (+page - 1) * 3
  const res = await fetch(`${API_URL}/movies?_start=${start}&_limit=3`)
  const numberOfMoviesResponse = await fetch(`${API_URL}/movies/count`)
  const numberOfMovies = await numberOfMoviesResponse.json()
  const movies = await res.json()

  return {
    props : { movies , page: +page, numberOfMovies}
  }
}

export default MoviePage