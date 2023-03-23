import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (<><Component {...pageProps} />
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    </Head></>)
}

export default MyApp
