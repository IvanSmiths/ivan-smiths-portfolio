import { useState } from 'react';
import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';
import WorksId from '../components/WorksId';

const Works = () => {
  const [showModalW, setShowModalW] = useState(false);
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta
          name="description"
          content="Web developer portfolio with knowledge of React, Blender, 3D Modeling, AR and other fancy stuff. Come check it out! "
        />
      </Head>

      <main className="projects-cnt">
        <h1 className="big-font highlight-main">Official works</h1>
        <img
          height="400"
          onClick={() => setShowModalW(!showModalW)}
          src="/id-ico.svg"
          alt="An image of a project"
        />
        {showModalW && (
          <WorksId showModalW={showModalW} setShowModalW={setShowModalW} />
        )}
      </main>
    </>
  );
};

export default Works;
