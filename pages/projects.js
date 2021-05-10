import { useState } from 'react';
import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';

const Projects = () => {
  let { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t('projects:head-title')}</title>
        <meta name="description" content={t('projects:head-desc')} />
      </Head>
      <main className="projects-cnt">
        <h1 className="big-font">
          <strong className="highlight-main">{t('projects:title')}</strong>
          {t('projects:title2')}
        </h1>
        <img
          className="project-img"
          height="400"
          src="/project-2.jpg"
          alt="An image of a project"
        />
        <img
          className="project-img"
          height="400"
          src="/project-old.jpg"
          alt="An image of a project"
        />
      </main>
    </>
  );
};

export default Projects;
