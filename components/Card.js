import styled from '@emotion/styled'
import Link from 'next/link'

const Card = ({ movie }) => {
  const { API_URL } = process.env
  const { title, description, slug } = movie
  if(!movie.poster){
    movie.poster = {}
    movie.poster.url = null
  }
  const { url } = movie.poster
  if(!movie.genre){
    movie.genre = {}
    movie.genre.slug = 'uncategorised'
  }
  const { slug: slugByGenre } = movie.genre
  return (
    <CardStyle>
      { url !== null ? <div className='poster'>
        <img src={`${API_URL}${url}`}/>
      </div> : null}
      <div className='body'>
        <h3>{ title }</h3>
        <p dangerouslySetInnerHTML={{ __html: description }}></p>
        <Link href='/movies/[genre]/[slug]' as={`/movies/${slugByGenre}/${slug}`}>
          <a>
            More about this movie
          </a>
        </Link>
      </div>
    </CardStyle>
  )
}

const CardStyle = styled.div`
  width: 100%;
  border: 1px solid #ccc;
  margin-top: 50px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  .body {
    padding: 20px;

    h3 {
      margin-bottom: 20px;
    }

    p {
      color: #666;
      line-height: 1.5
    }
  }
`

export default Card