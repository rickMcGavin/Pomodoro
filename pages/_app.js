import React from 'react';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

MyApp.displayName = 'MyApp';

export default MyApp;
