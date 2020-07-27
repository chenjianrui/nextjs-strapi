import fetch from 'isomorphic-unfetch'
import Card from 'components/Card'

import { Flex, Box } from 'reflexbox'

export default function Home({ movies }) {
  return (
    <Box variant="container">
      <Box my={40} as='h2'>Latest Movies</Box>
      <Flex justifyContent='space-between' flexDirection={{ _: "column", md: "row" }} flexWrap='wrap'>
        {
          movies.map(movie => (
            <Box key={movie.id} width={{ _: '100%', md: '30%' }}>
              <Card movie={movie}/>
            </Box>
          ))
        }
      </Flex>
    </Box>
  )
}

export async function getServerSideProps() {
  const { API_URL } = process.env
  const res = await fetch(`${API_URL}/movies`)
  const data = await res.json();

  return {
    props: {
      movies: data
    }
  }
}