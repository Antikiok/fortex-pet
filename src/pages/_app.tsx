import '../styles/index.scss';

import type { AppProps } from 'next/app';
import Layout from 'components/Layout';
import React from 'react';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Suspense fallback="loading...">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </React.Suspense>
  );
}
