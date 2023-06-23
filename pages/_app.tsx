// @ts-nocheck

import GlobalStyle from '../sections/GlobalStyle'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle /> 
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
