import styled from '@emotion/styled'

const Card = ({ movie }) => {
  const { API_URL } = process.env
  const { url } = movie.poster
  const { title, description } = movie
  return (
    <CardStyle>
      <div className='poster'>
        <img src={`${API_URL}${url}`}/>
      </div>
      <div className='body'>
        <h3>{ title }</h3>
        <p dangerouslySetInnerHTML={{ __html: description }}></p>
      </div>
    </CardStyle>
  )
}

const CardStyle = styled.div`
  width: 400px;
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