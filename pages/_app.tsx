import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import Header from '@/components/header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Ercan Şahin</title>
        <script src="https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.js"></script>
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
