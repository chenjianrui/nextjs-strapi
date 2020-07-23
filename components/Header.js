import styled from '@emotion/styled'

const HeaderStyled = styled.header`
  background: #efefef;
  padding: 20px;

  .logo {
    display: flex;
    align-items: center;

    .logo-text {
      color: #333333;
      font-weight: bold;
      font-size: 20px;
      margin-left: 20px;
    }
  }
`

export default function Header(){
  return (
    <HeaderStyled>
      <div className='container'>
        <div className='logo'>
          <img src='/images/logo.svg' alt='Sites logo'/>
          <span className='logo-text'>Next Movies</span>
        </div>
      </div>
    </HeaderStyled>
  )
}