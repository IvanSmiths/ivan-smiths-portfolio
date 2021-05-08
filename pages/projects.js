import { useState } from 'react';
import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';
import ModalCannolo from '../components/ModalCannolo';
import ModalOld from '../components/ModalOld';

const Projects = () => {
  let { t } = useTranslation();

  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

  return (
    <>
      <Head>
        <title>{t('projects:title')}</title>
        <meta name="description" content={t('projects:desc')} />
      </Head>
      <main className="projects-cnt">
        <h1 className="big-font highlight-main">
          Projects that i did for myself
        </h1>
        <img
          className="project-img"
          height="400"
          onClick={() => setShowModal(!showModal)}
          src="/project-2.jpg"
          alt="An image of a project"
        />
        {showModal && (
          <ModalCannolo showModal={showModal} setShowModal={setShowModal} />
        )}
        <img
          className="project-img"
          height="400"
          onClick={() => setShowModal2(!showModal2)}
          src="/project-old.jpg"
          alt="An image of a project"
        />
        {showModal2 && (
          <ModalOld showModal2={showModal2} setShowModal2={setShowModal2} />
        )}
      </main>
    </>
  );
};

export default Projects;
