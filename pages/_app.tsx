import Head from 'next/head'
import { AppProps } from 'next/dist/shared/lib/router/router'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>MyTop - our best top</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
