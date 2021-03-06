import React from 'react';
import Head from 'next/head';
import App from '../src/components/App/App';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pomodoro</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <App />
      </main>

      <footer className="footer">
        By Rick McGavin
      </footer>
    </div>
  );
}

Home.displayName = 'Home';
