import { Flex, Box } from 'reflexbox'

const MoviePage = ({ movies, page }) => {
  console.log(page)
  console.log(movies)
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
    </Box>
  )
}

export const getServerSideProps = async ({ query: page = 1 }) => {
  const { API_URL } = process.env
  const res = await fetch(`${API_URL}/movies?_limit=3`)
  const movies = await res.json()

  return {
    props : { movies , page}
  }
}

export default MoviePage