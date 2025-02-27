import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <title>alezzo dev</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
