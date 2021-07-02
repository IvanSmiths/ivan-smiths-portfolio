import Head from 'next/head';
import Hero from '../components/HomePageHero';
import Main from '../components/Main';

export default function Home() {
  return (
    <>
      <Head>
        <title>React developer Portfolio</title>

        <meta
          name="description"
          content="Web developer portfolio with knowledge of React, Blender, 3D Modeling, AR and other fancy stuff. Come check it out! "
        />
      </Head>
      <Hero />
      <Main />
    </>
  );
}
