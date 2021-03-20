import Head from 'next/head';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
    </>
  );
}
