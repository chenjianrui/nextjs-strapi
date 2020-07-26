import styled from '@emotion/styled'
import { Flex, Box } from 'reflexbox'
import Link from 'next/link'

import Navigation from 'components/Navigation'

const HeaderStyled = styled.header`
  background: #efefef;
  padding: 20px;

  .logo {
    a {
      display: flex;
      align-items: center;
      text-decoration: none;
    }

    .logo-text {
      color: #333333;
      font-weight: bold;
      font-size: 20px;
      margin-left: 20px;
    }
  }
`

export default function Header({ navigation }){
  return (
    <HeaderStyled>
      <Box variant='container'>
        <Flex justifyContent='space-between' alignItems='center'>
          <div className='logo'>
            <Link href='/'>
              <a>
                <img src='/images/logo.svg' alt='Sites logo'/>
                <span className='logo-text'>Next Movies</span>
              </a>
            </Link>
          </div>
          <Navigation navigation={navigation}/>
        </Flex>
      </Box>
    </HeaderStyled>
  )
}