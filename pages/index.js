import Head from 'next/head';
import Model from '../components/Model';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className="cnt-hero">
          <div>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis, non.
          </div>
          <div>
            <Model />
          </div>
          <div>
            <h1>
              IVAN <br /> SMITHS.
            </h1>
          </div>
        </section>
      </main>
    </>
  );
}
