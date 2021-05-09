import Head from 'next/head';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio</title>

        <meta
          name="description"
          content="Web developer portfolio with knowledge of React, Blender, 3D Modeling, AR and other fancy stuff. Come check it out! "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="twitter:card" content="summary" key="twcard" />
        <meta name="twitter:creator" content="Ivan Smiths" key="twhandle" />
        <meta property="og:title" content="Ivan Smiths's Portfolio" />
        <meta property="og:description" content="Ivan Smiths's Portfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ivansmiths.com" />
      </Head>
      <Hero />
    </>
  );
}
