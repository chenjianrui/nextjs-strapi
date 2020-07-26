import styled from '@emotion/styled'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Navigation = ({ navigation }) => {
  const router = useRouter()
  const { pathname } = router
  return (
    <NavigationStyled>
      <ul>
        {
          navigation.map(({ id, title, slug}) => {
            return (
              <li key={id}>
                <Link href={slug}>
                  <a className={pathname === slug ? 'active': ''}>{title}</a>
                </Link>
              </li>
            )
          })
        }
      </ul>
    </NavigationStyled>   
  )
}

const NavigationStyled = styled.div`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;

    li {
      margin-left: 10px;
    }

    a {
      text-decoration: none;
      color: #4c9ee3;

        &:hover {
          text-decoration: underline;
        }

        &.active {
          color: #ef6800
        }
    }
  }
`

export default Navigation