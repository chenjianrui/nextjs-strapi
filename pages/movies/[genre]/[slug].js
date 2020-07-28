import { Box } from 'reflexbox'
import getConfig from 'next/config'
import { NextSeo } from 'next-seo'

const Movie = ({ movie }) => {
  const { title, description } = movie

  const SEO = {
    title: `Next Movies | ${ title }`,
    description: `${description}`,
    
    openGraph: {
      title: `Next Movies | ${ title }`,
      description: `${description}`,
    }
  }
  return (
    <>
      <NextSeo {...SEO}/>
      <Box variant='container'>
        <Box as='h2' my={40}>{title}</Box>
        <Box maxWidth={600}>
          <p dangerouslySetInnerHTML={{ __html: description }}></p>
        </Box>
      </Box>
    </>
  )
}

const { publicRuntimeConfig } = getConfig()

export async function getServerSideProps(context){
  console.log(context)
  const { slug } = context.query
  const res = await fetch(`${publicRuntimeConfig.API_URL}/movies?slug=${slug}`)
  const data = await res.json()
  return {
    props: { movie: data[0] }
  }
}

export default Movie