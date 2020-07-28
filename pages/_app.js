import Header from 'components/Header'
import { ThemeProvider } from 'emotion-theming'
import GlobalStyles from 'components/GlobalStyles/GlobalStyles'
import theme from 'components/theme/theme'
import getConfig from 'next/config'
import { DefaultSeo } from 'next-seo'

import SEO from '../next-seo.config'
function MyApp({ Component, pageProps, navigation }) {
  return (
    <>
      <DefaultSeo {...SEO}/>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header navigation={navigation}/>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

const { publicRuntimeConfig } = getConfig()

MyApp.getInitialProps = async () => {
  // 因為 getInitialProps 也會運行在 Client，所以不能使用 .env
  const res = await fetch(`${publicRuntimeConfig.API_URL}/navigations`)
  const navigation = await res.json()
  return {navigation}
}

export default MyApp